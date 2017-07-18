window.onload=function(){
	
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
	
	
	//透明轮播
	
	var bancol1=document.getElementById("bancol1");
	var bannercenter=document.getElementById("bannercenter");
	var bcarr=bancol1.getElementsByTagName("li");
	var banarr=bannercenter.getElementsByTagName("li");
	var bcarrl=bcarr.length;
	var banow=0;
	for(var i=0;i<bcarrl;i++){
		var bca=bcarr[i];
		bca.index=i;
		bca.onclick=function(){
			banow=this.index;
			batab();
		}	
	}

	function batab(){
		for(var i=0;i<bcarrl;i++){
			var bca=bcarr[i];
			bca.className="";
			movea(banarr[i],{"opacity":0});
		}
		bcarr[banow].className="bancol11";
		movea(banarr[banow],{"opacity":100});	
	}
	
	function bcnext(){
		banow++;
		if(banow==bcarrl){
			banow=0;
		}
		batab();
	}
	
	//banner左右按钮显示隐藏
	var banlp1=document.getElementById("banlp1");
	var banlp2=document.getElementById("banlp2");
	var timer=setInterval(bcnext,2000);
	bannercenter.onmouseover=function(){
		clearInterval(timer);
		banlp1.style.display="block";
		banlp2.style.display="block";
		banlp1.onclick=function(){
			banow++;
			if(banow==bcarrl){
				banow=0;
			}
			batab();
		}
		banlp2.onclick=function(){
			banow--;
			if(banow==-1){
				banow=bcarrl-1;
			}
			batab();
		}
	}
	bannercenter.onmouseout=function(){
		timer=setInterval(bcnext,2000);	
		banlp1.style.display="none";
		banlp2.style.display="none";
	}
	
	
	//centertop1商品列表
	var centertop111=document.getElementById("centertop111");
	var arr=data.list1;
	for(var i=0;i<arr.length;i++){
		var obj=arr[i];
		var li=document.createElement("li");
		li.innerHTML="<img src='"+obj.pic+"' /><br><p>"+obj.title+"</p><br><span>"+obj.price+"</span>";	
		centertop111.appendChild(li);
	}
	
	var centertop121=document.getElementById("centertop121");
	var arr=data.list2;
	for(var i=0;i<arr.length;i++){
		var obj=arr[i];
		var li=document.createElement("li");
		li.innerHTML="<img src='"+obj.pic+"' /><br><p>"+obj.title+"</p><br><span>"+obj.price+"</span>";	
		centertop121.appendChild(li);
	}
	var centertop131=document.getElementById("centertop131");
	var arr=data.list2;
	for(var i=0;i<arr.length;i++){
		var obj=arr[i];
		var li=document.createElement("li");
		li.innerHTML="<img src='"+obj.pic+"' /><br><p>"+obj.title+"</p><br><span>"+obj.price+"</span>";	
		centertop131.appendChild(li);
	}
	var centertop141=document.getElementById("centertop141");
	var arr=data.list1;
	for(var i=0;i<arr.length;i++){
		var obj=arr[i];
		var li=document.createElement("li");
		li.innerHTML="<img src='"+obj.pic+"' /><br><p>"+obj.title+"</p><br><span>"+obj.price+"</span>";	
		centertop141.appendChild(li);
	}
	var centertop151=document.getElementById("centertop151");
	var arr=data.list2;
	for(var i=0;i<arr.length;i++){
		var obj=arr[i];
		var li=document.createElement("li");
		li.innerHTML="<img src='"+obj.pic+"' /><br><p>"+obj.title+"</p><br><span>"+obj.price+"</span>";	
		centertop151.appendChild(li);
	}
	var centertop161=document.getElementById("centertop161");
	var arr=data.list1;
	for(var i=0;i<arr.length;i++){
		var obj=arr[i];
		var li=document.createElement("li");
		li.innerHTML="<img src='"+obj.pic+"' /><br><p>"+obj.title+"</p><br><span>"+obj.price+"</span>";	
		centertop161.appendChild(li);
	}
	
	var centertop1=document.getElementById("centertop1");
	var centerdivarr=centertop1.getElementsByTagName("div");
	var centertop17=document.getElementById("centertop17");
	var centerliarr=centertop17.getElementsByTagName("li");
	for(var i=0;i<centerliarr.length;i++){
		var centerli=centerliarr[i];
		centerli.index=i;
		centerli.onmouseover=function(){
			for(var j=0;j<centerliarr.length;j++){
				centerdivarr[j].style.display="none";	
				centerliarr[j].className="";
			}
			centerdivarr[this.index].style.display="block";
			centerliarr[this.index].className="centp1";
		}	
	}
	
	//商品列表查看更多左侧划过显示商品
	var cenconsh11=document.getElementsByClassName("cenconsh11")[0];
	var cenconsh21=document.getElementsByClassName("cenconsh21")[0];
	var cenconsh31=document.getElementsByClassName("cenconsh31")[0];
	var cenconsh11arr=data.list3;
	var cenconsh21arr=data.list4;
	var cenconsh31arr=data.list5;
	//console.log(cenconsh31);
	for(var i=0;i<cenconsh31arr.length;i++){
		var cenconsh31li=cenconsh31arr[i];
		var li1=document.createElement("li");
		li1.innerHTML="<img src='"+cenconsh31li.pic+"' /><br><p>"+cenconsh31li.title+"</p><br><span>￥："+cenconsh31li.price+"</span>";	
		cenconsh31.appendChild(li1);
	}
	for(var i=0;i<cenconsh21arr.length;i++){
		var cenconsh21li=cenconsh21arr[i];
		var li2=document.createElement("li");
		li2.innerHTML="<img src='"+cenconsh21li.pic+"' /><br><p>"+cenconsh21li.title+"</p><br><span>￥："+cenconsh21li.price+"</span>";	
		cenconsh21.appendChild(li2);
	}
	for(var i=0;i<cenconsh11arr.length;i++){
		var cenconsh11li=cenconsh11arr[i];
		var li3=document.createElement("li");
		li3.innerHTML="<img src='"+cenconsh11li.pic+"' /><br><p>"+cenconsh11li.title+"</p><br><span>￥："+cenconsh11li.price+"</span>";	
		cenconsh11.appendChild(li3);
	}
	var cencontuli=document.getElementsByClassName("cencontul")[0].children;
	var cenconcenter=document.getElementsByClassName("cenconcenter")[0].getElementsByTagName("div");
	for(var i=0;i<cencontuli.length;i++){
		var cencontulii=cencontuli[i];
		cencontulii.index=i;
		cencontulii.onmouseover=function(){
			for(var j=0;j<cenconcenter.length;j++){
				cenconcenter[j].style.display="none";
				cencontuli[j].className="";
			}
			cenconcenter[this.index].style.display="block";
			this.className="cenconli1";
		}
	}	
	
	
	var cenconsh121=document.getElementsByClassName("cenconsh121")[0];
	var cenconsh221=document.getElementsByClassName("cenconsh221")[0];
	var cenconsh321=document.getElementsByClassName("cenconsh321")[0];
	var cenconsh121arr=data.list6;
	var cenconsh221arr=data.list7;
	var cenconsh321arr=data.list8;
	//console.log(cenconsh31);
	for(var i=0;i<cenconsh321arr.length;i++){
		var cenconsh321li=cenconsh321arr[i];
		var li1=document.createElement("li");
		li1.innerHTML="<img src='"+cenconsh321li.pic+"' /><br><p>"+cenconsh321li.title+"</p><br><span>￥："+cenconsh321li.price+"</span>";	
		cenconsh321.appendChild(li1);
	}
	for(var i=0;i<cenconsh221arr.length;i++){
		var cenconsh221li=cenconsh221arr[i];
		var li2=document.createElement("li");
		li2.innerHTML="<img src='"+cenconsh221li.pic+"' /><br><p>"+cenconsh221li.title+"</p><br><span>￥："+cenconsh221li.price+"</span>";	
		cenconsh221.appendChild(li2);
	}
	for(var i=0;i<cenconsh121arr.length;i++){
		var cenconsh121li=cenconsh121arr[i];
		var li3=document.createElement("li");
		li3.innerHTML="<img src='"+cenconsh121li.pic+"' /><br><p>"+cenconsh121li.title+"</p><br><span>￥："+cenconsh121li.price+"</span>";	
		cenconsh121.appendChild(li3);
	}
	var cencontuli2=document.getElementsByClassName("cencontul2")[0].children;
	var cenconcenter2=document.getElementsByClassName("cenconcenter2")[0].getElementsByTagName("div");
	for(var i=0;i<cencontuli2.length;i++){
		var cencontulii2=cencontuli2[i];
		cencontulii2.index=i;
		cencontulii2.onmouseover=function(){
			for(var j=0;j<cenconcenter.length;j++){
				cenconcenter2[j].style.display="none";
				cencontuli2[j].className="";
			}
			cenconcenter2[this.index].style.display="block";
			this.className="cenconli1";
		}
	}	
	
	var cenconsh131=document.getElementsByClassName("cenconsh131")[0];
	var cenconsh231=document.getElementsByClassName("cenconsh231")[0];
	var cenconsh331=document.getElementsByClassName("cenconsh331")[0];
	var cenconsh131arr=data.list6;
	var cenconsh231arr=data.list7;
	var cenconsh331arr=data.list8;
	//console.log(cenconsh31);
	for(var i=0;i<cenconsh331arr.length;i++){
		var cenconsh331li=cenconsh331arr[i];
		var li1=document.createElement("li");
		li1.innerHTML="<img src='"+cenconsh331li.pic+"' /><br><p>"+cenconsh331li.title+"</p><br><span>￥："+cenconsh331li.price+"</span>";	
		cenconsh331.appendChild(li1);
	}
	for(var i=0;i<cenconsh231arr.length;i++){
		var cenconsh231li=cenconsh231arr[i];
		var li2=document.createElement("li");
		li2.innerHTML="<img src='"+cenconsh231li.pic+"' /><br><p>"+cenconsh231li.title+"</p><br><span>￥："+cenconsh231li.price+"</span>";	
		cenconsh231.appendChild(li2);
	}
	for(var i=0;i<cenconsh131arr.length;i++){
		var cenconsh131li=cenconsh131arr[i];
		var li3=document.createElement("li");
		li3.innerHTML="<img src='"+cenconsh131li.pic+"' /><br><p>"+cenconsh131li.title+"</p><br><span>￥："+cenconsh131li.price+"</span>";	
		cenconsh131.appendChild(li3);
	}
	var cencontuli3=document.getElementsByClassName("cencontul3")[0].children;
	var cenconcenter3=document.getElementsByClassName("cenconcenter3")[0].getElementsByTagName("div");
	for(var i=0;i<cencontuli3.length;i++){
		var cencontulii3=cencontuli3[i];
		cencontulii3.index=i;
		cencontulii3.onmouseover=function(){
			for(var j=0;j<cenconcenter3.length;j++){
				cenconcenter3[j].style.display="none";
				cencontuli3[j].className="";
			}
			cenconcenter3[this.index].style.display="block";
			this.className="cenconli1";
		}
	}	
	var cenconsh141=document.getElementsByClassName("cenconsh141")[0];
	var cenconsh241=document.getElementsByClassName("cenconsh241")[0];
	var cenconsh341=document.getElementsByClassName("cenconsh341")[0];
	var cenconsh141arr=data.list6;
	var cenconsh241arr=data.list7;
	var cenconsh341arr=data.list8;
	//console.log(cenconsh31);
	for(var i=0;i<cenconsh341arr.length;i++){
		var cenconsh341li=cenconsh341arr[i];
		var li1=document.createElement("li");
		li1.innerHTML="<img src='"+cenconsh341li.pic+"' /><br><p>"+cenconsh341li.title+"</p><br><span>￥："+cenconsh341li.price+"</span>";	
		cenconsh341.appendChild(li1);
	}
	for(var i=0;i<cenconsh241arr.length;i++){
		var cenconsh241li=cenconsh241arr[i];
		var li2=document.createElement("li");
		li2.innerHTML="<img src='"+cenconsh241li.pic+"' /><br><p>"+cenconsh241li.title+"</p><br><span>￥："+cenconsh241li.price+"</span>";	
		cenconsh241.appendChild(li2);
	}
	for(var i=0;i<cenconsh141arr.length;i++){
		var cenconsh141li=cenconsh141arr[i];
		var li3=document.createElement("li");
		li3.innerHTML="<img src='"+cenconsh141li.pic+"' /><br><p>"+cenconsh141li.title+"</p><br><span>￥："+cenconsh141li.price+"</span>";	
		cenconsh141.appendChild(li3);
	}
	var cencontuli4=document.getElementsByClassName("cencontul4")[0].children;
	var cenconcenter4=document.getElementsByClassName("cenconcenter4")[0].getElementsByTagName("div");
	for(var i=0;i<cencontuli4.length;i++){
		var cencontulii4=cencontuli4[i];
		cencontulii4.index=i;
		cencontulii4.onmouseover=function(){
			for(var j=0;j<cenconcenter4.length;j++){
				cenconcenter4[j].style.display="none";
				cencontuli4[j].className="";
			}
			cenconcenter4[this.index].style.display="block";
			this.className="cenconli1";
		}
	}	
	
	var cenconsh151=document.getElementsByClassName("cenconsh151")[0];
	var cenconsh251=document.getElementsByClassName("cenconsh251")[0];
	var cenconsh351=document.getElementsByClassName("cenconsh351")[0];
	var cenconsh151arr=data.list6;
	var cenconsh251arr=data.list7;
	var cenconsh351arr=data.list8;
	//console.log(cenconsh31);
	for(var i=0;i<cenconsh351arr.length;i++){
		var cenconsh351li=cenconsh351arr[i];
		var li1=document.createElement("li");
		li1.innerHTML="<img src='"+cenconsh351li.pic+"' /><br><p>"+cenconsh351li.title+"</p><br><span>￥："+cenconsh351li.price+"</span>";	
		cenconsh351.appendChild(li1);
	}
	for(var i=0;i<cenconsh251arr.length;i++){
		var cenconsh251li=cenconsh251arr[i];
		var li2=document.createElement("li");
		li2.innerHTML="<img src='"+cenconsh251li.pic+"' /><br><p>"+cenconsh251li.title+"</p><br><span>￥："+cenconsh251li.price+"</span>";	
		cenconsh251.appendChild(li2);
	}
	for(var i=0;i<cenconsh151arr.length;i++){
		var cenconsh151li=cenconsh151arr[i];
		var li3=document.createElement("li");
		li3.innerHTML="<img src='"+cenconsh151li.pic+"' /><br><p>"+cenconsh151li.title+"</p><br><span>￥："+cenconsh151li.price+"</span>";	
		cenconsh151.appendChild(li3);
	}
	var cencontuli5=document.getElementsByClassName("cencontul5")[0].children;
	var cenconcenter5=document.getElementsByClassName("cenconcenter5")[0].getElementsByTagName("div");
	for(var i=0;i<cencontuli5.length;i++){
		var cencontulii5=cencontuli5[i];
		cencontulii5.index=i;
		cencontulii5.onmouseover=function(){
			for(var j=0;j<cenconcenter5.length;j++){
				cenconcenter5[j].style.display="none";
				cencontuli5[j].className="";
			}
			cenconcenter5[this.index].style.display="block";
			this.className="cenconli1";
		}
	}	
	
	var cenconsh161=document.getElementsByClassName("cenconsh161")[0];
	var cenconsh261=document.getElementsByClassName("cenconsh261")[0];
	var cenconsh361=document.getElementsByClassName("cenconsh361")[0];
	var cenconsh161arr=data.list6;
	var cenconsh261arr=data.list7;
	var cenconsh361arr=data.list8;
	//console.log(cenconsh31);
	for(var i=0;i<cenconsh361arr.length;i++){
		var cenconsh361li=cenconsh361arr[i];
		var li1=document.createElement("li");
		li1.innerHTML="<img src='"+cenconsh361li.pic+"' /><br><p>"+cenconsh361li.title+"</p><br><span>￥："+cenconsh361li.price+"</span>";	
		cenconsh361.appendChild(li1);
	}
	for(var i=0;i<cenconsh261arr.length;i++){
		var cenconsh261li=cenconsh261arr[i];
		var li2=document.createElement("li");
		li2.innerHTML="<img src='"+cenconsh261li.pic+"' /><br><p>"+cenconsh261li.title+"</p><br><span>￥："+cenconsh261li.price+"</span>";	
		cenconsh261.appendChild(li2);
	}
	for(var i=0;i<cenconsh161arr.length;i++){
		var cenconsh161li=cenconsh161arr[i];
		var li3=document.createElement("li");
		li3.innerHTML="<img src='"+cenconsh161li.pic+"' /><br><p>"+cenconsh161li.title+"</p><br><span>￥："+cenconsh161li.price+"</span>";	
		cenconsh161.appendChild(li3);
	}
	var cencontuli6=document.getElementsByClassName("cencontul6")[0].children;
	var cenconcenter6=document.getElementsByClassName("cenconcenter6")[0].getElementsByTagName("div");
	for(var i=0;i<cencontuli6.length;i++){
		var cencontulii6=cencontuli6[i];
		cencontulii6.index=i;
		cencontulii6.onmouseover=function(){
			for(var j=0;j<cenconcenter6.length;j++){
				cenconcenter6[j].style.display="none";
				cencontuli6[j].className="";
			}
			cenconcenter6[this.index].style.display="block";
			this.className="cenconli1";
		}
	}	
	
	var cenconsh171=document.getElementsByClassName("cenconsh171")[0];
	var cenconsh271=document.getElementsByClassName("cenconsh271")[0];
	var cenconsh371=document.getElementsByClassName("cenconsh371")[0];
	var cenconsh171arr=data.list6;
	var cenconsh271arr=data.list7;
	var cenconsh371arr=data.list8;
	//console.log(cenconsh31);
	for(var i=0;i<cenconsh371arr.length;i++){
		var cenconsh371li=cenconsh371arr[i];
		var li1=document.createElement("li");
		li1.innerHTML="<img src='"+cenconsh371li.pic+"' /><br><p>"+cenconsh371li.title+"</p><br><span>￥："+cenconsh371li.price+"</span>";	
		cenconsh371.appendChild(li1);
	}
	for(var i=0;i<cenconsh271arr.length;i++){
		var cenconsh271li=cenconsh271arr[i];
		var li2=document.createElement("li");
		li2.innerHTML="<img src='"+cenconsh271li.pic+"' /><br><p>"+cenconsh271li.title+"</p><br><span>￥："+cenconsh271li.price+"</span>";	
		cenconsh271.appendChild(li2);
	}
	for(var i=0;i<cenconsh171arr.length;i++){
		var cenconsh171li=cenconsh171arr[i];
		var li3=document.createElement("li");
		li3.innerHTML="<img src='"+cenconsh171li.pic+"' /><br><p>"+cenconsh171li.title+"</p><br><span>￥："+cenconsh171li.price+"</span>";	
		cenconsh171.appendChild(li3);
	}
	var cencontuli7=document.getElementsByClassName("cencontul7")[0].children;
	var cenconcenter7=document.getElementsByClassName("cenconcenter7")[0].getElementsByTagName("div");
	for(var i=0;i<cencontuli7.length;i++){
		var cencontulii7=cencontuli7[i];
		cencontulii7.index=i;
		cencontulii7.onmouseover=function(){
			for(var j=0;j<cenconcenter7.length;j++){
				cenconcenter7[j].style.display="none";
				cencontuli7[j].className="";
			}
			cenconcenter7[this.index].style.display="block";
			this.className="cenconli1";
		}
	}	
	
	var cenconsh181=document.getElementsByClassName("cenconsh181")[0];
	var cenconsh281=document.getElementsByClassName("cenconsh281")[0];
	var cenconsh381=document.getElementsByClassName("cenconsh381")[0];
	var cenconsh181arr=data.list6;
	var cenconsh281arr=data.list7;
	var cenconsh381arr=data.list8;
	//console.log(cenconsh31);
	for(var i=0;i<cenconsh381arr.length;i++){
		var cenconsh381li=cenconsh381arr[i];
		var li1=document.createElement("li");
		li1.innerHTML="<img src='"+cenconsh381li.pic+"' /><br><p>"+cenconsh381li.title+"</p><br><span>￥："+cenconsh381li.price+"</span>";	
		cenconsh381.appendChild(li1);
	}
	for(var i=0;i<cenconsh281arr.length;i++){
		var cenconsh281li=cenconsh281arr[i];
		var li2=document.createElement("li");
		li2.innerHTML="<img src='"+cenconsh271li.pic+"' /><br><p>"+cenconsh281li.title+"</p><br><span>￥："+cenconsh281li.price+"</span>";	
		cenconsh281.appendChild(li2);
	}
	for(var i=0;i<cenconsh181arr.length;i++){
		var cenconsh181li=cenconsh181arr[i];
		var li3=document.createElement("li");
		li3.innerHTML="<img src='"+cenconsh181li.pic+"' /><br><p>"+cenconsh181li.title+"</p><br><span>￥："+cenconsh181li.price+"</span>";	
		cenconsh181.appendChild(li3);
	}
	var cencontuli8=document.getElementsByClassName("cencontul8")[0].children;
	var cenconcenter8=document.getElementsByClassName("cenconcenter8")[0].getElementsByTagName("div");
	for(var i=0;i<cencontuli8.length;i++){
		var cencontulii8=cencontuli8[i];
		cencontulii8.index=i;
		cencontulii8.onmouseover=function(){
			for(var j=0;j<cenconcenter8.length;j++){
				cenconcenter8[j].style.display="none";
				cencontuli8[j].className="";
			}
			cenconcenter8[this.index].style.display="block";
			this.className="cenconli1";
		}
	}	
	
		
	//点击加号减号的时候商品数量自动的加减
	/*var prodecrlp7but1=document.getElementsByClassName("prodecrlp7but1");
	var prodecrlp7but2=document.getElementsByClassName("prodecrlp7but2");
	var prodecrlp7txt=document.getElementsByClassName("prodecrlp7txt");
	 
	
  	prodecrlp7txt.onclick=function(){
		var str=prodecrlp7txt.innerHTML;
		prodecrlp7txt.innerHTML="";
		var input=document.createElement("input");
		input.type="text";
		input.value=str;
		input.focus();
		//console.log(input.value);
		input.onclick=function(event){
			event.stopPropagation();
		}
		input.onblur=function(){
			prodecrlp7txt.innerHTML=input.value;
		}
		prodecrlp7txt.appendChild(input);	
	}
	*/
	
	
	/*var prodecrlp7txt1=document.getElementsByClassName("prodecrlp7txt1");
	
	prodecrlp7txt.onclick=function(){
		prodecrlp7but1.onclick=function(){
			//var prodecrlp7txt1v=prodecrlp7txt1.value;
			
			prodecrlp7txt1v+=1;
			//prodecrlp7txt1.value=prodecrlp7txt1v;
		}
		prodecrlp7but2.onclick=function(){
			//var prodecrlp7txt1v=prodecrlp7txt1.value;
			prodecrlp7txt1v-=1;	
			if(prodecrlp7txt1v==0){
				prodecrlp7txt1v=1;
			}
		}
		prodecrlp7txt1.value=prodecrlp7txt1v;
	}
	*/
	
	
	
	
	
	
	
	




	
	
	
	
	
	
	
	
	
	
	

}

			
	




/****conlogin****/
function clf(){
	var conlp22=document.getElementById("conlp22");
	var conlp221=document.getElementById("conlp221");
	var conlp32=document.getElementById("conlp32");
	var conlp321=document.getElementById("conlp321");
	
	if(conlp22.value.length==0){
		conlp221.innerHTML="用户名不能为空";
		return false;
	}
	if(conlp32.value.length==0){
		conlp321.innerHTML="密码不能为空";
		return false;
	}
	return true;
}

/*conregister*/
function crf(){
	var conrp22=document.getElementById("conrp22");
	var conrp221=document.getElementById("conrp221");
	var conrp32=document.getElementById("conrp32");
	var conrp321=document.getElementById("conrp321");
	var conrp42=document.getElementById("conrp42");
	var conrp421=document.getElementById("conrp421");
	var conrp52=document.getElementById("conrp52");
	var conrp521=document.getElementById("conrp521");
	var conrp62=document.getElementById("conrp62");
	var conrp621=document.getElementById("conrp621");
	
	if(conrp22.value.length==0){
		conrp221.innerHTML="用户名不能为空";
		return false;
	}
	if(conrp32.value.length==0){
		conrp321.innerHTML="密码不能为空";
		return false;
	}
	if(conrp42.value!=conrp32.value){
		conrp421.innerHTML="密码必须相同";
		return false;
	}
	if(conrp52.value.length==0){
		conrp521.innerHTML="邮箱不能为空";
		return false;
	}
	if(conrp62.value.length==0){
		conrp621.innerHTML="验证码不能为空";
		return false;
	}
	return true;
}


//banner图显示
/*$(function(){
	$("#bannercenter").mouseenter(function(){
		$("#banlp1").css("display","block");
		$("#banlp2").css("display","block");
	});
	$("#bannercenter").mouseleave(function(){
		$("#banlp1").css("display","none");
		$("#banlp2").css("display","none");	
	});	
});*/


$(function(){
	//鼠标滑过分类显示
	$(".bannerleft>li").mouseover(function(){
		$(this).find(".banld1").css({"display":"block"});
	});	
	$(".bannerleft>li").mouseout(function(){
		$(this).find(".banld1").css({"display":"none"});
	});	
	
	
	
	//图标动一下回到原位置
	var banrdl=$("#bannerright>dl");
	$("#bannerright>dl").mouseenter(function(){
		$(this).find("dt").stop();
		$(this).find("dt").animate({top:"1px"}).animate({top:"5px"});
		for(var i=0;i<banrdl.length;i++){
			$(banrdl[i]).css({"border":"1px solid #ccc"});
		}
		$(this).stop().css({"border":"1px solid red"});
	});
	$("#bannerright>dl").mouseleave(function(){
		for(var i=0;i<banrdl.length;i++){
			$(banrdl[i]).css({"border":"1px solid #ccc"});
		}
	});
	//$("#bannerright>dl").mouseleave(function(){
	//	$(this).find("dt").stop().animate({top:"5px"});
	//});
	
	
	//商品列表
	/*var centertop111=$("#centertop111");
	var arr=data.list;
	for(var i=0;i<arr.length;i++){
		var li=$("<li></li>");
		$(li).html("");
	}*/
	
	//商品列表查看更多左侧划过显示商品
	/*var cenconsh11=$(".cenconsh11");
	var cenconsh21=$(".cenconsh21");
	var cenconsh31=$(".cenconsh31");
	var cenconsh11arr=data.list3;
	var cenconsh21arr=data.list4;
	var cenconsh31arr=data.list5;
	for(var i=0;i<cenconsh11.length;i++){
		var cenconsh11li=cenconsh11[i];
		var li=$("<li></li>");
		li.html("<img src='"+cenconsh11li.pic+"' /><br><p>"+cenconsh11li.title+"</p><br><span>￥："+cenconsh11li.price+"</span>");
		cenconsh11.append(li);
	}
	for(var i=0;i<cenconsh21.length;i++){
		var cenconsh21li=cenconsh21[i];
		var li=$("<li></li>");
		
		li.html("<img src='"+cenconsh21li.pic+"' /><br><p>"+cenconsh21li.title+"</p><br><span>￥："+cenconsh21li.price+"</span>");
		//console.log(li.html);
		cenconsh21.append(li);
	}
	for(var i=0;i<cenconsh31.length;i++){
		var cenconsh31li=cenconsh31[i];
		var li=$("<li></li>");
		li.html("<img src='"+cenconsh31li.pic+"' /><br><p>"+cenconsh31li.title+"</p><br><span>￥："+cenconsh31li.price+"</span>");
		cenconsh31.append(li);
	}
	
	var cencontuli=$(".cencontul").children();
	var cenconcenter=$(".cenconcenter").find("div");
	//console.log(cencontuli);
	for(var i=0;i<cencontuli.length;i++){
		var cencontulii=cencontuli[i]; 		
		$(cencontulii).attr("index",i);
		//console.log(cencontulii);
		$(cencontulii).mouseover(function(){
			//console.log(this)
			for(var j=0;j<cenconcenter.length;j++){
				$(cenconcenter[j]).css("display","none");
				//$(cencontuli[j]).removeClass("cenconli1");
			}
			//$(cenconcenter[this.index]).css("display","block");
			//$(this).addClass("cenconli1");
		});
	}
	*/
	
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
	
	//图片上的左右按钮控制图片左右交换
	/*$(".prodeconleft").mouseover(function(){
		$(".prodecld1").find("div").css({"display":"block"});	
	});
	$(".prodeconleft").mouseout(function(){
		$(".prodecld1").find("div").css({"display":"none"});	
	});
	*/
	
	
	
	//全国包邮省份显示
	$(".prodecrlp8left").mouseover(function(){
		$(".prodecrlp8quanguo").css({"display":"block"});	
	});
	$(".prodecrlp8left").mouseout(function(){
		$(".prodecrlp8quanguo").css({"display":"none"});	
	});
	
	
	
	
});

























