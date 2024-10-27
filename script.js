let currentAudio;

function playSound(soundName) {
  stopSound();
  currentAudio = new Audio(`./sounds/${soundName}.mp3`);
  currentAudio.play();
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}