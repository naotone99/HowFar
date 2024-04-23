/**
 * 
 */

//ボタンで画面の表示切替
$(".btn1").click(function() {
	$(".btn1view").slideToggle();
	$(".btn2view").hide();
	$(".btn3view").hide();
	$(".btn4view").hide();
});

$(".btn2").click(function() {
	$(".btn1view").hide();
	$(".btn2view").slideToggle();
	$(".btn3view").hide();
	$(".btn4view").hide();
});

$(".btn3").click(function() {
	$(".btn1view").hide();
	$(".btn2view").hide();
	$(".btn3view").slideToggle();
	$(".btn4view").hide();
});

$(".btn4").click(function() {
	$(".btn1view").hide();
	$(".btn2view").hide();
	$(".btn3view").hide();
	$(".btn4view").slideToggle();
});