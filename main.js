noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 500);
    canvas.position(700, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('aquamarine');
    textSize(difference);
    fill("coral");
    bulletin = document.getElementById("canvas_text").value;
    text(bulletin, noseX, noseY);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.x;
        difference = floor(leftWristX - rightWristX);
    }
}

