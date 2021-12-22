Webcam.set({
    width: 400,
    height: 300,
    image_format: "png",
    png_quality: 90
})

camera = document.getElementById("camera");
Webcam.attach(camera);

function Capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("image").innerHTML = "<img id='selfie' src="
            + data_uri + " lang='en-us' />";
    })
}

console.log(ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/K3L1v-ORJ/model.json", modelClassified);

function modelClassified() {
    console.log("The model has been classified!");
}