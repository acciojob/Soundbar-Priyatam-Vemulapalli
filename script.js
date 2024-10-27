let currentAudio;

function playSound(soundName) {
  stopSound();
  currentAudio = new Audio(`./sounds/${soundName}.mp3`);
  currentAudio.play().catch((error) => {
    console.error(`Failed to play audio ${soundName}:`, error);
  });
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
