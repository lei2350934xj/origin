function getstyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]; 
	}else{
		return getComputedStyle(obj,null)[attr];
	}	
}


function movea(obj,json,fnEnd){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var flag=true;
		for(var i in json){
			var attr=i;
			var target=json[i];
			var v=getstyle(obj,attr);
			if(attr=="opacity"){
				v=Math.round(v*100);
			}else{
				v=parseInt(v);
			}
			var speed=(target-v)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(v==target){
				
			}else{
				flag=false;
				if(attr=="opacity"){
					obj.style.opacity=(v+speed)/100;
					obj.style.filter="alpha(opacity="+(v+speed)+")";
				}else{
					obj.style[attr]=v+speed+"px";
				}
			}
		}	
			if(flag){
				clearInterval(obj.timer);
				if(fnEnd){
					fnEnd();
				}
			}	
	},10);
		
	
}

/*	clearInterval(obj.timer);
		obj.timer=setInterval(function(){
		var v=getstyle(obj,attr);
		if(attr=="opacity"){
			v=Math.round(v*100);	
		}else{
			v=parseInt(v);
		}
		var speed=(target-v)/10;
		speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
		
		if(v==target){
			clearInterval(obj.timer);
			if(fnEnd){
				fnEnd();
			}
		}else{
			if(attr=="opacity"){
				obj.style.opacity=(v+speed)/100;
				obj.style.filter="alpha(opacity="+(v+speed)+")";
			}else{
				obj.style[attr]=v+speed+"px";	
			}	
		}	
	},20);	*/