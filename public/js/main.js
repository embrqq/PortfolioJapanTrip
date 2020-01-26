"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function smoothScrollTo(element) {

  var scrollPos = element.offsetTop - document.getElementsByClassName("nav")[0].offsetHeight;

  console.log("Scrolling to: ", scrollPos);

  window.scroll({
    top: scrollPos,
    left: 0,
    behavior: 'smooth'
  });
}

function Banner(props) {

  var titles = props.locationTitles;
  var subtitles = props.locationSubtitles;
  var loc = props.location.indexOf(true);
  var backgroundURL = "/assets/banners/" + props.locationNames[loc] + ".jpeg";
  var backgrounds = [];

  for (var i = 0; i < props.location.length; i++) {
    backgrounds.push(React.createElement(
      "div",
      { key: i, className: "banner-background", style: {
          opacity: props.location[i] ? "1" : "0"
        } },
      React.createElement("img", {
        src: "/assets/banners/" + props.locationNames[i] + ".jpeg"
      })
    ));
  }

  return React.createElement(
    "div",
    { id: "banner", style: { flex: "1 1 50vh" } },
    backgrounds,
    React.createElement(
      "div",
      { className: "banner-title" },
      React.createElement(
        "h1",
        null,
        titles[loc]
      ),
      React.createElement(
        "h1",
        null,
        subtitles[loc]
      )
    )
  );
}

function NavButton(props) {
  return React.createElement(
    "div",
    { className: "nav-button " + (props.focus ? "button-focus" : ""), id: props.location + "-button" },
    React.createElement(
      "button",
      { onClick: props.onClick },
      props.location.charAt(0).toUpperCase() + props.location.slice(1)
    )
  );
}

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
  }

  _createClass(Nav, [{
    key: "scrollWatch",
    value: function scrollWatch() {

      var navbar = document.getElementsByClassName("nav")[0];
      var content = document.getElementById("content");
      var bannerHeight = document.getElementById("banner").offsetHeight;

      if (window.pageYOffset >= bannerHeight) {
        navbar.classList.add("nav-sticky");
        content.style.paddingTop = navbar.offsetHeight + "px";
      } else {
        navbar.classList.remove("nav-sticky");
        content.style.paddingTop = "";
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.scrollWatch);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.scrollWatch);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var navButtons = [];

      var _loop = function _loop(i) {
        var b = _this2.props.buttons[i];
        navButtons.push(React.createElement(NavButton, { key: i, location: b.location, focus: b.focus, onClick: function onClick() {
            b.onClick();
            smoothScrollTo(document.getElementById("banner"));
          } }));
      };

      for (var i = 0; i < this.props.buttons.length; i++) {
        _loop(i);
      }
      return React.createElement(
        "div",
        { className: "nav" },
        navButtons
      );
    }
  }]);

  return Nav;
}(React.Component);

function ContentHeader(props) {

  return React.createElement(
    "div",
    { className: "content-header" },
    React.createElement(
      "h1",
      { className: "content-title" },
      props.title
    )
  );
}

function PanelWrapper(props) {

  return React.createElement(
    "div",
    { className: "panel-wrapper" },
    React.createElement(AsyncImage, { className: "panel-image", src: props.src }),
    React.createElement(
      "div",
      { className: "panel-caption" },
      React.createElement(
        "p",
        null,
        props.english,
        React.createElement("br", null),
        props.japanese
      )
    )
  );
}

function Bold(props) {

  return React.createElement(
    "div",
    { className: "bold " + props.className, id: props.id, style: props.style },
    props.children
  );
}

var AsyncImage = function (_React$Component2) {
  _inherits(AsyncImage, _React$Component2);

  function AsyncImage(props) {
    _classCallCheck(this, AsyncImage);

    return _possibleConstructorReturn(this, (AsyncImage.__proto__ || Object.getPrototypeOf(AsyncImage)).call(this, props));
  }

  _createClass(AsyncImage, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "div",
        {
          id: this.props.id,
          className: this.props.className,
          style: this.props.style
        },
        React.createElement("img", {
          src: this.props.src,
          onLoad: function onLoad() {
            return _this4.props.loaded();
          }
        })
      );
    }
  }]);

  return AsyncImage;
}(React.Component);

var ImageCollection = function (_React$Component3) {
  _inherits(ImageCollection, _React$Component3);

  function ImageCollection(props) {
    _classCallCheck(this, ImageCollection);

    return _possibleConstructorReturn(this, (ImageCollection.__proto__ || Object.getPrototypeOf(ImageCollection)).call(this, props));
  }

  _createClass(ImageCollection, [{
    key: "displayImages",
    value: function displayImages() {
      var _this6 = this;

      var images = [];

      var _loop2 = function _loop2(i) {
        var im = _this6.props.content[i];
        var divid = _this6.props.id + "-" + i;
        images.push(React.createElement(
          "div",
          {
            key: i,
            className: "collection-wrapper",
            id: divid,
            style: Object.assign({}, im.style, { display: "none" })
          },
          React.createElement(AsyncImage, {
            src: im.src,
            className: "collection-image", loaded: function loaded() {
              var el = document.getElementById(divid);
              el.style.display = "";
              el.style.opacity = "0";
              el.style.transition = "opacity 1.5s linear";
              setTimeout(function () {
                el.style.opacity = "1";
              }, 20);
            }
          }),
          React.createElement(
            "div",
            { className: "collection-image-title" },
            React.createElement(
              "h1",
              null,
              im.english
            ),
            React.createElement(
              "h1",
              null,
              im.japanese
            )
          )
        ));
      };

      for (var i = 0; i < this.props.content.length; i++) {
        _loop2(i);
      }

      return images;
    }
  }, {
    key: "render",
    value: function render() {

      console.log("Rendering collection: ", this.props.content);

      return React.createElement(
        "div",
        { className: "image-collection " + this.props.className, id: this.props.id },
        this.displayImages()
      );
    }
  }]);

  return ImageCollection;
}(React.Component);

var InteractiveDiary = function (_React$Component4) {
  _inherits(InteractiveDiary, _React$Component4);

  function InteractiveDiary(props) {
    _classCallCheck(this, InteractiveDiary);

    var _this7 = _possibleConstructorReturn(this, (InteractiveDiary.__proto__ || Object.getPrototypeOf(InteractiveDiary)).call(this, props));

    _this7.state = {
      active: _this7.props.active,
      entries: []
    };
    return _this7;
  }

  _createClass(InteractiveDiary, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.grabEntries();
    }
  }, {
    key: "grabEntries",
    value: function grabEntries() {
      var diary = this;

      var group = this.props.lookFor;

      var url = "/get?type=diary&group=" + group;

      console.log("Querying: ", url);

      var xhr = new XMLHttpRequest();
      xhr.open('get', url);

      var page = this;

      xhr.onload = function () {
        var json = JSON.parse(xhr.responseText);
        if (json.error == 1) {
          console.log("Error: ", json);return;
        }
        console.log(json);
        diary.setState({ entries: json.entries });
      };

      xhr.onerror = function () {
        console.log("Error getting AJAX.");
      };

      xhr.send();
    }
  }, {
    key: "formatDate",
    value: function formatDate(date) {

      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
      var month = months[parseInt(date.slice(4, 6)) - 1];
      var day = date.slice(6, 8);
      return month + "-" + day;
    }
  }, {
    key: "displayEntries",
    value: function displayEntries() {
      var _this8 = this;

      if (this.state.entries.length == 0) {
        return React.createElement(
          Bold,
          null,
          "It doesn't look like I've put anything in this portion of the diary yet"
        );
      }

      var images = [];

      var _loop3 = function _loop3(i) {
        var im = _this8.state.entries[i];
        var divid = im.id;
        images.push(React.createElement(
          "div",
          {
            key: i,
            className: "diary-entry-wrapper ",
            id: divid,
            style: { display: "none" },
            onClick: function onClick() {
              _this8.grabContent(divid);
            }
          },
          React.createElement(AsyncImage, {

            src: im.imgsrc,
            className: "diary-image", loaded: function loaded() {
              var el = document.getElementById(divid);
              el.style.opacity = "0";
              el.style.transition = "opacity 1.5s linear";
              el.style.display = "";
              setTimeout(function () {
                el.style.opacity = "1";
              }, 20);
            }
          }),
          React.createElement(
            "div",
            { className: "diary-image-title" },
            React.createElement(
              "h1",
              null,
              _this8.formatDate(im.date)
            ),
            React.createElement(
              "h1",
              null,
              im.place
            )
          )
        ));
      };

      for (var i = 0; i < this.state.entries.length; i++) {
        _loop3(i);
      }

      return images;
    }
  }, {
    key: "grabContent",
    value: function grabContent(tile) {

      if (tile == this.state.active) {

        this.setState({ active: "" });
        smoothScrollTo(document.getElementsByClassName("interactive-image-diary")[0]);
      } else {
        this.setState({ active: tile });
      }
    }
  }, {
    key: "generateEntryHeader",
    value: function generateEntryHeader(entry, diary) {
      var _this9 = this;

      var divid = entry.id + "-header";

      return React.createElement(
        "div",
        {
          key: this.state.entries.length + 1,
          className: "diary-entry-header",
          id: divid,
          style: { display: "" },
          onClick: function onClick() {
            _this9.grabContent(entry.id);
          }
        },
        React.createElement(AsyncImage, {
          src: entry.imgsrc,
          className: "diary-entry-header-image", loaded: function loaded() {
            var el = document.getElementById(divid);
            el.style.opacity = "0";
            el.style.transition = "opacity 1.5s linear";
            el.style.display = "";
            setTimeout(function () {
              smoothScrollTo(document.getElementsByClassName("diary-entry-header")[0]);
              el.style.opacity = "1";
            }, 20);
          }
        }),
        React.createElement(
          "div",
          { className: "diary-entry-header-title" },
          React.createElement(
            "h1",
            null,
            this.formatDate(entry.date)
          ),
          React.createElement(
            "h1",
            null,
            entry.place
          )
        )
      );
    }
  }, {
    key: "displayContent",
    value: function displayContent() {

      if (this.state.active == "" || this.state.active == undefined) return;
      if (this.state.entries.length < 1) return;

      var loc = void 0;
      for (var i = 0; i < this.state.entries.length; i++) {
        if (this.state.entries[i].id == this.state.active) {
          loc = i;
          break;
        }
      }

      console.log(this.state.active + " : " + loc);

      var entry = this.state.entries[loc];
      var content = entry.content;
      console.log(entry);
      var html = [];

      html.push(this.generateEntryHeader(entry, this));

      for (var _i = 0; _i < content.length; _i++) {
        //Parse content in here.
        var element = content[_i];
        if (element.tag == "p") {
          html.push(React.createElement(
            "p",
            {
              key: _i,
              className: element.class,
              id: element.id,
              style: element.style
            },
            element.content
          ));
        } else if (element.tag == "bold") {
          html.push(React.createElement(
            Bold,
            { key: _i, className: element.class, id: element.id, style: element.style },
            React.createElement(
              "h1",
              null,
              element.content.english
            ),
            React.createElement(
              "h1",
              null,
              element.content.japanese
            )
          ));
        } else if (element.tag == "images") {
          html.push(React.createElement(ImageCollection, { key: _i, className: element.class, id: element.id, style: element.style, content: element.content }));
        } else {
          console.log("Ran into unexpected tag processing gallery content: " + element.tag);
        }
      }
      console.log(html);
      return html;
    }
  }, {
    key: "render",
    value: function render() {

      console.log("Rendering diary: ", this.props.lookFor);

      return React.createElement(
        "div",
        { className: "interactive-image-diary" },
        React.createElement(
          "div",
          { className: "diary-panel" },
          this.displayEntries()
        ),
        React.createElement(
          "div",
          { className: "diary-content" },
          this.displayContent()
        )
      );
    }
  }]);

  return InteractiveDiary;
}(React.Component);

function Footer(props) {

  return React.createElement(
    "div",
    { className: "footer" },
    React.createElement(
      "p",
      null,
      "This site was made by Elisabeth Henkens"
    )
  );
}