
var t = 0;
let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  
  poseNet = ml5.poseNet(video, modelReady);
 
  poseNet.on('pose', function(results) {
    poses = results;
  });

  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function mousePressed() {
  console.log(JSON.stringify(poses))
}

function draw() {
  //image(video, 0, 0, width, height);
  
    background(0, 0, 0, 4);
 
  strokeWeight(0.1);


 
  if (poses.length > 0) {
    let pose = poses[0].pose;

   
    let nose = pose['nose'];
    fill(255);
   
    
    ellipse(nose.x, nose.y, 100, 100);

   
    fill(255, 215, 0);
    let rightEye = pose['rightEye'];
    ellipse(rightEye.x, rightEye.y, 20, 20);

  
    fill(255, 215, 0);
    let leftEye = pose['leftEye'];
    ellipse(leftEye.x, leftEye.y, 20, 20);
  }
}