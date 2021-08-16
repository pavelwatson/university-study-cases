/*

Officer: 6219282
CaseNum: 702-0-14734480-6219282

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of Chase_VehicleObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar()
{
	/*
	This function should do the following: 
	 - increment Chase_VehicleObject's Miles_Amount property by its Gas_Val property 
	 - add a random amount between -0.01 and 0.01 to Chase_VehicleObject's EngineRumble_Amount property
	 - use the constrain function to constrain Chase_VehicleObject's EngineRumble_Amount property to values between 0.1 and 1.13
	 - call the turnoverCar_engine function passing Chase_VehicleObject as an argument
	*/
	Chase_VehicleObject.Miles_Amount += Chase_VehicleObject.Gas_Val
	Chase_VehicleObject.EngineRumble_Amount += random(-0.01, 0.01)
	Chase_VehicleObject.EngineRumble_Amount = constrain(Chase_VehicleObject.EngineRumble_Amount, 0.1, 1.13)
	turnoverCar_engine(Chase_VehicleObject)
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Chase_VehicleObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	Chase_VehicleObject = 
	{
		Position_X: roadLeftEdge + roadWidth/4,
		Position_Y: 300,
		Miles_Amount: 0,
		Gas_Val: 3,
		EngineRumble_Amount: 0,
		Car_Classification: 'detective',
		Number_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	moveCar();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (Chase_VehicleObject.Miles_Amount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (Chase_VehicleObject.Miles_Amount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(Chase_VehicleObject);
	image
	(
		carImages["detective"],
		Chase_VehicleObject.Position_X - carImages["detective"].width/2 + random(-Chase_VehicleObject.EngineRumble_Amount, Chase_VehicleObject.EngineRumble_Amount),
		Chase_VehicleObject.Position_Y + random(-Chase_VehicleObject.EngineRumble_Amount, Chase_VehicleObject.EngineRumble_Amount)
	);

}

function turnoverCar_engine(car)
{

	car.exhaust.push({size: 2, x: car.Position_X, y: car.Position_Y + carImages[car.Car_Classification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Gas_Val/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
