

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
            "<p>Looking for a band that’s lively, high quality and vibrant? <b>The Fix</b> can provide you with live music that promises to entertain and get you up on your feet. Based in <b>Cardiff</b>, but willing to travel, <b>The Fix</b> play exciting arrangements of current music, performing them with style and energy. " + 
"We are a 5-8-piece band comprising of some of the best UK musicians who have playing together 4 years. <br>Our line ups are as follows:<br>" +
"6 piece: Drums, Bass, Guitar, Keys, Sax and Singer<br>" +
"8 piece: Drums, Bass, Guitar, Keys, Sax, Trumpet, Trombone and Singer</p>" +
        "</div>" +
        "<div class='content__about2 u-flex'>" +
        "    <img class='content__about2-image' src='img/wideshot.png' alt='bandphoto'>" +
        "</div>";

	document.getElementById('content').style.opacity = "1";
	},500)};

function contentSetlist() {
	document.getElementById('content').style.opacity = ".0";

	setTimeout(function() {
	document.getElementById("content").innerHTML =	"<div class='content__setlist u-center-text'>" +
            "<h1>SETLIST</h1>" + "<div class='u-flex'>" +
                    "<div>" +
                    "<ul class='section-text__setlist-list'>"+
                        "<li class='section-text__setlist-listitem'>Can't Stop The Feeling <br><b>Justin Timberlake</b></li>"+
                        "<li class='section-text__setlist-listitem'>2002 <br> <b>Anne Marie</b></li>"+
                        "<li class='section-text__setlist-listitem'>Feel It Still<br><b>Portugal, The Man</b></li>"+
                        "<li class='section-text__setlist-listitem'>I'll Be There<br><b>Jess Glynn</b></li>"+
                    "</ul>"+
                    "</div>"+
                     "<div>" +
                    "<ul class='section-text__setlist-list'>"+
                        "<li class='section-text__setlist-listitem'>Can't Stop The Feeling <br><b>Justin Timberlake</b></li>"+
                        "<li class='section-text__setlist-listitem'>2002 <br> <b>Anne Marie</b></li>"+
                        "<li class='section-text__setlist-listitem'>Feel It Still<br><b>Portugal, The Man</b></li>"+
                        "<li class='section-text__setlist-listitem'>I'll Be There<br><b>Jess Glynn</b></li>"+
                    "</ul>"+
                    "</div>"+
                     "<div>" +
                    "<ul class='section-text__setlist-list'>"+
                        "<li class='section-text__setlist-listitem'>Can't Stop The Feeling <br><b>Justin Timberlake</b></li>"+
                        "<li class='section-text__setlist-listitem'>2002 <br> <b>Anne Marie</b></li>"+
                        "<li class='section-text__setlist-listitem'>Feel It Still<br><b>Portugal, The Man</b></li>"+
                        "<li class='section-text__setlist-listitem'>I'll Be There<br><b>Jess Glynn</b></li>"+
                    "</ul>"+
                    "</div>"+
                   "</div>" +
        "</div>";

	document.getElementById('content').style.opacity = "1";
	},500)};

function contentWeddings() {
	document.getElementById('content').style.opacity = ".0";

	setTimeout(function() {
	document.getElementById("content").innerHTML =	"<div class='content__weddings u-center-text'>" +
            "<h1>WEDDINGS</h1>" + "<div class='u-flex'>" +"<div class='content__weddings1 u-center-text-off'>" +
            "<p>Looking for an outstanding band for you <b>wedding</b> night? Then you are looking in the right place! <b>The Fix</b> are literally here to fix your evening! <br>"+
"We are a 5-8 piece band playing all the top 40 songs in the charts, ranging from Coldplay to Ed Sheeran. Whatever song gets you singing along to the radio, we’ll get you dancing along to on the dance floor!" +
" For more information on our set list <a href='#' onClick='contentSetlist()''>click here</a> <br>Looking for more music on your special day? Maybe background music at dinner? Music down the aisle? Want to keep the party going after the band?</p></div>" +
"<div class='content-2 u-center-text-off'><p>Look no further than The Fix as we have many different types of bands." +
"We can offer you:<br></p><ul><li>Singer & Piano</li><li>Jazz Sax & Piano</li><li>Jazz trio</li><li>Jazz quartet</li><li>Jazz quintet</li><li>DJ Service</li><li>Sax and DJ Service</li></ul><p>Be sure to contact us about your special day, and we will be with you every step of the way to make sure your day is all about you! </p></div>";

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