"use strict";

function smoothScrollTo(element){

  let scrollPos = element.offsetTop - document.getElementsByClassName("nav")[0].offsetHeight;

  console.log("Scrolling to: ", scrollPos);

  window.scroll({
    top: scrollPos,
    left: 0,
    behavior: 'smooth'
  });

}

function Banner(props){

    let titles = props.locationTitles;
    let subtitles = props.locationSubtitles;
    let loc = props.location.indexOf(true);
    let backgroundURL = "/assets/banners/" + props.locationNames[loc] + ".jpeg";
    let backgrounds = [];

    for(let i = 0; i < props.location.length; i++){
      backgrounds.push(
        <div key={i} className="banner-background" style={{
          opacity:(props.location[i]? "1" : "0"),
        }}>
          <img
            src={"/assets/banners/" + props.locationNames[i] + ".jpeg"}
          />
        </div>
      );
    }

    return (
      <div id="banner" style={{flex:"1 1 50vh"}}>
        {backgrounds}
        <div className="banner-title">
          <h1>{titles[loc]}</h1>
          <h1>{subtitles[loc]}</h1>
        </div>
      </div>
    );
}

function NavButton(props){
  return (
    <div className={"nav-button " + (props.focus? "button-focus" : "")} id={props.location+"-button"}>
      <button onClick={props.onClick}>
        {props.location.charAt(0).toUpperCase() + props.location.slice(1)}
      </button>
    </div>
  );
}

class Nav extends React.Component{

  constructor(props){
    super(props);
  }

  scrollWatch() {

    let navbar = document.getElementsByClassName("nav")[0];
    let content = document.getElementById("content");
    let bannerHeight = document.getElementById("banner").offsetHeight;

    if (window.pageYOffset >= bannerHeight) {
      navbar.classList.add("nav-sticky");
      content.style.paddingTop = navbar.offsetHeight + "px";
    } else {
      navbar.classList.remove("nav-sticky");
      content.style.paddingTop = "";
    }
  }

  componentDidMount(){
    window.addEventListener("scroll", this.scrollWatch);
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.scrollWatch);
  }

  render(){

    let navButtons = [];
    for(let i = 0; i < this.props.buttons.length; i++){
      let b = this.props.buttons[i];
      navButtons.push(<NavButton key={i} location={b.location} focus={b.focus} onClick={() => {
        b.onClick();
        smoothScrollTo(document.getElementById("banner"));
      }}/>);
    }
    return (
      <div className="nav">
        {navButtons}
      </div>
    );

  }


}

function ContentHeader(props){

  return (
    <div className="content-header">
      <h1 className="content-title">{props.title}</h1>
    </div>
  );

}

function PanelWrapper(props){

  return (

    <div className="panel-wrapper">
      <AsyncImage className="panel-image" src={props.src}/>
      <div className="panel-caption">
        <p>{props.english}<br/>{props.japanese}</p>
      </div>
    </div>

  );

}

function Bold(props){

  return (
    <div className={"bold " + props.className} id={props.id} style={props.style}>
      {props.children}
    </div>
  );

}

class AsyncImage extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div
        id={this.props.id}
        className={this.props.className}
        style={this.props.style}
      >
        <img
          src={this.props.src}
          onLoad={() => this.props.loaded()}
        />
      </div>
    );

  }


}

class ImageCollection extends React.Component{

  constructor(props){
    super(props);
  }

  displayImages(){
    let images = [];
    for(let i = 0; i < this.props.content.length; i++){
      let im = this.props.content[i];
      let divid = this.props.id + "-" + i;
      images.push((
        <div
          key={i}
          className={"collection-wrapper"}
          id={divid}
          style={{...im.style, ...{display:"none"}}}
        >
          <AsyncImage
           src={im.src}
           className="collection-image" loaded={() => {
             let el = document.getElementById(divid);
             el.style.display="";
             el.style.opacity="0";
             el.style.transition="opacity 1.5s linear";
             setTimeout(() => {el.style.opacity="1"}, 20);
           }}
          />
          <div className="collection-image-title">
            <h1>{im.english}</h1>
            <h1>{im.japanese}</h1>
          </div>
        </div>
      ));
    }

    return images;
  }

  render(){

    console.log("Rendering collection: ",this.props.content);

    return(
      <div className={"image-collection " + this.props.className} id={this.props.id}>
        {this.displayImages()}
      </div>
    );

  }

}

class InteractiveDiary extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      active:this.props.active,
      entries:[],
    }
  }

  componentDidMount(){
    this.grabEntries();
  }

  grabEntries(){
    let diary = this;

    let group = this.props.lookFor;

    let url ="/get?type=diary&group=" + group;

    console.log("Querying: ", url);

    let xhr = new XMLHttpRequest();
    xhr.open('get', url);

    let page = this;

    xhr.onload = () => {
      let json = JSON.parse(xhr.responseText);
      if(json.error == 1) {console.log("Error: ", json); return;}
      console.log(json);
      diary.setState({entries:json.entries});
    }

    xhr.onerror = () => {
      console.log("Error getting AJAX.");
    }

    xhr.send();
  }

  formatDate(date){

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
    let month = months[parseInt(date.slice(4,6)) - 1];
    let day = date.slice(6,8);
    return month + "-" + day;
  }

  displayEntries(){

    if(this.state.entries.length == 0) {
      return(<Bold>It doesn't look like I've put anything in this portion of the diary yet</Bold>);
    }

    let images = [];
    for(let i = 0; i < this.state.entries.length; i++){
      let im = this.state.entries[i];
      let divid = im.id;
      images.push((
        <div
          key={i}
          className={"diary-entry-wrapper "}
          id={divid}
          style={{display:"none"}}
          onClick={() => {this.grabContent(divid)}}
        >
          <AsyncImage

            src={im.imgsrc}
            className="diary-image" loaded={() => {
              let el = document.getElementById(divid);
              el.style.opacity="0";
              el.style.transition="opacity 1.5s linear";
              el.style.display="";
              setTimeout(() => {el.style.opacity="1"}, 20);
           }}
          />
          <div className="diary-image-title">
            <h1>{this.formatDate(im.date)}</h1>
            <h1>{im.place}</h1>
          </div>
        </div>
      ));
    }

    return images;

  }

  grabContent(tile){

    if(tile == this.state.active){

      this.setState({active:""});
      smoothScrollTo(document.getElementsByClassName("interactive-image-diary")[0]);

    } else{
      this.setState({active:tile});
    }

  }

  generateEntryHeader(entry, diary){

    let divid = entry.id + "-header";

    return(

      <div
      key={this.state.entries.length + 1}
      className="diary-entry-header"
      id={divid}
      style={{display:""}}
      onClick={() => {this.grabContent(entry.id)}}
      >

        <AsyncImage
          src={entry.imgsrc}
          className="diary-entry-header-image" loaded={() => {
            let el = document.getElementById(divid);
            el.style.opacity="0";
            el.style.transition="opacity 1.5s linear";
            el.style.display="";
            setTimeout(() => {
              smoothScrollTo(document.getElementsByClassName("diary-entry-header")[0])
              el.style.opacity="1";}, 20);
          }}
        />

        <div className="diary-entry-header-title">
          <h1>{this.formatDate(entry.date)}</h1>
          <h1>{entry.place}</h1>
        </div>
      </div>

    );

  }

  displayContent(){

    if(this.state.active == "" || this.state.active == undefined) return;
    if(this.state.entries.length < 1) return;

    let loc;
    for(let i = 0; i < this.state.entries.length; i++){
      if(this.state.entries[i].id == this.state.active){
        loc = i;
        break;
      }
    }

    console.log(this.state.active + " : " + loc);

    let entry = this.state.entries[loc];
    let content = entry.content;
    console.log(entry);
    let html = [];

    html.push(this.generateEntryHeader(entry, this));

    for(let i = 0; i < content.length; i++){
      //Parse content in here.
      let element = content[i];
      if(element.tag == "p"){
        html.push(
          <p
            key={i}
            className={element.class}
            id={element.id}
            style={element.style}
          >
            {element.content}
          </p>
        );
      }
      else if(element.tag == "bold"){
        html.push(
          <Bold key={i} className={element.class} id={element.id} style={element.style}>
            <h1>{element.content.english}</h1>
            <h1>{element.content.japanese}</h1>
          </Bold>
        );
      }
      else if(element.tag == "images"){
        html.push(
          <ImageCollection key={i} className={element.class} id={element.id} style={element.style} content={element.content}/>
        );
      }
      else {
        console.log("Ran into unexpected tag processing gallery content: " + element.tag);
      }
    }
    console.log(html);
    return html;
  }

  render(){

    console.log("Rendering diary: ", this.props.lookFor);

    return (

      <div className="interactive-image-diary">

        <div className="diary-panel">
          {this.displayEntries()}
        </div>

        <div className="diary-content">
          {this.displayContent()}
        </div>

      </div>

    );

  }

}

function Footer(props){

  return (

    <div className="footer">
      <p>This site was made by Elisabeth Henkens</p>
      <p>Photos taken with a Lumix g5 (by the crappy photographer that is yours truly)</p>
    </div>

  )

}
