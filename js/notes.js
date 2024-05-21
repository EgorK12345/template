function makeNotifycation(text, time, x,y){
	var notifycation = document.createElement("div");

	x = x || "right";
	y = y || "bottom";

	notifycation.className = "notifycation" + " " + x + " " + y;
	notifycation.innerHTML = text;

	document.body.appendChild(notifycation);

	setTimeout(deleteNotifycation, time);
}

makeNotifycation("Strange notifycation", 5000);

function deleteNotifycation(){
	var notifycation = document.querySelector(".notifycation");

	document.body.removeChild(notifycation);
}