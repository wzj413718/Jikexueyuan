$(document).ready(function() {
    $('.news-list').on('click', function(e) {
        $(this).addClass('active').siblings().removeClass('active');
        e.preventDefault(); /*组织事件的默认行为*/
    });
    newAdd('technology', 0, 2);
    $('.news-list').on('click', function newsload() {
        type = this.id /*获得当前数据类型*/
        newAdd(type, '0', '2');
        index = 2;
        /*返回当前类型值*/
    });
    var index = 2; /*查询数据索引*/
    $('.loadMore').on('click', function() { /*加载信息*/
        var type = $('li.active').attr('id');
        console.log(type);
        loadNews(type, index, 2);
        index += 2;
    });

    function newAdd(id, itemStart, itemEnd) {
        $.ajax({
            url: 'php/news.php',
            type: 'POST',
            dataType: 'text',
            data: { id: id, itemStart: itemStart, itemEnd: itemEnd },
            success: function(data) {
                var tuijian = eval("(" + data + ")");
                var rsTuijian = tuijian.result;
                $(".newsBox").remove();
                for (var i = 0; i < rsTuijian.length; i++) {
                    $(".newsContent").append(
                        '<div class="newsBox">' +
                        '<div class="newsIcon">' +
                        '<img src="' + rsTuijian[i].newsImage + '"/>' +
                        '</div>' +
                        '<div class="newsBody">' +
                        '<p class="newsMsg">' + rsTuijian[i].newsContent + '</p>' +
                        '<p class="addTime">' + rsTuijian[i].newsData + '</p>' +
                        '</div>' +
                        '</div> '
                    );
                }
            },
            error: function() {
                alert("失败！");
            }
        });
    }

    function loadNews(id, itemStart, itemEnd) {
        $.ajax({
            url: 'php/news.php',
            type: 'POST',
            dataType: 'text',
            data: { id: id, itemStart: itemStart, itemEnd: itemEnd },
            success: function(data) {
                var tuijian = eval("(" + data + ")");
                var rsTuijian = tuijian.result;
                for (var i = 0; i < rsTuijian.length; i++) {
                    $(".newsContent").append(
                        '<div class="newsBox">' +
                        '<div class="newsIcon">' +
                        '<img src="' + rsTuijian[i].newsImage + '"/>' +
                        '</div>' +
                        '<div class="newsBody">' +
                        '<p class="newsMsg">' + rsTuijian[i].newsContent + '</p>' +
                        '<p class="addTime">' + rsTuijian[i].newsData + '</p>' +
                        '</div>' +
                        '</div> '
                    );
                }
            },
            error: function() {
                alert("失败！");
            }
        });
    }
    /*轮播图*/
    var i = 0;

    var cloneImage = $('.swiperBox a').first().clone();
    $('.swiperBox').append(cloneImage);
    var imgSize = $('.swiperBox a').size();
    var autopaly = setInterval(function() {
        imageMove();
    }, 3000);

    function imageMove() {
        var widths = $('.swiperBox a').first().width();
        console.log(widths);
        i++;
        if (i == imgSize) {
            $('.swiperBox').css({
                'left': '0'
            });
            i = 1;
        }
        $('.swiperBox').stop().animate({
            left: -i * 447
        }, 2000);
    }
});
