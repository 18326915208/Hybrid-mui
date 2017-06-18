//mui.init({
//	subpages:[{
//	      url:"./ind-list.html",//子页面HTML地址，支持本地地址和网络地址
//	      id:"ind-list",//子页面标志
//	      styles:{
//	        top:"45px",//子页面顶部位置
//	        bottom:"128px",//子页面底部位置
//	      },
//	      extras:{}//额外扩展参数
//	    }]
//});
mui.init({
  pullRefresh : {
    container:"#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
    down : {
      height:48,//可选,默认50.触发下拉刷新拖动距离,
      auto: true,//可选,默认false.自动下拉刷新一次
      contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
      contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
      contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
      callback :function(){} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
    }
  }
});
//轮播
//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
  interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
});



var fixr=$(".fix-r");
//fixr.addEventListener("tap",function(){
//	
//})

//var scroll = mui('.mui-content').scroll(); 
//console.log(scroll);
//var mScroll=document.getElementById("slider")
//mScroll.addEventListener("scroll", function (e ) { 
//	console.log(scroll.y); 
//}) 










