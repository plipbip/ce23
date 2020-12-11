const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground , ground1;
var ball1, rope1 , ball2 , rope2 , ball3 , rope3 , ball4 , rope4
var score=0
function setup() {
  createCanvas(1800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 150 , 500 , 35);
 

  
  
  ball1 = new Ball(200, 200, 80, 80);
  rope1 = new Rope(ball1.body, { x: 500, y: 150 });

  ball2 = new Ball (400,200,80,80);
  rope2 = new Rope (ball2.body, { x: 600, y:150})

  ball3 = new Ball (600,200,80,80);
  rope3 = new Rope (ball3.body, { x: 700, y:150})

  ball4 = new Ball (800,200,80,80);
  rope4 = new Rope (ball4.body, { x: 800, y:150})
}

function draw() {
  background(180);

 

  Engine.update(engine);
  ground.display();
  
  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
}


function mouseDragged() {
  
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85 , y:-150})
  }
}


