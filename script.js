
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let arrOfNames = ['cell-php','cell-java','cell-js','cell-Cplusplus',
'cell-ruby', 'cell-python', 'cell-swift'];

let roulettes = document.querySelectorAll('.roulette');

let id1 = document.querySelector('#first-roulette');

let times  = 0;
function round (goal) {
  if (times > 20 && id1.children[1].className.split(' ')[1] == goal)  {
  	clearInterval(rotate);
  	times = 0;
  	return;
  }
	let z = id1.children[id1.children.length-1];
	id1.insertAdjacentElement('afterbegin',z);
	times++;
}

function choose () {
	let center = arrOfNames[getRandomIntInclusive(0, 6)];
		while (id1.children[1].className.split(' ')[1] !== center) {
if (id1.children[1].className.split(' ')[1] == center) {
			clearInterval(rotate);
		break;
	}
	}
}

let rotate;

function go () {
	let center = arrOfNames[getRandomIntInclusive(0, 6)];
	rotate = setInterval(()=>round(center),25);
	}



