function setup() {
  createCanvas(400, 400);
  background("purple");
}

function draw() {

  stroke("orange");
  fill("yellow");

  //console.log(mouseIsPressed);

  if(mouseIsPressed) {
   rect(mouseX, mouseY, 20, 35);
  }
  

}
