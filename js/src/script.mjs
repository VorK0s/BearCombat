"use strict"
let img__default = document.getElementById('img__default');
let img__bro = document.getElementById('img__bro');

set_visual_skin();

let shop = document.getElementById('shop');
let tasks = document.getElementById('tasks');
let promo = document.getElementById('promo');

let btnExit = document.getElementById('btnExit');
let btnExit2 = document.getElementById('btnExit2');
let btnExit3 = document.getElementById('btnExit3');

let windShop = document.getElementById('shop__wind');
let windTasks = document.getElementById('tasks__wind');
let windPromo = document.getElementById('promo__wind');

shop.addEventListener("click", toggleShop);
btnExit.addEventListener("click", toggleShop); 
tasks.addEventListener("click", toggleTasks);
btnExit2.addEventListener("click", toggleTasks); 
promo.addEventListener("click", togglePromo);
btnExit3.addEventListener("click", togglePromo); 

function toggleShop() {
    img__default.classList.toggle("hide");
    img__bro.classList.toggle("hide");
    windShop.classList.toggle("hide");
}

function toggleTasks() {
    img__bro.classList.toggle("hide");
    img__default.classList.toggle("hide");
    windTasks.classList.toggle("hide");
}

function togglePromo() {
	img__default.classList.toggle("hide");
    img__bro.classList.toggle("hide");
    windPromo.classList.toggle("hide");
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
	// Устанавливает внешний вид выбранного скина медведя
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

num = Number(localStorage.getItem('clicks'));
count.innerHTML = num;
lvlCounter(num);

coin.addEventListener("click", counter);
coin.addEventListener("click", () => lvlCounter(num));

function counter() {
	event.preventDefault();
	if (localStorage.getItem('skin') === '1') {
		count.innerHTML = ++num;
	} else if (localStorage.getItem('skin') === '2') {
		num = num + 5;
		count.innerHTML = num;
	} else if (localStorage.getItem('skin') === '3') {
		num = num + 15;
		count.innerHTML = num;
	} else if (localStorage.getItem('skin') === '4') {
		num = num + 30;
		count.innerHTML = num;
	} else if (localStorage.getItem('skin') === '5') {
		num = num + 60;
		count.innerHTML = num;
	} else if (localStorage.getItem('skin') === '6') {
		num = num + 150;
		count.innerHTML = num;
	}
	localStorage.setItem('clicks', num);
	update_bal();
}

function lvlCounter(num) {
	let lvl = 0

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

	const lvlElement = document.querySelector('.lvl');

	for (const level of levels) {
		if (num < level.max) {
			lvlElement.textContent = level.text;
			lvl = level.text
			break
		}
	}

	console.log( 'Монеток:', num, '| Уровень:', lvl )
}

/*----------------- tasks  -----------------*/

let tasks1__week = document.getElementById('tasks1__week');
let tasks2__week = document.getElementById('tasks2__week');

let tasks1__day = document.getElementById('tasks1__day');
let tasks2__day = document.getElementById('tasks2__day');
let tasks3__day = document.getElementById('tasks3__day');
let tasks4__day = document.getElementById('tasks4__day');

let variant1__week = Math.floor(Math.random() * 7) + 1;
let variant2__week =  Math.floor(Math.random() * 7) + 1;

console.log(variant1__week, variant2__week)

check_variant__weeks();

function check_variant__weeks() {
	if (variant1__week == 1 || variant2__week == 1) {
		console.log("DEFAULT TASK | ОБЫЧНОЕ ЗАДАНИЕ 1500 МБ");
	}
	else if (variant1__week == 2 || variant2__week == 2) {
		console.log("DEFAULT TASK | ОБЫЧНОЕ ЗАДАНИЕ 1500 МБ");
	}
	else if (variant1__week == 3 || variant2__week == 3) {
		console.log("DEFAULT TASK | ОБЫЧНОЕ ЗАДАНИЕ 1500 МБ");
	}
	else if (variant1__week == 4 || variant2__week == 4) {
		console.log("DEFAULT TASK | ОБЫЧНОЕ ЗАДАНИЕ 1500 МБ");
	}
	else if (variant1__week == 5 || variant2__week == 5) {
		console.log("RARE TASK | РЕДКОЕ ЗАДАНИЕ 5500 МБ");
	}
	else if (variant1__week == 6 || variant2__week == 6) {
		console.log("RARE TASK | РЕДКОЕ ЗАДАНИЕ 5500 МБ");
	}
	else if (variant1__week == 7 || variant2__week == 7)  {
		console.log("LEGENDARY TASK | ЛЕГЕНДАРНОЕ ЗАДАНИЕ 15000 МБ");

	}
	else {
		console.log("ОШИБКА | Такого не существует");
	}
	if (variant2__week == 1) {
		console.log("DEFAULT TASK | ОБЫЧНОЕ ЗАДАНИЕ 1500 МБ");
	}
	else if (variant2__week == 2) {
		console.log("DEFAULT TASK | ОБЫЧНОЕ ЗАДАНИЕ 1500 МБ");
	}
	else if (variant2__week == 3) {
		console.log("DEFAULT TASK | ОБЫЧНОЕ ЗАДАНИЕ 1500 МБ");
	}
	else if (variant2__week == 4) {
		console.log("DEFAULT TASK | ОБЫЧНОЕ ЗАДАНИЕ 1500 МБ");
	}
	else if (variant2__week == 5) {
		console.log("RARE TASK | РЕДКОЕ ЗАДАНИЕ 5500 МБ");
	}
	else if (variant2__week == 6) {
		console.log("RARE TASK | РЕДКОЕ ЗАДАНИЕ 5500 МБ");
	}
	else if (variant2__week == 7)  {
		console.log("LEGENDARY TASK | ЛЕГЕНДАРНОЕ ЗАДАНИЕ 15000 МБ");

	}
	else {
		console.log("ОШИБКА | Такого не существует");
	}
}
