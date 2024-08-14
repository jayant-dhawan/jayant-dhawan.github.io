console.log(
  `%cGreetings traveler. I have a gift for you.\n\nPress up,up,down,down,left,right,left,right,b,a`,
  'color: white; background-color: red; font-weight: 800; font-size: 24px;'
);

new window.Egg("up,up,down,down,left,right,left,right,b,a", function () {
  const gif = document.getElementById('gift');
  gif.src = 'https://media.tenor.com/CWgfFh7ozHkAAAAC/rick-astly-rick-rolled.gif';
  const audio = new window.Audio('/assets/audio/music.mp3');
  gif.style.display = 'block';
  if (audio.paused) audio.play();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.setTimeout(function () {
    gif.style.display = 'none';
    audio.pause();
  }, 19000);
}).listen();