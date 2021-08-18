/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 6219282
CaseNum: 802-2-41080300-6219282

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in handToWin from the deck and store it in the hand array.

*Write a function called winning_hand_set and call it from setup.
*We need to be quick so our ruse isn’t spotted. Make sure you use a nested for loop and the break statement in the inner loop when you find a match in the deck.
*When you find a card in the deck that matches one in handToWin add it to the handArray. Then break and search for the next card.

*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 7 and end at 80.
*Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var deck = [{"card_suit":"Spades","number":"A"},{"card_suit":"Spades","number":"2"},{"card_suit":"Spades","number":"3"},{"card_suit":"Spades","number":"4"},{"card_suit":"Spades","number":"5"},{"card_suit":"Spades","number":"6"},{"card_suit":"Spades","number":"7"},{"card_suit":"Spades","number":"8"},{"card_suit":"Spades","number":"9"},{"card_suit":"Spades","number":"10"},{"card_suit":"Spades","number":"J"},{"card_suit":"Spades","number":"Q"},{"card_suit":"Spades","number":"K"},{"card_suit":"Clubs","number":"A"},{"card_suit":"Clubs","number":"2"},{"card_suit":"Clubs","number":"3"},{"card_suit":"Clubs","number":"4"},{"card_suit":"Clubs","number":"5"},{"card_suit":"Clubs","number":"6"},{"card_suit":"Clubs","number":"7"},{"card_suit":"Clubs","number":"8"},{"card_suit":"Clubs","number":"9"},{"card_suit":"Clubs","number":"10"},{"card_suit":"Clubs","number":"J"},{"card_suit":"Clubs","number":"Q"},{"card_suit":"Clubs","number":"K"},{"card_suit":"Hearts","number":"A"},{"card_suit":"Hearts","number":"2"},{"card_suit":"Hearts","number":"3"},{"card_suit":"Hearts","number":"4"},{"card_suit":"Hearts","number":"5"},{"card_suit":"Hearts","number":"6"},{"card_suit":"Hearts","number":"7"},{"card_suit":"Hearts","number":"8"},{"card_suit":"Hearts","number":"9"},{"card_suit":"Hearts","number":"10"},{"card_suit":"Hearts","number":"J"},{"card_suit":"Hearts","number":"Q"},{"card_suit":"Hearts","number":"K"},{"card_suit":"Diamonds","number":"A"},{"card_suit":"Diamonds","number":"2"},{"card_suit":"Diamonds","number":"3"},{"card_suit":"Diamonds","number":"4"},{"card_suit":"Diamonds","number":"5"},{"card_suit":"Diamonds","number":"6"},{"card_suit":"Diamonds","number":"7"},{"card_suit":"Diamonds","number":"8"},{"card_suit":"Diamonds","number":"9"},{"card_suit":"Diamonds","number":"10"},{"card_suit":"Diamonds","number":"J"},{"card_suit":"Diamonds","number":"Q"},{"card_suit":"Diamonds","number":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var handToWin = [{"type":"Spades","v":"K"},{"type":"Spades","v":"10"},{"type":"Clubs","v":"K"},{"type":"Hearts","v":"Q"},{"type":"Diamonds","v":"K"}];
var hand =[];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	random_nums = shuffleSeed()
	shuffleDeck(random_nums)
	//call your winning_hand_set function here
	winning_hand_set()
}

//write your winning_hand_set function here
function winning_hand_set()
{
	for (let i = 0; i < deck.length; i++)
	{
		for (let j = 0; j < handToWin.length; j++)
		{
			if (handToWin[j].type == deck[i].card_suit && handToWin[j].v == deck[i].number)
			{
				hand.push(deck[i])
				break
			}
		}
	}
}
//write your shuffleSeed() function here.
function shuffleSeed()
{
	var arr = [];
	for (let i = 0; i < 52; i++)
	{
		arr.push(round(random(7, 80)))
	}
	return arr
}
/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < deck.length; j++)
	   {
		  var tempCard = deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.number == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
