$(document).ready(function() {
    $(window).on('load', function() {
        if (localStorage.getItem('skin') !== "") {
            var skinSet = localStorage.getItem('skin'); /*从缓存中取出保存的皮肤地址*/
            changeSkin(skinSet);
        }
    });
    /*设置选项 ，下拉菜单*/
    $("#option").on("mouseover", showUl);
    $("#optionUl").on("mouseleave", hideUl);
    /*搜索框焦点*/
    $("#search-txt").on("focus", changeBlue);
    $("#search-txt").on("focusout", changeBlack);
    /*更多产品，下拉菜单*/
    $("#moretouch").on('mouseover', moreShow);
    $("#more").on('mouseleave', moreHide);
    /*手机模式*/
    /*更多*/

    /*登录按钮*/
    $('#loginBtn').click(function() {
        $('.bd-header').css(
            'border-bottom', '1px solid #e8e8e8'
        );
        $('.loginMsgBox').css('display', 'block');
        $('.loginSuccess').css('display', 'block');
    });
    /**/
    $('.star').hover(function() {
        $('.unInteresting').childe.fadeIn(400);
    }, function() {
        $('.unInteresting').fadeOut(400);
    });
    $('.focusEidt').hover(function() {
        $('.addFocus').fadeIn(400);
    }, function() {
        $('.addFocus').fadeOut(400);
    });

    /*收起皮肤窗口*/
    $('.headSkin').click(function() {
        $('.skinBox').slideDown(400);
    });
    $('.skinBox span').click(function() {
        $('.skinBox').slideUp(400);
    });


    /*--------------------换肤--------------------*/
    $('.skinOpt').on('click', changeSkin); /*绑定点击事件*/

    function changeSkin(skinUrl) {
        skinUrl = $(this).children('img').attr('src'); /*取得当前点击的子元素IMG的SRC地址*/
        localStorage.setItem('skin', skinUrl);
        $('body').css({
            'background': "url(" + skinUrl + ")"
        });
        $('.bd-header').css({
            'background': 'rgba(88, 74, 74, 0.478431)',
            'border': '0'
        });
        $('.search-btn input').css({
            'border-bottom': '1px solid #9E9E9E',
            'background-color': '#9E9E9E'
        });
    }
    /*--------------------------------------------*/

    /*显示相机*/
    $(".cmera").on('click', showCmera);
    /*显示编辑菜单*/
    /*  $(".nav_button").on('click', showNav);*/
    $(".nav_button").on('click', showNav);
    $(".traffic_button").on('click', showTraffic);

    /*切换标签*/
    $('.msgUl li').each(function(index) {
        var delayTouch;
        var listNode = $(this);
        listNode.click(function() {
            $("li.ulShow").removeClass('ulShow');
            listNode.addClass('ulShow');
            $('div.msgShow').removeClass('msgShow');
            $('.msgCotent').eq(index).addClass('msgShow');
        });
    });

    /*体育轮播图*/
    $('#sp_L').on('click', moveLeft);
    $('#sp_R').on('click', moveRight);
    var index = 0;
    var cloneImage = $('#swiperBox a').eq(0).clone();
    $('#swiperBox').append(cloneImage);
    var imageSize = $('#swiperBox a').size();
    var autoPlay = setInterval(moveRight, 3000);
    $('.spoartSwiper').hover(function() {
        clearInterval(autoPlay);
    }, function() {
        autoPlay = setInterval(moveRight, 3000);
    });

    function moveLeft() {
        index--;
        moveImage();
    }

    function moveRight() {
        index++;
        moveImage();
    }

    function moveImage() {
        if (index == imageSize) {
            $('#swiperBox').css('left', '0');
            index = 1;
        } else if (index == -1) {
            $('#swiperBox').css('left', '-(imageSize-1)*500');
            index = imageSize - 2;
        }
        if (index == imageSize - 1) {
            $('.spartUl li').eq(0).addClass('active').siblings().removeClass('active');
        }
        $('#swiperBox').stop().animate({ left: -index * 500 }, 1000)
        $('.spartUl li').eq(index).addClass('active').siblings().removeClass('active');
    }
    /*轮播图点播按钮*/
    $(".spartUl li").click(function() {
        var i = $(this).index();
        index = i;
        $('.swiperBox').stop().animate({ left: -i * 500 }, 1000);
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*体育赛程切换*/
    $('.liveUl li').each(function(index) {
        $(this).click(function() {
            $(this).addClass('liveActive').siblings().removeClass('liveActive');
            $('.liveBox').eq(index).addClass('showThis').siblings().removeClass('showThis');
        })
    })

    /*奥运轮播图*/
    $('#rio_BtnR').on('click', rioMoveRight);
    $('#rio_BtnL').on('click', rioMoveLeft);
    var cloneRioIMG = $('.rioSwiperBox a').first().clone();
    $('.rioSwiperBox').append(cloneRioIMG);
    var rioSize = $('.rioSwiperBox a').size();
    var rioIndex = 0; /*轮播索引*/
    function rioMoveRight() {
        rioIndex++;
        rioMove();
    }

    function rioMoveLeft() {
        rioIndex--;
        rioMove();
    }

    function rioMove() {
        if (rioIndex == rioSize) {
            $('.rioSwiperBox').css({
                left: 0
            });
            rioIndex = 1;
        } else if (rioIndex == -1) {
            $('.rioSwiperBox').css({
                left: -(rioSize - 1) * 315
            });
            rioIndex = rioSize - 2;
        }
        if (rioIndex == rioSize - 1) {
            $('.rioUl li').eq(0).addClass('active').siblings().removeClass('active');
        }
        $('.rioSwiperBox').stop().animate({ left: -rioIndex * 315 }, 1000);
        $('.rioUl li').eq(rioIndex).addClass('active').siblings().removeClass('active');
    }
    $('.rioUl li').click(function() {
        var i = $(this).index();
        rioIndex = i;
        $('.rioSwiperBox').stop().animate({ left: -i * 315 }, 1000);
        $(this).addClass('active').siblings().removeClass('active');
    });
});

function showUl() {
    $("#optionUl").slideDown();
}

function hideUl() {
    $("#optionUl").slideUp(1000);

}

function changeBlue() {
    $("#search-box").css("border", "1px solid #3385ff");
}

function changeBlack() {
    $("#search-box").css("border", "1px solid #b6b6b6");
}

function moreShow() {
    $("#more").show();
}

function moreHide() {
    $("#more").hide();
}
/*手机模式*/
function showCmera() {
    $(".cmeraShow").toggleClass('showThis');
}


function showNav() {
    $(".nav_button+.edit_box").toggle();
}

function showTraffic() {
    $(".traffic_button+.edit_box").toggle();
}
