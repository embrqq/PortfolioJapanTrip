"use strict";

function CityTile(props){

  return (

    <div
    className="city-tile"
    id={props.id}
    onClick={() => props.onClick()}
    style={props.style}
    >
      <AsyncImage className="tile-image" src={props.src} loaded={() => {document.getElementById(props.id).style.display=""}}/>
      <div className="tile-text">
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
      </div>
    </div>

  )

}

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

    smoothScrollTo(document.getElementById("banner"));

  }

  render(){

    return (

      <React.Fragment>
        <ContentHeader title="A Bit About This Site"/>

        <p>
          I'll be going to Japan this summer (2019) from June 16 to July 1. Since I really don't like sharing much of what I'm doing on major social media platforms like Facebook, Instagram, or Twitter, I intend to let friends and family see what I'm doing on my trip through this site. Think of this site as a sort of travel diary, organized by city, where I'll be putting daily entries. You can find the most recent things I've been doing at the bottom of this page in the recents area, or move to the diary page to see all my entries. This is the first time I've made a site like this from scratch (I just took web programming at school!), so hopefully it's pretty easy to navigate around. Figured it would be a good way to get practice using the skills I learned, and a more personal way to present my experiences from Japan!
        </p>

        <Bold>
          <h1>More about my trip</h1>
          <h1>私の予定</h1>
        </Bold>

        <div className="cities">

          <CityTile
            id="osaka-tile"
            src="/assets/images/20190618-osakacastleclose.jpeg"
            title="大阪"
            subtitle="Osaka"
            style={{display:"none"}}
            onClick={() => {
              this.props.grabContent('info', "osaka");
            }}
          />

          <CityTile
            id="kyoto-tile"
            src="/assets/images/20190621-garden3.jpeg"
            title="京都"
            subtitle="Kyoto"
            style={{display:"none"}}
            onClick={() => {
              this.props.grabContent('info', "kyoto");
            }}
          />

          <CityTile
            id="yokohama-tile"
            src="/assets/images/20190624-wheel1.jpeg"
            title="横浜"
            subtitle="Yokohama"
            style={{display:"none"}}
            onClick={() => {
              this.props.grabContent('info', "yokohama");
            }}
          />

          <CityTile
            id="tokyo-tile"
            src="/assets/images/20190625-akibaday.jpeg"
            title="東京"
            subtitle="Tokyo"
            style={{display:"none"}}
            onClick={() => {
              this.props.grabContent('info', "tokyo");
            }}
          />
        </div>

        <p>
          This will be a solo trip, and I'll be heading to three major cities of <span className="city-link" onClick={() => {this.props.grabContent('info', "osaka");}}>Osaka</span>, <span className="city-link" onClick={() => {this.props.grabContent('info', "kyoto");}}>Kyoto</span>, <span className="city-link" onClick={() => {this.props.grabContent('info', "yokohama");}}>Yokohama</span>, and <span className="city-link" onClick={() => {this.props.grabContent('info', "tokyo");}}>Tokyo</span> (in that order), for 4, 2, 2, and 6 days respectively! I don't enjoy using social media platforms like facebook or instagram that much, so I intend to keep family and friends updated through this website. I'll upload images with quick captions and perhaps small passages of what I've been up to while I'm in Japan. I'll try to keep it as up-to-date as possible! I have an <span className="city-link" onClick={() => {this.props.grabContent('info', ""); smoothScrollTo(document.getElementById("banner"));}}>info</span> page for some more basic information about where I'll be staying, and some <span className="city-link" onClick={() => {this.props.grabContent('info', "links");}}>travel tips/links</span> if you are interested in things to know if you ever go to Japan.
        </p>
        <p>
          Most of the images one this site will have a caption that can be viewed by hovering over them, so if you're not too sure what you are looking at, make sure to give the caption a peek!
        </p>

        <p>
          If you've made it down this far, I suggest you head over to the <span className="city-link" onClick={() => {this.props.grabContent("diary"); smoothScrollTo(document.getElementById("banner"));}}>diary page</span>!
        </p>

      </React.Fragment>

    );
  }
}

export function render(grabContent, active){
  ReactDOM.render(<Home grabContent={grabContent}/>, document.getElementById("content"));
}
