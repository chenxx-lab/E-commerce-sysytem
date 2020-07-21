
$(function() {
	$(".Mydisplay").click(function() {
		$(this).next(".currentDd").slideToggle(300).siblings(".currentDd").slideUp(500);
	})
	$(".currentDe1").click(function() {
		$(this).css('display','block');
	})
	$(".a").click(function() {
		$(".img1").toggleClass("jiantou");
	})
	$(".b").click(function() {
		$(".img2").toggleClass("jiantou");
	})
	$(".c").click(function() {
		$(".img3").toggleClass("jiantou");
	})
	$(".d").click(function() {
		$(".img4").toggleClass("jiantou");
	})
	$(".e").click(function() {
		$(".img5").toggleClass("jiantou");
	})
	$(".f").click(function() {
		
		$(".img6").toggleClass("jiantou");
	})
	$(".g").click(function() {
		$(".img7").toggleClass("jiantou");
	})
	
	
	$(".currentDd").click(function(){
		$(".rowsaa").css('dispaly','none');
		$(".iframe").css('display','block');
	})
})

	$(function(){
	$(".record").click(function(){
	$(".select").toggle();
	})
	})
	