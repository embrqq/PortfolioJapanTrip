"use strict";

class Page extends React.Component {

  constructor(props){
    super(props);

    let location = [false, false, false];
    location[loadedLoc] = true;
    let active = "";


    let url = "" + window.location;
    let data = url.split("#");
    if(data.length > 1){
      let parts = data[1].split(",");
      for(let i = 0; i < parts.length; i++){
        let pieces = parts[i].split("=");
        if(pieces[0] == "active") active = pieces[1];
      }
    }

    this.state = {
      //[home, osaka, kyoto, tokyo]
      locationNames: ["home", "diary", "info"],
      location: location,
      locationTitles:["エリーの旅行記", "旅行記", "情報"],
      locationSubtitles:["Ellie's Japan Trip Diary", "Diary", "Info"],
      active:active,
    };

    window.onpopstate = (event) => {

      console.log("Popped state: ", event.state);

      document.getElementById("page-css").href = "/css/" + event.state.loc + ".css";
      this.setState({location:event.state.location, active:event.state.active});
    }

  }

  pushToHistory(){
    let loc = this.state.locationNames[this.state.location.indexOf(true)];

    let newState = {
      loc:loc,
      location:this.state.location,
      active:this.state.active,
    }

    history.pushState(newState, "", loc+".html");
  }

  componentDidMount(){
    this.pushToHistory();
    this.setScript();
  }

  componentDidUpdate(){
    this.pushToHistory();
    this.setScript();
  }

  loadContent(loc, active){

    document.getElementById("page-css").href = "/css/" + loc + ".css";
    console.log("Pressed button to load content for: " + loc + " with active: " + active);

    let location = this.state.location;
    location[this.state.location.indexOf(true)] = false;
    location[this.state.locationNames.indexOf(loc)] = true;

    this.setState({location:location, active:active});

    console.log(this.state);

  }

  setScript(){

    let loc = this.state.locationNames[this.state.location.indexOf(true)];

    import('/js/' + loc + ".js").then( (module) => {
      module.render(
        (loc, act) => this.loadContent(loc, act),
        this.state.active
        );
      }
    );
  }

  render(){
    //Initialize button array. Their values point to here, so maybe updating page state will update classes.

    let buttons = [];

    console.log("Page state: ", this.state);

    for(let i = 0; i < this.state.locationNames.length; i++){
      buttons.push({location:this.state.locationNames[i], focus:this.state.location[i], onClick:() => this.loadContent(this.state.locationNames[i])});
    }

    return (
      <React.Fragment>
        <Banner
          key={1}
          location={this.state.location}
          locationNames={this.state.locationNames}
          locationTitles={this.state.locationTitles}
          locationSubtitles={this.state.locationSubtitles}
        />
        <Nav
          key={2}
          buttons={buttons}
        />
        <div className="content" id="content">
        </div>
        <Footer/>
      </React.Fragment>
    );
  }

}

ReactDOM.render(<Page />, document.getElementById('react'));
