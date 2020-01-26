"use strict";

class Info extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

    if(!(this.props.active == undefined || this.props.active == "")){

      setTimeout(() => {

        smoothScrollTo(document.getElementById("info-" + this.props.active));

      }, 100);

    }

  }

  generateCityBanner(src, city, title, subtitle){

    let id = "info-"+city;

    return (

      <div
        className="city-banner"
        id={id}
      >
        <AsyncImage
        src={src}
        className="city-banner-image"
        loaded={() => {
         let el = document.getElementById(id);
         el.style.opacity="0";
         el.style.transition="opacity 1.5s linear";
         setTimeout(() => {el.style.opacity="1"}, 20);
        }}
        />
        <div className="city-banner-title">
          <h1>{title}</h1>
          <h1>{subtitle}</h1>
        </div>
      </div>

    )

  }

  generateJumpLink(id, text){
    let onclick = () => {

      smoothScrollTo(document.getElementById(id))

    };
    return (

      <span onClick={onclick} className="jump-link">{text}</span>

    );
  }

  render(){

    return (
      <React.Fragment>

        <ContentHeader title="More Info on My Trip and Japan Travel"/>

        <p>
          Here you can find more details on where I'll be staying, when, and what I hope to do. I've wrote a little bit about each city that I intend to visit so you can try and get a feel for what distinguishes different Japanese cities. Also, I've included a link section of tips and facts that I think people going to Japan should be aware of before hand! Jump to different sections of this page with the links below:
        </p>

        <Bold>
          <h1>内容:</h1>
          <h1>Contents:</h1>
        </Bold>

        <ul className="page-contents">
          <li>{this.generateJumpLink("info-osaka", "Osaka")}</li>
          <li>{this.generateJumpLink("info-kyoto", "Kyoto")}</li>
          <li>{this.generateJumpLink("info-yokohama", "Yokohama")}</li>
          <li>{this.generateJumpLink("info-tokyo", "Tokyo")}</li>
          <li>{this.generateJumpLink("info-links", "Travel Links")}</li>
        </ul>

        {this.generateCityBanner("/assets/images/20190617-dotonbori.jpeg", "osaka", "大阪", "Osaka")}

        <p>
          Osaka is the first destination on my trip to Japan. Osaka is known for its street food, shopping, and one of the largest aquariums in the world, all of which I hope to take advantage of. It has numerous famous shopping streets, with Dotonbori and Shinsaibashi as the most notable ones. Probably one of the lesser known pieces of information about it, something that I learned in my traditional Japanese theater course, is that Osaka is home to the Japanese performing art of Bunraku, a play composed entirely of intricately made puppets.
        </p>
        <p>
          I'll be flying into this city directly from SFO, landing at the Kansai International Airport, and my stay will be at a hotel right near the famous shopping street of Dotonbori, called Red Roof Plus Osaka Nanba. I'll be here for four days and hope to use my time in Osaka to just eat lots of food while I get over jet lag. One advantage of Osaka is that its Shinkansen (bullet train) station can bring you to all parts of the country in just a couple hours, so I intend to take a trip down to Hiroshima for a day!
        </p>

        <Bold>
          <p>Hotel: Redroof Plus Osaka Nanba</p>
          <p>ホテル: レッドルーフプラス大阪難波</p>
        </Bold>
        <p>
          In Osaka I'll be staying at <a target="_blank" rel="noopener noreferrer" id="redroof" href="https://www.redroof.com/property/chuoku/osaka-prefecture/RRI841">Red Roof Osakananba Hotel</a>. Since my goal here is to basically just eat all the food I can, I chose a hotel right next to the super famous street Dotonbori. It's just a couple minute walk from Dotonbori, so I can eat the street food until I drop.
        </p>

        {this.generateCityBanner("/assets/images/20190621-garden3.jpeg", "kyoto", "京都", "Kyoto")}

        <p>
          Kyoto is described as the most historical city in Japan. It has the most world heritage sites of any city in the world, and it's a popular destination for both international and domestic tourists in Japan (it's the city I think my mom would enjoy the most!). For a city in Japan, it's relatively small. However, since it's got so many cultural sites, and is known as being one of the most "Japanese" cities, I wanted to make this part of my trip about experiencing new parts of more traditional Japanese culture.
        </p>

        <p>
          While my stay here will be only two days, it's one of the parts of the trip that I'm looking forward to most. Japan has a history of traditional inns called "ryokan". Kyoto is home to some of the best Ryokan in the country, and Ryokan are a popular spot for weekend outings for Japanese people and travelers alike. They feature things like: kaiseki-ryouri (a Japanese multicourse dinner of seasonal ingredients), traditional style baths (luckily my room has a private one so no sharing today!), Japanese style rooms with tatami mats and futons, and you are looked after the entire time by women dressed in Yukatas (basically a kimono, but made of cotton instead of silk, and only one or two layers instead of the many present in traditional kimono).
        </p>

        <Bold>
          <p>Ryokan: Yachiyo Ryokan</p>
          <p>旅館: 八千代旅館</p>
        </Bold>

        <p>
          My Ryokan for two days will be this place: <a target="_blank" rel="noopener noreferrer" id="yachiyo" href="https://kyoto-ryokan.co.jp/">Yachiyo Ryokan</a>. It's the part of the trip I splurged on (...not that this whole trip isn't a splurge, haha, thanks mom!). I think staying at a ryokan is one of the best ways to feel Japanese, after all it's something the locals do too. If you want to know more on Ryokan, I recommend reading <a target="_blank" rel="noopener noreferrer" href="https://boutiquejapan.com/ryokan/">this article</a>.
        </p>

        {this.generateCityBanner("/assets/images/20190623-chukagai1.jpeg", "yokohama", "横浜", "Yokohama")}

        <p>
          Yokohama is one of the lesser known, but no less interesting, cities in Japan. A fact I found surprising is that Yokohama is actually the largest city in Japan in population. Everyone thinks that Tokyo is the largest city, but they are slightly mistaken, as it's the largest urban center. Tokyo is really just a merging of 23 sub cities, with the largest having a population of about 1 million, but its nextdoor neighbor, Yokohama, has 4 million people living in its city limits, making it the city in Japan with the largest population in its city limits.
        </p>

        <p>
          Yokohama is just south of Tokyo, a 30 minute or so train ride and a 1 hour car drive from the center of Tokyo, and historically it was one of the first ports opened to the West when Japan signed its treaty with Matthew Perry. This sparked its transformation into a major economic hub in the Tokyo area, and you see this through its interfacing with Tokyo Bay.
        </p>

        <p>
          Some of the unique things in Yokohama are its Minato Mirai area, an amusement park and shopping area right on the bay front, and its China town. It has the larget China town in Japan, and so I'm looking forward to being able to compare the China town in Yokohama to the China town in San Francisco! Its also in fairly close proximity to Mount Fuji, you can even get views of the mountain from atop many hotels, so if it's a clear day I might hop on the train and go visit Fuji-san!
        </p>

        <Bold>
          <p>Hotel: New Otani Inn Yokohama Premium</p>
          <p>ホテル: ニューオータニイン横浜プレミアム</p>
        </Bold>

        <p>
          I'll be staying at the <a target="_blank" rel="noopener noreferrer" id="yachiyo" href="https://www.newotani.co.jp/en/innyokohama/">New Otani Inn Yokohama Premium</a> (Japanese people seem to like weird long English-like names) for two nights. It's got a handy location of being right near a subway station, and smack dab in the middle between the two destinations I talked about above: Minato Mirai and Yokohama China town (about a 10 minute walk to either).
        </p>

        {this.generateCityBanner("/assets/images/20190625-akibaday.jpeg", "tokyo", "東京", "Tokyo")}

        <p>
          Tokyo is the final destination on my trip. Tokyo, as you probably know, is the capital of Japan, and it is its largest urban center. This city is a bit of a tricky one because it's less so a city and more just a massive sprawl of cities that have all joined together. Because of this, theres so much in Tokyo that you can spend your whole life talking about it. Tokyo is split into 23 major wards (cities), and some of the more notable ones are Shinjuku, Shibuya, Chiyoda, and Taito. I, myself, will be staying in Chiyoda and Shibuya for 3 days each.
        </p>

        <Bold>
          <p>Chiyoda</p>
          <p>千代田</p>
        </Bold>

        <p>
          Chiyoda is the ward that I'm most looking forward to visiting for pretty much one reason: Akihabara. Akihabara is basically the holy land of anime, video games, and electronics (pretty much every single thing im interested in). It's called the "Electric City" because, after world war 2, it became a major (black) marketplace for all sorts of household appliances, and general electronics. Since then it has evolved into the largest hub for anime and video game culture (but still maintains some of its marketplace roots). Right next door to Chiyoda is Taito, which has some pretty crazy shrines and fun museums that I intend to checkout!
        </p>

        <Bold>
          <p>Hotel: Akihabara Remm</p>
          <p>ホテル: レム秋葉原</p>
        </Bold>

        <p>
          I'll be staying at the <a target="_blank" rel="noopener noreferrer" id="remm" href="https://global.hankyu-hotel.com/remm-akihabara/">Akihabara Remm Hotel</a> for the 4 days that I'm in Chiyoda. It's got a handy location being right next to both Akihabara, and the Akihabara station.
        </p>

        <Bold>
          <p>Shibuya</p>
          <p>渋谷</p>
        </Bold>

        <p>
          Shibuya is probably one of the first places that comes to people's mind when they think of Tokyo. It features the crazy scramble crossing where thousands of people cross at any given moment. Shibuya is home to really good shopping, a convenient location with a large subway station, and fairly near to the fashion ward of harajuku, and the night life of Shinjuku. I mostly chose to stay here as it lets me easily get to different parts of Tokyo and to change up the scene from staying in Akihabara the whole time.
        </p>

        <Bold>
          <p>Hotel: Shibuya Granbell Hotel</p>
          <p>ホテル: 渋谷グランベルホテル</p>
        </Bold>

        <p>
          At Shibuya I'll be in the <a target="_blank" rel="noopener noreferrer" id="granbell" href="http://www.granbellhotel.jp/en/shibuya/">Granbell Hotel</a>. It's fairly close to the subway station, and my sister says that it's the hotel she stayed at when she went to Shibuya! (Booked the same one by coincidence).
        </p>

        <Bold id="info-links">
          <h1>Travel Tips/Links</h1>
          <h1>日本旅行についてのリンク集</h1>
        </Bold>

        <p> If you're going to Japan, theres a few essentials to know. I'll put some links to things I think are important to look up below.
        </p>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.japan-guide.com/e/e2359_003.html">IC Cards and Trains</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.swaindestinations.com/blog/tipping-etiquette-when-traveling-in-japan/">Tipping in Japan</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.nihongomaster.com/blog/21-essential-japanese-travel-phrases/">Essential Phrases</a> (Just saying Arigatou can be impolite! Stick to 'Arigatou Gozaimasu')</li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.japan-guide.com/e/e2071.html">Convenience Stores</a> (These things will be a life saver. They are 1000x better than American ones!)</li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.insidejapantours.com/blog/2018/05/11/guide-to-japanese-vending-machines/">Vending Machines</a> (It's a crazy situation.)</li>
        </ul>

        <p id="to-top">{this.generateJumpLink("banner", "Go back to the top")}</p>
      </React.Fragment>
    );

  }

}

export function render(grabContent, active){
  ReactDOM.render(<Info active={active}/>, document.getElementById("content"));
}
