/*

Officer: 6219282
CaseNum: 702-3-47459592-6219282

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a green car with a numberPlate of 1F2S1K.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detectiveCarObject and the cars in
cars_list to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveVehicle()
{
	/*
	This function should do the following: 
	 - increment detectiveCarObject's distanceDriven property by its speedVal property 
	 - add a random amount between -0.09 and 0.09 to detectiveCarObject's engineShudderVal property
	 - use the constrain function to constrain detectiveCarObject's engineShudderVal property to values between 0.08 and 1.24
	 - call the driveCar_motor function passing detectiveCarObject as an argument
	*/
	detectiveCarObject.distanceDriven += detectiveCarObject.speedVal
	detectiveCarObject.engineShudderVal += random(-0.09, 0.09)
	detectiveCarObject.engineShudderVal = constrain(detectiveCarObject.engineShudderVal, 0.08, 1.24)
	driveCar_motor(detectiveCarObject)
}


function moveLanes(car)
{
	/*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use laneCoord_a and laneCoord_b to effect the change.
	 hint: You will need to modify the coordX property of car.
	*/
	if (car.coordX == laneCoord_b)
	{
		car.coordX = laneCoord_a
	}
	else
	{
		car.coordX = laneCoord_b
	}
}


function vehicleAhead( targetCar_a, targetCar_b )
{
	/*
	This function should do the following: 
	 - determine if targetCar_a is in the same lane and less than 200px behind targetCar_b.
	 - do this by comparing the two cars' distanceDriven properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
	if (
		targetCar_a.coordX == targetCar_b.coordX &&
		targetCar_b.distanceDriven > targetCar_a.distanceDriven &&
		targetCar_b.distanceDriven - targetCar_a.distanceDriven < 200
	)
	{
		return true
	}
	return false
}


function checkIsParallel( targetCar_a, targetCar_b )
{
	/*
	This function should do the following: 
	 - determine if targetCar_ais parallel with targetCar_b.
	 - if targetCar_a is found to be parallel to targetCar_b then return targetCar_b.
	 - cars are considered parallel if the absolute difference between their distanceDriven properties is less than 25 px and they have non-matching coordX properties	*/
	 if (
		 targetCar_a.coordX != targetCar_b.coordX &&
		 abs(targetCar_a.distanceDriven - targetCar_b.distanceDriven) < 25
	 )
	 {
		 return targetCar_b
	 }
}


function spotCriminal()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to detectiveCarObject to see if they match the numberPlate property in the criminal description.
	 - it does this by traversing cars_list and calling checkIsParallel for each car
.	 - if a positive result is returned then the numberPlate property of the found car is then checked against the criminal description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
	for (let i = 0; i < cars_list.length; i++)
	{
		if (checkIsParallel(detectiveCarObject, cars_list[i]))
		{
			if (cars_list[i].numberPlate == '1F2S1K') 
			{
				return cars_list[i]
			}
		}
	}
	return false
}


function tailingCriminal()
{
	/*
	This function should do the following: 
	 - scale the speedVal property of detectiveCarObject by a factor of 1.001.
	 - use the min function to make sure that detectiveCarObject's speedVal property does not exceed 6.
	 - it should traverse cars_list calling vehicleAhead for each car to detect any cars in front of detectiveCarObject.
	 - if a positive result is returned it should check to see if the numberPlate property of that car matches that of criminal.
	 - for a match, stopCriminal should be called, otherwise call moveLanes.
	*/
	detectiveCarObject.speedVal *= 1.001
	detectiveCarObject.speedVal = min(6, detectiveCarObject.speedVal)
	for (let i = 0; i < cars_list.length; i++)
	{
		if (vehicleAhead(detectiveCarObject, cars_list[i]))
		{
			if (cars_list[i].numberPlate == '1F2S1K') 
			{
				stopCriminal(cars_list[i])
			}
			else
			{
				moveLanes(detectiveCarObject)
			}
		}
	}
}


function stopCriminal(car_obj)
{
	/*
	This function should do the following: 
	 - set the isDetained property of car_obj to true.
	 - set the isArrestingCriminal property of detectiveCarObject to true.
	 - set the speedVal properties of both vehicles to zero.
	*/
	car_obj.isDetained = true
	detectiveCarObject.isArrestingCriminal = true
	detectiveCarObject.speedVal = 0
	car_obj.speedVal = 0
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detectiveCarObject;

var roadWidth;
var roadLeftEdge;
var laneCoord_a;
var laneCoord_b;
var carImages = {};
var criminal;

var cars_list = [
{ coordX: 500, coordY: 0, distanceDriven: -200, carVariety: 'blueCar', numberPlate: 'QD6G5A', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 200, carVariety: 'whiteCar', numberPlate: 'CN3KQ1', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 600, carVariety: 'greenCar', numberPlate: 'I17TIR', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 1000, carVariety: 'redCar', numberPlate: 'FPYBM3', speedVal: 2, exhaust: [  ]} , { coordX: 300, coordY: 0, distanceDriven: 1400, carVariety: 'whiteCar', numberPlate: 'QF95TR', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 1800, carVariety: 'blueCar', numberPlate: 'FO6J6D', speedVal: 2, exhaust: [  ]} , { coordX: 300, coordY: 0, distanceDriven: 2200, carVariety: 'greenCar', numberPlate: '1F2S1K', speedVal: 2, exhaust: [  ]} , { coordX: 300, coordY: 0, distanceDriven: 2600, carVariety: 'redCar', numberPlate: 'T9WY3E', speedVal: 2, exhaust: [  ]} , { coordX: 300, coordY: 0, distanceDriven: 3000, carVariety: 'redCar', numberPlate: 'VPOWS2', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 3400, carVariety: 'greenCar', numberPlate: '21D0R4', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 3800, carVariety: 'whiteCar', numberPlate: 'CW1FY4', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 4200, carVariety: 'whiteCar', numberPlate: 'ZTUCVS', speedVal: 2, exhaust: [  ]} , { coordX: 300, coordY: 0, distanceDriven: 4600, carVariety: 'redCar', numberPlate: '55NI8O', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 5000, carVariety: 'greenCar', numberPlate: 'WG4B2Q', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 5400, carVariety: 'whiteCar', numberPlate: 'DPI6CF', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 5800, carVariety: 'redCar', numberPlate: '9UU4TT', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 6200, carVariety: 'redCar', numberPlate: 'RVWWIQ', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 6600, carVariety: 'greenCar', numberPlate: 'W9GTKB', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 7000, carVariety: 'greenCar', numberPlate: 'QSY11E', speedVal: 2, exhaust: [  ]} , { coordX: 500, coordY: 0, distanceDriven: 7400, carVariety: 'whiteCar', numberPlate: 'RVADRP', speedVal: 2, exhaust: [  ]} 
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
	laneCoord_a = 300;
	laneCoord_b = 500;

	detectiveCarObject = 
	{
		coordX: roadLeftEdge + roadWidth/4,
		coordY: 550,
		distanceDriven: 0,
		speedVal: 3,
		engineShudderVal: 0,
		carVariety: 'detective',
		numberPlate: '5L3UTH',
		isArrestingCriminal: false,
		chasingCriminal: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(criminal)
	{
		if(criminal.isDetained)
		{
			fill(255);

			text("criminal isDetained!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!detectiveCarObject.chasingCriminal&& !detectiveCarObject.isArrestingCriminal)
	{
		moveVehicle();
		for(var i = 0; i < cars_list.length; i++)
		{
var b2b = vehicleAhead(detectiveCarObject, cars_list[i]);
			if(b2b)moveLanes(detectiveCarObject);
		}
		var a = spotCriminal();
		if(a != false)criminal = a;
		if(criminal)detectiveCarObject.chasingCriminal = true;
	}
	else if(!detectiveCarObject.isArrestingCriminal)
	{
		tailingCriminal();
		moveVehicle();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(criminal)
	{
		if(!criminal.isDetained)
		{
			criminal.speedVal = 5;
			for(var i = 0; i < cars_list.length; i++)
			{
				var b2b = vehicleAhead(criminal, cars_list[i]);
				if(b2b)
				{
					if(b2b.numberPlate != criminal.numberPlate)
					{
						moveLanes(criminal);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < cars_list.length; i++)
	{
		cars_list[i].distanceDriven += cars_list[i].speedVal;
		cars_list[i].coordY = detectiveCarObject.coordY - cars_list[i].distanceDriven + detectiveCarObject.distanceDriven;

		if(criminal)
		{
			if(criminal.isDetained)
			{
				if(cars_list[i].coordX==detectiveCarObject.coordX)
				{
					if(cars_list[i].distanceDriven<detectiveCarObject.distanceDriven)
					{
						if(cars_list[i].distanceDriven-detectiveCarObject.distanceDriven < 200)
						{
							moveLanes(cars_list[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (detectiveCarObject.distanceDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (detectiveCarObject.distanceDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(detectiveCarObject);
	image
	(
		carImages["detective"],
		detectiveCarObject.coordX - carImages["detective"].width/2 + random(-detectiveCarObject.engineShudderVal, detectiveCarObject.engineShudderVal),
		detectiveCarObject.coordY + random(-detectiveCarObject.engineShudderVal, detectiveCarObject.engineShudderVal)
	);

	//draw all other cars

	for(var i = 0; i < cars_list.length; i ++)
	{
		if(cars_list[i].coordY < height && cars_list[i].coordY > -height/2)
		{
			image(
			carImages[cars_list[i].carVariety],
			cars_list[i].coordX - carImages[cars_list[i].carVariety].width/2,
			cars_list[i].coordY
			);
			driveCar_motor(cars_list[i]);

			drawExhaust(cars_list[i]);
		}
	}

}

function driveCar_motor(car)
{

	car.exhaust.push({size: 2, x: car.coordX, y: car.coordY + carImages[car.carVariety].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speedVal/3);
		if(car.carVariety != "detective")car.exhaust[i].y += (detectiveCarObject.speedVal - car.speedVal);
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
