/*

Officer: 6219282
CaseNum: 701-1-94851954-6219282

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They were carrying a black duffle bag. I'm not quite sure. I'll never forget their blue eyes. It was very dark and I could barely see, They had dark brown hair. Their expression seemed depressed. They definately weigh less than 110 Kg. I would say they were shorter than 171 cm. That's all I know officer. 

*/

var suspectList = [
	{ 
		"name": "LAVERNE PORTOS",
		"eyes": "grey",
		"hair": "no",
		"accessory": "laptop bag",
		"height": 160,
		"weight": 69
	},
	{ 
		"name": "PIERRE CROME",
		"eyes": "black",
		"hair": "thick black",
		"accessory": "glass bottle",
		"height": 150,
		"weight": 73
	},
	{ 
		"name": "DRUSILLA DURANTS",
		"eyes": "blue",
		"hair": "dark brown",
		"accessory": "black duffle bag",
		"height": 165,
		"weight": 100
	},
	{ 
		"name": "JAUNITA DORCEY",
		"eyes": "pale",
		"hair": "shaved",
		"accessory": "red backpack",
		"height": 172,
		"weight": 78
	},
	{ 
		"name": "SUMMER OORIN",
		"eyes": "green",
		"hair": "long white",
		"accessory": "brown paper bag",
		"height": 205,
		"weight": 62
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
function checkSuspectTraits(suspectObj)
{
	if (
		suspectObj.accessory == "black duffle bag" &&
		suspectObj.eyes == "blue" &&
		suspectObj.hair == "dark brown" &&
		suspectObj.weight < 110 &&
		suspectObj.height < 171
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

  for(let i = 0 ; i < suspectList.length; i++){
    if(checkSuspectTraits(suspectList[i]) == true){
      fill(255,0,0);
      text(suspectList[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectList[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
