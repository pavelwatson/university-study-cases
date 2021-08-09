/*

Officer: 6219282
CaseNum: 403-3-19435026-6219282

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Huffman Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 252 meters from Courthouse then alert local police by drawing a DarkTurquoise circle around it with a radius of 252 pixels.
- if Shiffman is in Aaron Swartz Memorial Park then the neighbourhood watch must be notified by drawing a Green rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a SpringGreen rectangle covering the area between Ada Avenue, Gates Avenue, Huffman Street and Leodorf Way.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    console.log(mouseX, mouseY)
    if (dist(1237, 410, mouseX, mouseY) < 252) {
      fill(0, 206, 209)
      ellipse(1237, 410, 252*2)
    }
    else if (mouseX > 1538 && mouseX < 1796 && mouseY > 477 && mouseY < 608) {
      fill(0, 128, 0)
      rect(1538, 477, 1796 - 1538, 608 - 477)
    }
    else {
      fill(0, 255, 127)
      rect(203, 252, 1200 - 203, 645 - 252)
    }
    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
