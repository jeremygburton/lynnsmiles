

//document.getElementsByTagName("h1")[0].style.fontSize = "40px";

$('#loading').hide();


function imageReplacer() {
	//$('#loading').show(50).delay(800).hide(50);

	document.getElementById("view-frame").className = "animated-out";

	setTimeout(function(){ document.getElementById("view-frame").className = document.getElementById("view-frame").className.replace( /(?:^|\s)animated-out(?!\S)/g , 'animated-in' );}, 1700);

	setTimeout(displayNewImage, 1700);

	//setTimeout( document.getElementById("view-frame").className = "animated-in"; , 3000);
}

//document.getElementById("button").onclick = randomTest;


function displayNewImage(){
		var view = document.getElementById("view-frame");
		
		var randomNumber = Math.floor(Math.random() * 50) + 1;
		var imgName = "img_" + randomNumber + ".jpg";

		view.src= "img" + "/" + imgName ;

}


function randomTest(){
	var randomNumber = Math.floor(Math.random() * 20) + 1;
	document.getElementById("rand").innerHTML = randomNumber;
}


// EVENT LISTENER FOR THE HAPPINESS BUTTON
var el = document.getElementById("smiles-button");

el.addEventListener("click", imageReplacer, false);




// event listener experiment

/*
var el = document.getElementById("title");
var tapCount = 0;

el.addEventListener("click", tapTap, false);


function tapTap(){
	tapCount = tapCount + 1;

	if (tapCount > 4) {
		randomTest();
	}
}

*/
