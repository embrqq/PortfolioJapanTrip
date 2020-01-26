"use strict";

class Diary extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    console.log("Rendering diary page with active: ", this.props.active);

    return(

      <React.Fragment>

        <ContentHeader title="What I've been up to"/>

        <p>
          This is my diary. You can find all the entries from my trip here! Hover over an image to see the time and place of the picture, and click on it to open up the entry for that day!
        </p>

        <InteractiveDiary lookFor="all" active={this.props.active}/>

      </React.Fragment>
    );

  }

}

export function render(grabContent, active){

  ReactDOM.render(<Diary active={active}/>, document.getElementById("content"));

}
