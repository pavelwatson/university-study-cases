/*

Officer: 6219282
CaseNum: 702-2-17786753-6219282

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a green car with a numberPlate of YL8G9X. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of investigatorCar and the cars in
vehicleArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar()
{
	/*
	This function should do the following: 
	 - increment investigatorCar's distanceAmnt property by its speedValue property 
	 - add a random amount between -0.09 and 0.09 to investigatorCar's engineRumbleVal property
	 - use the constrain function to constrain investigatorCar's engineRumbleVal property to values between 0.01 and 0.78
	 - call the runCarMotor function passing investigatorCar as an argument
	*/
	investigatorCar.distanceAmnt += investigatorCar.speedValue
	investigatorCar.engineRumbleVal += random(-0.09, 0.09)
	investigatorCar.engineRumbleVal = constrain(investigatorCar.engineRumbleVal, 0.01, 0.78)
	runCarMotor(investigatorCar)
}


function swapLanes(car)
{
	/*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_posA and lane_posB to effect the change.
	 hint: You will need to modify the xPosition property of car.
	*/
	if (car.xPosition == lane_posB)
	{
		car.xPosition = lane_posA
	}
	else
	{
		car.xPosition = lane_posB
	}
	
}


function vehicleAhead( carObjA, carObjB )
{
	/*
	This function should do the following: 
	 - determine if carObjA is in the same lane and less than 200px behind carObjB.
	 - do this by comparing the two cars' distanceAmnt properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
	if (
		carObjA.xPosition == carObjB.xPosition &&
		carObjB.distanceAmnt > carObjA.distanceAmnt &&
		carObjB.distanceAmnt - carObjA.distanceAmnt < 200 
	)
	{
		return true
	}
	return false
}


function carIsAtSide( carA, carB )
{
	/*
	This function should do the following: 
	 - determine if carAis parallel with carB.
	 - if carA is found to be parallel to carB then return the numberPlateproperty of carB.
	 - cars are considered parallel if the absolute difference between their distanceAmnt properties is less than 25 px and they have non-matching xPosition properties	*/
	 if (
		 carA.xPosition != carB.xPosition &&
		 abs(carA.distanceAmnt - carB.distanceAmnt) < 25
		)
		{
			return carB.numberPlate
		}
}


function identifySuspect()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to investigatorCar to see if they match the numberPlate property in the suspect description.
	 - it does this by traversing vehicleArray and calling carIsAtSide for each car
.	 - if a positive result is returned then the numberPlate property of the found car is then checked against the suspect description.
	 - if a match is found then the car in question is assigned to the global variable suspect.
	*/
	for (let i = 0; i < vehicleArray.length; i++)
	{
		numberPlate = carIsAtSide(investigatorCar, vehicleArray[i])
		if (numberPlate == 'YL8G9X')
		{
			suspect = vehicleArray[i]
		}
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigatorCar;

var roadWidth;
var roadLeftEdge;
var lane_posA;
var lane_posB;
var carImages = {};
var suspect;

var vehicleArray = [
{ xPosition: 300, yPosition: 0, distanceAmnt: -200, carModel: 'redCar', numberPlate: '31O0H5', speedValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, distanceAmnt: 200, carModel: 'redCar', numberPlate: 'EYRU4C', speedValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, distanceAmnt: 600, carModel: 'redCar', numberPlate: '45NE7S', speedValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, distanceAmnt: 1000, carModel: 'whiteCar', numberPlate: '9PD5YY', speedValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, distanceAmnt: 1400, carModel: 'greenCar', numberPlate: 'YL8G9X', speedValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, distanceAmnt: 1800, carModel: 'greenCar', numberPlate: 'CO1TE8', speedValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, distanceAmnt: 2200, carModel: 'whiteCar', numberPlate: 'XUSSI2', speedValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, distanceAmnt: 2600, carModel: 'redCar', numberPlate: 'DITU4I', speedValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, distanceAmnt: 3000, carModel: 'redCar', numberPlate: 'Y8E3S3', speedValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, distanceAmnt: 3400, carModel: 'whiteCar', numberPlate: 'U18NUZ', speedValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, distanceAmnt: 3800, carModel: 'redCar', numberPlate: 'A8A757', speedValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, distanceAmnt: 4200, carModel: 'blueCar', numberPlate: 'QXQGP5', speedValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, distanceAmnt: 4600, carModel: 'whiteCar', numberPlate: 'U8NFWQ', speedValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, distanceAmnt: 5000, carModel: 'redCar', numberPlate: 'EENCWB', speedValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, distanceAmnt: 5400, carModel: 'redCar', numberPlate: '66YHMP', speedValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, distanceAmnt: 5800, carModel: 'greenCar', numberPlate: 'UJZ1PD', speedValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, distanceAmnt: 6200, carModel: 'redCar', numberPlate: '1VC9JF', speedValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, distanceAmnt: 6600, carModel: 'whiteCar', numberPlate: 'WAU30D', speedValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, distanceAmnt: 7000, carModel: 'blueCar', numberPlate: '3GYGWH', speedValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, distanceAmnt: 7400, carModel: 'blueCar', numberPlate: '5AI9CC', speedValue: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_posA = 300;
	lane_posB = 500;

	investigatorCar = 
	{
		xPosition: roadLeftEdge + roadWidth/4,
		yPosition: 550,
		distanceAmnt: 0,
		speedValue: 3,
		engineRumbleVal: 0,
		carModel: 'detective',
		numberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(suspect)
	{
		fill(255);

		text("suspect found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	moveCar();
	for(var i = 0; i < vehicleArray.length; i++)
	{
var b2b = vehicleAhead(investigatorCar, vehicleArray[i]);
		if(b2b)swapLanes(investigatorCar);
	}
	identifySuspect();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicleArray.length; i++)
	{
		vehicleArray[i].distanceAmnt += vehicleArray[i].speedValue;
		vehicleArray[i].yPosition = investigatorCar.yPosition - vehicleArray[i].distanceAmnt + investigatorCar.distanceAmnt;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigatorCar.distanceAmnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigatorCar.distanceAmnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(investigatorCar);
	image
	(
		carImages["detective"],
		investigatorCar.xPosition - carImages["detective"].width/2 + random(-investigatorCar.engineRumbleVal, investigatorCar.engineRumbleVal),
		investigatorCar.yPosition + random(-investigatorCar.engineRumbleVal, investigatorCar.engineRumbleVal)
	);

	//draw all other cars

	for(var i = 0; i < vehicleArray.length; i ++)
	{
		if(vehicleArray[i].yPosition < height && vehicleArray[i].yPosition > -height/2)
		{
			image(
			carImages[vehicleArray[i].carModel],
			vehicleArray[i].xPosition - carImages[vehicleArray[i].carModel].width/2,
			vehicleArray[i].yPosition
			);
			runCarMotor(vehicleArray[i]);

			drawExhaust(vehicleArray[i]);
		}
	}

}

function runCarMotor(car)
{

	car.exhaust.push({size: 2, x: car.xPosition, y: car.yPosition + carImages[car.carModel].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speedValue/3);
		if(car.carModel != "detective")car.exhaust[i].y += (investigatorCar.speedValue - car.speedValue);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
