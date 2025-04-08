document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const audioSource = document.getElementById("audio-source");
  const songTabs = document.querySelectorAll(".song-tab");
  const songCover = document.getElementById("song-cover");

  const playButton = document.getElementById("play-button");
  const pauseButton = document.getElementById("pause-button");
  const replayButton = document.getElementById("replay-button");
  const volumeSlider = document.getElementById("volume-slider");
  const progressContainer = document.querySelector(".progress-container");
  const progressBar = document.querySelector(".progress-bar");
  const currentTimeDisplay = document.getElementById("current-time"); // Timer at the start
  const totalTimeDisplay = document.getElementById("total-time"); // Total duration at the end
  const audio = document.getElementById("audio");

  // 🎵 Switch song & cover image
  songTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const songFile = this.getAttribute("data-song");
      const coverFile = this.getAttribute("data-cover");

      audioSource.src = songFile;
      audioPlayer.load();
      audioPlayer.play();
      songCover.src = coverFile;
    });
  });

  // ▶ Play Button
  playButton.addEventListener("click", function () {
    audioPlayer.play();
  });

  // ⏸ Pause Button
  pauseButton.addEventListener("click", function () {
    audioPlayer.pause();
  });

  // 🔄 Replay Button
  replayButton.addEventListener("click", function () {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  });

  // 🔊 Volume Control
  volumeSlider.addEventListener("input", function () {
    audioPlayer.volume = volumeSlider.value;
  });

  // 📈 Update Progress Bar
  audioPlayer.addEventListener("timeupdate", function () {
    let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progress + "%";
  });

  // Format time helper function (MM:SS)
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  // Update time & progress bar
  audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  // Load total duration once metadata is loaded
  audio.addEventListener("loadedmetadata", () => {
    totalTimeEl.textContent = formatTime(audio.duration);
  });

  // Seek functionality: Click on progress bar
  progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  });
});
const letter =
  "Dear Visha, You are the most beautiful person I’ve ever known. Every moment with you feels like a dream. I love your smile, your voice, your heart, and everything about you. Thank you for being my forever. I love you endlessly. 💖";
const words = letter.split(" ");
let index = 0;
let interval;

function showPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("love-popup").style.display = "block";
  document.getElementById("love-letter-text").textContent = "";
  index = 0;

  interval = setInterval(() => {
    if (index < words.length) {
      document.getElementById("love-letter-text").textContent +=
        words[index] + " ";
      index++;
    } else {
      clearInterval(interval);
    }
  }, 300);
}

function closePopup() {
  clearInterval(interval);
  document.getElementById("overlay").style.display = "none";
  document.getElementById("love-popup").style.display = "none";
}
