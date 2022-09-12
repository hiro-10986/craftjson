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
    document.getElementById('download').style.visibility = 'visible',
    document.getElementById('slid').style.visibility = 'visible';
}

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


function myfunc(value) {
  var check1 = document.getElementById("agree").checked;
  var download = document.getElementById("download");
  if(check1 == true){
     download.classList.remove("disabled");
     }
  else{
     download.classList.add("disabled");
  }
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

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });