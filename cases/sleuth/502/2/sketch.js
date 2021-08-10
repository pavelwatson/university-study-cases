/*

Officer: 6219282
CaseNum: 502-1-75079709-6219282

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var ArchiveA = [
	{RedactedWord0: "hurry", RedactedWord1: "fence", RedactedWord2: "fence"}, 
	{RedactedWord0: "COBOL", RedactedWord1: "sneeze", RedactedWord2: "start"}, 
	{RedactedWord0: "rejoice", RedactedWord1: "syndicate", RedactedWord2: "hurry"}, 
	{RedactedWord0: "charge", RedactedWord1: "plug", RedactedWord2: "smile"}, 
	{RedactedWord0: "sail", RedactedWord1: "start", RedactedWord2: "start"}, 
	{RedactedWord0: "smile", RedactedWord1: "plug", RedactedWord2: "clip"}, 
	{RedactedWord0: "clip", RedactedWord1: "mend", RedactedWord2: "tug"}, 
	{RedactedWord0: "smile", RedactedWord1: "play", RedactedWord2: "rejoice"}, 
	{RedactedWord0: "bake", RedactedWord1: "mend", RedactedWord2: "sail"}, 
	{RedactedWord0: "start", RedactedWord1: "bake", RedactedWord2: "Governor Zuckerberg"}
];

var ArchiveB = [
	{RedactedWord0: "consider", RedactedWord1: "meddle", RedactedWord2: "meddle"}, 
	{RedactedWord0: "Hopper’s", RedactedWord1: "hurry", RedactedWord2: "hurry"}, 
	{RedactedWord0: "start", RedactedWord1: "a donation", RedactedWord2: "fence"}, 
	{RedactedWord0: "she has", RedactedWord1: "meddle", RedactedWord2: "capital"}, 
	{RedactedWord0: "sail", RedactedWord1: "start", RedactedWord2: "sail"}, 
	{RedactedWord0: "mend", RedactedWord1: "delicate", RedactedWord2: "romantic"}, 
	{RedactedWord0: "fence", RedactedWord1: "tug", RedactedWord2: "clip"}, 
	{RedactedWord0: "mend", RedactedWord1: "mend", RedactedWord2: "fence"}, 
	{RedactedWord0: "charge", RedactedWord1: "radiate", RedactedWord2: "Edsger"}, 
	{RedactedWord0: "bake", RedactedWord1: "mend", RedactedWord2: "clip"}
];

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

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText = "My dearest " + ArchiveB[8].RedactedWord2 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + ArchiveB[1].RedactedWord0 + " intervention. I suspect that " + ArchiveB[3].RedactedWord0 + " a " + ArchiveB[5].RedactedWord2 + " interest at the " + ArchiveA[1].RedactedWord0 + ". I and the " + ArchiveA[2].RedactedWord1 + " appreciate your many contributions over the years. However, this is a most " + ArchiveB[5].RedactedWord1 + " matter which would require significant " + ArchiveB[3].RedactedWord2 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + ArchiveB[2].RedactedWord1 + " to my forthcoming campaign would help. Yours sincerely, " + ArchiveA[9].RedactedWord2;

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
