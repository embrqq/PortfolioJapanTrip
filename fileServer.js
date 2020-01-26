"use strict";

const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 9956;
const app = express();

function buildEntriesList(){

  let entries = [];

  let path = "public/entries/";

  let files = fs.readdirSync(path);

  for(let i = 0; i < files.length; i++){
    let file = path + files[i];
    console.log("opening file: " + file);
    let data = fs.readFileSync(file);
    data = JSON.parse(data);

    let entry={"location":data.location, "date":data.date, "file":file};

    entries.push(entry);
  }

  for(let i = 1; i < entries.length; i++){
    for(let j = i; j > 0 && (parseInt(entries[j-1].date) > parseInt(entries[j].date)); j--){
      let temp = entries[j-1];
      entries[j-1] = entries[j];
      entries[j] = temp;
    }
  }

  let json = {"count":entries.length, "entries":entries};
  fs.writeFileSync("private/entries-list.json", JSON.stringify(json));
}

function serveRecentDiary(request, response, next){

  let url = request.url;
  let query = request.query;

  let limit = ((query.limit == undefined || query.limit == "")? 3 : query.limit);

  let callback = function(err, data){
    if(err){
      response.json({"error":1, "message":"Had issue reading the entry list file."});
      return;
    }

    let list = JSON.parse(data);
    let entries = [];
    for(let i = 0; (i < list.entries.length) && (i < limit); i++){
      entries.push(JSON.parse(fs.readFileSync(list.entries[i].file)));
    }

    if(entries.length == 0){
      response.json({"error":1, "message":"Could not find the group requested."});
    } else {
      response.json({"error":0, "message":"Served group entries succesfully", entries:entries});
    }

  }

  fs.readFile("private/entries-list.json", callback);
}

function serveCityDiary(request, response, next){

  let url = request.url;
  let query = request.query;

  let limit = ((query.limit == undefined || query.limit == "" || query.limit == "undefined")? 3 : query.limit);

  let callback = function(err, data){

    if(err){
      response.json({"error":1, "message":"Had issue reading the entry list file."});
      return;
    }
    let list = JSON.parse(data);
    let entries = [];
    for(let i = 0; (i < list.entries.length) && (entries.length < limit); i++){
      if(list.entries[i].location == query.group){
        entries.push(JSON.parse(fs.readFileSync(list.entries[i].file)));
      }
    }

    if(entries.length == 0){
      response.json({"error":1, "message":"Could not find the group requested."});
    } else {
      response.json({"error":0, "message":"Served group entries succesfully", entries:entries});
    }
  }

  fs.readFile("private/entries-list.json", callback);

}

function serveQuery(request, response, next){

  let url = request.url;
  let query = request.query;
  console.log(query);

  if(query.type == "diary" && query.group != undefined){

    if(query.group == "recent"){
      serveRecentDiary(request, response, next);
    } else if(query.group == "all"){
      request.query.limit = 100;
      serveRecentDiary(request, response, next);
    } else {
      serveCityDiary(request, response, next);
    }
  } else {
    badQuery(request, response, next);
  }

}

function badQuery(request, response, next){
  response.json({"error":1, "message":"bad query input"});
}

function serveHome(request, response, next){
  console.log("serving home: /public/html/home.html");
  response.redirect('/html/home.html');
}

function fileNotFound(request, response, next){
  response.type('text/plain');
  response.status('404');
  response.send("Cannot find: " + request.url);
}

app.use(express.static('public'));
app.get('/', serveHome);
app.get('/get?', serveQuery);
app.use(fileNotFound);

app.listen(port, function () { console.log ("Started listening on port " + port);});

buildEntriesList();
