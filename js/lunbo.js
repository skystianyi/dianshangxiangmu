$(function() {
				$(".clt-right .left .left-top li").eq(0).fadeIn().find("img").stop().animate({"left":"0"},300)
				var count=0;
				function timer(){
					count++;
					if(count==$(".clt-right .left .left-top li").length){
						count=0;
					}
					$(".clt-right .left .left-top li").eq(count).fadeIn().find("img").stop().animate({"left":"0"},300)
					.parent().siblings().fadeOut().find("img")
					.css({"left":"-520px"})
					$(".lunbo-t span").eq(count).addClass("select-o").siblings().removeClass("select-o");
				}
				var timer1=setInterval(timer,2500)
				$(".clt-right .left .left-top li img").on("mouseover",function(){
					clearInterval(timer1);
				})
				$(".clt-right .left .left-top li img").on("mouseleave",function(){
					timer1=setInterval(timer,2500);
				})
				$(" .lunbo-t span").on("mouseover",function(){
					 clearInterval(timer1);
					 var index=$(this).index();
					 $(".clt-right .left .left-top li").eq(index).fadeIn().find("img").stop().animate({"left":"0"},300)
					.parent().siblings().fadeOut()
					.find("img").css({"left":"-520px"});
					$(this).toggleClass("select-o").siblings().removeClass("select-o");
					})
				$(".lunbo-t span").on("mouseleave",function(){
					timer1=setInterval(timer,2500)
				});	
});
$(function(){
	$(".clt-right .left .left-bottom li").eq(0).fadeIn().find("img").stop().animate({"left":"0"},300)
				var count=0;
				function timer(){
					count++;
					if(count==$(".clt-right .left .left-bottom li").length){
						count=0;
					}
					$(".clt-right .left .left-bottom li").eq(count).fadeIn().find("img").stop().animate({"left":"0"},300)
					.parent().siblings().fadeOut().find("img")
					.css({"left":"-520px"})
					$(".lunbo-b span").eq(count).addClass("select-b").siblings().removeClass("select-b");
				}
				var timer1=setInterval(timer,2500)
				$(".clt-right .left .left-bottom li img").on("mouseover",function(){
					clearInterval(timer1);
				})
				$(".clt-right .left .left-bottom li img").on("mouseleave",function(){
					timer1=setInterval(timer,2500);
				})
				$(" .lunbo-b span").on("mouseover",function(){
					 clearInterval(timer1);
					 var index=$(this).index();
					 $(".clt-right .left .left-bottom li").eq(index).fadeIn().find("img").stop().animate({"left":"0"},300)
					.parent().siblings().fadeOut()
					.find("img").css({"left":"-520px"});
					$(this).toggleClass("select-b").siblings().removeClass("select-b");
					})
				$(".lunbo-b span").on("mouseleave",function(){
					timer1=setInterval(timer,2500)
				})
});


