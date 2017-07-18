//点击加号减号的时候商品数量自动的加减
window.onload=function(){
/*	var prodecrlp7but1=document.getElementsByClassName("prodecrlp7but1");
	var prodecrlp7but2=document.getElementsByClassName("prodecrlp7but2");
	var prodecrlp7txt=document.getElementsByClassName("prodecrlp7txt").value;
	console.log(prodecrlp7txt);
  	prodecrlp7txt.onclick=function(){
		var str=prodecrlp7txt.innerHTML;
		prodecrlp7txt.innerHTML="";
		var input=document.createElement("input");
		input.type="text";
		input.value=str;
		input.focus();
		//console.log(str);
		input.onclick=function(event){
			event.stopPropagation();
		}
		input.onblur=function(){
			prodecrlp7txt.innerHTML=input.value;
		}
		prodecrlp7txt.appendChild(input);	
		
	}
  	*/
  	//top22
	var t2ulli=document.getElementById("t2ul1").children;
	for(var i=0;i<t2ulli.length;i++){
		var t2ull=t2ulli[i];
		t2ull.onmouseenter=function(){
			var t2ulul=this.getElementsByTagName("ul")[0];
			//if(t2ulul.style.display=="none"){
				t2ulul.style.display="block";
			//}else{
				//t2ulul.style.display="none";
			//}
		}
		t2ull.onmouseleave=function(){
			var t2ulul=this.getElementsByTagName("ul")[0];
			t2ulul.style.display="none";
		}
		
	}	
	
	
	//bannerleft
	var bannerleft=document.getElementById("bannerleft");
	var banlarr=bannerleft.children;
	for(var i=0;i<banlarr.length;i++){
		if(i%2==0){
			banlarr[i].className="banlbac1";
		}else{
			banlarr[i].className="banlbac2";
		}
	}
  	
  	//详情页划过圆点显示另一列商品
  	var prodeconbottl422=document.getElementsByClassName("prodeconbottl422")[0];
  	var prodeconbottl423=document.getElementsByClassName("prodeconbottl423")[0];
  	var prodeconbottl4ol=document.getElementsByClassName("prodeconbottl4")[0].getElementsByTagName("ol")[0];
  	var prodeconbottl4ul=document.getElementsByClassName("prodeconbottl4")[0].getElementsByTagName("ul")[0];
  	prodeconbottl422.onmouseover=function(){
  		this.style.background="#fb5322";
  		prodeconbottl4ul.style.display="block";
  		prodeconbottl4ol.style.display="none";
  		prodeconbottl423.style.background="#dddddd";
  	}
  	prodeconbottl423.onmouseover=function(){
  		this.style.background="#fb5322";
  		prodeconbottl4ul.style.display="none";
  		prodeconbottl4ol.style.display="block";	
  		prodeconbottl422.style.background="#dddddd";
  	}
  	
  	
  	//移动到二维码上面显示右侧二维码
  	var prodeconbottl1div=document.getElementsByClassName("prodeconbottl1")[0].getElementsByTagName("div")[0];
  	var prodeconbottl1p=document.getElementsByClassName("prodeconbottl1")[0].getElementsByTagName("p")[0];
  	prodeconbottl1div.onmouseover=function(){
  		prodeconbottl1p.style.display="block";
  	}
  	prodeconbottl1div.onmouseout=function(){
  		prodeconbottl1p.style.display="none";
  	}
  	
  	//鼠标移动到商品上显示右侧图片
  	var prodeconbottl4li=document.getElementsByClassName("prodeconbottl4")[0].getElementsByTagName("li");
  	for(var i=0;i<prodeconbottl4li.length;i++){
  		var prodeconbottl4lii=prodeconbottl4li[i];
  		prodeconbottl4lii.onmouseover=function(){
  			var prodeconbottl4liimg=this.getElementsByClassName("prodeconbottl41")[0].getElementsByTagName("img");
  			//console.log(prodeconbottl4liimg);
			var prodeconbottl4liiimg=document.createElement("img");
			prodeconbottl4liiimg.src= prodeconbottl4liimg[0].src;
			this.getElementsByTagName("div")[0].appendChild(prodeconbottl4liiimg);
  			this.getElementsByClassName("prodeconbottl41")[0].style.border="1px solid #ff6600";
  			this.getElementsByTagName("div")[0].style.display="block";
  		}
  		prodeconbottl4lii.onmouseout=function(){
  			this.getElementsByTagName("div")[0].style.display="none";
  			this.getElementsByClassName("prodeconbottl41")[0].style.border="1px solid #e7e7e7";
			//this.getElementsByTagName("div").remove(this.getElementsByTagName("div")[0].getElementsByTagName("img"));  		
  		}
  		
  		
  	}
  	
  	
  	
  	
  	
  	
}





















$(function(){
	//鼠标滑过分类显示
	$(".bannerleft>li").mouseover(function(){
		$(this).find(".banld1").css({"display":"block"});
	});	
	$(".bannerleft>li").mouseout(function(){
		$(this).find(".banld1").css({"display":"none"});
	});	


//product detail a商品分类列表展开
	$(".navp1").mouseenter(function(){
		$(".prodebanner").css("display","block");	
	});
	$(".navp1").mouseleave(function(){
		$(".prodebanner").css("display","none");	
	});
	$(".prodebanner").mouseover(function(){
		$(".prodebanner").css("display","block");	
	});
	$(".prodebanner").mouseout(function(){
		$(".prodebanner").css("display","none");	
	});
	
	var prodecld2arr=$(".prodecld2").find("li");
	var prodecld1=$(".prodecld1");
	var flag=false;
	for(var i=0;i<prodecld2arr.length;i++){
		var prodecld2li=prodecld2arr[i];
		$(prodecld2li).mouseover(function(){
			var _this=$(this).html();
			prodecld1.html(_this);
			$(this).addClass("red");
			$(".prodecld3").find("div").html(_this);
		});
		$(prodecld2li).mouseout(function(){
			if(!flag){
				for(var j=0;j<prodecld2arr.length;j++){
					$(prodecld2arr[j]).removeClass("red");
				}
			}
			$(this).addClass("red");
		});
		
		$(prodecld2li).click(function(){
			var _this=$(this).html();
			$(".prodecld1").find("p").html(_this);	
			$(".prodecld3").find("div").html(_this);
			$(".prodecld3").css({"display":"block"}).animate({"width":1200},200).find("div").css({"width":1180});
			$(".prodecld3").find("p").css({"display":"block"}).click(function(){
				$(".prodecld3").animate({"width":0},200).find("div").css({"width":0});
			});
			
			$(".prodecld1").click(function(){
				$(".prodecld3").css({"display":"block"}).animate({"width":1200},200).find("div").css({"width":1180});
				$(".prodecld3").find("p").css({"display":"block"}).click(function(){
					$(".prodecld3").animate({"width":0},200).find("div").css({"width":0});	
				});
			});	
		});	
	}
	
	
	//举报中心 显示举报该商品
	$(".prodecrp2").mouseover(function(){
		$(".prodecrp3").css({"display":"block"});
	});
	$(".prodecrp2").mouseout(function(){
		$(".prodecrp3").css({"display":"none"});
	});
	$(".prodecrp3").mouseover(function(){
		$(".prodecrp3").css({"display":"block"});
	});
	$(".prodecrp3").mouseout(function(){
		$(".prodecrp3").css({"display":"none"});
	});
	
	$(".prodecrlp8left").mouseover(function(){
		$(".prodecrlp8quanguo").css({"display":"block"});	
	});
	$(".prodecrlp8left").mouseout(function(){
		$(".prodecrlp8quanguo").css({"display":"none"});	
	});
	
	//移动到二维码上面显示右侧二维码
	//$("。prodeconbottl1").find("div").mouseover(function(){
	//	$("。prodeconbottl1").find("p").css("display","block");
	//});
	//$("。prodeconbottl1").find("div").mouseout(function(){
	//	$("。prodeconbottl1").find("p").css("display","none");
	//});








});	











