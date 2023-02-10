let video;
let videoPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/UFO.mp4';

function preload(){
  video = createVideo(videoPath);
}

function setup() {
  //TODO: Set pixel density to 1
pixelDensity(1);
  createCanvas(480, 270);
  //Creates a background with a play symbol
  background(0);
  triangle(215, 110, 275, 140, 215, 170);
  //Hides the original HTML video element
  video.hide();
}

function draw() {
  //TODO: Load video pixels
video.loadPixels()
  //Draw the video to the canvas
  image(video, 0, 0, 480, 270);
}
