$(document).ready(function() {
    var theme = localStorage.getItem('skin');

    function chnageTheme(theme) {
        var theme = localStorage.getItem('skin'); /*从缓存中取出保存的皮肤地址*/
        $('body').css({
            'background': 'url(' + theme + ")"
        })
        changeOther();
    }
    /*天气显示*/
    $('.weather').hover(function() {
        $('.weather iframe').fadeIn(1000);
    }, function() {
        $('.weather iframe').fadeOut(1000);
    });
    /*--------------------换肤--------------------*/
    $('.skinOpt').each(function() {
        $(this).on('click', changeSkin);
        $(this).on('click', changeOther);
    }) /*绑定点击事件*/

    function changeSkin() {
        var skinUrl = $(this).children('img').attr('src');
        /*取得当前点击的子元素IMG的SRC地址*/
        localStorage.setItem('skin', skinUrl);
        $('body').css({
            'background': "url(" + skinUrl + ")"
        });
    }

    function changeOther() {
        $('.bd-header').css({
            'background': 'rgba(88, 74, 74, 0.478431)',
            'border': '0'
        });
        $('.bd-header a').css({
            'color': '#fff',
            'border': '0'
        });
        $('#more a').css({
            'color': '#000'
        });
        $("#optionUl li a").css({
            'color': '#000'
        });
        $('.search-btn input').css({
            'border-bottom': '1px solid #9E9E9E',
            'background': 'url(./img/skin_dark.png) no-repeat',
            'background-position': '-206px 0px',
            'color': '#000'
        });
        $("#search-txt").off("focus", changeBlue);
        $(".msgUl").css({
            'background': 'rgba(251, 247, 247, 0.890196)'
        });
        $('.msgCotent').css({
            'background': 'rgba(251, 247, 247, 0.890196)'
        })
    }
    (function() {
        $('.bd-header').css(
            'border-bottom', '1px solid #e8e8e8'
        );
        $('.loginMsgBox').css('display', 'block');
        $('.loginSuccess').css('display', 'block');
    })();
    chnageTheme(theme);

    /*收起皮肤窗口*/
    $('.headSkin').click(function() {
        $('.skinBox').slideDown(400);
    });
    $('.visibleSkin').click(function() {
        $('.skinBox').slideUp(400);
    });

    /*不使用皮肤*/
    $('#unSkin').click(function() {
        localStorage.removeItem('skin');
    });

    /*--------------------------------------------*/

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
        $(this).children().fadeIn(400);
    }, function() {
        $(this).children().fadeOut(400);
    });
    $(".focusEidt").each(function(index) {
        $(this).hover(function() {
            $(this).children('div').fadeIn(400);
        }, function() {
            $(this).children('div').fadeOut(400);
        });
    })

    /*显示相机*/
    $(".cmera").on('click', showCmera);
    /*显示编辑菜单*/
    $(".nav_button").on('click', showNav);
    $(".traffic_button").on('click', showTraffic);

    /*切换标签*/
    $('.msgUl li').each(function(index) {
        var delayTouch;
        var listNode = $(this);
        listNode.click(function() {
            $(this).addClass('ulShow').siblings().removeClass('ulShow');
            $('.msgCotent').eq(index).addClass('msgShow').siblings().removeClass('msgShow');
        });
    });

    /*体育轮播图*/
    var index = 0;
    var cloneSpImg = $('.swiperBox a').first().clone();
    $('.swiperBox').append(cloneSpImg);
    var spSize = $('.swiperBox a').size();
    var autoPlay = setInterval(function() {
        index++
        spMoveImg();
    }, 2000);
    $('.spoartSwiper').hover(function() {
        clearInterval(autoPlay);
    }, function() {
        autoPlay = setInterval(function() {
            index++
            spMoveImg();
        }, 2000);
    });
    $('#sp_L').click(function() {
        index--;
        console.log(index);
        spMoveImg();
    });
    $('#sp_R').click(function() {
        index++;
        spMoveImg();
    });

    function spMoveImg() {
        if (index == -1) {
            $('.swiperBox').css({
                left: -(spSize - 1) * 500
            });
            index = spSize - 2;
        } else if (index == spSize) {
            $('.swiperBox').css({
                'left': '0'
            });
            index = 1;
        }
        if (index == spSize - 1) {
            $('.spartUl li').eq(0).addClass('active').siblings().removeClass('active');
        }
        $('.spartUl li').eq(index).addClass('active').siblings().removeClass('active');
        $('.swiperBox').stop().animate({ left: -index * 500 }, 1000);
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
    $('#rio_BtnR').click(function() {
        rioMoveRight();
    });
    $('#rio_BtnL').on('click', rioMoveLeft);
    var cloneRioIMG = $('.rioSwiperBox a').first().clone();
    $('.rioSwiperBox').append(cloneRioIMG);
    var rioSize = $('.rioSwiperBox a').size();
    var rioIndex = 0; /*轮播索引*/
    var autoRio = setInterval(function() {
        rioMoveRight();
    }, 2000);
    $('.rioSwiperBox').hover(function() {
        clearInterval(autoRio);
    }, function() {
        autoRio = setInterval(function() {
            rioMoveRight();
        }, 2000);
    });

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
                left: -(rioSize - 1) * 317
            });
            rioIndex = rioSize - 2;
        }
        if (rioIndex == rioSize - 1) {
            $('.rioUl li').eq(0).addClass('active').siblings().removeClass('active');
        }
        $('.rioSwiperBox').stop().animate({ left: -rioIndex * 317 }, 1000);
        $('.rioUl li').eq(rioIndex).addClass('active').siblings().removeClass('active');
    }
    $('.rioUl li').click(function() {
        var i = $(this).index();
        rioIndex = i;
        $('.rioSwiperBox').stop().animate({ left: -i * 317 }, 1000);
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
