const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var engine, world

var ground;


function setup() {
  createCanvas(800,400);

  engine = Engine.create(); //one engine creates for our code
                                   //one world also gets created automatically
  
  world = engine.world; 

  var options ={
    isStatic:true
  }

  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);

  console.log(ground.position);
  

 
}

function draw() {
  background("aquamarine"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
}