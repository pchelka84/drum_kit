window.addEventListener('keydown', function(e) { 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // stop the function from running all together
  if (!audio) return;

  // rewind to the start
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});