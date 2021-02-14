
var database;
var gameState = 0;
var playerCount;
var form,player,game;
function setup(){
    //added/initialized firebase to app
    database = firebase.database();
    createCanvas(400, 400);

    game = new Game ();
    game.getState();
    game.start();   

}

function draw(){
    background("white");

    
   
   
}

