
var ajax_kg = false; //防止多次提交

var isdrag = false;
var ty,tx, x, y;
var sum1=sum2=sum3=sum4=0;
var ren_bq1=ren_bq2=ren_bq3=ren_bq4=0;
var ren_bh1=ren_bh2=ren_bh3=ren_bh4=0;
var op1=op2=op3=op4=0;


/* 优化动画 */
var yuhua2 = $("#yuhua2")[0];
var yuhua3 = $("#yuhua3")[0];
var yuhua4 = $("#yuhua4")[0];

var $nengliang2 = $('.nengliang').eq(0);
var $nengliang3 = $('.nengliang').eq(1);
var $nengliang4 = $('.nengliang').eq(2);

var $pao2 = $('.pao').eq(0);
var $pao3 = $('.pao').eq(1);
var $pao4 = $('.pao').eq(2);

var $renwu_bq2 = $('.renwu_bq2');
var $renwu_bq3 = $('.renwu_bq3');
var $renwu_bq3 = $('.renwu_bq4');

var $renwu_bh2 = $('.renwu_bh2');
var $renwu_bh3 = $('.renwu_bh3');
var $renwu_bh4 = $('.renwu_bh4');

/*document.getElementById("yuhua1").addEventListener('touchend',releasemouse1,false);//松开鼠标
document.getElementById("yuhua1").addEventListener('touchstart', selectmouse1,false);//开始拖拽
document.getElementById("yuhua1").addEventListener('touchmove', movemouse1,false);//移动鼠标*/

document.getElementById("yuhua2").addEventListener('touchend',releasemouse2,false);//松开鼠标
document.getElementById("yuhua2").addEventListener('touchstart', selectmouse2,false);//开始拖拽
document.getElementById("yuhua2").addEventListener('touchmove', movemouse2,false);//移动鼠标

document.getElementById("yuhua3").addEventListener('touchend',releasemouse3,false);//松开鼠标
document.getElementById("yuhua3").addEventListener('touchstart', selectmouse3,false);//开始拖拽
document.getElementById("yuhua3").addEventListener('touchmove', movemouse3,false);//移动鼠标

document.getElementById("yuhua4").addEventListener('touchend',releasemouse4,false);//松开鼠标
document.getElementById("yuhua4").addEventListener('touchstart', selectmouse4,false);//开始拖拽
document.getElementById("yuhua4").addEventListener('touchmove', movemouse4,false);//移动鼠标

//function movemouse1(e) {
//	if (isdrag) {
//		n = tx + e.touches[0].pageX - x;
//		h = ty + e.touches[0].pageY-y;
//		sum1++;
//		ren_bq1+=0.01;
//		ren_bh1+=0.01;
//		op1+=0.01;
//		/*mxLeft = 0;
//		mxTop = 0;
//		mxRight = $('.scope1').width();
//		mxBottom = $('.scope1').height();
//		n = Math.max(Math.min(n, mxRight - $("#yuhua1").width()), mxLeft);
//		h = Math.max(Math.min(h, mxBottom - $("#yuhua1").width()), mxTop);*/
//		$("#yuhua1").css("left", n);
//		$("#yuhua1").css("top", h);
//		$('.nengliang').eq(0).height(sum1);
//		$('.pao').eq(0).css('opacity',op1);
//		$('.renwu_bq1').css('opacity',ren_bq1);
//		$('.renwu_bh1').css('opacity',ren_bh1);
//		if(sum1>140){
//			setTimeout(function(){
//			$('.manfen1').fadeIn(100);
//			},500);
//			$('.nengliang').eq(0).height(140);
//			$('.renwu_bq1').css('opacity',1);
//			$('.renwu_bh1').css('opacity',1);
//			$('.huaduo1').show();
//			$('.title').eq(0).fadeIn(200);
//			$('.scope1').hide();
//		}
//		if($('.huaduo1').css('display')!="none"&&$('.huaduo2').css('display')!="none"&&$('.huaduo3').css('display')!="none"&&$('.huaduo4').css('display')!="none"){
//			setTimeout(GetDataFromJson1,2000);
//			//alert("本次活动已经，感谢支持！");	
//		}
//		e.preventDefault();
//		return false;
//	}
//}
//
//function selectmouse1(e) {
//	//e.dataTransfer.setData("Text", e.target.id);
//	isdrag = true;
//	tx = parseInt(document.getElementById("yuhua1").style.right + 0);
//	ty = parseInt(document.getElementById("yuhua1").style.top + 0);
//	x = e.touches[0].pageX;
//	y = e.touches[0].pageY;
//	return false;
//}
//function releasemouse1(e){
//	isdrag = false;
//}

function movemouse2(e) {
	if (isdrag) {
		n = tx + e.touches[0].pageX - x;
		h = ty + e.touches[0].pageY-y;
		sum2++;
		ren_bq2+=0.01;
		ren_bh2+=0.01;
		//mxLeft = 0;
		//mxTop = 0;
		op2+=0.01;
		/*mxRight = $('.scope2').width();
		mxBottom = $('.scope2').height();
		n = Math.max(Math.min(n, mxRight - $("#yuhua2").width()), mxLeft);
		h = Math.max(Math.min(h, mxBottom - $("#yuhua2").width()), mxTop);*/
		yuhua2.style.webkitTransform = 'translate('+n+'px,'+h+'px)';
		//$("#yuhua2").css("left", n);
		//$("#yuhua2").css("top", h);
		$('.nengliang').eq(0).height(sum2);
		$('.pao').eq(0).css('opacity',op2);
		$('.renwu_bq2').css('opacity',ren_bq2);
		$('.renwu_bh2').css('opacity',ren_bh2);
		if(sum2>140){
			setTimeout(function(){
			$('.manfen2').fadeIn(100);
			},500);
			$('.nengliang').eq(0).height(140);
			$('.renwu_bq2').css('opacity',1);
			$('.renwu_bh2').css('opacity',1);
			$('.huaduo2').show();
			$('.title').eq(0).fadeIn(200);
			$('.scope2').hide();
		}
		
		if($('.huaduo2').css('display')!="none"&&$('.huaduo3').css('display')!="none"&&$('.huaduo4').css('display')!="none"){
			if(ajax_kg == false){
				ajax_kg = true;
				setTimeout(function(){
					$('.wrap3').hide();
					$('.wrap5,#award,#award_b').show();
				},1000);
			}
			//alert("本次活动已经结束，感谢支持！");
		}
		e.preventDefault();
		return false;
	}
}

function selectmouse2(e) {
	//e.dataTransfer.setData("Text", e.target.id);
	isdrag = true;
	tx = parseInt(document.getElementById("yuhua2").style.left + 0);
	ty = parseInt(document.getElementById("yuhua2").style.top + 0);
	x = e.touches[0].pageX;
	y = e.touches[0].pageY;
	return false;
}
function releasemouse2(e){
	isdrag = false;
}

function movemouse3(e) {
	if (isdrag) {
		n = tx + e.touches[0].pageX - x;
		h = ty + e.touches[0].pageY-y;

		sum3++;
		ren_bq3+=0.01;
		ren_bh3+=0.01;
		//mxLeft = 0;
		//mxTop = 0;
		op3+=0.01;
		/*mxRight = $('.scope3').width();
		mxBottom = $('.scope3').height();
		n = Math.max(Math.min(n, mxRight - $("#yuhua3").width()), mxLeft);
		h = Math.max(Math.min(h, mxBottom - $("#yuhua3").width()), mxTop);*/
		//yuhua3.style.webkitTransform = 'translate('+n+'px,'+h+'px)';
		yuhua3.style.left = n+'px';
		yuhua3.style.top = h+'px';
		$nengliang3.height(sum3);
		$pao3.css('opacity',op3);
		$renwu_bq3.css('opacity',ren_bq3);
		$renwu_bh3.css('opacity',ren_bh3);
		if(sum3>140){
			setTimeout(function(){
			$('.manfen3').fadeIn(100);
			},500);
			
			$('.nengliang').eq(1).height(140);
			$('.renwu_bq3').css('opacity',1);
			$('.renwu_bh3').css('opacity',1);
			$('.huaduo3').show();
			$('.title').eq(1).fadeIn(200);
			$('.scope3').hide();
		}
		
		if($('.huaduo2').css('display')!="none"&&$('.huaduo3').css('display')!="none"&&$('.huaduo4').css('display')!="none"){
			if(ajax_kg == false){
				ajax_kg = true;
				setTimeout(function(){
					$('.wrap3').hide();
					$('.wrap5,#award,#award_b').show();
				},1000);
			}
			//alert("本次活动已经结束，感谢支持！");
		}
		e.preventDefault();
		return false;
	}
}

function selectmouse3(e) {
	//e.dataTransfer.setData("Text", e.target.id);
	isdrag = true;
	tx = parseInt(document.getElementById("yuhua3").style.left + 0);
	ty = parseInt(document.getElementById("yuhua3").style.top + 0);
	x = e.touches[0].pageX;
	y = e.touches[0].pageY;
	return false;
}
function releasemouse3(e){
	isdrag = false;
}

function movemouse4(e) {
	if (isdrag) {
		n = tx + e.touches[0].pageX - x;
		h = ty + e.touches[0].pageY-y;
		sum4++;
		ren_bq4+=0.01;
		ren_bh4+=0.01;
		//mxLeft = 0;
		//mxTop = 0;
		op4+=0.01;
		/*mxRight = $('.scope4').width();
		mxBottom = $('.scope4').height();
		n = Math.max(Math.min(n, mxRight - $("#yuhua4").width()), mxLeft);
		h = Math.max(Math.min(h, mxBottom - $("#yuhua4").width()), mxTop);*/
		yuhua4.style.webkitTransform = 'translate('+n+'px,'+h+'px)';
		//$("#yuhua4").css("left", n);
		//$("#yuhua4").css("top", h);
		$('.nengliang').eq(2).height(sum4);
		$('.pao').eq(2).css('opacity',op4);
		$('.renwu_bq4').css('opacity',ren_bq4);
		$('.renwu_bh4').css('opacity',ren_bh4);
		if(sum4>140){
			setTimeout(function(){
			$('.manfen4').fadeIn(100);
			},500);
			$('.nengliang').eq(2).height(140);
			$('.renwu_bq4').css('opacity',1);
			$('.renwu_bh4').css('opacity',1);
			$('.huaduo4').show();
			$('.title').eq(2).fadeIn(200);
			$('.scope4').hide();
		}
		
		if($('.huaduo2').css('display')!="none"&&$('.huaduo3').css('display')!="none"&&$('.huaduo4').css('display')!="none"){
			if(ajax_kg == false){
				ajax_kg = true;
				setTimeout(function(){
					$('.wrap3').hide();
					$('.wrap5,#award,#award_b').show();
				},1000);
			}
			//alert("本次活动已经结束，感谢支持！");
		}
		e.preventDefault();
		return false;
	}
}

function selectmouse4(e) {
	//e.dataTransfer.setData("Text", e.target.id);
	isdrag = true;
	tx = parseInt(document.getElementById("yuhua4").style.left + 0);
	ty = parseInt(document.getElementById("yuhua4").style.top + 0);
	x = e.touches[0].pageX;
	y = e.touches[0].pageY;
	return false;
}
function releasemouse4(e){
	isdrag = false;
}

$('#get,#start_b_close').on('click',function(){
	$('#award,.award_b').hide();
	$('.xuanwo').show();
});

$(".xuanwo").on("click",function(){
	//$(this).hide();
	//$(".award_c").show();
	
	//选择 精华霜 后再进行判断
	GetDataFromJson1()
});

var url1 = 'http://'+window.location.host+'/'

function GetDataFromJson1() {
    $.ajax({
        type: 'GET',
        url: url1+"MjjWinter/index/getInfo",
        dataType: 'jsonp',
        success: function(res){
			if(res.err==1){
				//1表示提交过信息 直接显示结果弹窗
				//GetDataFromJson();
				$('#award,.wrap5').show();
				$('.award_c,.award_b').hide();
				$('#jiangpin').show();
			}else if(res.err==0){
				//返回0表示没有提交过信息，显示选择精华露页面，点击会显示填写电话弹窗
				$('.wrap5,#award').show();
				$('.award_c').show();
			}
      }
    })
}