var oSearch=document.getElementById("text");
var selectText=document.getElementById("select-text");
var oLi=selectText.getElementsByTagName("li");
oSearch.addEventListener("keyup",function(){
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
		data:{
			selectText:encodeURI(oSearch.value)
		},
		dataType:"jsonp",
		success:function(res){
			console.log(res);
			var li="";
			for(var i=0;i<res.length;i++){
				li+="<li><a href='./shopName.html?"+res[i].goodsID+"'>"+res[i].goodsName+"</a></li>"
			}
			selectText.innerHTML=li;
			if(oSearch.value){
				selectText.style.display="block";
			}else{
				selectText.style.display="none"
			}
		}
	});
})
document.body.addEventListener("touchstart",function(){
	selectText.style.display="none";
})