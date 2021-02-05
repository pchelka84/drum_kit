window.addEventListener('keydown', function(e) { 
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   
   // stop the function from running all together
   if (!audio) return;

   audio.play();
});