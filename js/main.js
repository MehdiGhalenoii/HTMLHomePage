

$(function(){

 $(".res-t-menu").click(function(e){
 	e.preventDefault();
 	$(".navbar").addClass("open");
 	$(".cover-menu").fadeIn(400);
 })

 $(".navbar .close").click(function(e){
 	e.preventDefault();
 	$(".navbar").removeClass("open");
 	$(".cover-menu").fadeOut(400);
 })

 $('.slider-box').not(":first-child").hide();

 $(".slider-nav li a").click(function(e){

 	e.preventDefault();

 	if($(this).parent().attr("data-slider-i") === $(".nav-sli-active").attr("data-slider-i")){
 		return false;
 	}

 	var on_i = $(".nav-sli-active").attr("data-slider-i");
 	var i = $(this).parent().attr("data-slider-i");
 	var slide_on = ".slider-box:eq("+on_i+")";
 	$(".nav-sli-active").removeClass("nav-sli-active");
 	$(this).parent().addClass("nav-sli-active");
 	var slide = ".slider-box:eq("+i+")";
 	$(slide_on).hide();
 	$(slide).fadeIn(1000);
 })



var cou = 1;
var slider = function(){
	var max = $(".slider-box").length;
	var on_i2 = $(".nav-sli-active").attr("data-slider-i");
	
	var slide_on2 = ".slider-box:eq("+on_i2+")";
	$(slide_on2).hide();
	$("li.nav-sli-active").removeClass("nav-sli-active");
	var on_next_i2 = (Number(on_i2) < max-1) ?  Number(on_i2) + 1 : 0 ;
	var slide_next_on2 = ".slider-box:eq("+on_next_i2+")";
	
	$("[data-slider-i="+on_next_i2+"]").addClass("nav-sli-active");
	$(slide_next_on2).fadeIn(1000);
	
}

var slider_timer = setInterval(slider, 3000);
	
$(".h-box-sli").mouseenter(function(){
 	clearInterval(slider_timer);
 }).mouseleave(function(){
 	slider_timer = setInterval(slider, 3000);
 });

});
