var sound
var introsound 

function preload() {
    sound = loadSound("intro.mp3")
    introsound = loadSound("intro.mp3")
}

function setup() {
    var number 
    sound.play()

}
// the sound plays only on the firt time i load the webpage once i refresh or open in new page the sound does not load
// pls check 

// i want to play this sound in the beginning as the website opens 
function draw() {
    //   background();

}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }  



// // var source = "intro.mp3"
// // var audio = document.createElement("audio");
// // //
// // audio.autoplay = true;
// // //
// // audio.load()
// // audio.addEventListener("load", function() { 
// //     audio.play(); 
// // }, true);
// // audio.src = source;

// var source = "intro.mp3"
// var audio = new Audio();
// // no event listener needed here
// audio.src = source;
// audio.autoplay = true;

// $("#playBtn").click(function() {
//   audio.play();
// });

// $("#pauseBtn").click(function() {
//   audio.pause();
// });

// $("#stopBtn").click(function() {
//   audio.pause();
//   audio.currentTime = 0;
// });