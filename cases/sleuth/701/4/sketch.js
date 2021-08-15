/*

Officer: 6219282
CaseNum: 701-3-78304118-6219282

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from nicole ashely.
All they need is for you to do the detective work.

This time you must implement two functions:

- A testProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A getSuspectMatch function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - function getSuspectMatch(){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They were wearing a black hoodie. I'm not quite sure. It was very dark and I could barely see, The person I saw was male. I'll never forget their blue eyes. They wore very thick glasses. They were fairly tall, I think between a height of 176 and 200 cm. Their expression seemed empty. They had thin blond hair. They seemed to be between the age of 28 and 45 years old. It's so hard to remember right now. They brobably weigh between 58 and 81 kg. I hope I never have to go through that again. 

*/

var usualSuspects = [
	{ 
		"name": "TAMICA DEAUVILLE",
		"glasses": "blue",
		"hair": "white",
		"expression": "menacing",
		"eyes": "grey",
		"age": 33,
		"weight": 84,
		"height": 185
	},
	{ 
		"name": "JACQUELINE WILLMAR",
		"glasses": "thin metallic",
		"hair": "long white",
		"expression": "sad",
		"eyes": "pale",
		"age": 43,
		"weight": 73,
		"height": 177
	},
	{ 
		"name": "LINETTE CROME",
		"glasses": "very thin",
		"hair": "thick black",
		"expression": "confused",
		"eyes": "blue",
		"age": 35,
		"weight": 73,
		"height": 177
	},
	{ 
		"name": "SUMMER GOODBURY",
		"glasses": "red",
		"hair": "shaved",
		"expression": "nerveous",
		"eyes": "black",
		"age": 40,
		"weight": 74,
		"height": 185
	},
	{ 
		"name": "RANDEE JACQUELIN",
		"glasses": "dark brown",
		"hair": "short black",
		"expression": "angry",
		"eyes": "green",
		"age": 38,
		"weight": 93,
		"height": 175
	},
	{ 
		"name": "JULIANA JENI",
		"glasses": "black",
		"hair": "dark brown",
		"expression": "depressed",
		"eyes": "pale",
		"age": 33,
		"weight": 79,
		"height": 170
	},
	{ 
		"name": "MAJORIE PEGORD",
		"glasses": "very thick",
		"hair": "thin blond",
		"expression": "empty",
		"eyes": "blue",
		"age": 32,
		"weight": 66,
		"height": 197
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}


function testProperties(suspectObj)
{
	var counter = 0;
	if (suspectObj.eyes == 'blue')
	{
		counter++;
	};
	if (suspectObj.glasses == 'very thick')
	{
		counter++;
	};
	if (suspectObj.height >= 176 && suspectObj.height <= 200)
	{
		counter++;
	};
	if (suspectObj.expression == 'empty')
	{
		counter++;
	};
	if (suspectObj.hair == 'thin blond')
	{
		counter++;
	};
	if (suspectObj.age >= 28 && suspectObj.age <= 45)
	{
		counter++;
	};
	if (suspectObj.weight >= 58 && suspectObj.weight <= 81)
	{
		counter++;
	};
	return counter
}


function getSuspectMatch()
{
	suspects = []
	for (let i = 0; i < usualSuspects.length; i++)
	{
		counter = testProperties(usualSuspects[i])
		suspects.push([usualSuspects[i], counter])
		// if (counter == 6) { return usualSuspects[i] }
	}
	
	max = [{}, 0]
	for (let i = 0; i < suspects.length; i++)
	{
		if (suspects[i][1] > max[1])
		{
			max = suspects[i]
		}
	}
	return max[0]
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(getSuspectMatch().name + " is guilty!", 60, 80);
}
