const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(900, 600);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  bases1 = new ABase(200,400,50,40);
  bases2 = new BBase(700,450,50,40);

  player1 = new Player(bases1.body.position.x,290);
  player2 = new Player(bases2.body.position.x,340);

 }

function draw() {

  background("skyblue");

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
 
   //Display Playerbase and computer base 
  bases1.display(); 
  bases2.display();

  //display Player and computerplayer
  player1.display();
  

  player2.display();

  }
