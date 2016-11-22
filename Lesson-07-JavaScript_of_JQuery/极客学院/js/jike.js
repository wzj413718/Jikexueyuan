$(document).ready(function() {
    var i = 0; /*图片索引*/
    /*克隆第一张图片*/
    var clone = $("#image_content li").first().clone();
    $("#image_content").append(clone);
    /*计算图片个数*/
    var imageSize = $("#image_content li").size();
    var j = 0; /*用作循环遍历添加li*/
    for (j = 0; j < imageSize - 1; j++) {
        $("#num").append("<li></li>");
    }
    var auto = setInterval(function() {
        i++;
        moveRight();
    }, 2000);

    $("#num li").first().addClass('focusLine');
    /*定时器hover*/
    $("#swiper").hover(function() {
        clearInterval(auto);
    }, function() {
        auto = setInterval(function() {
            i++;
            moveRight();
        }, 2000);
    });
    /*向右按钮*/
    $("#btn_r").click(function(event) {
        i++;
        moveRight();
    });
    /*向左按钮*/
    $("#btn_l").click(function(event) {
        i--
        moveLeft();
        console.log(i);
        console.log(imageSize);
    });
    /*右按钮方法*/
    function moveRight() {
        if (i == imageSize) {
            $("#image_content").css({
                left: 0
            });
            i = 1;
        }
        if (i == imageSize - 1) {
            $("#num li").eq(0).addClass('focusLine').siblings().removeClass('focusLine');
        }
        $("#image_content").stop().animate({
                left: -i * 560
            },
            1000);
        $("#num li").eq(i).addClass('focusLine').siblings().removeClass('focusLine');
    }
    /*左按钮方法*/
    function moveLeft() {
        if (i == -1) {
            $("#image_content").css({
                left: -(imageSize - 1) * 560
            })
            i = imageSize - 2;
        }
        $("#image_content").stop().animate({
            left: -i * 560
        }, 1000);
        $("#num li").eq(i).addClass('focusLine').siblings().removeClass('focusLine');
    }
    /*浮动按钮*/
    $("#num li").hover(function() {
        var numIndex = $(this).index();
        i = numIndex;
        $("#image_content").stop().animate({ left: -numIndex * 560 });
        $(this).addClass('focusLine').siblings().removeClass('focusLine');
    });
    /*swiper_bottom轮播图*/
    var x = 0;
    var cloneB1 = $("#swiper_bottom_image li").eq(0).clone();
    $("#swiper_bottom_image").append(cloneB1);
    var bimageSize = $("#swiper_bottom_image li").size();
    var cloneB2 = $("#swiper_bottom_image li").eq(1).clone();
    $("#swiper_bottom_image").append(cloneB2);
    var cloneB3 = $("#swiper_bottom_image li").eq(2).clone();
    $("#swiper_bottom_image").append(cloneB3);

    $("#bottom_btn_r").click(function(event) {
        x++;
        move_Br();
        console.log(x);
        console.log(bimageSize);

    });

    $("#bottom_btn_l").click(function(event) {
        x--;
        move_Bl();
        console.log(x);
        console.log(bimageSize);
    });

    function move_Br() {
        if (x == bimageSize) {
            $("#swiper_bottom_image").css({ left: 0 });
            x = 1;
        }
        $("#swiper_bottom_image").stop().animate({ left: -x * 186 }, 250);
    }

    function move_Bl() {
        if (x == -1) {
            $("#swiper_bottom_image").css({ left: -(bimageSize - 1) * 186 });
            x = bimageSize - 1;
        }
        $("#swiper_bottom_image").stop().animate({ left: -x * 186 }, 250);
    }
    /*底部轮播图*/
    var bt = 0;
    var btSize = $(".enter_content li").size();
    $(".swiper_btnL").click(function() {
        bt--;
        bottom_moveL();
        console.log("bt:", bt);
        console.log("btSize:", btSize);
    });
    $(".swiper_btnR").click(function() {
        bt++;
        bottom_moveR();
        console.log("bt:", bt);
        console.log("btSize:", btSize);
    });

    function bottom_moveL() {
        if (bt == -1) {
            $("#enter_content").css({ left: -(btSize - 6) * 162 });
            bt = btSize - 7;
        }
        $("#enter_content").stop().animate({ left: -bt * 162 }, 500);
    }

    function bottom_moveR() {
        if (bt == btSize - 5) {
            $("#enter_content").css({ left: 0 });
            bt = 1;
        }
        $("#enter_content").stop().animate({ left: -bt * 162 }, 500);
    }

    /*ul*/

    /*form*/
    $(".search-form input").focus(function() {
        $(".hot-word").css('display', 'none');
        $(".search-button").css('background', '#35b558 url(./img/topsearch-icon-white.png) center center no-repeat');

    });
    $(".search-form input").focusout(function() {
        $(".hot-word").css('display', 'block');
        $(".search-button").css('background', 'url(./img/topsearch-icon.png) center center no-repeat');
    });

});
