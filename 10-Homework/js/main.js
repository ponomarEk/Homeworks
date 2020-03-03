(function(){
	document.addEventListener("keypress",function(event){

		let button = document.getElementById(event.key);
		let buttons = document.querySelectorAll(".button");
		buttons.forEach(curr=>{
			if(curr!==button){
				curr.classList.remove("super")
			}
		})
		button.classList.add("super");
		let audio = document.getElementById(`audio_${event.key}`);
		audio.play();
	});
	
})();