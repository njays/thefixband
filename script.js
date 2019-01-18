

function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}


function unCheck() {
    setTimeout(function() { document.getElementById("navi-toggle").checked = false}, 300 );
}

function contentAbout() {
	document.getElementById('content').style.opacity = ".0";

	setTimeout(function() {
	document.getElementById("content").innerHTML =	"<div class='content__about-text'>" +
            "<h1>ABOUT</h1>" +
            "<p>Looking for a band that’s lively, high quality and vibrant? <b>The Fix</b> can provide you with live music that promises to entertain and get you on your feet. Based in <b>Cardiff</b>, but willing to travel, <b>The Fix</b> play exciting arrangements of current music, performing them with style and energy. " +
"We are a 5-8-piece band comprising of some of the best UK musicians who have been playing together for many years. <br>Our line up is as follows:<br>" +

"<b>8 piece:</b> Drums, Bass, Guitar, Keys, Sax, Trumpet, Trombone and Singer" +
"(a smaller band is negotiable consisting of Drums, Bass, Guitar, Keys, Sax and Singer)</p>" +
        "</div>" +
        "<div class='content__about2 u-flex'>" +
        "    <img class='content__about2-image' src='img/wideshot.png' alt='bandphoto'>" +
        "</div>";

	document.getElementById('content').style.opacity = "1";
	},500)};

function contentSetlist() {
	document.getElementById('content').style.opacity = ".0";

	setTimeout(function() {
	document.getElementById("content").innerHTML =	
                "<div class='u-color-black'>" +
                "<div class='u-center-text'><h1>SETLIST</h1></div>" +
                "<div class='u-flex'>" +
                "<ul class='section-text__setlist-list u-padding-right'>" +
                        "<li class='section-text__setlist-listitem'>INTO YOU<br><b>Ariana grande</b></li>" +
                        "<li class='section-text__setlist-listitem'>FEEL IT STILL<br><b>Portugal, The Man</b></li>" +
                        "<li class='section-text__setlist-listitem'>THERE'S NOTHING HOLDING ME BACK<br><b>Shawn Mendes</b></li>" +
                        "<li class='section-text__setlist-listitem'>SORRY NOT SORRY<br><b>Demi Lovato</b></li>" +
 "</ul>" +

                "<ul class='section-text__setlist-list u-padding-right'>" +
                        "<li class='section-text__setlist-listitem'>LOCKED OUT OF HEAVEN<br><b>Bruno Mars</b></li>" +
                        "<li class='section-text__setlist-listitem'>THANK YOU, NEXT<br><b>Ariana Grande</b></li>" +
                        "<li class='section-text__setlist-listitem'>LOST IN JAPAN<br><b>Sean mendes</b></li>" +
                        "<li class='section-text__setlist-listitem'>2002 <br> <b>Anne Marie</b></li>" +

                    "</ul>" +
                   
                    "<ul class='section-text__setlist-list u-padding-right'>" +
                        "<li class='section-text__setlist-listitem'>HYMN FOR THE WEEKEND<br><b>Coldplay</b></li>"+
                        "<li class='section-text__setlist-listitem'>ALL I AM IS YOU<br><b>Jess Glynne</b></li>"+
                        "<li class='section-text__setlist-listitem'>CAME HERE FOR LOVE<br><b>Sigala</b></li>"+
                        "<li class='section-text__setlist-listitem'>SENORITA<br><b>Justin Timberlake</b></li>"+
                        "</ul>" +

                "<ul class='section-text__setlist-list u-padding-right'>" +
                        "<li class='section-text__setlist-listitem'>24K MAGIC<br><b>Bruno Mars</b></li>"+
                        "<li class='section-text__setlist-listitem'>SHUT UP AND DANCE WITH ME<br><b>Walk The Moon</b></li>"+
                        "<li class='section-text__setlist-listitem'>SHOTGUN<br><b>George Ezra</b></li>"+
                        "<li class='section-text__setlist-listitem'>I JUST GOT PAID<br><b>Sigala</b></li>"+
                        "<li class='section-text__setlist-listitem'>BODY<br><b>Loud Luxury</b></li>"+
                    "</ul>" +
                "</div>" +
                "<div class='u-center-text'>And many more...</div></div>";

	document.getElementById('content').style.opacity = "1";
	},500)};

function contentWeddings() {
	document.getElementById('content').style.opacity = ".0";

	setTimeout(function() {
	document.getElementById("content").innerHTML =	"<div class='section-text-wedding'><div class='u-center-text'><h1>WEDDINGS/PARTIES</h1></div><p><br>Whatever the occasion, <b>The Fix</b> has got you covered. We’ll get you up and dancing to all the songs you love to sing along to. For more information on our set list <a href='#setlist' onClick='contentSetlist()'>click here</a>. " +
"Whether you’re looking for music for your special day, a band to get your party started or something that blends more into the background, The Fix can provide it for you. " +
"We can offer you:<br></p><ul><li>Singer & Piano</li><li>Jazz Sax & Piano</li><li>Jazz trio</li><li>Jazz quartet</li><li>Jazz quintet</li><li>DJ Service</li><li>Sax and DJ Service</li></ul><p>Be sure to contact us about your special day, and we will be with you every step of the way to make sure your day is all about you! </p>" +
  "</div>"


	document.getElementById('content').style.opacity = "1";
	},500)};

function contentContact() {
    document.getElementById('content').style.opacity = ".0";

    setTimeout(function() {
    document.getElementById("content").innerHTML =  "<div class='content__contact'>" +
            "<h1>Contact Us</h1>" +
            "<p>07733154896<br>" +
"  thefixcardiff@gmail.com<br>" +
    "<a href='https://www.instagram.com/the.fix.band/''><i class='u-huge fab fa-instagram'></i></a><br>" +
    "<a href='https://www.facebook.com/the.fix.band.cardiff/''><i class='u-huge fab fa-facebook-square'></i></a>" +
        "</div>"
        ;

    document.getElementById('content').style.opacity = "1";
    },500)};



function contentClear() {
	document.getElementById('content').style.opacity = ".0";
};



  if (location.hash === '#contactus') {
    document.addEventListener("DOMContentLoaded", contentContact());
  };

// function() {
//   // Fade out
//   project.style.opacity = 0;

//   // Wait for the transition 
//   setTimeout(function(){ 
//       // Load new content
//       projName.innerHTML = projects[projIndex].name;
//       projDescr.innerHTML = projects[projIndex].description;
//       projImg.src = projects[projIndex].img;
//       projImg.style.width = '250px';
//       projImg.style.height = '150px';
//       projIndex = (projIndex + 1) % projects.length;
//       // Fade in
//       project.style.opacity = 1;
//   },500);