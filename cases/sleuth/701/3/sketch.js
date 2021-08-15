/*

Officer: 6219282
CaseNum: 701-2-29565349-6219282

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from laverne portos. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They were fairly tall, I think between a height of 170 and 186 cm. They were wearing a black overcoat. They seemed to be between the age of 18 and 65 years old. It was so scary! They were carrying a plastic box. I'll never forget their brown eyes. They brobably weigh between 70 and 83 kg. They wore red glasses. I remember they had a ox tattoo. It was so scary! I hope I never have to go through that again. 

*/

var suspectList = [
	{ 
		"name": "TAMICA COURTWOOD",
		"accessory": "big black envelope",
		"tattoo": "facial",
		"eyes": "brown",
		"glasses": "very thin",
		"weight": 72,
		"age": 42,
		"height": 189
	},
	{ 
		"name": "HANG THAXTER",
		"accessory": "laptop bag",
		"tattoo": "anchor",
		"eyes": "blue",
		"glasses": "light tan",
		"weight": 92,
		"age": 25,
		"height": 164
	},
	{ 
		"name": "RANDEE PORTOS",
		"accessory": "plastic box",
		"tattoo": "ox",
		"eyes": "brown",
		"glasses": "red",
		"weight": 77,
		"age": 40,
		"height": 173
	},
	{ 
		"name": "MALINDA CROME",
		"accessory": "orange tote bag",
		"tattoo": "sword",
		"eyes": "pale",
		"glasses": "black",
		"weight": 53,
		"age": 39,
		"height": 184
	},
	{ 
		"name": "BRIDGET CASIMERE",
		"accessory": "orange plasic bag",
		"tattoo": "bull",
		"eyes": "blue",
		"glasses": "white",
		"weight": 93,
		"age": 39,
		"height": 178
	},
	{ 
		"name": "GAYLA BROADVIEW",
		"accessory": "brown paper bag",
		"tattoo": "big arrow",
		"eyes": "green",
		"glasses": "thin metallic",
		"weight": 70,
		"age": 38,
		"height": 173
	},
	{ 
		"name": "JULIANA WARMAN",
		"accessory": "metal briefcase",
		"tattoo": "chinese lettering",
		"eyes": "grey",
		"glasses": "dark brown",
		"weight": 69,
		"age": 32,
		"height": 174
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
// I remember walking down the street and then I saw them. They were fairly tall, I think between a height of 170 and 186 cm. They were wearing a black overcoat. They seemed to be between the age of 18 and 65 years old. It was so scary! They were carrying a plastic box. I'll never forget their brown eyes. They brobably weigh between 70 and 83 kg. They wore red glasses. I remember they had a ox tattoo. It was so scary! I hope I never have to go through that again. 
// "accessory": "plastic box",
// 		"tattoo": "ox",
// 		"eyes": "brown",
// 		"glasses": "red",
// 		"weight": 77,
// 		"age": 40,
// 		"height": 173
function testSuspect(suspectObj)
{
	var counter = 0;
	if (suspectObj.height >= 170 && suspectObj.height <= 186)
	{
		console.log(suspectObj.name)
		counter++;
	}
	if (suspectObj.age >= 18 && suspectObj.age <= 65)
	{
		console.log(suspectObj.name)
		counter++;
	}
	if (suspectObj.accessory == "plastic box")
	{
		console.log(suspectObj.name)
		counter++;
	}
	if (suspectObj.eyes == "brown")
	{
		console.log(suspectObj.name)
		counter++;
	}
	if (suspectObj.weight >= 70 && suspectObj.weight <= 83)
	{
		console.log(suspectObj.name)
		counter++;
	}
	if (suspectObj.glasses == "red")
	{
		console.log(suspectObj.name)
		counter++;
	}
	if (suspectObj.tattoo == "ox")
	{
		console.log(suspectObj.name)
		counter++;
	}
	return counter
}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    let matchingProperties = testSuspect(suspectList[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + suspectList[i].name, 60, 60 + i * 20);
  }
  noLoop()
}
