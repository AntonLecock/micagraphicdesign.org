$(function () {
    var s = skrollr.init({
        forceHeight: false
    });

    $( "#main-navigation" ).hover(function() {
  	$( "#utility-navigation" ).fadeToggle(100);
  	$( "#brand" ).toggleClass("passive"); 
	});
});
