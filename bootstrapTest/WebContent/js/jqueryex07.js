/**
 *  FIFO에서 unshift -> 앞에서 뺴기
			shift	-> 앞에서 넣기
			pop		-> 뒤에서 빼기
			push	-> 뒤에서 넣기
 */
$(function(){
	var distance = new Array(0,600,1200,1800);
	$(".gallery").text(distance.join(", "));
	
	$(".prev").click(function(e){
		e.preventDefault();
		var arrayData = distance.pop();
		distance.unshift(arrayData);
		$(".gallery").text(distance.join(", "));
	});
	
	$(".next").click(function(e){
		e.preventDefault();
		var arraydata = distance.shift();
		distance.push(arraydata);
		$(".gallery").text(distance.join(", "));
	});
});