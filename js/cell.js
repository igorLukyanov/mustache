$(document).ready(function(){
	var b=$('#btn');
	b.click(function(){
		$('#nav').toggle();
	});


	$(window).resize(function(){
		if($(window).width() > 700){
			$('#nav').hide();
		}
	});

	


});