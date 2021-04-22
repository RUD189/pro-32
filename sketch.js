const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg;
var ap;
async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    hour = datetime.slice(11,13);
    console.log(hour);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }
    else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }
    else if(hour>=08 && hour<=10){
        bg = "sunrise3.png";
    }
    else if(hour>=10 && hour<=14){
        bg = "sunrise5.png";
    }
    else if(hour>=14 && hour<=16){
        bg = "sunrise6.png";
    }
    else if(hour>=16 && hour<=18){
        bg = "sunset.7png";
    }
    else if(hour>=18 && hour<=20){
       bg = "sunset9.png";
    }
    else if(hour >= 20 && hour <= 21){
       bg = "sunset11.png";
    }
    else{
    bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    
    console.log(backgroundImg);
}
function preload() {
getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to a
    if(backgroundImg)
    background(backgroundImg);
    
    Engine.update(engine);

    // write code to display time in correct format here
    if(hour > 0 && hour < 12){
        ap = " AM";
    }else{
        ap = " PM";
    }

fill("white");
textSize(30);
text("TIME " + hour + ap,50,50);

}


