console.log("Up and running!");


let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length == 2 && cardsInPlay[0] == cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("sorry try again")
	}
}

function flipCard(cardId) {
	console.log("user flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank)
	checkForMatch();
}


let cards = [
	{
		rank:'queen',
		suit:'hearts',
		cardImage:'images/queen-of-hearts.png'
	},
	{
		rank:'queen',
		suit:'diamonds',
		cardImage:'images/queen-of-diamonds.png'
	},
	{
		rank:'king',
		suit:'hearts',
		cardImage:'images/king-of-hearts.png'
	},
	{
		rank:'king',
		suit:'diamonds',
		cardImage:'images/king-of-diamonds.png'
	}
];


// function checkForMatch () {
// 	this.setAttribute(src, cards.cardImage)
// 	if (cards[0] === cards[1] || cards[2] === cards[3]) {
// 		alert("You found a match!");
// 	} else{
// 		alert("Sorry, try again.");
// 	}
// }



// function flipCard () {
// 	let cardId = this.getAttribute('data-id', i);
// 	let cardsInPlay = []

// 	let selectedCard = cards[i]; // this.cards[cardId] ??
// 	cardsInPlay.push(selectedCard);
// 	console.log("User flipped " + selectedCard);
// 	console.log(selectedCard.cardImage);
// 	checkForMatch();
// }


// function createBoard () {
// let gameBoard = document.getElementById('game-board')

// 	for (let i = 0; i < cards.length; i++){
// 		let cardElement = document.createElement('img');
// 		cardElement.setAttribute('backOfCards', 'images/back.png');
// 		cardElement.setAttribute('data-id', i);
// 		cardElement.addEventListener('click', flipCard); 
// 		gameBoard.appendChild(cardElement);
// 	}
// 	console.log(createBoard());
// }


// function shuffle(cards) {
//     for (let i = cards.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [cards[i], cards[j]] = [cards[j], cards[i]];
//     }
//     return cards;
// }

