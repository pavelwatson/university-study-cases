/*

Officer: 6219282
CaseNum: 502-2-39574612-6219282

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var ACensored = {
	word0: [ "play", "bake", "stuff"], 
	word1: [ "radiate", "start", "stuff"], 
	word2: [ "succeed", "start", "stuff"], 
	word3: [ "hit", "play", "radiate"], 
	word4: [ "hurry", "hurry", "$200,000"], 
	word5: [ "smile", "radiate", "Hopper"], 
	word6: [ "clip", "ALGOL", "succeed"], 
	word7: [ "hurry", "sneeze", "fence"], 
	word8: [ "succeed", "protect", "campaign"], 
	word9: [ "sail", "plug", "meddle"]
};

var BCensored = {
	word0: [ "rejoice", "mend", "rejoice"], 
	word1: [ "sneeze", "Edsger", "smile"], 
	word2: [ "consider", "sneeze", "consider"], 
	word3: [ "bake", "clip", "syndicate"], 
	word4: [ "succeed", "stuff", "radiate"], 
	word5: [ "fence", "start", "a donation"], 
	word6: [ "bake", "sail", "plug"], 
	word7: [ "hurry", "clip", "hurry"], 
	word8: [ "hurry", "rejoice", "sail"], 
	word9: [ "Governor Zuckerberg", "fence", "clip"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear " + BCensored.word9[0] + ", I am sure that something could be worked out in terms of " + BCensored.word5[2] + " for your " + ACensored.word8[2] + ". How does " + ACensored.word4[2] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + ACensored.word5[2] + " needs to be out of the picture. She’s caused enough trouble. Get the " + BCensored.word3[2] + " to organise the " + ACensored.word3[0] + " but I’d prefer it you don’t mention me or " + ACensored.word6[1] + ". I owe them enough favours already. Your old friend, " + BCensored.word1[1];

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
