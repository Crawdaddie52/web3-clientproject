$(document).ready(function(){

	$(function() {

	   $("body").mousewheel(function(event, delta) {
	   		if($(window).width() < 480){ 

		      this.scrollLeft -= (delta * 30);
		    
		      event.preventDefault();
	      }
	   });

	});
});