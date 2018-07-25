var cheat_meals = [
    { 'Name': 'Pizza' },
    { 'Name': 'Sushi' },
    { 'Name': 'Montaditos' },
    { 'Name': 'Flower Burger' },
    { 'Name': 'Chorillano' },
    { 'Name': 'Messicano' }
];

var $roulette = $('.roulette');

$('.spin').on('click', function() {
    var total = cheat_meals.length,
        selected = Math.floor( Math.random() * total*5 ),
        i = 0;


        for ( i = 0; i <= total*5; i++) {
            setTimeout((function(i){
                return function(){
                    $roulette.text( cheat_meals[i%total].Name.toUpperCase() );
                };
            }(i)), i * 100 );

            if ( i === selected ) {
                break;
            }
        }
})