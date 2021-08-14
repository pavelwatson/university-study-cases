/*
Officer: 6219282
CaseNum: 601-2-88566277-6219282

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, DarkOrange fill rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Peru stroke ellipses at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 90 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- fill
- rect() NB. Draw each rectangle with the point at its center.

- stroke
- ellipse()


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var CaseyLogbook = {
	loc_x: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	loc_y: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var MurdersceneLogbook = {
	position_x: [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456],
	position_y: [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770],
	fatality_details: ['LINETTE MOHWAWK', 'BRAD SILVEIRA', 'DEEDEE PHINNEY', 'LOUISE ZETLAND', 'JESUS FORSLIN', 'RANDEE CROME', 'MALINDA GOODBURY', 'PIERRE DORCEY', 'NICOLE ASHELY', 'HANG NIEMELA', 'LARRAINE PEGORD', 'DRUSILLA WARMAN', 'LESLEY MONKSFORD', 'JULIANA ADVERSANE'],
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
	fill(255, 140, 0);
	noStroke()
	for (var i = 0; i < CaseyLogbook.loc_x.length; i++) {
		rect(CaseyLogbook.loc_x[i], CaseyLogbook.loc_y[i], 8, 8)
	};

	noFill();
	stroke(205, 133, 63);
	for (var i = 0; i < MurdersceneLogbook.position_x.length; i++) {
		ellipse(MurdersceneLogbook.position_x[i], MurdersceneLogbook.position_y[i], 8)
	};

	for (var i = 0; i < MurdersceneLogbook.position_x.length; i++)
	{
		for (var j = 0; j < CaseyLogbook.loc_x.length; j++)
		{
			if (dist(MurdersceneLogbook.position_x[i], MurdersceneLogbook.position_y[i], CaseyLogbook.loc_x[j], CaseyLogbook.loc_y[j]) < 90) {
					possibleMatches.push(
						{
						crime: {
							x: MurdersceneLogbook.position_x[i], 
							y: MurdersceneLogbook.position_y[i], 
							victimName: MurdersceneLogbook.fatality_details[i]
						},
						suspect: {
							x: CaseyLogbook.loc_x[j],
							y: CaseyLogbook.loc_y[j]
						}
					}
				);
			}
		}
	}

	// code to draw the matches ( if any)
	for (let i = 0 ; i < possibleMatches.length ; i++)
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
