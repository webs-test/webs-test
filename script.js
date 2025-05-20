const webCamElement = document.querySelector('#webCam');
const canvasElement = document.querySelector('#canvas');
const webcam = new Webcam(webCamElement, "user", canvasElement);
webcam.start();

function takeAPicture() {
	let picture = webcam.snap();
	document.querySelector("#download").href = picture;
}