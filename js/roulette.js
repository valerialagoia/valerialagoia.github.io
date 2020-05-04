var cheat_meals = [
  { Name: "I Love Poke", Url: "https://www.ilovepoke.it/" },
  { Name: "Toyama", Url: "http://www.ristorantetoyama.it/" },
  { Name: "Wakaba", Url: "https://wakabamilano.blogspot.com/?m=1" },
  {
    Name: "El Chorillano",
    Url: "https://zero.eu/it/luoghi/166746-el-chorillano,milano/",
  },
  { Name: "Nima", Url: "http://nimasushi.it/ristorante/milano/#menu-toggle" },
  { Name: "Bomaki", Url: "https://www.bomaki.it/" },
  { Name: "La Perla D'Oro", Url: "https://www.laperladoro.it/i-ristoranti/" },
  { Name: "Tenoha", Url: "https://www.tenoha.it/" },
  { Name: "Zàzà Ramen", Url: "https://www.zazaramen.it/" },
  { Name: "Bhangrabar", Url: "http://bhangrabar.it/" },
  { Name: "Plato Chic Superfood", Url: "https://platomilano.com/" },
  { Name: "Karbon y Limon", Url: "http://www.dkarbonylimon.com/" },
  { Name: "Beirut", Url: "http://www.ristorantebeirut.it/" },
  { Name: "California Bakery", Url: "http://www.californiabakery.it/" },
  { Name: "Acai Sister", Url: "https://www.acaisisters.com/" },
  { Name: "Hygge", Url: "http://www.hyggecorner.com/" },
  { Name: "Le Biciclette", Url: "http://www.lebiciclette.com/" },
  { Name: "Fuorimano", Url: "http://fuorima.no/otbp.html" },
  {
    Name: "Golfo di Mondello",
    Url: "https://m.facebook.com/GolfoDiMondelloMilano",
  },
  { Name: "Flower Burger", Url: "https://www.flowerburger.it/" },
  { Name: "Hamerica's", Url: "https://www.hamericas.com/" },
  { Name: "100 Montaditos", Url: "https://italy.100montaditos.com/it/menu/" },
  { Name: "Macha Cafe", Url: "https://www.machacafe.it/" },
  { Name: "Avobrothers", Url: "https://www.avobrothers.com/food" },
  { Name: "Grezzo", Url: "https://grezzorawchocolate.com/" },
  {
    Name: "La Romana",
    Url: "https://www.gelateriaromana.com/53-gelateria-milano.php",
  },
];

var $rouletteContainer = $(".roulette-container");
var $roulette = $(".roulette");
var $linkTo = $(".link-to");

$(".spin").on("click", function () {
  $rouletteContainer.removeClass("tada").animate({ "font-size": "16px" }, 0);
  var total = cheat_meals.length,
    selected = Math.floor(Math.random() * total * 5),
    i = 0;

  for (i = 0; i <= total * 5; i++) {
    setTimeout(
      (function (i) {
        return function () {
          $roulette.text(cheat_meals[i % total].Name.toUpperCase());
          $linkTo[0].href = cheat_meals[i % total].Url;
          if (i === selected) {
            $roulette.animate({ "font-size": "30px" }, "fast").addClass("tada");
          }
        };
      })(i),
      i * 100
    );

    if (i === selected) {
      break;
    }
  }
});
