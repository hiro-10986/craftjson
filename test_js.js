window.onload = function() {
  const load = document.getElementById('loading');
  load.classList.add('loaded');
}
if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
ScrollReveal().reveal('.box-l', {
  origin: 'right',
  distance: '0px',
  scale: 0.3,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 300,
  delay :200,
  reset: false,
  viewFactor: 0.1
});

ScrollReveal().reveal('.box-r', {
  origin: 'right',
  distance: '0px',
  scale: 0.3,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 300,
  delay :200,
  reset: false,
  viewFactor: 0.1
});

ScrollReveal().reveal('.box-i', {
  origin: 'right',
  distance: '0px',
  scale: 0.3,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 300,
  delay :200,
  reset: false
});

ScrollReveal().reveal('.box-ii', {
  origin: 'right',
  distance: '0px',
  scale: 0.3,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 300,
  delay :300,
  reset: false
});

ScrollReveal().reveal('.box-iii', {
  origin: 'right',
  distance: '0px',
  scale: 0.3,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 300,
  delay :400,
  reset: false
});

ScrollReveal().reveal('.box-iiii', {
  origin: 'right',
  distance: '0px',
  scale: 0.3,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 300,
  delay :500,
  reset: false
});

}else{
ScrollReveal().reveal('.box-l', {
  origin: 'left',
  distance: '50px',
  scale: 1,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 1200,
  delay :200,
  reset: false,
  viewFactor: 0.2
});

ScrollReveal().reveal('.box-r', {
  origin: 'right',
  distance: '50px',
  scale: 1,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 1200,
  delay :200,
  reset: false,
  viewFactor: 0.2
});

ScrollReveal().reveal('.box-i', {
  origin: 'right',
  distance: '0px',
  scale: 0.3,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 300,
  delay :200,
  reset: false
});

ScrollReveal().reveal('.box-ii', {
  origin: 'right',
  distance: '0px',
  scale: 0.3,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 300,
  delay :400,
  reset: false
});

ScrollReveal().reveal('.box-iii', {
  origin: 'right',
  distance: '0px',
  scale: 0.3,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 300,
  delay :600,
  reset: false
});

ScrollReveal().reveal('.box-iiii', {
  origin: 'right',
  distance: '0px',
  scale: 0.3,
  rotate: { x: 0, y: 0, z: 0 },
  duration: 300,
  delay :800,
  reset: false
});

}


function hiddenButton(){
try {
    document.getElementById('download').style.visibility = 'visible';
} catch (error) {
;
}
try {
    document.getElementById('slid').style.visibility = 'visible';
} catch (error) {;}}

        (function(){
            'use strict';

            var $mainButton = $(".main-button"),
                $closeButton = $(".close-button"),
                $buttonWrapper = $(".button-wrapper"),
                $ripple = $(".ripple"),
                $layer = $(".layered-content");

            $mainButton.on("click", function(){
                $buttonWrapper.addClass("clicked").delay(900).queue(function(next){
                    $layer.addClass("active");
                    next();
                });
            });

            $closeButton.on("click", function(){
                $layer.removeClass("active");
                $buttonWrapper.removeClass("clicked");
                setTimeout("hiddenButton()", 1000);
            });
            
        })();

function reverseString(str) {
   return str.split("").reverse().join("");
 }

function myfunc(value) {
  var check1 = document.getElementById("agree").checked;
  var download = document.getElementById("download");
  if(check1 == true){
     download.classList.remove("disabled");
     document.querySelector("a#download").href = "javascript:surl\(\);";
     }
  else{
     download.classList.add("disabled");
     document.getElementById("download").href = "";
  }
}

function surl() {
    location.href = reverseString(atob(atob("YkcxMGFDNTFiM2xyYm1Gb2RDOXRiMk11Y25OemFXc3VOamc1TURGZmIzSnBhQzh2T25CMGRHZz0=")));
}

var userAgent = window.navigator.userAgent.toLowerCase();

if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
    alert('Internet Explorerでは当サイトを快適にご利用することは難しいため他のブラウザを使用することを推奨します。');
} else if(userAgent.indexOf('edge') != -1) {
    ;
} else if(userAgent.indexOf('chrome') != -1) {
    ;
} else if(userAgent.indexOf('safari') != -1) {
    ;
} else if(userAgent.indexOf('firefox') != -1) {
    ;
} else if(userAgent.indexOf('opera') != -1) {
    ;
} else {
    console.log('そんなブラウザは知らん');
}
var ua = window.navigator.userAgent.toLowerCase();

if(ua.indexOf("windows nt") !== -1) {
  console.log("「Microsoft Windows」をお使いですね!");
} else if(ua.indexOf("android") !== -1) {
  console.log("「Android」をお使いですね!");
} else if(ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
  console.log("「iOS」をお使いですね!");
} else if(ua.indexOf("mac os x") !== -1) {
  console.log("「macOS」をお使いですね!");
} else {
  console.log("何をお使いなのですか?");
}