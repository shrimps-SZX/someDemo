function hide(id){
	$("#"+ id +"span").slideUp();
}
function idcheck(id,str) {
	var _id = id + "span";
	if($("#"+id).get(0).value==""){
		$("#" + _id).get(0).innerHTML=str;
		$("#"+ _id).slideDown();
	}
	else{
		$("#" + _id).get(0).innerHTML="1";
	}

}
function hideLabel(id){
	var _id = id + "-tips";
	if($("#" + id).get(0).value!=""){
		$("#" +_id).hide();
	}
}
function pic(){
	var wid = document.getElementsByClassName("side")[0];
	var widd = document.getElementsByClassName("main-wraper")[0];
	if(window.innerWidth <= 1000){
		wid.style.display = 'none';
		widd.style.marginLeft = "0px";
	}
	else if(window.innerWidth-720 <= 480){
		wid.style.display = 'block';
		var winWidth = window.innerWidth-720;
		var _winWidth = winWidth + "px";
		wid.style.width = _winWidth;
		widd.style.marginLeft = _winWidth;
	}
	else{
		wid.style.display = 'block';
		wid.style.width = '480px';
		widd.style.marginLeft = "480px";
	}
	
}

$("#tele").focus(function(){
	$("#mess").show();
});
$("#tele").blur(function(){
	if($("#tele").get(0).value == ''){
		console.log("3"); 
		$("#mess").hide();
	}
});


/*$("#" +_id).change(function(){

	$(this).css("style","none");
})*/