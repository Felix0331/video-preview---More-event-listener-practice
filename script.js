console.log("page loaded...");
var video = document.getElementById("video-one")
function videoPlay(element){
    video.play();
    element.volume = 0;
}
function videoPause(element){
    video.pause();
}