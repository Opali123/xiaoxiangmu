$(document.body).on('touchmove',function(e){
		e.preventDefault?e.preventDefault():window.event.returnValue = false; 	
	})

$('.go').on('click',function(){
	$('#index').fadeOut(500);
	$('#mission').fadeIn(500);
});
$('.btn_mis').on('click',function(){
	$('#mission').fadeOut(500);
	$('#skill').fadeIn(500);
});
$('.btn_start').on('click',function(){
	$('#skill').fadeOut(500);
	$('#game1').fadeIn(500);
});
$('#next').on('click',function(){
	$('#score').fadeOut(500);
	$('.wrap4').fadeIn(500);
});
$('.close,.award_btn').on('touchend',function(){
	$('#miaoshu').fadeOut(500);
});
$("#start_c_close").on('touchend',function(){
	$('#award,.award_c').hide();
	return false;
});
$('#close').on('click',function(){
	$('#award').fadeOut(500);
});
$('#yj_btn').on('click',function(){
	$('.shoushi1').show();
setTimeout(function(){$('.shoushi1').fadeOut(500);},1000);
});
$('#yw_btn').on('click',function(){
	$('.shoushi2').show();
setTimeout(function(){$('.shoushi2').fadeOut(500);},1000);
});
$('#yl_btn').on('click',function(){
	$('.shoushi3').show();
setTimeout(function(){$('.shoushi3').fadeOut(500);},1000);
});
$('#wy_btn').on('click',function(){
	$('.shoushi4').show();
setTimeout(function(){$('.shoushi4').fadeOut(500);},1000);
});
$('.renwu_bh1,.renwu_bh2,.renwu_bh3,.renwu_bh4,.renwu_bq1,.renwu_bq2,.renwu_bq3,.renwu_bq4').css('bottom',-$(window).width()*107/750);
var arr=[];
//给产品设置bottom
$('.chanpin1,.chanpin2,.chanpin3,.chanpin4').css('bottom',$(window).width()/750*107-7);
$('.cp').click(function(){
	hover($('.cp').index($(this)));
});
$('.cp1').click(function(){
	hover1($('.cp1').index($(this)));
});
//产品变大
function hover(num){
	
	for(var i=0;i<$('.cp').length;i++){
		$('.cp').eq(i).removeClass('big');
		$('.miaoshu').eq(i).hide();
	}/*
	if(num==2){
		$('.zhutui').show();	
	}else{
		$('.zhutui').hide();
	}*/
	$('.cp1').eq(num).addClass('big');
	$('.wrap4').hide();
	$('.wrap3').show();
	$('#miaoshu').show();
	$('.renwu').eq(num).show();
	$('.nengliang').eq(num).show();
	$('.miaoshu').eq(num).show();
	$('.scope1').height($('.scope1').width()*0.8);
	$('.scope2').height($('.scope2').width()*0.8);
	$('.scope3').height($('.scope3').width()*0.8);
	$('.scope4').height($('.scope4').width()*0.8);
}

function hover1(num){
	for(var i=0;i<$('.cp1').length;i++){
		$('.cp1').eq(i).removeClass('big');
		$('.renwu').eq(i).hide();
		$('.nengliang').eq(i).hide();
		$('.miaoshu').eq(i).hide();
	}/*
	if(num==2){
		$('.zhutui').show();	
	}else{
		$('.zhutui').hide();
	}*/
	$('.cp1').eq(num).addClass('big');
	$('.renwu').eq(num).show();
	$('.nengliang').eq(num).show();
	$('#miaoshu').show();
	$('.miaoshu').eq(num).show();
	$('.scope1').height($('.scope1').width()*0.8);
	$('.scope2').height($('.scope2').width()*0.8);
	$('.scope3').height($('.scope3').width()*0.8);
	$('.scope4').height($('.scope4').width()*0.8);
}
$('#start_i,#start_i_close').on('click',function(){
	$('#cover_i').hide();
	$('.chanpin_i').hide();
	$('.chanpin').show();
});
$("#submit").on('click',function(){
	name=$('#name').val();
	phone=$('#phone').val();
    var patrn = /^1[3457896]\d{9}$/; 
	//手机号码验证信息
	var nmPatrn=/[^u4E00-u9FA5]/;
	if(name==""){
		$("#tishi").html("请输入姓名！");
		$("#name").focus();
	}else if(!nmPatrn.exec(name)){
		$("#tishi").html("请输入中文姓名！");
	}else{
		if(phone==""){
			 $("#tishi").html("请输入手机号码！");
			 $("#phone").focus();
			 return;
			}else if (!patrn.exec(phone)) { 
			   $("#tishi").html("手机号格式不正确！");
				$("#phone").focus();
				return;
			} else{
			  $("#tishi").html("");
			  GetDataFromJson();
			}
		}
	});

var url1 = 'http://'+window.location.host+'/'

function GetDataFromJson() {
    $.ajax({
        type: 'GET',
        url: url1+'MjjWinter/Index/saveInfo',
		data:'&name='+name+'&phone='+phone,//传的参数
        dataType: 'jsonp',
        success: function(res){
			$('#award').show();
			$('.award').hide();
			$('.award_a').show();
			$('.award_c,.award_b').hide();
			$('#jiangpin').show();
			//$('#yanzhengma').html(res.code);
			/*if(res.err==1){
				alert("您填写的信息有误，请重新输入信息！");
				$('#award').show();
				$('.award_c').show();
			}else if(res.err==0){
				$('#award').show();
				$('.award_a').show();
				$('.award_c').hide();
				if(res.gfit=="1"){
					$('#ipad').show();
					$('.nm').html(res.name);
				}else if(res.gfit=="2"){
					$('#diaozhui').show();
					$('.nm').html(res.name);
				}else if(res.gfit=="3"){
					$('#xinpin').show();
					$('.nm').html(res.name);
				}else if(res.gfit=="4"){
					$('#jinping').show();
					$('.nm').html(res.name);
				}
			}*/
      }
    })
}