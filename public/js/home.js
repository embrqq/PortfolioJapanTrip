"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CityTile(props) {

  return React.createElement(
    "div",
    {
      className: "city-tile",
      id: props.id,
      onClick: function onClick() {
        return props.onClick();
      },
      style: props.style
    },
    React.createElement(AsyncImage, { className: "tile-image", src: props.src, loaded: function loaded() {
        document.getElementById(props.id).style.display = "";
      } }),
    React.createElement(
      "div",
      { className: "tile-text" },
      React.createElement(
        "p",
        null,
        props.title
      ),
      React.createElement(
        "p",
        null,
        props.subtitle
      )
    )
  );
}

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {

      smoothScrollTo(document.getElementById("banner"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(ContentHeader, { title: "A Bit About This Site" }),
        React.createElement(
          Bold,
          null,
          React.createElement(
            "h1",
            null,
            "Find the repository for this site on ",
            React.createElement(
              "a",
              { href: "https://github.com/embrqq/PortfolioJapanTrip" },
              "github"
            ),
            "!"
          )
        ),
        React.createElement(
          "p",
          null,
          "I'll be going to Japan this summer (2019) from June 16 to July 1. Since I really don't like sharing much of what I'm doing on major social media platforms like Facebook, Instagram, or Twitter, I intend to let friends and family see what I'm doing on my trip through this site. Think of this site as a sort of travel diary, organized by city, where I'll be putting daily entries. You can find the most recent things I've been doing at the bottom of this page in the recents area, or move to the diary page to see all my entries. This is the first time I've made a site like this from scratch (I just took web programming at school!), so hopefully it's pretty easy to navigate around. Figured it would be a good way to get practice using the skills I learned, and a more personal way to present my experiences from Japan!"
        ),
        React.createElement(
          Bold,
          null,
          React.createElement(
            "h1",
            null,
            "More about my trip"
          ),
          React.createElement(
            "h1",
            null,
            "\u79C1\u306E\u4E88\u5B9A"
          )
        ),
        React.createElement(
          "div",
          { className: "cities" },
          React.createElement(CityTile, {
            id: "osaka-tile",
            src: "/assets/images/20190618-osakacastleclose.jpeg",
            title: "\u5927\u962A",
            subtitle: "Osaka",
            style: { display: "none" },
            onClick: function onClick() {
              _this2.props.grabContent('info', "osaka");
            }
          }),
          React.createElement(CityTile, {
            id: "kyoto-tile",
            src: "/assets/images/20190621-garden3.jpeg",
            title: "\u4EAC\u90FD",
            subtitle: "Kyoto",
            style: { display: "none" },
            onClick: function onClick() {
              _this2.props.grabContent('info', "kyoto");
            }
          }),
          React.createElement(CityTile, {
            id: "yokohama-tile",
            src: "/assets/images/20190624-wheel1.jpeg",
            title: "\u6A2A\u6D5C",
            subtitle: "Yokohama",
            style: { display: "none" },
            onClick: function onClick() {
              _this2.props.grabContent('info', "yokohama");
            }
          }),
          React.createElement(CityTile, {
            id: "tokyo-tile",
            src: "/assets/images/20190625-akibaday.jpeg",
            title: "\u6771\u4EAC",
            subtitle: "Tokyo",
            style: { display: "none" },
            onClick: function onClick() {
              _this2.props.grabContent('info', "tokyo");
            }
          })
        ),
        React.createElement(
          "p",
          null,
          "This will be a solo trip, and I'll be heading to three major cities of ",
          React.createElement(
            "span",
            { className: "city-link", onClick: function onClick() {
                _this2.props.grabContent('info', "osaka");
              } },
            "Osaka"
          ),
          ", ",
          React.createElement(
            "span",
            { className: "city-link", onClick: function onClick() {
                _this2.props.grabContent('info', "kyoto");
              } },
            "Kyoto"
          ),
          ", ",
          React.createElement(
            "span",
            { className: "city-link", onClick: function onClick() {
                _this2.props.grabContent('info', "yokohama");
              } },
            "Yokohama"
          ),
          ", and ",
          React.createElement(
            "span",
            { className: "city-link", onClick: function onClick() {
                _this2.props.grabContent('info', "tokyo");
              } },
            "Tokyo"
          ),
          " (in that order), for 4, 2, 2, and 6 days respectively! I don't enjoy using social media platforms like facebook or instagram that much, so I intend to keep family and friends updated through this website. I'll upload images with quick captions and perhaps small passages of what I've been up to while I'm in Japan. I'll try to keep it as up-to-date as possible! I have an ",
          React.createElement(
            "span",
            { className: "city-link", onClick: function onClick() {
                _this2.props.grabContent('info', "");smoothScrollTo(document.getElementById("banner"));
              } },
            "info"
          ),
          " page for some more basic information about where I'll be staying, and some ",
          React.createElement(
            "span",
            { className: "city-link", onClick: function onClick() {
                _this2.props.grabContent('info', "links");
              } },
            "travel tips/links"
          ),
          " if you are interested in things to know if you ever go to Japan."
        ),
        React.createElement(
          "p",
          null,
          "Most of the images one this site will have a caption that can be viewed by hovering over them, so if you're not too sure what you are looking at, make sure to give the caption a peek!"
        ),
        React.createElement(
          "p",
          null,
          "If you've made it down this far, I suggest you head over to the ",
          React.createElement(
            "span",
            { className: "city-link", onClick: function onClick() {
                _this2.props.grabContent("diary");smoothScrollTo(document.getElementById("banner"));
              } },
            "diary page"
          ),
          "!"
        )
      );
    }
  }]);

  return Home;
}(React.Component);

export function render(grabContent, active) {
  ReactDOM.render(React.createElement(Home, { grabContent: grabContent }), document.getElementById("content"));
}