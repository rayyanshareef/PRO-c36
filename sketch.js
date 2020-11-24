var database;
var gameState=0;
var playerCount=0;
var form1,player1,game1;

function setup(){
  database = firebase.database();
  createCanvas(400,400);

  game1=new game();
  game1.getState();
  game1.start();
  
}

function draw(){
 
}
