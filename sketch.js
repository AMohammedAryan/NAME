var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  //speed = random(55, 90);
  speed = random(5, 9);
  weight = random(40, 150);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "blue";

  wall = createSprite(800, 200, 60, 800);
  wall.shapeColor = "orange";

  car.velocityX = speed;

}

function draw() {
  background(255,255,255); 

  console.log(wall.x - car.x )
  console.log(wall.x - car.x);


  if(wall.x - car.x < wall.width/2 + car.width/2){
    deformation = 0.5 * weight * speed * speed / 2250;
    car.velocityX = 0;
    console.log(deformation);
    console.log(car.velocityX);
    console.log(weight);
    if(deformation < 10){
      car.shapeColor = "green";
    }
    if(deformation < 18 && deformation > 10){
      car.shapeColor = "yellow";
    }
    if(deformation > 18){
      car.shapeColor = "red";
    }
  }
  
  drawSprites();
}