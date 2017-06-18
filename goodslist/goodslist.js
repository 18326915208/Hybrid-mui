var ul=document.getElementsByClassName("gmuiullist")[0];
mui.init({
  pullRefresh : {
    container:"#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
    down : {
      height:50,//可选,默认50.触发下拉刷新拖动距离,
      auto: true,//可选,默认false.自动下拉刷新一次
      contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
      contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
      contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
      callback :function(){//必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
      	$.ajax({
      		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
      		dataType:"jsonp",
      		success:function(res){
      			var list="";
      			for(var i=0;i<res.length;i++){
      				list+="<li><a href='../goodsdetail/goodsdetail.html'><img class='aimg' src='"+res[i].goodsListImg+"'/><p class='name'>"+res[i].goodsName+"</p><p class='price'><span>￥"+res[i].price+"</span><span class='p_r'></span></p></a></li>";
      				
      			}
      			ul.innerHTML+=list;
      		}
      	})
      } 
    }
  }
});