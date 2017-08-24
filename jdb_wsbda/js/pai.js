$(function(){
	luf.change();
	luf.init();
	luf.on();
	
	var i1=new Image();
	i1.src="images/p1_03.png";
	var i2=new Image();
	i2.src="images/p1_03b.png";
	var i3=new Image();
	i3.src="images/p1_03c.png";
	var i4=new Image();
	i4.src="images/p1_03d.png";
	luf.imga=[i1,i2,i3,i4];
	
})
var luf={};
luf.onstr=function(){
	$('.img_d2').css('opacity','0')
	var num=3;
	var span_3=$(".span_3")
	function fs(){		
		if(num>0){
			num-=1;
			span_3.html(num);
		}else{
			//luf.dong=true;
			clearInterval(inter);
			setTimeout(function(){
				span_3.css('opacity','0')
				luf.start();
			},0)
		}
	}
	var inter;	
	setTimeout(function(){
		span_3.css('opacity','1')
		inter=setInterval(function(){
		   fs();
	    },1000)
	},1000)
	
}
luf.change=function(){
	this.width=$(window).width();
	this.height=$(window).height();
	this.clip_div=$(".clip_div");
	this.id_img1=$("#id_img1");	
	this.yuandivwidth=280;
	this.ff=$(".ff")
	this.fh=140;
	if(this.height<=480){
		this.yuandivwidth=230;
		this.fh=115;
	}
	var b=212/luf.yuandivwidth;
	var w=this.width*b;
	var left=-(this.width-luf.yuandivwidth)/2*b;
	var top=-90*b;
	this.biw=w;
	
	
		
	
	this.id_img1.css({width:w+'px',left:left+'px',top:top+'px'});
	this.div_exit=$('.div_exit');	
	this.dong=false;	
	this.imgh=159;
}
luf.init=function(){
    var that=this;
	init(50,'div_cav1',luf.width,luf.height,function(){
	    var loader=new LLoader();
	    layer=this.layer=new LSprite();//层  属性  x y scaleX scaleY rotate alpha  
	    layer1=this.layer1=new LSprite();
		addChild(layer);
		addChild(layer1)	
        /*
	    loader.addEventListener(LEvent.COMPLETE,function(){	
	        mapdata=new LBitmapData(loader.content);//img  x y width height
    	    console.log("mapdata",mapdata.type,mapdata.x,mapdata.y,mapdata.width,mapdata.height)
    	    var mapimg=new LBitmap(mapdata);//x  y  scaleX=0.1 scaleY alpha=0.2  rotate =30
    	    mapimg.x=0;mapimg.y=0;
    	    var bi=luf.width/mapdata.width
    	    mapimg.scaleX=bi;
    	    mapimg.scaleY=bi;    	   
    	    layer.addChild(mapimg); 
	    })
	    loader.load('images/bg1.jpg','bitmapData')*/
	    
	    var loader1=new LLoader();
	    loader1.addEventListener(LEvent.COMPLETE,function(){	    
	    	var mapdata=new LBitmapData(loader1.content);
	    	window.mapdata=mapdata;
    	    //console.log("mapdata",mapdata.type,mapdata.x,mapdata.y,mapdata.width,mapdata.height)
    	    mapimg=this.mapimg1=new LBitmap(mapdata);
    	    mapimg.x=luf.width/2-30;
    	    mapimg.y=-luf.imgh;
    	    mapimg.scaleX=50/mapdata.width;
    	    mapimg.scaleY=50/mapdata.width;  
    	    mapimg.rotate=0;	  
    	    layer1.addChild(mapimg);    
            that.frame();			
	    });
	    var a=['images/p1_03.png','images/p1_03b.png','images/p1_03c.png','images/p1_03d.png']
	    Main.ping= Main.random(3)	    
	    //console.log(Main.ping)
	    loader1.load(a[Main.ping] ,'bitmapData')
    })
}
luf.updateimig=function(){
	 Main.ping= Main.random(3)	    
	// console.log(Main.ping);
	 mapimg.bitmapData=new LBitmapData(luf.imga[Main.ping]);	
}
luf.frame=function(){
    var that=this;
	var h=luf.height+luf.imgh;
    layer1.addEventListener(LEvent.ENTER_FRAME,onframe);
	function onframe(){
	    if(that.dong==true){
		    if(mapimg.y<=h){
			    mapimg.y+=20;
				mapimg.rotate+=10;				
			}else{
			    that.over();
			}		    
		}	    
	}
}
luf.on=function(){
  		$('#span1').on('touchstart',function(){
  			//that.img_1.transition({top:h+'px',rotate:'1200deg'},3000)
			luf.start();		
  		})
  		$('#span2').on('touchstart',function(){
  			if(luf.dong==false){
  				return ;
  			}
		    luf.over();  			
  		})  		
}
luf.start=function(){
    if(luf.dong==false){
	    mapimg.y=-luf.imgh;
		mapimg.alpha=1;
		luf.dong=true;
		//this.clip_div.removeClass('current');
		//this.div_exit.removeClass('opacity');
	}	
}

luf.over=function(){
    this.dong=false;
	//console.log('over');
	mapimg.alpha=1;
	var y=mapimg.y;
	
	var z=y+75.5;
	var result=0;
	if(z>90 && z<=(90+this.fh*2)){
		if(z<=(90+this.fh)){
			z=z-90;
			//console.log('-90')
		}else {
			z=z-90-this.fh;
			z=this.fh-z;
			//console.log(z+'-90-fn')
		}
	}	else{
		z=0;
	}
	if(Main.ping==0){
		z+=20;
	}
	//z=z.toFixed(2);
	//console.log(y,z);
	this.ff.html(z+'分')
	this.div_exit.addClass('opacity');
	var c=$('#div_cav1_canvas').get(0);
	var ctx=c.getContext("2d");
	//var imgdata=ctx.getImageData((luf.width-280)/2,70,280,280);
	//console.log(imgdata);
	$('.page_show').addClass('current');
	$(".page_pai,.div_bg1").removeClass('current');
	var img=new Image();
	img.src=c.toDataURL('image/png');		
	this.id_img1.attr('src',img.src)
	this.clip_div.addClass('current');
	dataForWeixin.desc=z+'分';
	weixin.bind();
	Main.get('',{f:z},function(res){})
	
}