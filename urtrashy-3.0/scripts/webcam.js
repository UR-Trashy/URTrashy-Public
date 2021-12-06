//used: https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm
var video = document.querySelector("#videoElement");
let canvas = document.querySelector("#canvas");

function start() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
            })
            .catch(function(err0r) {
                console.log("Something went wrong!");
            });
    }
}

function stop(e) {
    //help from: https://usefulangle.com/post/353/javascript-canvas-image-upload
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    var image_data_url = canvas.toDataURL('image/jpeg');
    image_data_url = atob(image_data_url.split("data:image/jpeg;base64,")[1]);
    var length = image_data_url.length;
    imageBytes = new ArrayBuffer(length);
    var ua = new Uint8Array(imageBytes);
    for (var i = 0; i < length; i++) {
        ua[i] = image_data_url.charCodeAt(i);
    }

    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }

    video.srcObject = null;
}
