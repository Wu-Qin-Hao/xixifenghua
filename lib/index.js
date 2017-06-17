/**
 * Created by wuqinhao on 2017/6/11.
 */

    $(function () {

        //定时器
        var timer;

        var grass_pao = 1;

        var car_pao = 1;

        var boat_pao = 1;

        var bailu_pao =1;
        var bailu_pao_t = 400;

        var high_iron_pao = 1;

        var feiji_pao =1;
        var feiji_pao_t = 400;

        var hundred_pao = 1;

        var road_pao = 1;

        var tree1_pao = 1;
        var tree2_pao = 1;

        var doorway_pao = 1;


        console.log(window.innerWidth);
        //绑定touch事件
        $('.touch1').on('touchstart', function (e) {
            e.preventDefault();
            timer = setInterval(remove,7);
        });
        $('.touch1').on('touchend', function (e) {
            e.preventDefault();
            clearInterval(timer);
        });

        //移动
        var left = 0;
        function remove() {
            console.log(left+"");

            if (left == -parseInt((14900-window.innerWidth*2)*ratio)) {
                clearInterval(timer);
                $("#video").show();
                //$(".main").hide();
                //window.location.href = "video.html";
                $("#video").click(function () {
                    window.location.href = "video.html";
                });
                /*var video = document.createElement('video');
                video.src ='music/videoplayback.mp4';
                video.play();
                video.width= canvas.width;
                video.height= canvas.height;
                $('#canvas').attr('style','width:'+window.innerWidth+'px;height:'+window.innerHeight+'px');

                requestAnimationFrame(loop);
                function loop() {
                    draw();
                    requestAnimationFrame(loop);
                }
                function draw() {
                    if (video.currentTime >= 0.01) {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.globalCompositeOperation = 'hard-light';
                        ctx.drawImage(video, 0, 0,canvas.width,canvas.height);
                    }
                }
                ctx.drawImage(video,0,0,canvas.width,canvas.height);*/
                $('#butterfly').hide();
            } else {
                left -= 1;
                $(".bg-img").css("left",left);
                $("#light").css("left",light_p+left);
                $("#car").css("left",car_p+left);
/*                $("#car1").css("left",car1_p+left);
                $("#car2").css("left",car2_p+left);
                $("#car3").css("left",car3_p+left);
                $("#car4").css("left",car4_p+left);*/
                $("#hundred").css("left",left);
                $("#text1").css("left",text1_p+left);
                $("#text2").css("left",text2_p+left);
                $("#suogao").css("left",suogao_p+left);

                $("#text3").css("left",text3_p+left);
                $("#road").css("left",road_p+left);
                $("#text4").css("left",text4_p+left);
                $("#text5").css("left",text5_p+left);
                $("#text6").css("left",text6_p+left);
                $("#text7").css("left",text7_p+left);
                $("#grass").css("left",grass_p+left);

                $("#boat").css("left",boat_p+left);

                $("#text8").css("left",text8_p+left);
                $("#text9").css("left",text9_p+left);
                $("#text10").css("left",text10_p+left);
                $("#tree1").css("left",tree1_p+left);
                $("#bailu").css("left",bailu_p+left);
                $("#text11").css("left",text11_p+left);
                $("#doorway").css("left",doorway_p+left);
                $("#text12").css("left",text12_p+left);
                $("#tree2").css("left",tree2_p+left);
                $("#high_iron").css("left",high_iron_p+left);
                $("#text13").css("left",text13_p+left);
                $("#text14").css("left",text14_p+left);
                $("#text15").css("left",text15_p+left);
                $("#feiji").css("left",feiji_p+left);

                $("#text16").css("left",text16_p+left);
                $("#text17").css("left",text17_p+left);
                $("#text18").css("left",text18_p+left);
                $("#text19").css("left",text19_p+left);

                var left_shipei = 0;
                /*if (window.innerWidth > 630 && window.innerWidth < 650) {
                    left_shipei = 0;
                } else if (window.innerWidth > 550 && window.innerWidth < 580) {
                    left_shipei = -0.1;
                } else if (window.innerWidth > 650 && window.innerWidth < 690) {
                    left_shipei = 0.1;
                } else if (window.innerWidth > 710 && window.innerWidth < 750) {
                    left_shipei = 0.2;
                }*/


                /*if (-left >= parseInt(car_p1) && -left <= parseInt(grass_p1)) {
                    car_pao = car_pao +1.1;
                    $("#car").fadeIn(300).css("left",left+car_pao+car_p);
                }*/

                if (-left <= parseInt(road_p1)) {
                    hundred_pao = hundred_pao -0.2;
                    $("#hundred").fadeIn(300).css("left",left+hundred_pao);
                }

                if (left == -parseInt(text3_p1)) {
                    $("#text3").fadeIn(300);
                }

                if (-left >= parseInt(road_p1) && -left <= parseInt(boat_p1)) {
                    road_pao = road_pao -0.2;
                    $("#road").fadeIn(300);
                    $("#road").css("left",road_p+left+road_pao);
                    $("#text4").fadeIn(300);
                    $("#text4").css("left",text4_p+left+road_pao);
                }
                if (left == -parseInt(text5_p1)) {
                    $("#text5").fadeIn(300);
                }
                if (left == -parseInt(text6_p1)) {
                    $("#text6").fadeIn(300);
                }
                if (left == -parseInt(text7_p1)) {
                    $("#text7").fadeIn(300);
                }
                if (-left >= parseInt(grass_p1) && -left <= parseInt(tree1_p1)) {
                    grass_pao = grass_pao -0.2;
                    $("#grass").fadeIn(300).css("left",grass_p+left+grass_pao);
                    audio1.pause();
                }

                /*if (left == -parseInt(2000*(1+left_shipei))) {
                    $("#boat").fadeIn(300);
                }*/

                if (-left >= parseInt(boat_p1) && -left <= parseInt(doorway_p1)) {
                    $("#boat").fadeIn(300);
                    boat_pao = boat_pao +0.5;
                    $("#boat").css("left",boat_p+left+boat_pao);

                    if ($(".control").attr("data-value") == 1) {
                        audio2.play();
                    }
                }

                if (left == -parseInt(text8_p1)) {
                    $("#text8").fadeIn(300);
                }
                if (left == -parseInt(text9_p1)) {
                    $("#text9").fadeIn(300);
                }
                if (left == -parseInt(text10_p1)) {
                    $("#text10").fadeIn(300);
                }
                if (-left >= parseInt(tree1_p1) && -left <= parseInt(tree2_p1)) {
                    tree1_pao = tree1_pao -0.2;
                    $("#tree1").show().css("left",tree1_p+left+tree1_pao);
                }
                if (-left >= parseInt(bailu_p1) && -left <= parseInt(doorway_p1)) {
                    bailu_pao = bailu_pao -1.5;
                    bailu_pao_t = bailu_pao_t +1.8;
                    $("#bailu").show().css("left",bailu_p+left+bailu_pao).css("bottom",bailu_pao_t*ratio);
                }

                if (left == -parseInt(text11_p1)) {
                    $("#text11").fadeIn(300);
                }
                if (-left >= parseInt(doorway_p1) && -left <= parseInt(high_iron_p1)) {
                    audio2.pause();
                    doorway_pao = doorway_pao -0.1;
                    $("#doorway").show().css("left",doorway_p+left+doorway_pao);
                    if ($(".control").attr("data-value") == 1) {
                        audio3.play();
                    }

                }
                if (left == -parseInt(text12_p1)) {
                    $("#text12").fadeIn(300);
                }
                if (-left >= parseInt(tree2_p1) && -left <= parseInt(text15_p1)) {
                    tree2_pao = tree2_pao -0.2;
                    $("#tree2").show().css("left",tree2_p+left+tree2_pao);
                }
                if (left == -parseInt(high_iron_p1)) {
                    audio3.pause();
                    if ($(".control").attr("data-value") == 1) {
                        audio1.play();
                    }

                }
                if (-left >= parseInt(feiji_p1)) {
                    $("#high_iron").fadeIn(300);
                    high_iron_pao = high_iron_pao +5;
                    $("#high_iron").css("left",high_iron_p+left+high_iron_pao);
                }
                if (left == -parseInt(text13_p1)) {
                    $("#text13").fadeIn(300);
                }
                if (left == -parseInt(text14_p1)) {
                    $("#text14").fadeIn(300);
                }
                if (left == -parseInt(text15_p1)) {
                    $("#text15").fadeIn(300);
                }
                if (left == -parseInt(feiji_p1)) {
                    $("#feiji").fadeIn(300);
                    if ($(".control").attr("data-value") == 1) {
                        audio4.play();
                    }
                }
                if (-left >= parseInt(feiji_p1)) {
                    feiji_pao = feiji_pao -0.9;
                    feiji_pao_t = feiji_pao_t +0.8;
                    $("#feiji").css("left",feiji_p+left+feiji_pao).css("bottom",feiji_pao_t*ratio);
                }
                if (left == -parseInt(text16_p1)) {
                    $("#text16").fadeIn(300);
                }
                if (left == -parseInt(text17_p1)) {
                    $("#text17").fadeIn(300);
                }
                if (left == -parseInt(text18_p1)) {
                    $("#text18").fadeIn(300);
                }
                if (left == -parseInt(text19_p1)) {
                    $("#text19").fadeIn(300);
                }
            }
        }


        //背景
        $(".main").css("height",window.innerHeight).css("width",window.innerWidth);
        //适配缩放比
        var bg_img_w = 16508;
        var bg_img_h = 750;
        var ratio = window.innerHeight/bg_img_h;
        var w_ratio = window.innerWidth/bg_img_w;

        //设置left定位
        var light_p = 40*ratio;
        var light_p1 = (40-window.innerWidth*2)*ratio;
        var car_p = 900*ratio;
        var car_p1 = (900-window.innerWidth*2)*ratio;
/*        var car1_p = 0;
        var car2_p = 1453*ratio;
        var car3_p = 1453*2*ratio;
        var car4_p = 1453*3*ratio;*/
        var text1_p = 630*ratio;
        var text1_p1 = (630-window.innerWidth*2)*ratio;
        var text2_p = 900*ratio;
        var text2_p1 = (900-window.innerWidth*2)*ratio;
        var suogao_p = 1050*ratio;
        var suogao_p1 = (1050-window.innerHeight*2)*ratio;

        var text3_p = 1500*ratio;
        var text3_p1 = (1500-window.innerWidth*2)*ratio;
        var road_p = 2200*ratio;
        var road_p1 = (2200-window.innerWidth*2)*ratio;
        var text4_p = 2300*ratio;
        var text4_p1 = (2300-window.innerWidth*2)*ratio;
        var text5_p = 3800*ratio;
        var text5_p1 = (3800-window.innerWidth*2)*ratio;
        var text6_p = 4200*ratio;
        var text6_p1 = (4200-window.innerWidth*2)*ratio;
        var text7_p = 4600*ratio;
        var text7_p1 = (4600-window.innerWidth*2)*ratio;
        var grass_p = 5200*ratio;
        var grass_p1 = (5200-window.innerWidth*2)*ratio;

        var boat_p = 5300*ratio;
        var boat_p1 = (5300-window.innerWidth*2)*ratio;

        var text8_p = 5800*ratio;
        var text8_p1 = (5800-window.innerWidth*2)*ratio;

        var text9_p = 6200*ratio;
        var text9_p1 = (6200-window.innerWidth*2)*ratio;
        var text10_p = 6900*ratio;
        var text10_p1 = (6900-window.innerWidth*2)*ratio;
        var tree1_p = 7200*ratio;
        var tree1_p1 = (7200-window.innerWidth*2)*ratio;

        var bailu_p = 7200*ratio;
        var bailu_p1 = (7200-window.innerWidth*2)*ratio;

        var text11_p = 7800*ratio;
        var text11_p1 = (7800-window.innerWidth*2)*ratio;
        var doorway_p = 8200*ratio;
        var doorway_p1 = (8200-window.innerWidth*2)*ratio;
        var text12_p = 9000*ratio;
        var text12_p1 = (9000-window.innerWidth*2)*ratio;
        var tree2_p = 9500*ratio;
        var tree2_p1 = (9500-window.innerWidth*2)*ratio;
        var high_iron_p = 10000*ratio;
        var high_iron_p1 = (10000-window.innerWidth*2)*ratio;
        var text13_p = 10600*ratio;
        var text13_p1 = (10600-window.innerWidth*2)*ratio;
        var text14_p = 11000*ratio;
        var text14_p1 = (11000-window.innerWidth*2)*ratio;
        var text15_p = 11750*ratio;
        var text15_p1 = (11750-window.innerWidth*2)*ratio;
        var feiji_p = 12050*ratio;
        var feiji_p1 = (12050-window.innerWidth*2)*ratio;

        var text16_p = 12400*ratio;
        var text16_p1 = (12400-window.innerWidth*2)*ratio;
        var text17_p = 13000*ratio;
        var text17_p1 = (13000-window.innerWidth*2)*ratio;
        var text18_p = 13800*ratio;
        var text18_p1 = (13800-window.innerWidth*2)*ratio;
        var text19_p = 14600*ratio;
        var text19_p1 = (14600-window.innerWidth*2)*ratio;
        //背景图
        $(".bg-img").css("height",ratio*bg_img_h);

        var phone_h = $("#phone").height();
        $("#phone").css("height",ratio*phone_h*0.5);
        //霓虹灯
        var light_h = $("#light").height();
        $("#light").css("left",light_p).css("bottom",108*ratio).css("height",light_h*ratio);

/*        //车
        var car_h = $("#car").height();
        $("#car").css("left",car_p).css("bottom",50*ratio).css("height",car_h*ratio);*/

/*        //车1
        var car1_h = $("#car1").height();
        $("#car1").css("left",car1_p).css("bottom",50*ratio).css("height",car1_h*ratio);
        //车2
        var car2_h = $("#car2").height();
        $("#car2").css("left",car2_p).css("bottom",50*ratio).css("height",car2_h*ratio);
        //车3
        var car3_h = $("#car3").height();
        $("#car3").css("left",car3_p).css("bottom",50*ratio).css("height",car3_h*ratio);
        //车4
        var car4_h = $("#car4").height();
        $("#car4").css("left",car4_p).css("bottom",50*ratio).css("height",car4_h*ratio);*/
        //石碑
        var hundred_h = $("#hundred").height();
        $("#hundred").css("height",hundred_h*ratio).css("bottom",0);
        //文字1（树人）
        var text1_h = $("#text1").height();
        $("#text1").css("height",text1_h*ratio).css("bottom",40*ratio).css("left",text1_p);
        //文字2（朔高）
        var text2_h = $("#text2").height();
        $("#text2").css("height",text2_h*ratio).css("top",120*ratio).css("left",text2_p);
        //朔高
        var suogao_h = $("#suogao").height();
        $("#suogao").css("height",suogao_h*ratio).css("top",120*ratio).css("left",suogao_p);

        //文字3（文教）
        var text3_h = $("#text3").height();
        $("#text3").css("height",text3_h*ratio).css("top",80*ratio).css("left",text3_p);
        //万塘路
        var road_h = $("#road").height();
        $("#road").css("height",road_h*ratio).css("bottom",0).css("left",road_p);
        //文字4（万塘路）
        var text4_h = $("#text4").height();
        $("#text4").css("height",text4_h*ratio).css("bottom",300*ratio).css("left",text4_p);
        //文字5（阿里）
        var text5_h = $("#text5").height();
        $("#text5").css("height",text5_h*ratio).css("bottom",300*ratio).css("left",text5_p);
        //文字6（传奇）
        var text6_h = $("#text6").height();
        $("#text6").css("height",text6_h*ratio).css("bottom",350*ratio).css("left",text6_p);
        //文字7（德嘉）
        var text7_h = $("#text7").height();
        $("#text7").css("height",text7_h*ratio).css("bottom",280*ratio).css("left",text7_p);
        //草
        var grass_h = $("#grass").height();
        $("#grass").css("height",grass_h*ratio).css("bottom",0).css("left",grass_p);

        //床
        var boat_h = $("#boat").height();
        $("#boat").css("height",boat_h*ratio).css("bottom",20*ratio).css("left",boat_p);
        //文字8（过客）
        var text8_h = $("#text8").height();
        $("#text8").css("height",text8_h*ratio).css("top",150*ratio).css("left",text8_p);
        //文字9（西溪）
        var text9_h = $("#text9").height();
        $("#text9").css("height",text9_h*ratio).css("bottom",180*ratio).css("left",text9_p);
        //文字10（小丽江）
        var text10_h = $("#text10").height();
        $("#text10").css("height",text10_h*ratio).css("bottom",260*ratio).css("left",text10_p);
        //tree1
        var tree1_h = $("#tree1").height();
        $("#tree1").css("height",tree1_h*ratio).css("bottom",0).css("left",tree1_p);

        //白鹭
        var bailu_h = $("#bailu").height();
        $("#bailu").css("height",bailu_h*ratio).css("bottom",400*ratio).css("left",bailu_p);

        //文字11（共看）
        var text11_h = $("#text11").height();
        $("#text11").css("height",text11_h*ratio).css("top",220*ratio).css("left",text11_p);
        //风华
        var doorway_h = $("#doorway").height();
        $("#doorway").css("height",doorway_h*ratio).css("bottom",0).css("left",doorway_p);
        //文字12（珍藏）
        var text12_h = $("#text12").height();
        $("#text12").css("height",text12_h*ratio).css("top",220*ratio).css("left",text12_p);
        //tree2
        var tree2_h = $("#tree2").height();
        $("#tree2").css("height",tree2_h*ratio).css("bottom",0).css("left",tree2_p);
        //高铁
        var high_iron_h = $("#high_iron").height();
        $("#high_iron").css("height",high_iron_h*ratio).css("bottom",0).css("left",high_iron_p);
        //阿里baba
        var text13_h = $("#text13").height();
        $("#text13").css("height",text13_h*ratio).css("bottom",240*ratio).css("left",text13_p);
        //文字14（未来）
        var text14_h = $("#text14").height();
        $("#text14").css("height",text14_h*ratio).css("bottom",460*ratio).css("left",text14_p);
        //文字15（梦想小镇）
        var text15_h = $("#text15").height();
        $("#text15").css("height",text15_h*ratio).css("bottom",200*ratio).css("left",text15_p);
        //飞机
        var feiji_h = $("#feiji").height();
        $("#feiji").css("height",feiji_h*ratio).css("bottom",400*ratio).css("left",feiji_p);

        //文字16（西站）
        var text16_h = $("#text16").height();
        $("#text16").css("height",text16_h*ratio).css("bottom",150*ratio).css("left",text16_p);
        //文字17（讲完）
        var text17_h = $("#text17").height();
        $("#text17").css("height",text17_h*ratio).css("bottom",330*ratio).css("left",text17_p);
        //文字18(收官）
        var text18_h = $("#text18").height();
        $("#text18").css("height",text18_h*ratio).css("bottom",80*ratio).css("left",text18_p);
        //文字18(收官）
        var text19_h = $("#text19").height();
        $("#text19").css("height",text19_h*ratio).css("bottom",400*ratio).css("left",text19_p);

        //白鹭飞动
/*        var egrets_time;
        function egrets() {
            var dis_top = 120;
            var dis_left = 7250;
            egrets_time = setInterval(function () {
                dis_top += 10;
                dis_left += 70;
                $('#bailu').css("bottom",dis_top*ratio).css("left",dis_left*ratio);
            },1000);
        }*/


        $(".quence img").css("width",window.innerWidth).css("height",window.innerHeight);

        //用户变化屏幕方向时调用
        $(window).bind('orientationchange', function (e) {
            //解决微信浏览器无法使用window.location.reload()刷新页面
/*            if ($("#text19").is(":visible")) {

            } else {*/
                window.location.href=window.location.href+"?id="+10000*Math.random();
/*            }*/
        });




        //手机端声音开和关
        $(".control").click(function () {
            if (-left >=0 && -left <= parseInt(grass_p1)) {
                if(audio1.paused){
                    audio1.play();
                    $(".control").css("background","url('music/open.png') no-repeat");
                    $(".control").attr("data-value",1);
                }else{
                    audio1.pause();
                    $(".control").css("background","url('music/down.png') no-repeat");
                    $(".control").attr("data-value",0);
                }
            }

            if (-left >parseInt(grass_p1) && -left <=  parseInt(doorway_p1)) {
                if(audio2.paused){
                    audio2.play();
                    $(".control").css("background","url('music/open.png') no-repeat");
                    $(".control").attr("data-value",1);

                }else{
                    audio2.pause();
                    $(".control").css("background","url('music/down.png') no-repeat");
                    $(".control").attr("data-value",0);
                }
            }

            if (-left >parseInt(doorway_p1) && -left <=  parseInt(high_iron_p1)) {
                if(audio3.paused){
                    audio3.play();
                    $(".control").css("background","url('music/open.png') no-repeat");
                    $(".control").attr("data-value",1);
                }else{
                    audio3.pause();
                    $(".control").css("background","url('music/down.png') no-repeat");
                    $(".control").attr("data-value",0);
                }
            }

            if (-left >parseInt(high_iron_p1) && -left <=  parseInt(text18_p1)) {
                if(audio1.paused){
                    audio1.play();
                    $(".control").css("background","url('music/open.png') no-repeat");
                    $(".control").attr("data-value",1);
                }else{
                    audio1.pause();
                    $(".control").css("background","url('music/down.png') no-repeat");
                    $(".control").attr("data-value",0);
                }
            }

        });

        //蝴蝶飞动
        function butterfly() {
            $('#butterfly').css('left', parseInt(window.innerWidth/ 2)).fadeIn();
            var n = 0;
            setInterval(function () {
                if (n == 9) {
                    n = 0;
                } else {
                    n++
                }
                var img = 'img/BUTTERFLY_2/BUTTERFLY_2_0000'+n+'.png';
                $('#butt').attr('src', img);
            }, 50);
        }
        butterfly();




        $(".loadimg").click(function () {
            move_spect();
        });



        //播放片头
        var pass = document.getElementById('pass');
        var audio1 = document.getElementById('audio1');
        var audio2 = document.getElementById('audio2');
        var audio3 = document.getElementById('audio3');
        var audio4 = document.getElementById('audio4');
/*        var video = document.getElementById('video');*/

        function move_spect(){

            pass.play();

            audio1.play();
            audio1.pause();

            audio2.play();
            audio2.pause();

            audio3.play();
            audio3.pause();

            audio4.play();
            audio4.pause();

/*            video.pause();*/

            $('.loadimg').fadeOut();
            var i = 0;
            var moveimg_time = setInterval(function(){
                var specimg ='img/proimg/Sequence 1_v01_'+i+'.jpg';
                $('.quence>img').attr("src",specimg);
                i++;
                if(i > 149){
                    clearInterval(moveimg_time);
                    $('.quence').fadeOut();
                    pass.pause();
                    audio1.play();
                    audio2.pause();
                    audio3.pause();
                    audio4.pause();

                }
            },50)
        }


/*
        var canvas = $("#canvas")[0];
        var ctx = canvas.getContext("2d");
        $('#canvas').attr('style','width:'+window.innerWidth+'px;height:'+window.innerHeight+'px');

*/

    });

var arr=[
    'img/canves_bg/hint.png',
    'img/canves_bg/bg.jpg',
    'img/canves_bg/popup_bgback.jpg',
    'img/prospect/doorway.png',
    'img/egrets/bailu.gif',
    'img/grass/grass.gif',
    'img/prospect/high_iron.png',
    'img/prospect/hundred_trees.png',
    'img/effect/phone_touch.png',
    'img/prospect/pine_01.png',
    'img/prospect/pine_02.png',
    'img/car/car.gif',
    'img/prospect/road_signs.png',
    'img/prospect/shake_boat.png',
    'img/text/load.png',
    'img/text/loadin.png',
    'img/text/text_101.png',
    'img/text/text_102.png',
    'img/text/text_103.png',
    'img/text/text_104.png',
    'img/text/text_201.png',
    'img/text/text_202.png',
    'img/text/text_203.png',
    'img/text/text_301.png',
    'img/text/text_302.png',
    'img/text/text_303.png',
    'img/text/text_401.png',
    'img/text/text_402.png',
    'img/text/text_501.png',
    'img/text/text_502.png',
    'img/text/text_503.png',
    'img/text/text_504.png',
    'img/text/text_601.png',
    'img/text/text_602.png',
    'img/text/text_603.png',
    'music/pass.mp3',
    'music/sound_01.mp3',
    'music/sound_02.mp3',
    'music/sound_03.mp3',
    'music/sound_04.mp3',
    'music/videoplayback.mp4',
];

for(var a=0;a<=149;a++){
    arr.push('img/proimg/Sequence 1_v01_'+a+'.jpg');
}
var loader = new resLoader({
    resources : arr,
    onStart : function(total){
        console.log('start:'+total);
    },
    onProgress : function(current, total){
        console.log(current+'/'+total);
        var percent = current/total*100;
        $('.loading').css('width', percent+'%');
    },
    onComplete : function(total){
        console.log('加载完毕:'+total+'个资源');
        $('.text').fadeOut();
        $('.totalload').fadeOut();
        $('.loadin').fadeIn();
        $('.icon').fadeIn();
    }
});
loader.start();