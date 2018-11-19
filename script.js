function contentAbout () {
	document.getElementById("content").innerHTML =	"<div class='content'>" +
            "<h1>ABOUT</h1>" +
            "<p>Looking for a band that’s lively, high quality and vibrant? <b>The Fix</b> can provide you with live music that promises to entertain and get you up on your feet. Based in <b>Cardiff</b>, but willing to travel, <b>The Fix</b> play exciting arrangements of current music, performing them with style and energy. " + 
"We are a 5-8-piece band comprising of some of the best UK musicians who have playing together 4 years. <br>Our line ups are as follows:<br>" +
"6 piece: Drums, Bass, Guitar, Keys, Sax and Singer<br>" +
"8 piece: Drums, Bass, Guitar, Keys, Sax, Trumpet, Trombone and Singer</p>" +
        "</div>" +
        "<div class='content-2'>" +
        "    <img class='content-2__image' src='img/wideshot.png' alt='bandphoto'>" +
        "</div>"

    console.log("it worked");


	document.getElementById('content').style.opacity = "1";
	}

function contentClear () {
	document.getElementById("content").innerHTML = "";
	document.getElementById('content').style.opacity = ".0";
}