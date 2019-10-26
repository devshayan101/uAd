
var myCropWidget = cloudinary.createUploadWidget({
 cloudName: 'shayan-dev', uploadPreset: 'fojw1igo', folder: 'uAdFiles',
 cropping: false,
 searchByRights: true,
 //croppingShowDimensions: true,
 sources: ['local', 'camera', 'facebook', 'instagram'],
 maxImageWidth: 500,
 maxImageHeight: 400,
 showCompletedButton: true,
 showUploadMoreButton: false,
 singleUploadAutoClose: false
},
 (error, result) => { console.log(error, result) });

// //DOM for Aadhaar file
document.getElementById("upload_widget_opener_Adh").addEventListener("click", function () {
 myCropWidget.open();
}, false);

//DOM for PAN file
document.getElementById("upload_widget_opener_Pan").addEventListener("click", function () {
 myCropWidget.open();
}, false);

// let myForm = document.getElementById('myForm');

// let formData = new FormData(myForm);