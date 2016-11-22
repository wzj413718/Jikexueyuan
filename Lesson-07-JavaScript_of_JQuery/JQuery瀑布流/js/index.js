$(document).ready(function() {
    $(window).on('load', function() {
        imageLocation();
        var imgData = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }, { "src": "6.jpg" }, { "src": "7.jpg" }, { "src": "8.jpg" }, { "src": "9.jpg" }, { "src": "10.jpg" }] }
        $(window).on('scroll', function() {
            if (getFleg()) {
                $.each(imgData.data, function(index, value) {
                    var imageBorder = $("<div>").addClass('imgBorder').appendTo($('.container'));
                    var imageBox = $("<div>").addClass('imgBox').appendTo(imageBorder);
                    var image = $("<img>").attr('src', './img/' + $(value).attr("src")).appendTo(imageBox);
                    console.log(value);
                })
                imageLocation();
            }
        })
        window.onresize = function() {
            imageLocation();
        }
    });
    /*获取图片信息*/
    function imageLocation() {
        var image = $('.imgBorder'); /*获取图片盒子集合*/
        var imageWidth = image.eq(0).width(); /*因为图片宽度都一样,使用eq遍历找到第一个元素的宽度*/
        var col = Math.floor($(window).width() / imageWidth); /*获得一行最多能放下几个图片元素*/
        $('.container').css({
            'width': col * imageWidth,
            'margin': '0 auto'
        })
        var imageArr = []; /*获取图片高度的数组*/
        $.each(image, function(index, value) {
            var imageHeight = image.eq(index).height(); /*遍历获得图片高度*/
            if (index < col) {
                imageArr[index] = imageHeight;
                $(value).css({
                    "position": "absolute",
                    "top": 0,
                    "left": imageWidth * index
                });
            } else {
                var minHeight = Math.min.apply(null, imageArr);
                var minIndex = $.inArray(minHeight, imageArr);
                $(value).css({
                    "position": "absolute",
                    "top": minHeight,
                    "left": image.eq(minIndex).position().left
                });
                imageArr[minIndex] += image.eq(index).height(); /*遍历把最小高度的图片进行高度更新*/
            }
        })
    }

    function getFleg() {
        var flegImage = $('.imgBorder');
        var scrollTop = $(window).scrollTop(); /*最后一张图片距顶高度*/
        var clientHeight = $(window).height(); /*窗口高度*/
        var lastImage = flegImage.last().get(0).offsetTop; /*最后一张图片距顶高度*/
        return (lastImage < scrollTop + clientHeight) ? true : false;
        console.log(clientHeight + scrollTop + "," + lastImage);
    }
});
