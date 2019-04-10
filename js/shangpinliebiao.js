
$(function(){
	var $ali=$('.b-box .left .left-b li img');
	var $aLi_p=$('.b-box .left .left-b li p:nth-of-type(1)');
	var $aLi1_p=$('.b-box .left .left-b li p:nth-of-type(2) span:nth-child(1)');
	var arr=[];
	var arr1=[];
	var arr2=[];
	for(var i=0;i<$ali.length;i++){
		arr.push($ali[i]);
		arr1.push($aLi_p[i]);
		arr2.push($aLi1_p[i]);
	}
	$.get('http://47.104.244.134:8080/goodsbytid.do',{'tid':13,'page':1,'limit':9},function(data){
                        var aData=$(data.data);
                        var asrc=[];
                        var aName=[];
                        var aPrice=[];
//                      console.log(data);
                        for(var i=0;i<aData.length;i++){
                        	asrc.push(aData[i].picurl);
                        	aName.push(aData[i].name);
                     	    aPrice.push(aData[i].price);
                        }
                        
                        for(var i=0;i<asrc.length;i++){
                        	$(arr[i]).attr({src:asrc[i+1]});
                        	$(arr1[i]).text(aName[i+1]);
                      	    $(arr2[i]).text('￥'+aPrice[i+1]);
                        }
                       $('.images-cover img').attr({src:data.data[1].picurl})
                       $('.small-img img').attr({src:data.data[1].picurl})
                       $('.order_lists .list_con .list_img img').attr({src:data.data[1].picurl})
	                    $('.order_lists .list_con .list_text a').text(data.data[1].name);
	                    $('.order_lists .list_price .price').text('￥'+data.data[1].price);
	                    $('.order_lists .list_sum .sum_price').text('￥'+data.data[1].price);
	})
})
