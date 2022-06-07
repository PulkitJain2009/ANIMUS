function preload()
{
clownnose=loadImage("https://i.postimg.cc/T3KpGw4Z/kisspng-logo-black-and-white-brand-mustache-5a7824d54f6131-7773801215178231893252.jpg");
}
function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initiated");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;

    }
}
function draw()
{
image(video,0,0,300,300);
image(clownnose,nosex,nosey,30,30);
}
function take_snapshot()
{
    save('animus.jpg');
}
nosex=0;
nosey=0;
