function setup() {
  createCanvas(900, 500);
   background(10 , 200 , 50 );
}

function draw() {
 
  noStroke();
  
  if (mouseIsPressed){
    
    fill(random(255));
  }
    
    else {
      fill(random());
    }
    
   ellipse(mouseY+200, mouseY , mouseY , mouseY);

  
}