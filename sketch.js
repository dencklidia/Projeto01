function setup() {
  createCanvas(1000, 1000);
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
