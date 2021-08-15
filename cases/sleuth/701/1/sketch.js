/*

Officer: 6219282
CaseNum: 701-0-59250706-6219282

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist tamica phinney and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. It's so hard to remember right now. It was very dark and I could barely see, They were carrying a brown paper bag. They were wearing a black overcoat. The person I saw was female. Can I go home now Sir? 

*/

var lineupLog = [
	{ 
		"name": "TAMICA MYRLE",
		"coat": "black overcoat",
		"gender": "female",
		"accessory": "brown paper bag"
	},
	{ 
		"name": "MAJORIE GOODBURY",
		"coat": "green army coat",
		"gender": "female",
		"accessory": "orange plasic bag"
	},
	{ 
		"name": "DARBY ADVERSANE",
		"coat": "white fur coat",
		"gender": "female",
		"accessory": "black duffle bag"
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

// Declare your function here
function checkSuspect(suspectObj)
{
	if (
		suspectObj.coat == 'black overcoat' &&
		suspectObj.accessory == "brown paper bag" &&
		suspectObj.gender == 'female'
	)
	{
		return true
	}
	return false
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    if(checkSuspect(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
