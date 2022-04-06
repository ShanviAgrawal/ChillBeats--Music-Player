console.log("Welcome");

//initialize the variables
let songIndex=0; 
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Jogi(Female)", filePath: "songs/1.mp3", coverPath:"images/lam.jpg"},
    {songName:"Entertainment", filePath: "songs/2.mp3", coverPath:"images/dua.jpg"},
    {songName:"Senorita", filePath: "songs/3.mp3", coverPath:"images/lam.jpg"},
    {songName:"Unstoppable", filePath: "songs/4.mp3", coverPath:"images/dua.jpg"},
    {songName:"Jogi(Female)", filePath: "songs/5.mp3", coverPath:"images/lam.jpg"},
    {songName:"Entertainment", filePath: "songs/6.mp3", coverPath:"images/dua.jpg"},
    {songName:"Senorita", filePath: "songs/7.mp3", coverPath:"images/lam.jpg"},
    {songName:"Unstoppable", filePath: "songs/8.mp3", coverPath:"images/dua.jpg"},
   
]



songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

//audioElemt.play()

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){

        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0.4;
    }

    else{
        
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
    

});

//listen to Events

//update seekbar
audioElement.addEventListener('timeupdate', ()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

//increase duration of seekbar
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    });


const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    }

    )}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex =  parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 0.4;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    
})

document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>7){
        songIndex=0;
    }
    else{
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 0.4;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})


document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 0.4;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})