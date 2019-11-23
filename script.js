let keyCode = 32; //32 - spacebar
let btnEle = "button.vjs-play-control"; //Current playback button on Linkedin Learning videos

window.onkeydown = function(event){
    if(event.keyCode === keyCode) {
        event.preventDefault();
        document.querySelector(btnEle).click();
    }
};