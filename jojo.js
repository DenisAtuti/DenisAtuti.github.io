autoType(".type-j",200);
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}

    var incrementScroll = function() {
        window.scrollBy(0, 200) ;
    }

    var scrollLoopId;
    var startScrollLoop = function() {
        scrollLoopId = setInterval( incrementScroll, 95000) ; 
    }

    var stopScrollLoop = function() {
        clearInterval( scrollLoopId ) ;
    }

    function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}
function comparison(){
  if(getWidth() <= 520){
    stopScrollLoop();
  }else{
    startScrollLoop();
  }
}