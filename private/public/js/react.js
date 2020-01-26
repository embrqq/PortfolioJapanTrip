"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    var location = [false, false, false];
    location[loadedLoc] = true;
    var active = "";

    var url = "" + window.location;
    var data = url.split("#");
    if (data.length > 1) {
      var parts = data[1].split(",");
      for (var i = 0; i < parts.length; i++) {
        var pieces = parts[i].split("=");
        if (pieces[0] == "active") active = pieces[1];
      }
    }

    _this.state = {
      //[home, osaka, kyoto, tokyo]
      locationNames: ["home", "diary", "info"],
      location: location,
      locationTitles: ["エリーの旅行記", "旅行記", "情報"],
      locationSubtitles: ["Ellie's Japan Trip Diary", "Diary", "Info"],
      active: active
    };

    window.onpopstate = function (event) {

      console.log("Popped state: ", event.state);

      document.getElementById("page-css").href = "/css/" + event.state.loc + ".css";
      _this.setState({ location: event.state.location, active: event.state.active });
    };

    return _this;
  }

  _createClass(Page, [{
    key: "pushToHistory",
    value: function pushToHistory() {
      var loc = this.state.locationNames[this.state.location.indexOf(true)];

      var newState = {
        loc: loc,
        location: this.state.location,
        active: this.state.active
      };

      history.pushState(newState, "", loc + ".html");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.pushToHistory();
      this.setScript();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.pushToHistory();
      this.setScript();
    }
  }, {
    key: "loadContent",
    value: function loadContent(loc, active) {

      document.getElementById("page-css").href = "/css/" + loc + ".css";
      console.log("Pressed button to load content for: " + loc + " with active: " + active);

      var location = this.state.location;
      location[this.state.location.indexOf(true)] = false;
      location[this.state.locationNames.indexOf(loc)] = true;

      this.setState({ location: location, active: active });

      console.log(this.state);
    }
  }, {
    key: "setScript",
    value: function setScript() {
      var _this2 = this;

      var loc = this.state.locationNames[this.state.location.indexOf(true)];

      import('/js/' + loc + ".js").then(function (module) {
        module.render(function (loc, act) {
          return _this2.loadContent(loc, act);
        }, _this2.state.active);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      //Initialize button array. Their values point to here, so maybe updating page state will update classes.

      var buttons = [];

      console.log("Page state: ", this.state);

      var _loop = function _loop(i) {
        buttons.push({ location: _this3.state.locationNames[i], focus: _this3.state.location[i], onClick: function onClick() {
            return _this3.loadContent(_this3.state.locationNames[i]);
          } });
      };

      for (var i = 0; i < this.state.locationNames.length; i++) {
        _loop(i);
      }

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Banner, {
          key: 1,
          location: this.state.location,
          locationNames: this.state.locationNames,
          locationTitles: this.state.locationTitles,
          locationSubtitles: this.state.locationSubtitles
        }),
        React.createElement(Nav, {
          key: 2,
          buttons: buttons
        }),
        React.createElement("div", { className: "content", id: "content" }),
        React.createElement(Footer, null)
      );
    }
  }]);

  return Page;
}(React.Component);

ReactDOM.render(React.createElement(Page, null), document.getElementById('react'));