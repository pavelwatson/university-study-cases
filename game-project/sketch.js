/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(255);
	text("cloud", 200, 100);
	ellipse(101,161,25,25);
	ellipse(140,148,45,45);
	ellipse(176,187,50,52);
	ellipse(160,159,45,45);
	ellipse(121,160,45,45);
	ellipse(81,189,45,45);
	ellipse(96,180,45,45);
	ellipse(82,190,45,45);
	rect(85,171,96,42);


	//2. a mountain in the distance
	//... add your code here

	noStroke();
	fill(255);
	text("mountain", 500, 256);
	triangle(657,246,666,267,657,261);
	fill(187,198,220);
	triangle(620,199,700,389,578,397); //mountains
	fill(161,169,192);
  triangle(494,432,728,432,591,239); //mountains
	triangle(657,246,735,432,551,432); //mountains
	fill(255);
	triangle(657,246,670,280,657,268);
	triangle(657,246,642,273,657,268);
	triangle(591,239,569,280,591,274);
	triangle(591,274,591,239,616,273);
	triangle(620,199,634,232,623,228);
	triangle(623,228,621,199,613,232);


	//3. a tree
	//... add your code here

	noStroke();
	fill(255);
	text("tree", 800, 346);

fill(190,95,23);
 triangle(867,432,882,416,884,432);
 triangle(884,432,886,418,901,432);
 rect(878,400,12,32);

 fill(34,124,17);
 triangle(840,411,883,371,885,403);
 triangle(884,403,883,371,928,412);
 triangle(840,389,882,352,922,389);
 triangle(850,363,880,331,915,364);
 triangle(854,343,883,316,912,342);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
	fill(79,195,247);
	stroke(0);
	triangle(429,412,457,412,443,432);
	line(437,412,443,432);
	line(449,412,443,432);
	triangle(429,412,434,405,437,412);
	triangle(434,405,437,412,443,405);
	triangle(443,405,437,412,449,412);
	triangle(449,412,443,405,453,405);
	triangle(453,405,449,412,457,412);
	stroke(79,195,247);
	strokeWeight(3);

}
