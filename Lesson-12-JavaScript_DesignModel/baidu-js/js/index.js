$(document).ready(function() {
    var index = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.showUl = $("#option"); //设置下拉菜单
            this.hideUL = $('#optionUL'); //设置下拉菜单项
            this.searchFocus = $('#search-txt'); //搜索框焦点
            this.moreShow = $('#moretouch'); //更多产品显示
            this.moreHide = $('#more'); //更多产品隐藏
            this.login = $('#loginBtn'); //登陆按钮
            this.skinWin = $('.headSkin'); //显示皮肤窗口按钮
            this.hideSkin = $('.skinBox span'); //收起皮肤窗口按钮
            this.tabChange = $('.msgUl li'); //标签切换
            this.sportTab = $('.liveUl li'); //体育赛程切换
            this.skin = $('.skinOpt'); //皮肤切换
            this.focusEdit = $('.focusEdit'); //视频选项卡-编辑
            this.star = $('.star'); //视频选项卡-关注
            this.body = $('body');
            /*************手机模式*************/
            this.camera = $('.cmera'); //相机
            this.nav = $('.nav_button'); //编辑按钮
            this.traffic = $('.traffic_button');
            /************体育轮播图*************/
            this.sp_left = $('.sp_btnL'); //右按钮
            this.sp_right = $('.sp_btnR'); //左按钮
            this.swiperBox = $('.swiperBox'); //轮播盒子
            this.swiperImage = $('.swiperBox a'); //轮播图片
            this.sportIcon = $('.spartUl li'); //列表按钮
            this.stopMove = $('.spoartSwiper');

        },
        bind: function() {
            //页面载入加载默认皮肤
            $(window).on('load', function() {
                if (localStorage.getItem('skin') !== "") {
                    var skinSet = localStorage.getItem('skin'); /*从缓存中取出保存的皮肤地址*/
                    // changeSkin(skinSet); error
                }
            });
            //换肤功能
            this.skin.on({
                click: function changeSKin(skinUrl) {
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
            });

            //下拉菜单-设置
            this.showUl.mouseover(function() {
                $('#optionUl').slideDown(1000);
            });
            this.hideUL.mouseleave(function() {
                $("#optionUl").slideUp(1000); //error
            });
            //下拉菜单-更多产品
            this.moreShow.mouseover(function() {
                $('#more').show();
            });
            this.moreShow.mouseleave(function() {
                $('#more').hide(); //error
            });
            //搜索框
            this.searchFocus.on({
                focus: function() {
                    $("#search-box").css("border", "1px solid #3385ff");
                },
                focusout: function() {
                    $("#search-box").css("border", "1px solid #b6b6b6");
                }
            });
            //登陆按钮
            this.login.click(function() {
                $('.bd-header').css(
                    'border-bottom', '1px solid #e8e8e8'
                );
                $('.loginMsgBox').css('display', 'block');
                $('.loginSuccess').css('display', 'block');
            });
            //皮肤窗口显示／隐藏 error
            this.skinWin.click(function() {
                $('.skinBox').slideDown(400);
            });
            this.hideSkin.click(function() {

                $('.skinBox').slideUp(400);
            });

            //登陆后窗口设置
            //切换标签
            this.tabChange.each(function(index) {
                var delayTouch;
                var listNode = $(this);
                listNode.click(function() {
                    $("li.ulShow").removeClass('ulShow');
                    listNode.addClass('ulShow');
                    $('div.msgShow').removeClass('msgShow');
                    $('.msgCotent').eq(index).addClass('msgShow');
                });
            });
            //体育赛程切换 
            this.sportTab.each(function(index) {
                $(this).click(function() {
                    $(this).addClass('liveActive').siblings().removeClass('liveActive');
                    $('.liveBox').eq(index).addClass('showThis').siblings().removeClass('showThis');
                });
            });
            //视频选项卡-不关注
            this.star.hover(function() {
                $('.unInteresting').fadeIn(400);
            }, function() {
                $('.unInteresting').fadeOut(400);
            });
            this.focusEdit.hover(function() {
                $('.addFocus').fadeIn(400);
            }, function() {
                $('.addFocus').fadeOut(400);
            });
            /*************手机模式*************/
            //相机
            this.camera.click(function() {
                $(".cmeraShow").toggleClass('showThis');
            });
            //编辑按钮
            this.nav.click(function() {
                $(".nav_button+.edit_box").toggle();
            });
            this.traffic.click(function() {
                $(".traffic_button+.edit_box").toggle();
            });
            /*************体育轮播图*************/
            var index = 0; //轮播图片索引
            var that = this;
            var cloneImage = that.swiperImage.eq(0).clone();
            that.swiperBox.append(cloneImage);
            var autoPlay = setInterval(function() {
                index++;
                move();
            }, 3000);
            this.stopMove.hover(function() {
                clearInterval(autoPlay);
            }, function() {
                autoPlay = setInterval(function() {
                    index++;
                    move();
                }, 3000);
            });
            //左按钮
            this.sp_left.click(
                function() {
                    index--;
                    move();
                });
            this.sp_right.click(
                function() {
                    index++;
                    move();
                });
            that.sportIcon.click(function() {
                var i = $(this).index();
                index = i;
                that.swiperBox.stop().animate({
                    left: -i * 500
                }, 1000);
                $(this).addClass('active').siblings().removeClass('active');
            });

            function move() {
                //判断索引移动到第几张
                //如果是最后一张，利用css直接跳到第一张图片
                //如果是已经是第一张，利用css直接跳到最后一张
                var imagsSize = $('.swiperBox a').size();
                console.log(index);
                if (index == imagsSize) {
                    that.swiperBox.css('left', '0');
                    index = 1;
                } else if (index == -1) {
                    that.swiperBox.css('left', '500');
                    index = imagsSize - 1;
                }
                console.log(index);
                if (index == imagsSize - 1) {
                    that.sportIcon.eq(0).addClass('active').siblings().removeClass('active');
                }
                //移动动画效果
                that.swiperBox.stop().animate({
                    left: -index * 500
                }, 1000);
                //圆点按钮
                that.sportIcon.eq(index).addClass('active').siblings().removeClass('active');
            }
        }
    };
    index.init();
});