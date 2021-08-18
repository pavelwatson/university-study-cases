/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 6219282
CaseNum: 802-3-12251414-6219282

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.
The card you are looking for is stored in the cut_here object. Cut the deck at this exact location and they will give up their secrets.

* Using a for loop search for the card represented by cut_here in the card_deck array.
* Do this in a function called deck_cut and call it from setup.
* We need to be quick to not be spotted. Make sure you use a for loop and the break statement when you find a match in the deck.
* Store the cut card and all the elements after from the card_deck array in the deckUptoCut array. Do this using the JavaScript splice() function
* You’ll then need to reverse the elements in deckUptoCut so that the card we cut the deck at is the last element and not the first. Unfortunatly, if we use the JavaScript inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. Do this in the deck_cut after you have filled deckUptoCut.


*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 7 and end at 53.
Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

*/

var card_deck = [{"type":"Spades","value":"A"},{"type":"Spades","value":"2"},{"type":"Spades","value":"3"},{"type":"Spades","value":"4"},{"type":"Spades","value":"5"},{"type":"Spades","value":"6"},{"type":"Spades","value":"7"},{"type":"Spades","value":"8"},{"type":"Spades","value":"9"},{"type":"Spades","value":"10"},{"type":"Spades","value":"J"},{"type":"Spades","value":"Q"},{"type":"Spades","value":"K"},{"type":"Clubs","value":"A"},{"type":"Clubs","value":"2"},{"type":"Clubs","value":"3"},{"type":"Clubs","value":"4"},{"type":"Clubs","value":"5"},{"type":"Clubs","value":"6"},{"type":"Clubs","value":"7"},{"type":"Clubs","value":"8"},{"type":"Clubs","value":"9"},{"type":"Clubs","value":"10"},{"type":"Clubs","value":"J"},{"type":"Clubs","value":"Q"},{"type":"Clubs","value":"K"},{"type":"Hearts","value":"A"},{"type":"Hearts","value":"2"},{"type":"Hearts","value":"3"},{"type":"Hearts","value":"4"},{"type":"Hearts","value":"5"},{"type":"Hearts","value":"6"},{"type":"Hearts","value":"7"},{"type":"Hearts","value":"8"},{"type":"Hearts","value":"9"},{"type":"Hearts","value":"10"},{"type":"Hearts","value":"J"},{"type":"Hearts","value":"Q"},{"type":"Hearts","value":"K"},{"type":"Diamonds","value":"A"},{"type":"Diamonds","value":"2"},{"type":"Diamonds","value":"3"},{"type":"Diamonds","value":"4"},{"type":"Diamonds","value":"5"},{"type":"Diamonds","value":"6"},{"type":"Diamonds","value":"7"},{"type":"Diamonds","value":"8"},{"type":"Diamonds","value":"9"},{"type":"Diamonds","value":"10"},{"type":"Diamonds","value":"J"},{"type":"Diamonds","value":"Q"},{"type":"Diamonds","value":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var cut_here = {"cardSuit":"Hearts","n":"2"};
var deckUptoCut = [];

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
	//call your deck_cut function here
	deck_cut()
}

//write your deck_cut function here
function deck_cut()
{
	for (let i = 0; i < card_deck.length; i++)
	{
		if (cut_here.cardSuit == card_deck[i].type && cut_here.n == card_deck[i].value)
		{
			deckUptoCut = card_deck.splice(i)
			deckUptoCut.push(deckUptoCut.shift())
			break
		}
	}
}
//write your shuffleSeed() function here.
function shuffleSeed()
{
	var arr = [];
	for (let i = 0; i < 52; i++)
	{
		arr.push(round(random(7, 53)))
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
	   for (var j = 0; j < card_deck.length; j++)
	   {
		  var tempCard = card_deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          card_deck.splice(newLoc, 0, tempCard[0]);
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
		if(i < deckUptoCut.length)
		{
			drawCard(deckUptoCut[i], 880 + i * 18, 750);
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
			if (card.value == values[j] && card.type == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
