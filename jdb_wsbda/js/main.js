$(function(){
	 Main.get('http://jdbcj.sinreweb.com/Member/DongaoUser/statistic',{},function(res){
		$('.tan .xxx a').text(res.uid)
      
	  desc = '我是第'+res.uid+'位申办冬奥好声音支持者，快来一起为申办冬奥“加”油喝彩吧！'	
	  weixin.weixin_desc(desc)
    })
});
var Main = {	iscrolls : []};
Main.url = '';//ajax请求地址cz.mengniu.sinreweb.com
Main.imgurl='http://nm.games.sinreweb.com/LFusong/jiaduobao/'//加载图片请求地址
Main.init = function() {	
	Main.ortchange(); 		  
	window.onresize = function() {		
		//Main.ortchange();	
	}	
	$(document.body).on('touchmove',function(e){
		//e.preventDefault?e.preventDefault():window.event.returnValue = false; 	
	})	
	//旋转	
	/*window.addEventListener('orientationchange',function(){
		//alert(window.orientation)
		// window.orientation  0 正着  左转90  右转-90
	})*/
	Main.On();		
}
Main.ortchange = function(bool) {
	Main.width = $(window).width()
	Main.height = $(window).height();	
	$('.page_box').css('height',Main.height+'px')
	Main.scrollbool=false;	
	var href=location.href;
	if(href.indexOf('#index')>-1){
	   	$('.page_tab').hide();
		Main.indexbool=true;
	}
}
Main.On = function() {	
    
    Main.index=0; 
    $('.tan').click(function(){
	
     $(this).removeClass('hover')
	 $('.page_box_3 .tu_3').show()
	
	})
    
    	
}

//图片加载后执行
Main.loading=function(){
		if($('.page_index').length>0){
			Main.scrollbool=true;
		    Main.scrolbody();	
		}
		if(Main.indexbool==true){
			$('.page_index').addClass('current');
		}
		$('.page_box_0').addClass('current');
		$('.audio_mp3').addClass('current')
		//$('.page_box_0').addClass('current');
		//$(".img_3b").addClass('current');
		
}
$(function(){
	
	Main.init();	
	var img=new Image();
	img.src=Main.imgurl+'images/1.jpg';	
	if(img.complete){		
		onload();				
		return ;
	}	
	img.onload=onload;
	function onload(){	
		if($(".page_load").length>0 ){
			Main.imgload();				
		}else{
		    Main.loading();			
		}			
	}	
	//Main.onplay(); 
   /*var mobVal  = ;
	   Main.get('http://jdbcj.sinreweb.com/Member/DongaoUser/statistic',{mobVal:mobVal},function(res){

            if(res.err==0){
                
            }else{
                
            }
    	})*/
	
	$('.audio_mp3').click(function(){
		
	    var This = $(this)
		if(This.hasClass('play')){
		    This.removeClass('play')
			$('audio').get(0).play()
			$('.audio_mp3').addClass('current')
		}else{
		    This.addClass('play')
			$('audio').get(0).pause()
			$('.audio_mp3').removeClass('current')
		}	
	})
	$('.fx_but').click(function(){
	   $('.tan .lfs_fx').show()
	})
})

Main.imgload = function(imgs) {
	var imgs=Main.imgs;
	var length = imgs.length, index = 0;
	var loadspan=$('.num_load').find('span').get(0),loadtxt=document.getElementById('id_load_num')	
	//var svgForStroke=$('#svgForStroke')
	function load(){
		var img=new Image();
		img.src=Main.imgurl+imgs[index];
		if(img.complete){			
			setTimeout(function(){
				onload();
			},20)
			return ;
		}
		img.onload=function(){
			setTimeout(function(){
				onload();
			},20)
		};		
		function onload(){
			index++;			
			var a = Math.floor(100 / length * index);						
			//修改进度
			loadspan.style.width=a+'%';
		    loadtxt.innerHTML=a+'%'	
		    a=250/100*a;	
		   // svgForStroke.attr('style','stroke-dasharray:'+a+'% 250%')	
			if (index == length) {	
				//进度改成100%
				$('.page_load').addClass('current');
				setTimeout(function(){
					Main.loading();			
				},200)
					
			}else{
				load();
			}		
		}
	}
	load();
}
Main.imgs=['images/1.jpg','images/2_03.png','images/3_03.png','images/4_03.png','images/5_03.png','images/7_03.png','images/8_03.png','images/9_03.png','images/11_03.png','images/13_03.png'];
//滑动
var y,y2=0,index=0;
Main.scrolbody=function(){			
	$(document.body).get(0).addEventListener('touchstart',function(e){
		if(Main.scrollbool==false){
			y=y2=0;
			return ;
		}
		y=e.touches[0].pageY;
	},false);
	$(document.body).get(0).addEventListener('touchmove',function(e){
		e.preventDefault();	
		if(Main.scrollbool==false){
			y=y2=0;
			return ;
		}
		y2=e.touches[0].pageY;
		//$('.page_con').css({y:-(Main.index*Main.height+(y-y2))});		
	},false)
	$(document.body).get(0).addEventListener('touchend',function(e){	
	   
		if(Main.scrollbool==false || y2==0  ){
			y=y2=0;
			$('.page_box_0').css({y:-Main.index*Main.height+'px'});
			return ;
		}	
		if(y-y2>5 &&  Main.index<4 ){
			
		    Main.index+=1;
			//ga('send','event','JDB_wsbda','huadong_times','click');
			if(Main.index>3){
			  $('.tan').addClass('hover') 
			  $('.button').show()
			  $('.audio_mp3').css('z-index','0')
			  $('.page_box_3 .tu_3').hide()
			}
			if(Main.index==1){
			  $('.page_box').eq(Main.index).show()	
			  ga('send','event','JDB_wsbda','huadong_page1','click');
			}else if(Main.index==2){
			  $('.page_box').eq(Main.index).show()
			 ga('send','event','JDB_wsbda','huadong_page2','click');
			}else if(Main.index==3){
			  $('.page_box').eq(Main.index).show()
			 ga('send','event','JDB_wsbda','huadong_page3','click');
			  $('.jt').hide()
			}else if(Main.index>=4){
			  Main.index=3;
			  
			  $('.page_cc').animate({top:-3*Main.height+'px'},0); 
			  return
			}		   
		    $('.page_cc').animate({top:-Main.index*Main.height+'px'},400);
		    $(".page_index").addClass('current');
		  
			
			$('.page_box').eq(Main.index).addClass('current');			
			Main.scrollbool=false;
			setTimeout(function(){
				$('.page_box').eq(Main.index-1).removeClass('current');
				Main.scrollbool=true;
				if(Main.index==1){
				    setTimeout(function(){
					   $(".img_6bc").css('opacity','1');
					},400);
				}
			},100);
			
		}else 	if(y2-y>5 &&  Main.index>0 ){
			 Main.index-=1;
			
			if(Main.index==1){
			  $('.page_box').eq(Main.index).show()
			  console.log(123)
			}else if(Main.index==2){
			  $('.jt').show()
			  $('.page_box').eq(Main.index).show()
			  $('.tan').removeClass('hover')
			  $('.button').hide()
			  $('.audio_mp3').css('z-index','99')
			  $('.page_box_3 .tu_3').show()
			}else if(Main.index==3){
				
				
			 
			}else if(Main.index==4){
			  $('.page_box').eq(Main.index).show()
			}				
			$('.page_cc').animate({top:-Main.index*Main.height+'px'},400);	
			$('.page_box').eq(Main.index).addClass('current');			
			Main.scrollbool=false;
			setTimeout(function(){
				$('.page_box').eq(Main.index+1).removeClass('current');	
				Main.scrollbool=true;
			},100)
		}else{
			$('.page_cc').css({top:-Main.index*Main.height+'px'});
			$('.page_box').eq(Main.index).addClass('current');	
			
		}				
		if(Main.index>4){
			$('.img_3b').hide();
			$(".page_index").addClass('current');
		}	else{
			$('.img_3b').show();
		}
		y=y2=0;			
	},false);		
}
/*get请求*/
Main.get = function(url, data, success) {
	$.ajax({
		type : 'get',
		url : Main.url+url,
		dataType : 'jsonp',
		data : data,
		success : function(response) {
			console.log(response);
			if(response.err==99){
				location.href=response.url
				return ;
			}
			success(response);
		}
	})
}