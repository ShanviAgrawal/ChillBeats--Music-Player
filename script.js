console.log("Welcome");

//initialize the variables
let songIndex=0; 
let audioElement = new Audio('songs/06 - Jogi (Female) (SongsMp3.Com).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs=[
    {songName:"", filePath: "", coverPath:""},
    {songName:"", filePath: "", coverPath:""},
    {songName:"", filePath: "", coverPath:""},
    {songName:"", filePath: "", coverPath:""},
    {songName:"", filePath: "", coverPath:""},
    {songName:"", filePath: "", coverPath:""},
    {songName:"", filePath: "", coverPath:""},
    {songName:"", filePath: "", coverPath:""},


]

//audioElemt.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){

        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0.8;
    }

    else{
        
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
    

})

//listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
//update seekbar
})