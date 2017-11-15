//console.log("Up and running!");

//var cards = ["queen", "queen", "king", "king"];
var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"	
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"	
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"	
	},
	{
	rank: "king",
	suit: "diamons",
	cardImage: "images/king-of-diamonds.png"	
	}
];
var cardsInPlay = [];
var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}

};

var flipcard = function (cardId) {
		cardsInPlay.push(cards[cardId].rank);

			console.log ("User flipped " + cards[cardId].rank);
			console.log(cards[cardId].cardImage);
			console.log(cards[cardId].suit);
			
			



			if (cardsInPlay.length === 2) {
				checkForMatch();
			//if (cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!")} else {alert("Sorry, try again.")};
			};	
};

flipcard(0);
flipcard(2);





