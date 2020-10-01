const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxes;
var box1, box2, box3, box4, box5, box6;
var form;
var gameState;

function setup(){
  createCanvas(1000,800);
//boxes = createSprite(100,500,200,1000);
//box1 = createSprite(25,50,100,30);
//box2 = createSprite(25,75,100,30);
//box3 = createSprite(25,100,100,30);
//box4 = createSprite(25,125,100,30);
//box5 = createSprite(25,150,100,30);
//box6 = createSprite(25,175,100,30);
form = new Form();
gameState = 0;
}

function draw(){
  background(0,144,158)
  textFont("Georgia");
  textSize(30);
text("Spotless India!", 450,30);
  form.display();
  line(210,0,210,1000);
  if(gameState === 0){
    textSize(20);
    textFont("Times New Roman");
    text("Welcome to Spotless India!",400, 400)
    text("If you have any queries relating to the government, please put them here!", 280,450);
    //drawSprites();
}
if(gameState === 1){
  form.checkbox3.hide();
  form.location.hide();
  form.submit.hide();
}
if(gameState === 2){
  textSize(20);
  textFont("Times New Roman");
  form.input.hide();
  form.button.hide();
  form.checkbox.hide();
  form.checkbox1.hide();
  form.checkbox2.hide();
  form.checkbox4.hide();
  form.checkbox5.hide();
  form.checkbox6.hide();
  form.checkbox7.hide();
  //form.checkbox3.show();
  /* form.checkbox = createCheckbox('GPS', false);
    form.checkbox.position(400,100) */
}
if(gameState === 3){
  form.checkbox3.hide();
  form.location.hide();
  form.submit.hide();
  text("Thanks for posting the query!", 300,400)
}
//myCheckedEvent();
}

/* function myCheckedEvent() {
  if (this.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
} */