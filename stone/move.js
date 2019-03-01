//var oDemo = document.getElementsByClassName('demo')[0];
$(document).ready(function(){
	var oDemo = $('.demo')[0];
	$(".demo").mousedown(function(ev){
		oDemo.style.opacity = 0.5;
		var oEvent = ev||event;
		var a = oEvent.clientX;
		var b = oEvent.clientY;
		var i = a;
		var h = b;
		document.onmousemove=function(ev){
			var oEvent = ev||event;
			var c = oEvent.clientX;
			var d = oEvent.clientY;
			var e = oDemo.offsetLeft + c - i;
			var f = oDemo.offsetTop + d - h;
			var j = e + "px";
			var g = f + "px";
			oDemo.style.left = j;
			oDemo.style.top = g;
			i = c;
			h = d;				
		}
	})
	$(document).mouseup(function(ev){
		oDemo.style.opacity = 1;
		document.onmousemove=document.onmouseup=null;
	})
})
