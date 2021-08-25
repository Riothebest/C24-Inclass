const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var myEngine, myWorld;
var ground;
var tower, towerImg;
var backgroundImg;
var cannon;
var angle;
var cannonBall,cannonBallImg;

function preload()
{

    towerImg = loadImage('assets/tower.png');
    backgroundImg = loadImage('assets/background.gif');
    cannonBallImg = loadImage("assets/cannonball.png");
}

function setup(){
    createCanvas(1200,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(600,height-1,1200,40);

    tower = new Tower(150,height-250,180,330);

  //  cannon = new Cannon(170, 110, 100, 50);
  angle = -PI/4;
  cannon = new Cannon(185, 130, 120, 60,angle);
  cannonBall = new CannonBall(cannon.x, cannon.y, 40)
}

function draw(){
    background(backgroundImg);
    Engine.update(myEngine);
    ground.display();
    tower.display();
    cannon.display();
    cannonBall.display();
}


function keyReleased()
{
    if(keyCode === DOWN_ARROW)
    {
        cannonBall.shoot();
    }
}