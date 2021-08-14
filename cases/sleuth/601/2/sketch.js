/*
Officer: 6219282
CaseNum: 601-1-45673521-6219282

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, MediumOrchid stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, MediumPurple stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- stroke
- ellipse()

- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

//Sightings of Casey Fry.

var Murderer_Sightings = [ 
  { pt_x : 639, pt_y : 288},
  { pt_x : 681, pt_y : 286},
  { pt_x : 712, pt_y : 293},
  { pt_x : 756, pt_y : 310},
  { pt_x : 715, pt_y : 368},
  { pt_x : 701, pt_y : 425},
  { pt_x : 753, pt_y : 436},
  { pt_x : 815, pt_y : 468},
  { pt_x : 795, pt_y : 506},
  { pt_x : 788, pt_y : 497},
  { pt_x : 781, pt_y : 486},
  { pt_x : 768, pt_y : 489},
  { pt_x : 750, pt_y : 500},
  { pt_x : 732, pt_y : 506},
  { pt_x : 714, pt_y : 514},
  { pt_x : 695, pt_y : 531},
  { pt_x : 693, pt_y : 552},
  { pt_x : 654, pt_y : 523},
  { pt_x : 624, pt_y : 500},
  { pt_x : 594, pt_y : 484},
  { pt_x : 555, pt_y : 474} 
];


//Recent crime records.

var Crimescene_Recorded = [ 
  { PointX : 403, PointY : 401},
  { PointX : 402, PointY : 360},
  { PointX : 427, PointY : 403},
  { PointX : 646, PointY : 284},
  { PointX : 639, PointY : 264},
  { PointX : 830, PointY : 434},
  { PointX : 809, PointY : 443},
  { PointX : 844, PointY : 496},
  { PointX : 802, PointY : 350},
  { PointX : 683, PointY : 413},
  { PointX : 552, PointY : 464},
  { PointX : 629, PointY : 498},
  { PointX : 712, PointY : 562},
  { PointX : 783, PointY : 603},
  { PointX : 415, PointY : 225},
  { PointX : 561, PointY : 282},
  { PointX : 562, PointY : 392},
  { PointX : 751, PointY : 283},
  { PointX : 680, PointY : 359},
  { PointX : 626, PointY : 436},
  { PointX : 701, PointY : 455},
  { PointX : 838, PointY : 565},
  { PointX : 322, PointY : 508},
  { PointX : 468, PointY : 556},
  { PointX : 625, PointY : 737} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
  noFill();
  stroke(186, 85, 211);
  for (var i = 0; i < Murderer_Sightings.length; i++) {
    ellipse(Murderer_Sightings[i].pt_x, Murderer_Sightings[i].pt_y, 8)
  };

  stroke(147, 112, 219);
  for (var i = 0; i < Crimescene_Recorded.length; i++) {
    rect(Crimescene_Recorded[i].PointX, Crimescene_Recorded[i].PointY, 8, 8)
  };

}

//We are not using the draw function this time
