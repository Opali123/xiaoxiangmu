
var timerc = 5;
var m;
var zhuZiHeight = 0;
var zhuZiHeight2 = 0;
var san;
var opac = 0;
var page=1;
$(function () {
    $(".zhuZi").height(0);
    //sanleft = $("#sanleft").width();
   // sanright = $("#sanRight").width();
    $("#min").text(5 + "S");
    $("#min2").text(5 + "S");
   
    allClick();
    // paobu();
  
})

//倒计时
function add() { //加时函数
    timer = setInterval(function () {
        --timerc; //时间变量自增1
        $("#min").html(timerc + "S"); //写入秒数（两位）
        if (timerc == 0) {
            loselayer();
            clearInterval(timer);
        }
    }, 1000)
};
function add2() { //加时函数
    timer = setInterval(function () {
         --timerc; //时间变量自增1
         $("#min2").html(timerc + "S"); //写入秒数（两位）
         if (timerc == 0) {
                loselayer2();
                clearInterval(timer);
            }
    },1000)
};

//切换图片（跑步）
function paobu() { 
    if (document.getElementById("paobu2").style.display == "none") {
        document.getElementById("paobu2").style.display = "block";
        document.getElementById("paobu1").style.display = "none";
    } else {
        document.getElementById("paobu2").style.display = "none";
        document.getElementById("paobu1").style.display = "block";
    }
    setTimeout("paobu()", 200); //设置200毫秒以后执行一次本函数
};

//所有的点击事件
function allClick() {
    //点击增加高度
    $(".jia").on("touchend", function () {
		 $(".penwu").show();
        var timer1 = null;
        timer1 = window.setTimeout("hidepnewu()", 300);
        zhuZiHeight = zhuZiHeight + 20;

      

        //alert(zhuZiHeight);
        opac = opac + 0.1;

        $(".sanDiv").css("opacity", opac);
        if (zhuZiHeight > 200) {
            zhuZiHeight = 200;
        }
        if (zhuZiHeight == 200) {
            $(".ziwaixian").show();
            $(".spf80").show();
			$(".jia").unbind("touchend");

        }
        if (m != 0) {
            if (zhuZiHeight >= 200) {
                clearInterval(timer);
                setTimeout(function () {
                    victorylayer();
                }, 2000);
                
            }
        }
        $(".zhuZi").height(zhuZiHeight);
    });
    //第二个游戏点击增加高度
    $(".jia2").on("touchend", function () {
        zhuZiHeight2 = zhuZiHeight2 + 20;
        $(".penwu2").show();
        var timer1 = null;
        timer1 = window.setTimeout("hidepnewu2()", 300);
        //alert(zhuZiHeight);
        opac = opac + 0.1;
       
        $(".sanDiv2").css("opacity", opac);
        if (zhuZiHeight2 > 200) {
            zhuZiHeight2 = 200;
        }
        if (zhuZiHeight2 == 200) {
            $(".ziwaixian").show();
            $(".spf80").show();
			
			$(".jia2").unbind("touchend");
        }
        if (m != 0) {
            if (zhuZiHeight2 >= 200) {
                clearInterval(timer);
                setTimeout(function () {
                    victorylayer2();
                }, 2000);
               
            } 
        }
        $(".zhuZi2").height(zhuZiHeight2);
    });
    //开始游戏
    $(".beginbtn").on("click", function () {
		 var top = $(".zhuZitu").position().top;
        $(".spf80").css("top", top);
        $(".beginbtn").hide();
        $(".jia").show();
        $(".wenziw").hide();
        //计时开始
        add();
        $("#game1").addClass("contentjb");
    })
    $(".beginbtn2").on("click", function () {
        $(".beginbtn2").hide();

        $(".hanzhu").show();
        $(".jia2").show();
        $(".wenzi2").hide();
        //计时开始
        add2();
        $("#game2").addClass("contentjb");
    });
    //game1失败再来一次
    $("#fail_btn1").on("click", function () {
        $(".cover1").hide();
        $(".beginbtn").show();
        $(".jia").hide();
        $(".sanDiv").css("opacity", 0);
        $(".zhuZi").height(0);
        $(".wenziw").show();
        $("#min").text(5 + "S");
        timerc = 5;
        zhuZiHeight = 0;
        opac = 0;
    })
   
    //game1成功继续
  
    $("#victory_btn1").on("click", function () {
        timerc = 5;
        opac = 0;
        $(".spf80").hide();
        $(".cover1").hide();
        $("#game2").show();
        $("#game1").hide();
        $("#game2").addClass("contentjb");
    })

    //game2失败再来一次
    $("#fail_btn2").on("click", function () {
        $(".cover1").hide();
        $(".beginbtn2").show();
        $(".jia2").hide();
        $(".sanDiv2").css("opacity", 0);
        $(".zhuZi2").height(0);
        $(".wenzi2").show();
        $("#min2").text(5 + "S");
        timerc = 5;
        zhuZiHeight2 = 0;
        opac = 0;
    })
    //game2成功继续
    $("#victory_btn2").on("click", function () {
		$('#score').fadeIn(500);
		$('#game2').fadeOut(500);
        $(".cover1").hide();
    })
}
//game1成功弹层
function victorylayer() {
    $(".cover1").show();
    $("#victory1").show();
    $("#fail1").hide();
    $("#victory2").hide();
    $("#fail2").hide();
}
//game1失败弹层
function loselayer() {
    $(".cover1").show();
    $("#victory1").hide();
    $("#fail1").show();
    $("#victory2").hide();
    $("#fail2").hide();
}
//game2成功弹层
function victorylayer2() {
    $(".cover1").show();
    $("#victory1").hide();
    $("#fail1").hide();
    $("#victory2").show();
    $("#fail2").hide();
}
//game2失败弹层
function loselayer2() {
    $(".cover1").show();
    $("#victory1").hide();
    $("#fail1").hide();
    $("#victory2").hide();
    $("#fail2").show();
}
//喷雾隐藏
function hidepnewu() {
    $(".penwu").hide();
}
function hidepnewu2() {
    $(".penwu2").hide();
}