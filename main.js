noseX=0;
noseY=0;
function preload(){
clown=loadImage('https://i.postimg.cc/MZDpkxjG/unnamed-removebg-preview.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(clown,noseX,noseY,50,50);
}
function take_snapshot(){
    save('myfilterimage.png');
}
function modelloaded(){
    console.log('poseNet is initialised');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-25;
        noseY=results[0].pose.nose.y+15;
        console.log("nose x="+noseX);
        console.log("nose y="+noseY);
        
    }
}