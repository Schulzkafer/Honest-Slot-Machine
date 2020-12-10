function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
	}

// let arrOfNames = ['zeroF','oneF','twoF','threeF',
// 'fourF', 'fiveF', 'sixF', 'sevenF', 'eightF', 'nineF', 'tenF', 'elevenF', 
// 'twelveF', 'thirteenF', 'thorteenF', 'fifteenF', 'sixteenF', 'seventeenF', 
// 'eighteenF', 'nineteenF', 'twentyF', 'twentyOneF', 'twentyTwoF', 
// 'twentyThreeF', 'twentyFourF', 'twentySixF', 'twentySevenF', 'twentyEightF',
// 'twentyNineF', 'thirtyF', 'thirtyOneF', 'thirtyTwoF','thirtyThreeF',
// 'thirtyFourF','thirtyFiveF'];
let arrOfNames = ['zeroF','oneF','twoF','threeF',
'fourF', 'fiveF', 'sixF', 'sevenF'];
let roulettes = document.querySelectorAll('.roulette');

let rotate;
let times  = 0;
let numOfroulette = 1;
let minusOrNot = 1;


function round (goal, obj) {
	if (times > 20 && obj.children[1].className.split(' ')[2] == goal)  {
		clearInterval(rotate);
		times = 0;
		if (numOfroulette < 5) {
			minusOrNot++;
			go(roulettes[numOfroulette]);
			numOfroulette++;
		} else {
			minusOrNot = 1;
			numOfroulette = 1;
			bigButton.removeAttribute("disabled");
			allLinesButtons.map(x=>x.removeAttribute('disabled'));
			if (chosenLine == 1) {
				verifyFirst()
			} else if (chosenLine == 3) {
				verifyFirst();
				verifySecond();
				verifyThird();
			} else {
				allLinesButtons.map(x=>x.removeAttribute('disabled'));
			}
		}
		return;
	}
	let z = obj.children[obj.children.length-1];
	obj.insertAdjacentElement('afterbegin',z);
	times++;
}

function go (object) {
	//victoryArr = [];
	(Array.from(allLines)).map(x=>x.style.visibility = 'hidden');
	if (bigButton.value == "TAKE") {
		calculate();
		return;
	}
	if (creditNumber.innerHTML - betNumber.innerHTML < 0 && minusOrNot == 1) {
		threeLinesButton.setAttribute("disabled", "disabled");
		bigButton.setAttribute("disabled", "disabled");
		return;
	} else if (minusOrNot == 1) {
		creditNumber.innerHTML = creditNumber.innerHTML - betNumber.innerHTML;
	}
	let center = arrOfNames[getRandomIntInclusive(0, 7)];
	allLinesButtons.map(x=>x.setAttribute("disabled", "disabled"));
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
	if (sumOfCells > 2) {
		victoryLine('#lineOne', sumOfCells, necessaryClass);
		return sumOfCells;
	}
	sumOfCells = 1;
	necessaryClass = topLine[4].className.split(' ')[1];
	for (let k = 3; k > -1; k--) {
		if (necessaryClass == topLine[k].className.split(' ')[1]) {
			sumOfCells++; 
		} else {
			break;
		}
	}
	if ( sumOfCells > 2) {
		victoryLine('#lineOne', sumOfCells, necessaryClass);
		return sumOfCells;
	}
	victoryLine(0,0);
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
	if (sumOfCells > 2) {
		victoryLine('#lineTwo', sumOfCells, necessaryClass);
		return (sumOfCells);
	}
	sumOfCells = 1;
	necessaryClass = topLine[4].className.split(' ')[1];
	for (let k = 3; k > -1; k--) {
		if (necessaryClass == topLine[k].className.split(' ')[1]) {
			sumOfCells++; 
		} else {
			break;
		}
	}
	if ( sumOfCells > 2) {
		victoryLine('#lineTwo', sumOfCells, necessaryClass);
		return sumOfCells;
	}
	victoryLine(0,0);
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
	if (sumOfCells > 2) {
		victoryLine('#lineThree', sumOfCells, necessaryClass);
		return (sumOfCells);
	}
	sumOfCells = 1;
	necessaryClass = topLine[4].className.split(' ')[1];
	for (let k = 3; k > -1; k--) {
		if (necessaryClass == topLine[k].className.split(' ')[1]) {
			sumOfCells++; 
		} else {
			break;
		}
	}
	if ( sumOfCells > 2) {
		victoryLine('#lineThree', sumOfCells, necessaryClass);
		return sumOfCells;
	}
	victoryLine(0,0);
}

let victoryArr = [];

function victoryLine (numbOfLine, numbOfcells, necessaryClass) {

	victoryArr.push([numbOfLine, numbOfcells, necessaryClass]);

	if (chosenLine == 1) {
		victoryArr = [];

		if (numbOfLine) {
			allLinesButtons.map(x=>x.setAttribute('disabled','disabled'));
			document.querySelector(numbOfLine).style.visibility = 'visible';
			showPrize(numbOfcells, necessaryClass);
			bigButton.value = 'TAKE';
		}
	} else if (chosenLine == 3) {
if (victoryArr.length == 3) {  //////////////////  && если есть хотя бы одно зачение не нулевое, то отправляем на подсчет. подсчет можно производить прямо из drawlines, то есть из drawlines передавать значения в нужное время в showPrize
	
	drawLines();
}
} 
}


let winSum = 0;
function showPrize(numbOfcells, necessaryClass) {

	switch (necessaryClass) {
		case 'cell-php':
		if (numbOfcells == 3) {
			winSum += 2;
		} else if (numbOfcells == 4) {
			winSum += 3;
		} else if (numbOfcells == 5) {
			winSum += 10;
		}
		break;
		case 'cell-ruby':
		if (numbOfcells == 3) {
			winSum += 3;
		} else if (numbOfcells == 4) {
			winSum += 5;
		} else if (numbOfcells == 5) {
			winSum += 20;
		}
		break;
		case 'cell-swift':
		if (numbOfcells == 3) {
			winSum += 5;
		} else if (numbOfcells == 4) {
			winSum += 10;
		} else if (numbOfcells == 5) {
			winSum += 50;
		}
		break;
		case 'cell-java':
		if (numbOfcells == 3) {
			winSum += 10;
		} else if (numbOfcells == 4) {
			winSum += 30;
		} else if (numbOfcells == 5) {
			winSum += 100;
		}
		break;
	}
	let tempSum = winSum * (betNumber.innerHTML / chosenLine);
	document.querySelector('#lines-word').innerHTML = "PRIZE";
	document.querySelector('#lines-number').innerHTML = tempSum;
}


function drawLines () {
	bigButton.setAttribute("disabled", "disabled");
	allLinesButtons.map(x=>x.setAttribute('disabled', "disabled"));
	let timeWait = 200;
	if (victoryArr[0][0]) {
		setTimeout(()=>{document.querySelector(victoryArr[0][0]).style.visibility = 'visible';
			showPrize(victoryArr[0][1], victoryArr[0][2])
		}, timeWait);
		timeWait+=200;
	} 
	if (victoryArr[1][0]) {
		setTimeout(()=>{
			document.querySelector(victoryArr[1][0]).style.visibility = 'visible';
			showPrize(victoryArr[1][1], victoryArr[1][2])
		}, timeWait);
		timeWait+=200;
	} 
	if (victoryArr[2][0]) {
		setTimeout(()=>{document.querySelector(victoryArr[2][0]).style.visibility = 'visible';
			showPrize(victoryArr[2][1], victoryArr[2][2])}, timeWait);
		timeWait+=200;
	}
	
	setTimeout(()=>{
		if (timeWait > 200) {
			bigButton.value = 'TAKE';
		} 
		bigButton.removeAttribute("disabled");
		allLinesButtons.map(x=>x.removeAttribute('disabled'));
		victoryArr = [];
	}, timeWait+10);

}

function calculate() {
	allLinesButtons.map(x=>x.removeAttribute('disabled'));
	bigButton.value = 'START';
	winSum = 0;
	creditNumber.innerHTML = +creditNumber.innerHTML + +document.querySelector('#lines-number').innerHTML;
	document.querySelector('#lines-word').innerHTML = "LINES";
	document.querySelector('#lines-number').innerHTML = chosenLine;

	Array.from(allLines).map(x=>x.style.visibility = "hidden");
}



let allLines = document.querySelectorAll('.linesExtended');
let oneLineButton = document.querySelector('#one-line-button');
let threeLinesButton = document.querySelector('#three-lines-button');
let allLinesButtons = [oneLineButton,threeLinesButton];
allLinesButtons.map(x=> {
	x.removeEventListener('click', chooseLine);
	x.addEventListener('click', chooseLine);
})




let hideLinesTimer;
let chosenLine = 3;
document.getElementById('lines-number').innerHTML = 3;

function chooseLine (event) {
	if (creditNumber.innerHTML >= 3 && threeLinesButton.hasAttribute("disabled"))  {
		threeLinesButton.removeAttribute("disabled", "disabled");
		bigButton.removeAttribute("disabled", "disabled");
	}

	if (hideLinesTimer) clearTimeout(hideLinesTimer);
	(Array.from(allLines)).map(x=>x.style.visibility = 'hidden');
	if (event.target == oneLineButton) {
		document.querySelector('#lineOne').style.visibility = 'visible';
		chosenLine = 1; 
		document.getElementById('lines-number').innerHTML = 1;
		showBet();
	}
	if (event.target == threeLinesButton) {
		document.querySelector('#lineOne').style.visibility = 'visible';
		document.querySelector('#lineTwo').style.visibility = 'visible';
		document.querySelector('#lineThree').style.visibility = 'visible';
		chosenLine = 3; 
		document.getElementById('lines-number').innerHTML = 3;
		showBet();
	}
	hideLinesTimer = setTimeout( ()=> {
		(Array.from(allLines)).map(x=>x.style.visibility = 'hidden');
	},3000)
} 

let creditNumber = document.querySelector('#credit-number');
let betNumber = document.querySelector('#bet-number');
creditNumber.innerHTML = 100;

let betPoint = 1;

function showBet() {
	betNumber.innerHTML = chosenLine * betPoint;
	if (+betNumber.innerHTML > +creditNumber.innerHTML) {
		if (+chosenLine > +creditNumber.innerHTML && chosenLine > 1) {
			chosenLine -=2;
		document.getElementById('lines-number').innerHTML -= 2;
		threeLinesButton.setAttribute("disabled", "disabled");
	}
	betPoint = 1;
	showBet();
	} else {
		bigButton.removeAttribute("disabled", "disabled");
	}


}
showBet();

let betButton = document.querySelector('#bet-button');
betButton.addEventListener('click', moreBet);

function moreBet () {
	if (creditNumber.innerHTML >= 3 && threeLinesButton.hasAttribute("disabled"))  {
		threeLinesButton.removeAttribute("disabled", "disabled");
		bigButton.removeAttribute("disabled", "disabled");
	}

	// if (creditNumber.innerHTML >= 1 && document.querySelector('#lines-number').innerHTML == 1 && bigButton.hasAttribute("disabled"))  {
	// 	//oneLineButton.removeAttribute("disabled", "disabled");
	// 	bigButton.removeAttribute("disabled", "disabled");
	// }


	if (chosenLine * betPoint > creditNumber.innerHTML)   
		console.log(chosenLine)
	console.log(betPoint)

	if (betPoint < 10) {
	//if (!checkBetForOne(betNumber.innerHTML,1)) break;
	betPoint = +betPoint + 1;
} else if (betPoint < 50) {
		//if (!checkBetForOne(betNumber.innerHTML,5)) break;
		betPoint = +betPoint + 5;
	} else if (betPoint < 90) {
	//	if (!checkBetForOne(betNumber.innerHTML,10)) break;
	betPoint = +betPoint + 10;
} else {
	betPoint = 1;
}
if (chosenLine * betPoint > creditNumber.innerHTML) betPoint = 1;
showBet();
}

//
// function checkBetForOne(a,b) {
// 		if ((+a + +b) > +creditNumber.innerHTML) {
// 		betNumber.innerHTML = 1;
// 		return 0;
// 	}
// 	return 1;
// }