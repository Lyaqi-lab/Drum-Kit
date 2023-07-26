function handleClick(){
	// var index;
	// var whichMusic = "sounds/tom-" + index + ".mp3";
	var content = this.textContent;
	switch (content){
		case "w": var audio = new Audio("sounds/tom-1.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "a": var audio = new Audio("sounds/tom-2.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "s": var audio = new Audio("sounds/tom-3.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "d": var audio = new Audio("sounds/tom-4.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "k": var audio = new Audio("sounds/crash.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "l": var audio = new Audio("sounds/kick-bass.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "j": var audio = new Audio("sounds/snare.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
	}
	
}

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++){
	document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}


document.addEventListener("keypress",handlePress);
function handlePress (event){
	var content = event.key;
	switch (content){
		case "w": var audio = new Audio("sounds/tom-1.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "a": var audio = new Audio("sounds/tom-2.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "s": var audio = new Audio("sounds/tom-3.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "d": var audio = new Audio("sounds/tom-4.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "k": var audio = new Audio("sounds/crash.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "l": var audio = new Audio("sounds/kick-bass.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
		case "j": var audio = new Audio("sounds/snare.mp3");
						audio.play();
						ButtonAnimation(content);
		break;
	}
}

function ButtonAnimation(currentKey){
	var activeKey = document.querySelector("." + currentKey);
	activeKey.classList.add("pressed");
	setTimeout(function (){activeKey.classList.remove("pressed");},100); //unit:1ms
}
