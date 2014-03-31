
//var pictureSource;   //ce picture sour
//var destinationType; // sets the format of returned value 
// See the above in device.js for their assignments

// api-camera
function onPhotoDataSuccess(imageData) {
    var image = document.getElementById('cameraImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoURISuccess(imageURI) {
    var image = document.getElementById('cameraImage');
    image.src = imageURI;
}

function take_pic() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 100, destinationType: Camera.DestinationType.DATA_URL, targetWidth:320, targetHeight:320, correctOrientation:1, saveToPhotoAlbum:1, allowEdit:1});
}

function album_pic() { 
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 100, destinationType: Camera.DestinationType.FILE_URI, targetWidth:320, targetHeight:320, correctOrientation:1, saveToPhotoAlbum:1, allowEdit:1});
}


function onFail(message) {
    alert('Failed because: ' + message);
}