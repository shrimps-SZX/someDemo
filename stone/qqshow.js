var oDiv = $('.div_qq')[0];
$(document).ready(function () {
	$(".center_home").mouseover(function(){
		//clearInterval(timer);
		//let start = Math.round(oDiv.style.opacity);
		//opacityChange(oDiv,start,1);
		$(".center_home")[0].style.opacity=0.5;
		console.log(oDiv.style.left);
		qqmove(oDiv,'40px',1);
	})
	$(".center_home").mouseout(function(){
		//clearInterval(timer);
		//let start = Math.round(oDiv.style.opacity);
		//opacityChange(oDiv,start,0);
		$(".center_home")[0].style.opacity=1;
		console.log(oDiv.style.left);
		qqmove(oDiv,'150px',0);

	})

/*
	$(".center_home").mouseover(function(){
		clearInterval(timer);
		let start = oDiv.style.opacity;
		opacityChange(oDiv,start,1);
	})
	$(".center_home").mouseout(function(){
		clearInterval(timer);
		let start = oDiv.style.opacity;
		opacityChange(oDiv,start,0);
	})
	*/
})
var qqmove = function(obj,left,opacity){
	clearInterval(timer);
	let start = oDiv.style.opacity;
	opacityChange(oDiv,start,opacity);
	obj.style.left = left;
	//obj.style.opacity = opacity;
	//let start = obj.style.opacity;
	//opacityChange(obj,start,opacity);
}
/*
$(document).ready(function () {
	$(".center_home").mouseover(function(){
		$('.div_qq').animate({
			left: '40px',
			opacity: 1
		},1000);
	})

	$(".center_home").mouseout(function(){
		$('.div_qq').animate({
			left: '150px',
			opacity: 0
		},1000);
	})
})*/