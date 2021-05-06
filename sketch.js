var canvas;
var music;
var red, green, blue, purple, box, Edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(450,450);

    
    red = createSprite(60, 430, 100, 20)
    red.shapeColor = "Red";

    green= createSprite(170, 430, 100, 20)
    green.shapeColor = "Green";

    blue = createSprite(280, 430, 100, 20)
    blue.shapeColor = "Blue";

    purple = createSprite(390, 430, 100, 20)
    purple.shapeColor = "Purple";

    box = createSprite(random(25, 425), 350, 30, 30)
    box.velocityX = 7.5;
    box.velocityY = 7.5;
}

function draw() {
    background(rgb(169,169,169));

    if(red.isTouching(box) && box.bounceOff(red)){
        box.shapeColor = "Red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(green.isTouching(box) && box.bounceOff(green)){
        box.shapeColor = "green";
    }
    if(blue.isTouching(box) && box.bounceOff(blue)){
        box.shapeColor = "blue";
        music.play();
    }
    if(purple.isTouching(box) && box.bounceOff(purple)){
        box.shapeColor = "purple";
    }

    Edges = createEdgeSprites();
    box.bounceOff(Edges)
    drawSprites()
}
