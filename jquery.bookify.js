/* Generates book reader interface for plain HTML file */

var lines_number = 16;
var line_height = 30;
var scroll_step = lines_number * line_height;

var log;

$(function() {
  $('body').wrapInner('<section id="book" />');
  function up() { $('#book').animate({scrollTop:"-="+scroll_step+"px"}, 0); localStorage[window.location.href] = $('#book').scrollTop(); }
  function down() { $('#book').animate({scrollTop:"+="+scroll_step+"px"}, 0); localStorage[window.location.href] = $('#book').scrollTop(); }
	$(window).click(function(e){if(e.target.nodeName == "HTML"){if(e.clientY < $(this).height()/2){up();}else{down();}}});
	$(window).keyup(function(e){if(e.keyCode == 40 || e.keyCode == 32){down();}else if(e.keyCode == 38) {up();}});
	if(localStorage[window.location.href]){$('#book').animate({scrollTop:localStorage[window.location.href]}, 0);}
});

document.write(
  "<style>" +
  "* { margin: 0; padding: 0; }" +
  "body { background-color: #EBEBE4; }" +
  "#book {" +
  "  position: absolute;" +
  "  top: 50%;" +
  "  left: 50%;" +
  "  overflow: hidden;" +
  "  font-family: Georgia,serif;" +
  "  font-size: 24px;" +
  "  line-height: "+line_height+"px;" +
  "  width: 900px;" +
  "  height: "+scroll_step+"px;" +
  "  margin-top: -"+scroll_step/2+"px;" +
  "  margin-left: -450px;" +
  "}" +
  "#book p { margin-bottom: "+line_height+"px; padding: 0 5px; }" +
  "</style>"
);