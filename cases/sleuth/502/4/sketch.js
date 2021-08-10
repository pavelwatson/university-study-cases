/*

Officer: 6219282
CaseNum: 502-3-73898955-6219282

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var AEvidence = [
{
	Word0: {Fragment0: "clip", Fragment1: "rejoice", Fragment2: "mend", Fragment3: "protect"}, 
	Word1: {Fragment0: "smile", Fragment1: "stuff", Fragment2: "ALGOL fish wholesalers", Fragment3: "start"}, 
	Word2: {Fragment0: "succeed", Fragment1: "stuff", Fragment2: "sneeze", Fragment3: "consider"}
},
{
	Word0: {Fragment0: "rejoice", Fragment1: "fence", Fragment2: "hurry", Fragment3: "smile"}, 
	Word1: {Fragment0: "play", Fragment1: "stuff", Fragment2: "rejoice", Fragment3: "smile"}, 
	Word2: {Fragment0: "clip", Fragment1: "clip", Fragment2: "$200,000", Fragment3: "meddle"}
},
{
	Word0: {Fragment0: "charge", Fragment1: "radiate", Fragment2: "succeed", Fragment3: "stuff"}, 
	Word1: {Fragment0: "hurry", Fragment1: "sail", Fragment2: "protect", Fragment3: "charge"}, 
	Word2: {Fragment0: "succeed", Fragment1: "tug", Fragment2: "sneeze", Fragment3: "charge"}
},
{
	Word0: {Fragment0: "plug", Fragment1: "hurry", Fragment2: "hurry", Fragment3: "Governor Zuckerberg"}, 
	Word1: {Fragment0: "stuff", Fragment1: "succeed", Fragment2: "sail", Fragment3: "radiate"}, 
	Word2: {Fragment0: "rejoice", Fragment1: "sneeze", Fragment2: "start", Fragment3: "sneeze"}
},
{
	Word0: {Fragment0: "start", Fragment1: "consider", Fragment2: "radiate", Fragment3: "stuff"}, 
	Word1: {Fragment0: "sneeze", Fragment1: "stuff", Fragment2: "sneeze", Fragment3: "rejoice"}, 
	Word2: {Fragment0: "clip", Fragment1: "play", Fragment2: "you", Fragment3: "stuff"}
}];

var BEvidence = [
{
	Word0: {Fragment0: "mend", Fragment1: "rejoice", Fragment2: "ALGOL", Fragment3: "sail"}, 
	Word1: {Fragment0: "plug", Fragment1: "sail", Fragment2: "meddle", Fragment3: "sail"}, 
	Word2: {Fragment0: "fence", Fragment1: "syndicate", Fragment2: "succeed", Fragment3: "succeed"}
},
{
	Word0: {Fragment0: "bake", Fragment1: "charge", Fragment2: "tug", Fragment3: "meddle"}, 
	Word1: {Fragment0: "fence", Fragment1: "smile", Fragment2: "bake", Fragment3: "bake"}, 
	Word2: {Fragment0: "bake", Fragment1: "fence", Fragment2: "smile", Fragment3: "radiate"}
},
{
	Word0: {Fragment0: "smile", Fragment1: "COBOL", Fragment2: "radiate", Fragment3: "hurry"}, 
	Word1: {Fragment0: "plug", Fragment1: "protect", Fragment2: "clip", Fragment3: "plug"}, 
	Word2: {Fragment0: "meddle", Fragment1: "radiate", Fragment2: "rejoice", Fragment3: "protect"}
},
{
	Word0: {Fragment0: "radiate", Fragment1: "meddle", Fragment2: "start", Fragment3: "Edsger"}, 
	Word1: {Fragment0: "meddle", Fragment1: "smile", Fragment2: "donation", Fragment3: "sneeze"}, 
	Word2: {Fragment0: "meddle", Fragment1: "succeed", Fragment2: "meddle", Fragment3: "succeed"}
},
{
	Word0: {Fragment0: "radiate", Fragment1: "consider", Fragment2: "plug", Fragment3: "start"}, 
	Word1: {Fragment0: "radiate", Fragment1: "fence", Fragment2: "start", Fragment3: "development"}, 
	Word2: {Fragment0: "start", Fragment1: "stuff", Fragment2: "sneeze", Fragment3: "start"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest " + BEvidence[3].Word0.Fragment3 + ", I have just received your very generous " + BEvidence[3].Word1.Fragment2 + " of " + AEvidence[1].Word2.Fragment2 + ". Thank you. This will be invaluable to our campaign. " + BEvidence[0].Word0.Fragment2 + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + AEvidence[4].Word2.Fragment2 + " or " + AEvidence[0].Word1.Fragment2 + " to the " + BEvidence[0].Word2.Fragment1 + ". Your new " + BEvidence[4].Word1.Fragment3 + " at the " + BEvidence[2].Word0.Fragment1 + " can now proceed without impediment. Yours sincerely, " + AEvidence[3].Word0.Fragment3;

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
