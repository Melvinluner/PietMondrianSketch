function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);
  
  fill(400); // to paint the rectangles in white colors 
  rect(0,0,90,160);
  rect(0,180,90,110);
  rect(100,300,260,100),
  rect(370,300,40,40),
  
  fill(0,0,170); // to make the rectancgle in blue
  rect(0,300,90,100);
  
  
  fill(200,0,0); // to make the rectangle in red
  rect(100,0,300,290);
  
 fill(200,140,0); // and to make the rectangle in yellow
  rect(370,350,50,50);
}

