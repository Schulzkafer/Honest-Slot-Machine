function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let arrOfNames = ['cell-php','cell-java','cell-js','cell-Cplusplus',
'cell-ruby', 'cell-python', 'cell-swift'];
let roulettes = document.querySelectorAll('.roulette');

let rotate;
let times  = 0;
let numOfroulette = 1;

function round (goal, obj) {
	if (times > 20 && obj.children[1].className.split(' ')[1] == goal)  {
		clearInterval(rotate);
		times = 0;
		if (numOfroulette < 5) {
			go (roulettes[numOfroulette])
			numOfroulette++;
		} else {
			numOfroulette = 1;
			bigButton.removeAttribute("disabled");
		}
		return;
	}
	let z = obj.children[obj.children.length-1];
	obj.insertAdjacentElement('afterbegin',z);
	times++;
}

function go (object) {
	let center = arrOfNames[getRandomIntInclusive(0, 6)];
	bigButton.setAttribute("disabled", "disabled");
	rotate = setInterval(()=>round(center, object),10);
}

let bigButton = document.querySelector('#big-button');
bigButton.addEventListener('click', go.bind(null, roulettes[0]))

function verifyFirst() {
	let topLine = [roulettes[0].children[1], roulettes[1].children[1], roulettes[2].children[1], roulettes[3].children[1], roulettes[4].children[1]];
let sumOfCells = 1;
let necessaryClass = topLine[0].className.split(' ')[1];

for (let i = 1; i < 5; i++) {
 if (necessaryClass == topLine[i].className.split(' ')[1]) {
  sumOfCells++; 
} else {
 break;
}
}
if (sumOfCells > 2) return (sumOfCells)
sumOfCells = 1;
necessaryClass = topLine[4].className.split(' ')[1];
for (let k = 4; k > -1; k--) {
	 if (necessaryClass == topLine[k].className.split(' ')[1]) {
  sumOfCells++; 
} else {
 break;
}
}
return ( sumOfCells > 2) ? sumOfCells : 0;
}

function verifySecond() {
	let topLine = [roulettes[0].children[0], roulettes[1].children[0], roulettes[2].children[0], roulettes[3].children[0], roulettes[4].children[0]];
let sumOfCells = 1;
let necessaryClass = topLine[0].className.split(' ')[1];

for (let i = 1; i < 5; i++) {
 if (necessaryClass == topLine[i].className.split(' ')[1]) {
  sumOfCells++; 
} else {
 break;
}
}
if (sumOfCells > 2) return (sumOfCells)
sumOfCells = 1;
necessaryClass = topLine[4].className.split(' ')[1];
for (let k = 4; k > -1; k--) {
	 if (necessaryClass == topLine[k].className.split(' ')[1]) {
  sumOfCells++; 
} else {
 break;
}
}
return ( sumOfCells > 2) ? sumOfCells : 0;
}

function verifyThird() {
	let topLine = [roulettes[0].children[2], roulettes[1].children[2], roulettes[2].children[2], roulettes[3].children[2], roulettes[4].children[2]];
let sumOfCells = 1;
let necessaryClass = topLine[0].className.split(' ')[1];

for (let i = 1; i < 5; i++) {
 if (necessaryClass == topLine[i].className.split(' ')[1]) {
  sumOfCells++; 
} else {
 break;
}
}
if (sumOfCells > 2) return (sumOfCells)
sumOfCells = 1;
necessaryClass = topLine[4].className.split(' ')[1];
for (let k = 3; k > -1; k--) {
	 if (necessaryClass == topLine[k].className.split(' ')[1]) {
  sumOfCells++; 
} else {
 break;
}
}
return ( sumOfCells > 2) ? sumOfCells : 0;
}




// console.log(roulettes[0].children[0])
// console.log(roulettes[1].children[0])
// console.log(roulettes[2].children[0])
// console.log(roulettes[3].children[0])
// console.log(roulettes[4].children[0])

