	var UID = "U22C78FFDD";
	var KEY = "m8lcprb2hh24o19p";
	var API = "http://api.seniverse.com/v3/weather/now.json";
	var APPI = "http://api.seniverse.com/v3/weather/daily.json";
	var LOCATION = 'beijing';
	//构造验证参数字符串
	var ts = Math.floor((new Date()).getTime() / 1000);
	var str = "ts=" + ts + "&uid=" + UID;

	//使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
 	// 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
 	var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
 	sig = encodeURIComponent(sig);
 	str = str + "&sig=" + sig;

 	//构造回调函数
 	var jsonpCallback = function(data) {
	    var obj = document.getElementById('sp');
	    var obj1 = document.getElementById('spp');
	    var obj2 = document.getElementById('sppp');
	    var weather = data.results[0];
	    var pic = weather.now.code;
	    var path = "img/" + pic +".png";
	    var a = document.getElementById('pic');
		a.src = path;
		obj.innerText = weather.now.text;
		obj1.innerText = weather.now.temperature + '℃';
		obj2.innerText = weather.location.name;

	    //var text = [];
	    //text.push("Location: " + weather.location.path);
	    //text.push("Weather: " + weather.now.text);
	    //text.push("Temperature: " + weather.now.temperature);
	    //obj.innerText = text.join("\n");
  	}

  	var jsonCallback = function(data) {
	    var obj = document.getElementById('spa');
	    var weather = data.results[0];
	    var text1 = [];
	    text1.push("日期: " + weather.daily[0].date);
	    text1.push("风向: " + weather.daily[0].wind_direction);
	    text1.push("风力等级: " + weather.daily[0].wind_scale);
	    obj.innerText = text1.join("\n");
  	}
