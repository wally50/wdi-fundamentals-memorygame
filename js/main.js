//console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}

};

var flipcard = function (cardId) {
		cardsInPlay.push(cards[cardId]);

			console.log ("User flipped " + cards[cardId]);
	

			if (cardsInPlay.length === 2) {
				checkForMatch();
			//if (cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!")} else {alert("Sorry, try again.")};
			};	
};

flipcard(0);
flipcard(2);





