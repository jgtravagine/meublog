$(document).ready(function(){
	$(".menu-resposive").click(function(){
        $(".menu").slideToggle("slow");
    });
});
$(document).ready(function(){
	$("#traduzir").keypress(function(){
		$(".teportugues").hide();
		$(".teingles").show();;		
	});	
	$("#traduziri").keypress(function(){
		$(".teingles").hide();
		$(".teportugues").show(); 
	});	
});
function br() {
	$(".teingles").hide();
	$(".teportugues").show();
};
function eua() {
	$(".teportugues").hide();
	$(".teingles").show();;
};