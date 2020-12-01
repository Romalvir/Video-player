//Reference the elements


const player = document.querySelector(".player");
const video= player.querySelector(".viewer");
const progress = player.querySelector(".progress")
const progressBar = player.querySelector(".progress__filled")
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("data-skip");
const ranges = player.querySelectorAll(".player__slider");

// build the function


function togglePlay(){
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
}

//making a function to update button
// toggle and text content 
function updateButton(){
	const icon = this.paused ? "►" : "❚ ❚";
	toggle.textContent = icon;
}

//make a function skip
function skip(){
	
}


// hook up the event listeners

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay)