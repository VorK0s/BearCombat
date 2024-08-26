"use strict"
let img__default = document.getElementById('img__default');
let img__bro = document.getElementById('img__bro');

set_visual_skin();

let shop = document.getElementById('shop');
let stats = document.getElementById('stats');
let promo = document.getElementById('promo');
let reset = document.getElementById('reset');

let btnExit = document.getElementById('btnExit');
let btnExit2 = document.getElementById('btnExit2');
let btnExit3 = document.getElementById('btnExit3');
let btnExit4 = document.getElementById('btnExit4');

let windShop = document.getElementById('shop__wind');
let windStats = document.getElementById('stats__wind');
let windPromo = document.getElementById('promo__wind');
let windReset = document.getElementById('reset__wind');

shop.addEventListener("click", toggleShop);
btnExit.addEventListener("click", toggleShop); 
stats.addEventListener("click", toggleStats);
btnExit2.addEventListener("click", toggleStats);
promo.addEventListener("click", togglePromo);
btnExit3.addEventListener("click", togglePromo);
reset.addEventListener("click", toggleReset);
btnExit4.addEventListener("click", toggleReset);


function toggleShop() {
    img__default.classList.toggle("hide");
    img__bro.classList.toggle("hide");
    windShop.classList.toggle("hide");
}

function toggleStats() {
    img__bro.classList.toggle("hide");
    img__default.classList.toggle("hide");
    windStats.classList.toggle("hide");
}

function togglePromo() {
	img__default.classList.toggle("hide");
    img__bro.classList.toggle("hide");
	windPromo.classList.toggle("hide");
	correct.classList.add('hide');
	incorrect.classList.add('hide');
	promoInput.value = "";
}
function toggleReset() {
	img__default.classList.toggle("hide");
	img__bro.classList.toggle("hide");
	windReset.classList.toggle("hide");
}

/*----------------- shop -----------------*/

let default__skin = document.getElementById('skin__default');
let bro__Skin = document.getElementById('skin__bro');
let cosplayer__Skin = document.getElementById('skin__cosplayer');
let miner__Skin = document.getElementById('skin__miner');
let maid__Skin = document.getElementById('skin__maid');
let businessMan__Skin = document.getElementById('skin__businessMan');

let equiped__default = document.getElementById('equiped__default');
let equiped__bro = document.getElementById('equiped__bro');
let equiped__cosplay = document.getElementById('equiped__cosplay');
let equiped__miner = document.getElementById('equiped__miner');
let equiped__maid = document.getElementById('equiped__maid');
let equiped__businessMan = document.getElementById('equiped__businessMan');

let storage__clicks = localStorage.getItem('clicks');
let storage__skin = localStorage.getItem('skin');
let storage__open_skins = JSON.parse(localStorage.getItem('open_skins'));
let storage__all_skins = JSON.parse(localStorage.getItem('all_skins'));

if (!storage__skin) {
	localStorage.setItem('skin', 1);
	storage__skin = localStorage.getItem('skin');
}

if (!storage__open_skins) {
	localStorage.setItem('open_skins', JSON.stringify([ 1 ]))
	storage__open_skins = JSON.parse(localStorage.getItem('open_skins'))
}

if (!storage__all_skins) {
	let data = [
		{ 'name': 'Обычный', 'cost': 0, 'work': 1 },
		{ 'name': 'Брутальный', 'cost': 300, 'work': 1 },
		{ 'name': 'Косплейщица', 'cost': 2000, 'work': 1 },
		{ 'name': 'Шахтёр', 'cost': 5500, 'work': 1 },
		{ 'name': 'Горничная', 'cost': 45000, 'work': 1 },
		{ 'name': 'Бизнесмен', 'cost': 100000, 'work': 1 },
	]

	localStorage.setItem('all_skins', JSON.stringify(data));
	storage__all_skins = JSON.parse(localStorage.getItem('all_skins'));
}

set_visual_skin()
add_visual_purchased_skin()

default__skin.addEventListener("click",     () => buy_and_set_skin(1) );
bro__Skin.addEventListener("click",         () => buy_and_set_skin(2) );
cosplayer__Skin.addEventListener("click",   () => buy_and_set_skin(3) );
miner__Skin.addEventListener("click",       () => buy_and_set_skin(4) );
maid__Skin.addEventListener("click",        () => buy_and_set_skin(5) );
businessMan__Skin.addEventListener("click", () => buy_and_set_skin(6) );


function add_visual_purchased_skin() {

	for (const open_skin of storage__open_skins) {

		if (open_skin === 1) {
			equiped__default.classList.add('product__purchased');
		}
		else if (open_skin === 2) {
			equiped__bro.classList.add('product__purchased');
		}
		else if (open_skin === 3) {
			equiped__cosplay.classList.add('product__purchased');
		}
		else if (open_skin === 4) {
			equiped__miner.classList.add('product__purchased');
		}
		else if (open_skin === 5) {
			equiped__maid.classList.add('product__purchased');
		}
		else if (open_skin === 6) {
			equiped__businessMan.classList.add('product__purchased');
		}

	}

}
function buy_and_set_skin( skin_id ) {
	console.log('ВЫБРАНО | Медведь: ', storage__all_skins[skin_id - 1]['name'] ,' | Уровень: ', skin_id);

	equiped__default.classList.remove('product__equiped');
	equiped__bro.classList.remove('product__equiped');
	equiped__cosplay.classList.remove('product__equiped');
	equiped__miner.classList.remove('product__equiped');
	equiped__maid.classList.remove('product__equiped');
	equiped__businessMan.classList.remove('product__equiped');


	if (storage__open_skins.includes(skin_id)) {
		console.log( 'ЗАШИБИСЬ | Нашли' )

		localStorage.setItem('skin', skin_id);

		if (skin_id === 1) {
			equiped__default.classList.add('product__equiped');
		}
		else if (skin_id === 2) {
			equiped__bro.classList.add('product__equiped');
		}
		else if (skin_id === 3) {
			equiped__cosplay.classList.add('product__equiped');
		}
		else if (skin_id === 4) {
			equiped__miner.classList.add('product__equiped');
		}
		else if (skin_id === 5) {
			equiped__maid.classList.add('product__equiped');
		}
		else if (skin_id === 6) {
			equiped__businessMan.classList.add('product__equiped');
		}
	}
	else {
		console.log( 'ОШИБКА | Не куплено ещё' )

		if (storage__all_skins[skin_id - 1]['cost'] <= storage__clicks ) {
			console.log('ПОКУПКА |  Медведь: ', storage__all_skins[skin_id - 1]['name'], ' | Стоимость: ', storage__all_skins[skin_id - 1]['cost'])

			storage__clicks = storage__clicks - storage__all_skins[skin_id - 1]['cost']
			localStorage.setItem('clicks', storage__clicks);
			num = Number(localStorage.getItem('clicks'));

			storage__open_skins.push(skin_id)
			localStorage.setItem('open_skins', JSON.stringify(storage__open_skins))

			buy_and_set_skin(skin_id);
			add_visual_purchased_skin();
			update_bal();
		}
		else {
			console.log( 'ОШИБКА | Не хватает МёдоБаксов на покупку' )
		}
	}

	set_visual_skin()
}

function update_bal() {
	let upd = localStorage.getItem('clicks');
	count.innerHTML = upd;
}
function set_visual_skin() {
	let skin_selected_id = localStorage.getItem('skin')

	img__default.classList.add('hidden');
	img__bro.classList.add('hidden');
	img__cosplayer.classList.add('hidden');
	img__miner.classList.add('hidden');
	img__maid.classList.add('hidden');
	img__businessMan.classList.add('hidden');

	if (skin_selected_id === '1') {
		img__default.classList.remove('hidden');
	} else if (skin_selected_id === '2') {
		img__bro.classList.remove('hidden');
	} else if (skin_selected_id === '3') {
		img__cosplayer.classList.remove('hidden');
	} else if (skin_selected_id === '4') {
		img__miner.classList.remove('hidden');
	} else if (skin_selected_id === '5') {
		img__maid.classList.remove('hidden');
	} else if (skin_selected_id === '6') {
		img__businessMan.classList.remove('hidden');
	}
}
/*----------------- counters -----------------*/

let count = document.getElementById("coinsCount");
const coin = document.getElementById("clickCoin");
let num = 0;

if (localStorage.getItem('clicks')) {
	let storedNum = Number(localStorage.getItem('clicks'));
	if (!isNaN(storedNum)) {
		num = storedNum;
	} else {
		num = 0;
	}
} else {
	num = 0;
}
count.innerHTML = num;
lvlCounter(num);
let all_clicks = Number(localStorage.getItem('all_clicks'));
localStorage.getItem(all_clicks);
coin.addEventListener("click", counter);
coin.addEventListener("click", () => lvlCounter(num));

function counter() {
	event.preventDefault();
	all_clicks += 1

	if (localStorage.getItem('skin') === '1') {
		count.innerHTML = ++num;
	} else if (localStorage.getItem('skin') === '2') {
		num += 5;
		count.innerHTML = num;
	} else if (localStorage.getItem('skin') === '3') {
		num += 15;
		count.innerHTML = num;
	} else if (localStorage.getItem('skin') === '4') {
		num += 30;
		count.innerHTML = num;
	} else if (localStorage.getItem('skin') === '5') {
		num += 60;
		count.innerHTML = num;
	} else if (localStorage.getItem('skin') === '6') {
		num += 150;
		count.innerHTML = num;
	}
	localStorage.setItem('clicks', num);

	update_bal();
}

let maxlvl = localStorage.getItem('maxlvl') || '1 LVL';

function lvlCounter(num) {
	const levels = [
		{ max: 500, text: '1 LVL' },
		{ max: 2000, text: '2 LVL' },
		{ max: 5000, text: '3 LVL' },
		{ max: 10000, text: '4 LVL' },
		{ max: 25000, text: '5 LVL' },
		{ max: 40000, text: '6 LVL' },
		{ max: 65000, text: '7 LVL' },
		{ max: 85000, text: '8 LVL' },
		{ max: 110000, text: '9 LVL' },
		{ max: 150000, text: '10 LVL' },
		{ max: Infinity, text: 'MAX LVL' }
	];

	let currentLvl = '1 LVL';

	for (const level of levels) {
		if (num < level.max) {
			currentLvl = level.text;
			break;
		}
	}

	const lvlElement = document.querySelector('.lvl');
	lvlElement.textContent = currentLvl;

	let savedMaxLvl = localStorage.getItem('maxlvl') || '1 LVL';
	if (currentLvl !== savedMaxLvl) {
		if (levels.find(level => level.text === currentLvl).max > levels.find(level => level.text === savedMaxLvl).max) {
			localStorage.setItem('maxlvl', currentLvl);
			savedMaxLvl = currentLvl;
		}
	}

	console.log('Монеток:', num, '| Уровень:', currentLvl);
}

/*----------------- stats  -----------------*/
let time__stats = document.getElementById('time__stats');
let money__stats = document.getElementById('money__stats');

localStorage.getItem("maxMoney")

window.onload = () => {
	maxlvl = localStorage.getItem('maxlvl') || '1 LVL';
	document.getElementById('LVL__stats').textContent = maxlvl;
};

function formatTimeUnit(unit) {
	return unit < 10 ? '0' + unit : unit;
}

function startTimer() {
	let seconds = parseInt(localStorage.getItem('timer')) || 0;
	setInterval(() => {
		seconds++;
		localStorage.setItem('timer', seconds);

		let hours = Math.floor(seconds / 3600);
		let minutes = Math.floor((seconds % 3600) / 60);
		let secs = seconds % 60;

		time__stats.textContent = `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(secs)}`;
	}, 1000);
}

function updateStats() {
	setInterval(() => {
		localStorage.setItem('all_clicks', all_clicks);
		clicks__stats.textContent = all_clicks;
		let maxlvl = localStorage.getItem('maxlvl') || '1 LVL';
		LVL__stats.textContent = maxlvl;

		function updateMaxMoney(num) {
			let maxMoney = parseInt(localStorage.getItem("maxMoney")) || 0;

			if (num > maxMoney) {
				money__stats.textContent = num;
				localStorage.setItem("maxMoney", num);
			} else {
				money__stats.textContent = maxMoney;
			}
		}
		updateMaxMoney(num)
	}, 100);
}


updateStats();
startTimer();

/*----------------- reset  -----------------*/

let reset_btn = document.getElementById('res__progress');
let conf_reset = document.getElementById('reset_text');
let form_reset = document.getElementById('reset_form');
let input_reset = document.getElementById('reset_input');
let clicks_reset = 0;

reset_btn.addEventListener("click", confirmReset);
function confirmReset() {
	if (clicks_reset == 0) {
		conf_reset.textContent = "ТОЧНО??";
		clicks_reset = 1;
		console.log(clicks_reset);
	} else if (clicks_reset == 1) {
		conf_reset.textContent = "ВСЁ ОБДУМАЛ???";
		clicks_reset = 2;
	} else if (clicks_reset == 2) {
		form_reset.classList.remove('hidden');
		conf_reset.textContent = "СБРОСИТЬ";
		console.log(form_reset);
		if (input_reset.value === "reset") {
			input_reset.readOnly = true;
			input_reset.value = "Идёт сброс...";
			localStorage.clear();
			input_reset.value = "Успешно!";
			window.location.reload();
		}
		else {
			console.log("не, не сбросился");
		}
	}
}

/*----------------- promo  -----------------*/

let promoInput = document.getElementById('promocode__wind');
let promoSubmit = document.getElementById('promo__submit');
let correct = document.getElementById('correctPromo');
let incorrect = document.getElementById('incorrectPromo');
let entered = document.getElementById('enteredPromo')

let single_promo = [
	{ 'promo': 'vorkos', 'clicks': 500},
	{ 'promo': 'vladmayo', 'clicks': 1000},
	{ 'promo': 'wetwix', 'clicks': 1000},
	{ 'promo': 'A5Mine', 'clicks': 1000},
	{ 'promo': 'RELEASE!', 'clicks': 2000},
	{ 'promo': 'SergoIndustries', 'clicks': 2500 },
	{ 'promo': 'SDFMVBK8AB2M', 'clicks': 2500},
	{ 'promo': 'SDFASVSSSGGD', 'clicks': 2500},
	{ 'promo': 'ASKJLFNMVSAL', 'clicks': 2500},
	{ 'promo': '394028NVSKKL', 'clicks': 2500},
	{ 'promo': 'SZJGFLN7QNMF', 'clicks': 2500},
	{ 'promo': 'FDVH8ASNVFLS', 'clicks': 2500},
	{ 'promo': 'SAGJIO6732HM', 'clicks': 2500},
]
if (!localStorage.getItem('singlePromo')) {
	localStorage.setItem('singlePromo', JSON.stringify(single_promo));
}
if (!localStorage.getItem('usedPromo')) {
	localStorage.setItem('usedPromo', JSON.stringify([]));
}
promoSubmit.addEventListener("click", promocodes);

function promocodes() {
	const enteredPromo = promoInput.value.trim();
	let storedPromos = JSON.parse(localStorage.getItem('singlePromo'));
	let usedPromos = JSON.parse(localStorage.getItem('usedPromo'));
	if (!usedPromos) {
		usedPromos = [];
	}
	if (usedPromos.includes(enteredPromo)) {
		console.log('Этот промокод уже был введён');
		incorrect.classList.add('hide');
		correct.classList.add('hide');
		entered.classList.remove('hide');
		return;
	}
	let promoIndex = storedPromos.findIndex(promoObj => promoObj.promo === enteredPromo);
	if (promoIndex !== -1) {
		let promo = storedPromos[promoIndex];
		console.log('Промокод найден:', promo);
		if (promo.clicks && !isNaN(promo.clicks)) {
			storedPromos.splice(promoIndex, 1);
			localStorage.setItem('singlePromo', JSON.stringify(storedPromos));
			usedPromos.push(enteredPromo);
			localStorage.setItem('usedPromo', JSON.stringify(usedPromos));
			num += promo.clicks;
			console.log('Монеты успешно добавлены:', promo.clicks, 'Текущий баланс:', num);
			localStorage.setItem('clicks', num);
			count.innerHTML = num;
			correct.classList.remove('hide');
			incorrect.classList.add('hide');
			entered.classList.add('hide');
		}
	} else {
		console.log('INCORRECT');
		incorrect.classList.remove('hide');
		correct.classList.add('hide');
		entered.classList.add('hide');

	}
}
