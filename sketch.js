
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rain1 ; 

function preload(){
    
}

function setup(){
    createCanvas(400, 700);

    engine = Engine.create();
	world = engine.world;

   rain1 = new Rain(100,100,10);
    
   Engine.run(engine);
}

function draw(){
background("black");

rain1.display();
}   

