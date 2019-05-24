var cheat_meals = [
	{ Name: "Pizza" },
	{ Name: "Sushi" },
	{ Name: "Montaditos" },
	{ Name: "Flower Burger" },
	{ Name: "Chorillano" },
	{ Name: "Messicano" },
	{ Name: "California Bakery" },
	{ Name: "BUL" },
	{ Name: "I Love Poke" },
	{ Name: "Homemade" }
]

var $roulette = $(".roulette")

$(".spin").on("click", function() {
	$roulette.removeClass("tada").animate({ "font-size": "16px" }, 0)
	var total = cheat_meals.length,
		selected = Math.floor(Math.random() * total * 5),
		i = 0

	for (i = 0; i <= total * 5; i++) {
		setTimeout(
			(function(i) {
				return function() {
					$roulette.text(cheat_meals[i % total].Name.toUpperCase())
					if (i === selected) {
						$roulette.animate({ "font-size": "30px" }, "fast").addClass("tada")
					}
				}
			})(i),
			i * 100
		)

		if (i === selected) {
			break
		}
	}
})
