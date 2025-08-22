let isPlaying = false;

function togglePlay() {
    const btn = document.getElementById("playBtn");
    const bar = document.querySelector(".filled");

    if (isPlaying) {
        btn.src = "play-button.png";   
        bar.style.animationPlayState = "paused"; 
        isPlaying = false;
    } else {
       if(bar.offsetWidth===bar.parentElement.offsetWidth) {
        bar.style.animation="none";
        bar.offsetHeight;
        bar.style.animation=null;
       }
       btn.src="pause.png";
       bar.style.animationPlayState="running";
       isPlaying=true;
    }
}
