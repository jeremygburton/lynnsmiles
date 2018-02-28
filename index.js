

//document.getElementsByTagName("h1")[0].style.fontSize = "40px";

$('#loading').hide();


function imageReplacer() {
	//$('#loading').show(50).delay(800).hide(50);


	setTimeout(displayNewImage, 500)
}

//document.getElementById("button").onclick = randomTest;


function displayNewImage(){
		var view = document.getElementById("view-frame");
		
		var randomNumber = Math.floor(Math.random() * 42) + 1;
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
