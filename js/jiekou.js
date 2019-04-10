var oTxt = document.getElementsByClassName("inp2")[0];
var oTxt1 = document.getElementsByClassName("inp2")[1];
var oLj=document.getElementsByClassName("lianjie1")[0];
var oList = document.getElementById("list");
var oList1 = document.getElementById("list1");
var flag=false;
		oTxt.oninput=function(){
//			console.log(aTxt.value);
			var oScript = document.createElement("script");
			oScript.src = "https://suggest.taobao.com/sug?code=utf-8&q="+oTxt.value+"&callback=aa";
			document.body.appendChild(oScript);
			flag=true;
		}
		oTxt1.oninput=function(){
//			console.log(aTxt.value);
			var oScript = document.createElement("script");
			oScript.src = "https://suggest.taobao.com/sug?code=utf-8&q="+oTxt1.value+"&callback=aa";
			document.body.appendChild(oScript);
			flag=false;
		}
		function aa(data){
			data = data.result;
			var str = "";
			data.forEach((item)=>{
				str +="<li><a href='https://s.taobao.com/search?q="+item[0]+"'>" +item[0]+"</a></li>"
		});
			if(flag==true){
				oList.innerHTML = str;
			}else{
				oList1.innerHTML = str;
			}
	}
                var oBox=document.getElementById("box-miao");
	    		var oDate1=new Date("2019/2/23 23:52:00");
	    		function format0(num){
	    			return num<10?"0"+num:num;
	    		}
	    		var timer=setInterval(function(){
	    			var oDate2=new Date();
	    			var ss=(oDate1-oDate2)/1000;
	    			var hour=Math.floor(ss/3600);
	    			var minute=Math.floor(ss/60%60);
	    			var second=Math.floor(ss%60);
	    			hour=format0(hour);
	    			minute=format0(minute);
	    			second=format0(second);
	    			oBox.innerHTML="<p>距结束：</p>"+"<span>"+hour+"</span>"+"<span>:</span>"+"<span>"+minute+"</span>"+"<span>:</span>"+"<span>"+second+"</span>";
	    			if(ss<=0){
	    				oBox.innerHTML="倒计时结束！";
	    				clearInterval(timer);
	    			}
	    		},1000);
var oXuanfu = document.getElementsByClassName("xuanfu")[0];	 
var oFixed1=document.getElementsByClassName("fixd1")[0];
var oli8=document.getElementById("li8");
window.onscroll=function(){
//	            var oli=document.createElement("li");
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				if(scrollTop>=160){
					oXuanfu.style.display="block";
					oXuanfu.style.position="fixed";
					oFixed1.style.top="80px";
					oli8.style.display="block";
//					ofudong.innerHTML+='<li id="li8"><a href="#">回到顶部</a></li>'
				}else{
					oXuanfu.style.display="none";
					oFixed1.style.top="480px";
				}
}
oli8.onclick=function(){
	document.documentElement.scrollTop=document.body.scrollTop=0;
}
var oSpan=document.getElementsByTagName('span')[1];
var oDiyi=document.getElementById("diyi");
oDiyi.innerHTML=getCookie("username");
oLj.onclick=function(){
	if(oDiyi.innerHTML=="Hi,你好"||oDiyi.innerHTML=="undefined"){
		alert("你还未登陆账户！");
	}else{
		var r=confirm("是否要退户账户");
		if(r==true){
		removeCookie("username");
		removeCookie("id");
		removeCookie("token");
		oDiyi.innerHTML="Hi,你好"
		oSpan.innerHTML=0;
		}
	}	
}



