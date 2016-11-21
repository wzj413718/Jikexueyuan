/*更换颜色*/
var colorArr = ["#ff0000", "#0000ff", "#1fd394"];
var colorList = []; /*存储换肤按钮数组*/
var colorBox = document.getElementById("selectColor").childNodes;
var navX = document.getElementsByClassName("colorX"); /*导航换肤的元素组*/
var borderX = document.getElementsByClassName("borderX"); /*边框换肤的元素组*/
var fontX = document.getElementsByClassName("fontX"); /*字体换肤的元素组*/

window.onload = function() {
        if (localStorage.getItem('css') !== "") {
            for (var i = 0; i < navX.length; i++) {
                navX[i].style.cssText = "background:" + localStorage.getItem('css');
            }
            for (var i = 0; i < borderX.length; i++) {
                borderX[i].style.cssText = "border-color:" + localStorage.getItem('css');

            }
            for (var i = 0; i < fontX.length; i++) {
                fontX[i].style.cssText = "color:" + localStorage.getItem('css');
            }
        }
    }
    /*navX[i].addClass('abc:hover')
     */

/*取到每一个更换颜色的按钮*/
function changeCList() {
    for (var i = 0; i < colorBox.length; i++) {
        if (colorBox[i].className == "colorB") {
            colorList.push(colorBox[i]);
        }
    }
    return colorList; /*返回给数组colorList*/
}
changeCList();
for (var i = 0; i < colorList.length; i++) {
    (function() {
        var p = i;
        colorList[i].onclick = function() {
            for (var j = 0; j < navX.length; j++) {
                navX[j].style.cssText = "background:" + colorArr[p];
                localStorage.setItem('css', colorArr[p])
            }

            for (var k = 0; k < borderX.length; k++) {
                borderX[k].style.cssText = "border-color:" + colorArr[p];
                localStorage.setItem('css', colorArr[p])
            }

            for (var l = 0; l < fontX.length; l++) {
                fontX[l].style.cssText = "color:" + colorArr[p];
                localStorage.setItem('css', colorArr[p])
            }
        }
    })();
}

/*轮播图*/
$(document).ready(function() {
    var index = 0; /*设置图片移动的索引值*/
    var cloneImg = $(".slide_img").first().clone(); /*克隆第一张图片*/
    $(".slide_container").append(cloneImg); /*插入克隆的第一张图片*/
    var imageSize = $(".slide_img").size(); /*计算图片个数*/
    $("#lBtn").on('click', moveLeft);
    $("#rBtn").on('click', moveRight);
    /*定时器*/
    autoPlay = setInterval(moveRight, 2000);
    $(".slideBox").hover(function() {
        clearInterval(autoPlay);
    }, function() {
        autoPlay = setInterval(moveRight, 2000);
    });

    function moveLeft() {
        index--;
        if (index == -1) {
            $(".slide_img").css({ left: -(imageSize - 1) * 278 })
            index = imageSize - 2;
        }
        $(".slide_img").stop().animate({ left: -index * 278 }, 1000);
    }

    function moveRight() {
        index++;
        if (index == imageSize) {
            $(".slide_img").css({ left: 0 })
            index = 1;
        }
        $(".slide_img").stop().animate({ left: -index * 278 }, 1000);
    }
});
/*左侧扩展按钮*/
var toolbar = $(".toolsBar");
var tBtn = $("#toolBtn");
tBtn.on('click', changeHeight);

function changeHeight() {
    toolbar.toggleClass('change');
    tBtn.toggleClass('rotateT');
}
