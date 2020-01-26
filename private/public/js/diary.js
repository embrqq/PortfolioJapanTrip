"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Diary = function (_React$Component) {
  _inherits(Diary, _React$Component);

  function Diary(props) {
    _classCallCheck(this, Diary);

    return _possibleConstructorReturn(this, (Diary.__proto__ || Object.getPrototypeOf(Diary)).call(this, props));
  }

  _createClass(Diary, [{
    key: "render",
    value: function render() {

      console.log("Rendering diary page with active: ", this.props.active);

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(ContentHeader, { title: "What I've been up to" }),
        React.createElement(
          "p",
          null,
          "This is my diary. You can find all the entries from my trip here! Hover over an image to see the time and place of the picture, and click on it to open up the entry for that day!"
        ),
        React.createElement(InteractiveDiary, { lookFor: "all", active: this.props.active })
      );
    }
  }]);

  return Diary;
}(React.Component);

export function render(grabContent, active) {

  ReactDOM.render(React.createElement(Diary, { active: active }), document.getElementById("content"));
}