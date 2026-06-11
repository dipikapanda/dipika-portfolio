let audio = document.getElementById("audio");
let volume = document.getElementById("volume");

function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

volume.addEventListener("input", function () {
    audio.volume = volume.value / 100;
});