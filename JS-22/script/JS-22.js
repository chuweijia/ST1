
	window.onload = function(){
	var FUN = {
		getById:function(id){
			return document.getElementById(id);
		},
		getByTag:function(Tnam){
			return document.getElementsByTagName(Tnam);
		},
		addClass:function(o,v){
				function hasClass(d, t){
				 return  new RegExp('(\\s|^)' + t + '(\\s|$)').test(d.className);
			    }
				var classes = o.className;
	  			if (!hasClass(o, v)) {
	  			o.className = o.className + ' ' + v;
	  		 	}
		},
		removeClass:function(o,v){
				
				var str = o.getAttribute("class").toString();
				var arr = str.split('');//转化成数组
				arr.splice(str.length-2,2);
				var re = new RegExp(",", "g");
				var r = arr.toString().replace(re, "");//删除逗号
				o.setAttribute("class",r);
		},
		siblings:function(o){
				var index;
				if(o.parentNode!=null){
					var achildren = Array.prototype.slice.call(o.parentNode.childNodes,0);
					for(var i in achildren){
						if(achildren[i]==o){//二者都是obj
							index = i;
						}
					}
				}
				else{
					console.log("error");
					
				}
				achildren.splice(index,1);
				return achildren;

		}
		
	}

	var nlis = FUN.getByTag("div");
	var node = nlis[0];
	var btn1 = FUN.getById("btn1");
	var btn2 = FUN.getById("btn2");
	var btn3 = FUN.getById("btn3");
	btn1.onclick = function(){
		var farr = Array.prototype.slice.call(nlis,0);
		time(farr);	 
		
	}

	btn2.onclick = function(){
		var marr = mid(node);
	    time(marr);	 
	}
	btn3.onclick = function(){
		var barr = behind(node);
		time(barr);

	}
	function time(array){
		var timer = null;
		var i = 0;
			 timer = setInterval(function(){
			  	change();
			 },1000);
			 function change(){
			 	FUN.addClass(array[i],"bg");
			 	setTimeout(function(){
			 		var m = i-1;
			 		FUN.removeClass(array[m],"bg");
			 		if(m<array.length-1){
			 			FUN.addClass(array[m+1],"bg");
			 		}
			 		else{
			 			clearInterval(timer);
			 			console.log("清除定时器");
			 		}

			 	},500);
			 	i++;
			 }
	}
	function mid(node){
		var arr = [];
		var stack = [];
		while(stack.length!=0||node){
			if(node){//堆栈 优先node = node.left堆满 再node = node.right堆栈
				stack.push(node);//堆其本身和左子树
				node = node.firstChild;
				}
			else{//出栈 node为空时候出栈 且取得出栈元素的right元素 堆栈
				node = stack.pop();
				arr.push(node);
				node = node.lastChild;
				}
			}
			return arr;
   }
   function behind(node){
   	    var arr = [];
		if(node) {  
			  var s1 = [];  
			  var s2 = [];
			  s1.push(node);
			  while(s1.length !== 0) {
				   node = s1.pop();
				   s2.push(node);  
				   if(node.firstChild) {
				    s1.push(node.firstChild);
				   }   
				   if(node.lastChild) {
				    s1.push(node.lastChild);
				   }
			  }  

			 }
			for(var i = s2.length-1;i>0;i--){
				arr.push(s2[i]);
			}
			return arr;

			 
   }



}
