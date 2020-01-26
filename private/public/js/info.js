"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_React$Component) {
  _inherits(Info, _React$Component);

  function Info(props) {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this, props));
  }

  _createClass(Info, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!(this.props.active == undefined || this.props.active == "")) {

        setTimeout(function () {

          smoothScrollTo(document.getElementById("info-" + _this2.props.active));
        }, 100);
      }
    }
  }, {
    key: "generateCityBanner",
    value: function generateCityBanner(src, city, title, subtitle) {

      var id = "info-" + city;

      return React.createElement(
        "div",
        {
          className: "city-banner",
          id: id
        },
        React.createElement(AsyncImage, {
          src: src,
          className: "city-banner-image",
          loaded: function loaded() {
            var el = document.getElementById(id);
            el.style.opacity = "0";
            el.style.transition = "opacity 1.5s linear";
            setTimeout(function () {
              el.style.opacity = "1";
            }, 20);
          }
        }),
        React.createElement(
          "div",
          { className: "city-banner-title" },
          React.createElement(
            "h1",
            null,
            title
          ),
          React.createElement(
            "h1",
            null,
            subtitle
          )
        )
      );
    }
  }, {
    key: "generateJumpLink",
    value: function generateJumpLink(id, text) {
      var onclick = function onclick() {

        smoothScrollTo(document.getElementById(id));
      };
      return React.createElement(
        "span",
        { onClick: onclick, className: "jump-link" },
        text
      );
    }
  }, {
    key: "render",
    value: function render() {

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(ContentHeader, { title: "More Info on My Trip and Japan Travel" }),
        React.createElement(
          "p",
          null,
          "Here you can find more details on where I'll be staying, when, and what I hope to do. I've wrote a little bit about each city that I intend to visit so you can try and get a feel for what distinguishes different Japanese cities. Also, I've included a link section of tips and facts that I think people going to Japan should be aware of before hand! Jump to different sections of this page with the links below:"
        ),
        React.createElement(
          Bold,
          null,
          React.createElement(
            "h1",
            null,
            "\u5185\u5BB9:"
          ),
          React.createElement(
            "h1",
            null,
            "Contents:"
          )
        ),
        React.createElement(
          "ul",
          { className: "page-contents" },
          React.createElement(
            "li",
            null,
            this.generateJumpLink("info-osaka", "Osaka")
          ),
          React.createElement(
            "li",
            null,
            this.generateJumpLink("info-kyoto", "Kyoto")
          ),
          React.createElement(
            "li",
            null,
            this.generateJumpLink("info-yokohama", "Yokohama")
          ),
          React.createElement(
            "li",
            null,
            this.generateJumpLink("info-tokyo", "Tokyo")
          ),
          React.createElement(
            "li",
            null,
            this.generateJumpLink("info-links", "Travel Links")
          )
        ),
        this.generateCityBanner("/assets/images/20190617-dotonbori.jpeg", "osaka", "大阪", "Osaka"),
        React.createElement(
          "p",
          null,
          "Osaka is the first destination on my trip to Japan. Osaka is known for its street food, shopping, and one of the largest aquariums in the world, all of which I hope to take advantage of. It has numerous famous shopping streets, with Dotonbori and Shinsaibashi as the most notable ones. Probably one of the lesser known pieces of information about it, something that I learned in my traditional Japanese theater course, is that Osaka is home to the Japanese performing art of Bunraku, a play composed entirely of intricately made puppets."
        ),
        React.createElement(
          "p",
          null,
          "I'll be flying into this city directly from SFO, landing at the Kansai International Airport, and my stay will be at a hotel right near the famous shopping street of Dotonbori, called Red Roof Plus Osaka Nanba. I'll be here for four days and hope to use my time in Osaka to just eat lots of food while I get over jet lag. One advantage of Osaka is that its Shinkansen (bullet train) station can bring you to all parts of the country in just a couple hours, so I intend to take a trip down to Hiroshima for a day!"
        ),
        React.createElement(
          Bold,
          null,
          React.createElement(
            "p",
            null,
            "Hotel: Redroof Plus Osaka Nanba"
          ),
          React.createElement(
            "p",
            null,
            "\u30DB\u30C6\u30EB: \u30EC\u30C3\u30C9\u30EB\u30FC\u30D5\u30D7\u30E9\u30B9\u5927\u962A\u96E3\u6CE2"
          )
        ),
        React.createElement(
          "p",
          null,
          "In Osaka I'll be staying at ",
          React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", id: "redroof", href: "https://www.redroof.com/property/chuoku/osaka-prefecture/RRI841" },
            "Red Roof Osakananba Hotel"
          ),
          ". Since my goal here is to basically just eat all the food I can, I chose a hotel right next to the super famous street Dotonbori. It's just a couple minute walk from Dotonbori, so I can eat the street food until I drop."
        ),
        this.generateCityBanner("/assets/images/20190621-garden3.jpeg", "kyoto", "京都", "Kyoto"),
        React.createElement(
          "p",
          null,
          "Kyoto is described as the most historical city in Japan. It has the most world heritage sites of any city in the world, and it's a popular destination for both international and domestic tourists in Japan (it's the city I think my mom would enjoy the most!). For a city in Japan, it's relatively small. However, since it's got so many cultural sites, and is known as being one of the most \"Japanese\" cities, I wanted to make this part of my trip about experiencing new parts of more traditional Japanese culture."
        ),
        React.createElement(
          "p",
          null,
          "While my stay here will be only two days, it's one of the parts of the trip that I'm looking forward to most. Japan has a history of traditional inns called \"ryokan\". Kyoto is home to some of the best Ryokan in the country, and Ryokan are a popular spot for weekend outings for Japanese people and travelers alike. They feature things like: kaiseki-ryouri (a Japanese multicourse dinner of seasonal ingredients), traditional style baths (luckily my room has a private one so no sharing today!), Japanese style rooms with tatami mats and futons, and you are looked after the entire time by women dressed in Yukatas (basically a kimono, but made of cotton instead of silk, and only one or two layers instead of the many present in traditional kimono)."
        ),
        React.createElement(
          Bold,
          null,
          React.createElement(
            "p",
            null,
            "Ryokan: Yachiyo Ryokan"
          ),
          React.createElement(
            "p",
            null,
            "\u65C5\u9928: \u516B\u5343\u4EE3\u65C5\u9928"
          )
        ),
        React.createElement(
          "p",
          null,
          "My Ryokan for two days will be this place: ",
          React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", id: "yachiyo", href: "https://kyoto-ryokan.co.jp/" },
            "Yachiyo Ryokan"
          ),
          ". It's the part of the trip I splurged on (...not that this whole trip isn't a splurge, haha, thanks mom!). I think staying at a ryokan is one of the best ways to feel Japanese, after all it's something the locals do too. If you want to know more on Ryokan, I recommend reading ",
          React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://boutiquejapan.com/ryokan/" },
            "this article"
          ),
          "."
        ),
        this.generateCityBanner("/assets/images/20190623-chukagai1.jpeg", "yokohama", "横浜", "Yokohama"),
        React.createElement(
          "p",
          null,
          "Yokohama is one of the lesser known, but no less interesting, cities in Japan. A fact I found surprising is that Yokohama is actually the largest city in Japan in population. Everyone thinks that Tokyo is the largest city, but they are slightly mistaken, as it's the largest urban center. Tokyo is really just a merging of 23 sub cities, with the largest having a population of about 1 million, but its nextdoor neighbor, Yokohama, has 4 million people living in its city limits, making it the city in Japan with the largest population in its city limits."
        ),
        React.createElement(
          "p",
          null,
          "Yokohama is just south of Tokyo, a 30 minute or so train ride and a 1 hour car drive from the center of Tokyo, and historically it was one of the first ports opened to the West when Japan signed its treaty with Matthew Perry. This sparked its transformation into a major economic hub in the Tokyo area, and you see this through its interfacing with Tokyo Bay."
        ),
        React.createElement(
          "p",
          null,
          "Some of the unique things in Yokohama are its Minato Mirai area, an amusement park and shopping area right on the bay front, and its China town. It has the larget China town in Japan, and so I'm looking forward to being able to compare the China town in Yokohama to the China town in San Francisco! Its also in fairly close proximity to Mount Fuji, you can even get views of the mountain from atop many hotels, so if it's a clear day I might hop on the train and go visit Fuji-san!"
        ),
        React.createElement(
          Bold,
          null,
          React.createElement(
            "p",
            null,
            "Hotel: New Otani Inn Yokohama Premium"
          ),
          React.createElement(
            "p",
            null,
            "\u30DB\u30C6\u30EB: \u30CB\u30E5\u30FC\u30AA\u30FC\u30BF\u30CB\u30A4\u30F3\u6A2A\u6D5C\u30D7\u30EC\u30DF\u30A2\u30E0"
          )
        ),
        React.createElement(
          "p",
          null,
          "I'll be staying at the ",
          React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", id: "yachiyo", href: "https://www.newotani.co.jp/en/innyokohama/" },
            "New Otani Inn Yokohama Premium"
          ),
          " (Japanese people seem to like weird long English-like names) for two nights. It's got a handy location of being right near a subway station, and smack dab in the middle between the two destinations I talked about above: Minato Mirai and Yokohama China town (about a 10 minute walk to either)."
        ),
        this.generateCityBanner("/assets/images/20190625-akibaday.jpeg", "tokyo", "東京", "Tokyo"),
        React.createElement(
          "p",
          null,
          "Tokyo is the final destination on my trip. Tokyo, as you probably know, is the capital of Japan, and it is its largest urban center. This city is a bit of a tricky one because it's less so a city and more just a massive sprawl of cities that have all joined together. Because of this, theres so much in Tokyo that you can spend your whole life talking about it. Tokyo is split into 23 major wards (cities), and some of the more notable ones are Shinjuku, Shibuya, Chiyoda, and Taito. I, myself, will be staying in Chiyoda and Shibuya for 3 days each."
        ),
        React.createElement(
          Bold,
          null,
          React.createElement(
            "p",
            null,
            "Chiyoda"
          ),
          React.createElement(
            "p",
            null,
            "\u5343\u4EE3\u7530"
          )
        ),
        React.createElement(
          "p",
          null,
          "Chiyoda is the ward that I'm most looking forward to visiting for pretty much one reason: Akihabara. Akihabara is basically the holy land of anime, video games, and electronics (pretty much every single thing im interested in). It's called the \"Electric City\" because, after world war 2, it became a major (black) marketplace for all sorts of household appliances, and general electronics. Since then it has evolved into the largest hub for anime and video game culture (but still maintains some of its marketplace roots). Right next door to Chiyoda is Taito, which has some pretty crazy shrines and fun museums that I intend to checkout!"
        ),
        React.createElement(
          Bold,
          null,
          React.createElement(
            "p",
            null,
            "Hotel: Akihabara Remm"
          ),
          React.createElement(
            "p",
            null,
            "\u30DB\u30C6\u30EB: \u30EC\u30E0\u79CB\u8449\u539F"
          )
        ),
        React.createElement(
          "p",
          null,
          "I'll be staying at the ",
          React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", id: "remm", href: "https://global.hankyu-hotel.com/remm-akihabara/" },
            "Akihabara Remm Hotel"
          ),
          " for the 4 days that I'm in Chiyoda. It's got a handy location being right next to both Akihabara, and the Akihabara station."
        ),
        React.createElement(
          Bold,
          null,
          React.createElement(
            "p",
            null,
            "Shibuya"
          ),
          React.createElement(
            "p",
            null,
            "\u6E0B\u8C37"
          )
        ),
        React.createElement(
          "p",
          null,
          "Shibuya is probably one of the first places that comes to people's mind when they think of Tokyo. It features the crazy scramble crossing where thousands of people cross at any given moment. Shibuya is home to really good shopping, a convenient location with a large subway station, and fairly near to the fashion ward of harajuku, and the night life of Shinjuku. I mostly chose to stay here as it lets me easily get to different parts of Tokyo and to change up the scene from staying in Akihabara the whole time."
        ),
        React.createElement(
          Bold,
          null,
          React.createElement(
            "p",
            null,
            "Hotel: Shibuya Granbell Hotel"
          ),
          React.createElement(
            "p",
            null,
            "\u30DB\u30C6\u30EB: \u6E0B\u8C37\u30B0\u30E9\u30F3\u30D9\u30EB\u30DB\u30C6\u30EB"
          )
        ),
        React.createElement(
          "p",
          null,
          "At Shibuya I'll be in the ",
          React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", id: "granbell", href: "http://www.granbellhotel.jp/en/shibuya/" },
            "Granbell Hotel"
          ),
          ". It's fairly close to the subway station, and my sister says that it's the hotel she stayed at when she went to Shibuya! (Booked the same one by coincidence)."
        ),
        React.createElement(
          Bold,
          { id: "info-links" },
          React.createElement(
            "h1",
            null,
            "Travel Tips/Links"
          ),
          React.createElement(
            "h1",
            null,
            "\u65E5\u672C\u65C5\u884C\u306B\u3064\u3044\u3066\u306E\u30EA\u30F3\u30AF\u96C6"
          )
        ),
        React.createElement(
          "p",
          null,
          " If you're going to Japan, theres a few essentials to know. I'll put some links to things I think are important to look up below."
        ),
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { target: "_blank", rel: "noopener noreferrer", href: "https://www.japan-guide.com/e/e2359_003.html" },
              "IC Cards and Trains"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { target: "_blank", rel: "noopener noreferrer", href: "https://www.swaindestinations.com/blog/tipping-etiquette-when-traveling-in-japan/" },
              "Tipping in Japan"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { target: "_blank", rel: "noopener noreferrer", href: "https://www.nihongomaster.com/blog/21-essential-japanese-travel-phrases/" },
              "Essential Phrases"
            ),
            " (Just saying Arigatou can be impolite! Stick to 'Arigatou Gozaimasu')"
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { target: "_blank", rel: "noopener noreferrer", href: "https://www.japan-guide.com/e/e2071.html" },
              "Convenience Stores"
            ),
            " (These things will be a life saver. They are 1000x better than American ones!)"
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { target: "_blank", rel: "noopener noreferrer", href: "https://www.insidejapantours.com/blog/2018/05/11/guide-to-japanese-vending-machines/" },
              "Vending Machines"
            ),
            " (It's a crazy situation.)"
          )
        ),
        React.createElement(
          "p",
          { id: "to-top" },
          this.generateJumpLink("banner", "Go back to the top")
        )
      );
    }
  }]);

  return Info;
}(React.Component);

export function render(grabContent, active) {
  ReactDOM.render(React.createElement(Info, { active: active }), document.getElementById("content"));
}