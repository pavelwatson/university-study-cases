/*

Officer: 6219282
CaseNum: 403-1-16722472-6219282

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Norbert's Burrito Stall.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 60 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 60 pixels of Norbert's Burrito Stall - draw a DarkOrchid ellipse with a radius of 60 around it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
  mouseX
  mouseY

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
    console.log(`${mouseX}, ${mouseY}`)
    if (dist(mouseX, mouseY, 973, 394) < 60) {
      fill(153, 50, 204)
      ellipse(973, 394, 120)
    }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
