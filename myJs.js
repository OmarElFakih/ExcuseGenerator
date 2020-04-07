var test = "is working";

var whoToBlabeList = ["My dog ", "My grandma ","My grandad ", "My dad ", "My mom ", "My brother ", "My sister "];
var whatTheyDidList = ["ate ", "threw away ", "burned ", "deleted ", "sold ", "lost ", "gave away ", "stole "];
var whatToAvoidList = ["my homework ", "my thesis ", "the car ", "my computer ", "the packages ", "your present "];
var timeLapseList = ["yesterday", "this morning", "a week ago", "last night", "an hour ago", "just now"];

function RandomElemnt(_anArray)
{
   var element = Math.floor(Math.random() * (_anArray.length - 1));
   return element;
}

function RandomExcuse()
{
   var whoToBlame = RandomElemnt(whoToBlabeList);
   var whatTheyDid = RandomElemnt(whatTheyDidList);
   var whatToAvoid = RandomElemnt(whatToAvoidList);
   var timeLapse = RandomElemnt(timeLapseList);
   
   var excuse = "";
   excuse = whoToBlame + whatTheyDid + whatToAvoid + timeLapse;

   return excuse;

}