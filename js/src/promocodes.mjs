let promoWind = document.getElementById('promocode__wind');
let promoSubmit = document.getElementById('promo__submit');
let correct = document.getElementById('correctPromo')
let incorrect = document.getElementById('incorrectPromo')

promoSubmit.addEventListener("click", promocodes);

function promocodes() {
	if (promoWind === "patrik") {
		correct.classList.toggle("hide");
	} else if (promiWind !== "patrik") {
		incorrect.classList.toggle("hide");
	}
} 