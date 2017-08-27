let songs = [];

let isPlaying = true;
let audio = document.querySelector('audio');
let prevButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');
let stopButton = document.querySelector('#play');
let button = document.querySelector('#playButton')

audio = new Audio('Musik/song1.mp3');

nextButton.addEventListener('click', (event) =>{
  var test = audio.src.match(/\d+/g);
  let nextSong = test[0];
  nextSong++;

  if(nextSong > songs.length){
    nextSong = 1;
  }

  audio.src = 'Musik/song' + nextSong + '.mp3';
  audio.load();
  audio.play();

});

prevButton.addEventListener('click', (event) =>{
  var test = audio.src.match(/\d+/g);
  let nextSong = test[0];
  nextSong--;

  if(nextSong === 0){
    nextSong = songs.length;
  }

  audio.src = 'Musik/song' + nextSong + '.mp3';
  audio.load();
  audio.play();

});

stopButton.addEventListener('click', onClick);

function onClick(event){

  if (isPlaying) {
    audio.pause();
    playButton.src = 'images/ic_play_arrow_white_24dp.png';
    isPlaying = false;
  } else {
    audio.play();
    playButton.src = 'images/ic_pause_white_24dp.png';
    isPlaying = true;
  }
}


function playList(numberOfSongs){
  let num = 1;
  for (var i = 0; i < numberOfSongs; i++) {
    let song = "song" + num;
    songs.push(song);
    num++;
  }
}

audio.addEventListener('ended',function(){
  var test = audio.src.match(/\d+/g);
  let nextSong = test[0];
  nextSong++;

  if(nextSong > songs.length){
    nextSong = 1;
  }

  audio.src = 'Musik/song' + nextSong + '.mp3';
  audio.load();
  audio.play();
    });

playList(3);
audio.load();
audio.play();
// window.onload = function() {
//   audio.load();
//   audio.play();
// };
