/*
Officer: 6219282
CaseNum: 601-3-45329716-6219282

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing RoyalBlue stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Goldenrod stroke rectangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 63 pixels of any of the crimes within no more than 3 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke()
- beginShape(), endShape(), vertex()

- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var absconderLogbook = {
	positionX: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	positionY: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	recordedDay: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var crimesceneLogbook = {
	pt_x: [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817],
	pt_y: [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474],
	date: [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18],
	killed_details: ['NELSON TINTLE', 'JESSIA PORTOS', 'LAVERNE JACQUELIN', 'BRIDGET BROADVIEW', 'LINETTE MOHWAWK', 'SUMMER CASIMERE', 'LIANNE COURTWOOD', 'LARRAINE PEGORD', 'MALINDA GOODBURY', 'TU DAVISWOOD', 'LAKESHA SYMMES', 'MAJORIE JENI', 'DEEDEE PHINNEY', 'TAMICA MAUBERT', 'BRAD SILVEIRA'],
};

function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
	noFill()
	stroke(65, 105, 225)
	beginShape()
	for (var i = 0; i < absconderLogbook.recordedDay.length; i++)
	{
		vertex(absconderLogbook.positionX[i], absconderLogbook.positionY[i])
	}
	endShape()


	stroke(218, 165, 32)
	for (var i = 0; i < crimesceneLogbook.date.length; i++)
	{
		rect(crimesceneLogbook.pt_x[i], crimesceneLogbook.pt_y[i], 8, 8)
	}

	for (var i = 0; i < crimesceneLogbook.date.length; i++)
	{
		for (var j = 0; j < absconderLogbook.recordedDay.length; j++)
		{
			if ((dist(crimesceneLogbook.pt_x[i], crimesceneLogbook.pt_y[i], absconderLogbook.positionX[j], absconderLogbook.positionY[j]) < 63) &&
			abs(crimesceneLogbook.date[i] - absconderLogbook.recordedDay[j]) < 4)
			{
				possibleMatches.push(
					{
						crime:{x: crimesceneLogbook.pt_x[i], y: crimesceneLogbook.pt_y[i], victimName: crimesceneLogbook.killed_details[i]}, 
						suspect:{x: absconderLogbook.positionX[j], y: absconderLogbook.positionY[j]}
					}
				)
			}
		}
	}



	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
