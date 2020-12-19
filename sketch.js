var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redb,pinkb,blueb,greenb;
var score = 0;
var r_balloonsGroup,b_balloonsGroup,p_balloonsGroup,g_balloonsGroup;
var arrowsGroup;
var balloon;

 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3;
  
  // creating bow to shoot arrow
  bow = createSprite(580,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  r_balloonsGroup = new Group();
  b_balloonsGroup = new Group();
  p_balloonsGroup = new Group();
  g_balloonsGroup = new Group();
  arrowsGroup = new Group();
}

function draw() {
  textSize(20);
  stroke("Yellow");
  fill("Orange");
  // moving ground
    background.velocityX = -3 
    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  if(arrowsGroup.isTouching(r_balloonsGroup))
  {
    r_balloonsGroup.destroyEach();
    arrowsGroup.destroyEach();
    score = score+4;
  }
  if(arrowsGroup.isTouching(b_balloonsGroup))
  {
    b_balloonsGroup.destroyEach();
    arrowsGroup.destroyEach();
    score = score+3;
  }
  if(arrowsGroup.isTouching(g_balloonsGroup))
  {
    g_balloonsGroup.destroyEach();
    arrowsGroup.destroyEach();
    score = score+2;
  }
  if(arrowsGroup.isTouching(p_balloonsGroup))
  {
    p_balloonsGroup.destroyEach();
    arrowsGroup.destroyEach();
    score = score+1;
  }
  drawSprites();
  text("Score: " + score,460,25);
}


function redBalloon() {
  redb = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redb.addImage(red_balloonImage);
  redb.velocityX = 3;
  redb.lifetime = 160;
  redb.scale = 0.1;
  r_balloonsGroup.add(redb);
}

function blueBalloon() {
  blueb = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blueb.addImage(blue_balloonImage);
  blueb.velocityX = 3;
  blueb.lifetime = 160;
  blueb.scale = 0.1;
  b_balloonsGroup.add(blueb);
}

function greenBalloon() {
  greenb = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greenb.addImage(green_balloonImage);
  greenb.velocityX = 3;
  greenb.lifetime = 160;
  greenb.scale = 0.1;
  g_balloonsGroup.add(greenb);
}

function pinkBalloon() {
  pinkb = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkb.addImage(pink_balloonImage);
  pinkb.velocityX = 3;
  pinkb.lifetime = 160;
  pinkb.scale = 1;
  p_balloonsGroup.add(pinkb);
}


// Creating  arrows for bow
function createArrow() {
  arrow = createSprite(590, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.lifetime = 210;
  arrow.scale = 0.3;
  arrowsGroup.add(arrow);
  return arrow;
}

