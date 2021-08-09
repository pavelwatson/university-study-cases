/*

Officer: 6219282
CaseNum: 403-0-51920765-6219282

Case 403 - Surveillance - stage 1

We are on the lookout for the criminal mastermind known as Shiffman.
Our sources tell us that they are currently heading east on Gates Avenue.
I need you to sound the alarm if he crosses Gosling Road.

Shiffman's position is signified by the mouse. To sound the alarm - draw a DarkViolet rectangle covering the entire map from Gosling Road to the east.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
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
    if (mouseX > 1713) {
      fill(148, 0, 211);
      rect(1713, 0, width - 1713, height)
    }

    //Write your code below here ...



    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
