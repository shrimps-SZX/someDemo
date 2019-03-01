var timer = null;
var opacityChange = function (obj,alpha,end) {
	var initial = alpha*100;
	var speed;
	startrun(end*100);
	function startrun(target){
		timer = setInterval(function(){
			//clearInterval(timer);
			if(initial<target){
				speed = 5;
			}
			else{
				speed = -5;
			}
			if(initial == target){
				clearInterval(timer);
			}
			else{
				initial = Math.round(initial + speed);
				console.log(initial);
				obj.style.opacity = initial/100;
			}
		},50)
	}
}