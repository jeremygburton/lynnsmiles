
$("#overlay").hide();
$("#goatEmergency").hide();
$("#inCase").hide();
$("#goatEmergencyTitle").hide();


// FUNCTIONS *********************************************************************
function imageReplacer() {

	document.getElementById("view-frame").className = "animated-out";

	setTimeout(function(){ document.getElementById("view-frame").className = document.getElementById("view-frame").className.replace( /(?:^|\s)animated-out(?!\S)/g , 'animated-in' );}, 1700);

	setTimeout(displayNewImage, 1700);

	//setTimeout( document.getElementById("view-frame").className = "animated-in"; , 3000);
}



function displayNewImage(){
		var view = document.getElementById("view-frame");
		
		var randomNumber = Math.floor(Math.random() * 65) + 1;
		var imgName = "img_" + randomNumber + ".jpg";

		view.src= "img" + "/" + imgName ;

}



function tapTap(){
	tapCount = tapCount + 1;

	if (tapCount > 4) {
		showGoatEmergency();

		setTimeout(hideGoatEmergency, 10000);

		tapCount = 0;
	}
}



function showGoatEmergency(){
	$("#overlay").show();
	$("#goatEmergency").show();
	$("#inCase").show();
	$("#goatEmergencyTitle").show();
}


function hideGoatEmergency(){
	$("#overlay").hide();
	$("#goatEmergency").hide();
	$("#inCase").hide();
	$("#goatEmergencyTitle").hide();
}


// EVENT LISTENER FOR THE HAPPINESS BUTTON *********************************************************************
var el = document.getElementById("smiles-button");

el.addEventListener("click", imageReplacer, false);


// EVENT LISTENER FOR THE GOAT EMERGENCY *********************************************************************


var GOAT = document.getElementById("siteTitle");
var tapCount = 0;

GOAT.addEventListener("click", tapTap, false);





