
console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = ["queen", "king"];

let cardOne = cards[0]

let cardTwo = cards[2]

cardsInPlay.push(cardOne)

cardsInPlay.push(cardOne)

if (cardsInPlay.length == 2 && cardsInPlay[0] == cardsInPlay[1]) {
	alert ("you've found a match")
} else {
	alert ("sorry try again")
}










// let cards = [
// {
// 	rank:'queen',
// 	suit:'hearts',
// 	cardImage:'images/queen-of-hearts.png'
// },
// {
// 	rank:'queen',
// 	suit:'diamonds',
// 	cardImage:'images/queen-of-diamonds.png'
// },
// {
// 	rank:'king',
// 	suit:'hearts',
// 	cardImage:'images/king-of-hearts.png'
// },
// {
// 	rank:'king',
// 	suit:'diamonds',
// 	cardImage:'images/king-of-diamonds.png'
// }
// ];


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












