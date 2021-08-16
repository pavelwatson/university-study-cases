/*

Officer: 6219282
CaseNum: 702-1-60903062-6219282

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of investigator_vehicleObject and the cars in
carObjectList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function drive_car()
{
	/*
	This function should do the following: 
	 - increment investigator_vehicleObject's dist_amount property by its gas_amount property 
	 - add a random amount between -0.1 and 0.1 to investigator_vehicleObject's engineVibrate_value property
	 - use the constrain function to constrain investigator_vehicleObject's engineVibrate_value property to values between 0.1 and 0.82
	 - call the cycle_motor function passing investigator_vehicleObject as an argument
	*/
	investigator_vehicleObject.dist_amount += investigator_vehicleObject.gas_amount
	investigator_vehicleObject.engineVibrate_value += random(-0.1, 0.1)
	investigator_vehicleObject.engineVibrate_value = constrain(investigator_vehicleObject.engineVibrate_value, 0.1, 0.82)
	cycle_motor(investigator_vehicleObject)
}


function move_lanes(target_car)
{
	/*
	This function should do the following: 
	 - move target_car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_posA and lane_posB to effect the change.
	 - finally you should return target_car at the end of the function.
	 hint: You will need to modify the coordinate_x property of target_car.
	*/
	if (target_car.coordinate_x == lane_posB)
	{
		target_car.coordinate_x = lane_posA
	}
	else
	{
		target_car.coordinate_x = lane_posB
	}
	return target_car
}


function searchVehicle_infront( car_objA, car_objB )
{
	/*
	This function should do the following: 
	 - determine if car_objA is in the same lane and less than 200px behind car_objB.
	 - do this by comparing the two cars' dist_amount properties
	 - if these requirements are met then return car_objB. Otherwise return false.
	*/
	if ((car_objA.coordinate_x == car_objB.coordinate_x) && (car_objA.dist_amount < car_objB.dist_amount) && (car_objB.dist_amount - car_objA.dist_amount < 200))
	{
		return car_objB
	}
	return false
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigator_vehicleObject;

var roadWidth;
var roadLeftEdge;
var lane_posA;
var lane_posB;
var carImages = {};

var carObjectList = [
{ coordinate_x: 300, coordinate_y: 0, dist_amount: -200, car_variety: 'redCar', licence_plate: 'VR93LL', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 200, car_variety: 'blueCar', licence_plate: 'NXQUBS', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 600, car_variety: 'whiteCar', licence_plate: 'Q5V3RU', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 1000, car_variety: 'whiteCar', licence_plate: '9CXA9T', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 1400, car_variety: 'redCar', licence_plate: 'C3BXP7', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amount: 1800, car_variety: 'whiteCar', licence_plate: '0QIMAD', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amount: 2200, car_variety: 'greenCar', licence_plate: '6L1IQV', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 2600, car_variety: 'greenCar', licence_plate: 'FTMSOR', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 3000, car_variety: 'greenCar', licence_plate: 'G9W8NX', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amount: 3400, car_variety: 'greenCar', licence_plate: '01EAPK', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amount: 3800, car_variety: 'blueCar', licence_plate: 'EJW94N', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amount: 4200, car_variety: 'redCar', licence_plate: '5F1UYU', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 4600, car_variety: 'blueCar', licence_plate: 'PWMVS7', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amount: 5000, car_variety: 'greenCar', licence_plate: 'LAVM7T', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 5400, car_variety: 'whiteCar', licence_plate: 'MIRDVU', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 5800, car_variety: 'redCar', licence_plate: '0P17S7', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 6200, car_variety: 'redCar', licence_plate: 'G8LDE7', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amount: 6600, car_variety: 'redCar', licence_plate: 'N5HVWY', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amount: 7000, car_variety: 'greenCar', licence_plate: 'PXVAV1', gas_amount: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amount: 7400, car_variety: 'blueCar', licence_plate: 'PVP81S', gas_amount: 2, exhaust: [  ]} 
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

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_posA = 300;
	lane_posB = 500;

	investigator_vehicleObject = 
	{
		coordinate_x: roadLeftEdge + roadWidth/4,
		coordinate_y: 550,
		dist_amount: 0,
		gas_amount: 3,
		engineVibrate_value: 0,
		car_variety: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	drive_car();
	for(var i = 0; i < carObjectList.length; i++)
	{
var b2b = searchVehicle_infront(investigator_vehicleObject, carObjectList[i]);
		if(b2b)move_lanes(investigator_vehicleObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObjectList.length; i++)
	{
		carObjectList[i].dist_amount += carObjectList[i].gas_amount;
		carObjectList[i].coordinate_y = investigator_vehicleObject.coordinate_y - carObjectList[i].dist_amount + investigator_vehicleObject.dist_amount;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigator_vehicleObject.dist_amount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigator_vehicleObject.dist_amount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(investigator_vehicleObject);
	image
	(
		carImages["detective"],
		investigator_vehicleObject.coordinate_x - carImages["detective"].width/2 + random(-investigator_vehicleObject.engineVibrate_value, investigator_vehicleObject.engineVibrate_value),
		investigator_vehicleObject.coordinate_y + random(-investigator_vehicleObject.engineVibrate_value, investigator_vehicleObject.engineVibrate_value)
	);

	//draw all other cars

	for(var i = 0; i < carObjectList.length; i ++)
	{
		if(carObjectList[i].coordinate_y < height && carObjectList[i].coordinate_y > -height/2)
		{
			image(
			carImages[carObjectList[i].car_variety],
			carObjectList[i].coordinate_x - carImages[carObjectList[i].car_variety].width/2,
			carObjectList[i].coordinate_y
			);
			cycle_motor(carObjectList[i]);

			drawExhaust(carObjectList[i]);
		}
	}

}

function cycle_motor(car)
{

	car.exhaust.push({size: 2, x: car.coordinate_x, y: car.coordinate_y + carImages[car.car_variety].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_amount/3);
		if(car.car_variety != "detective")car.exhaust[i].y += (investigator_vehicleObject.gas_amount - car.gas_amount);
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
