$(document).ready(function() {

    /*列表切换*/
    $("#list-o").click(function() {
        $('.courseBox-v').removeClass('courseBox-v').addClass('courseBox');
    });
    $("#list-v").click(function() {
        $('.courseBox').removeClass('courseBox').addClass('courseBox-v');
    });
    /*列表图片遮罩*/
    $('.courseBox').hover(function() {
        $(this).children('.courseImg').children('.mask').fadeIn(400);
        $('.play').stop().animate({
                'display': 'block'
            },
            400);
    }, function() {
        $(this).children('.courseImg').children('.mask').fadeOut(400);
    });
    /*页面顶部导航下拉按钮旋转*/
    $('.navList li').hover(function() {
        $(this).children('span').stop().animate({ 'transform': 'rotate(225deg)' }, 400);
    });
    /*搜索框关闭按钮*/
    $('.closeBtn').click(function() {
        $('.search-input').css({ 'width': '0' });
    });
    $('.searchBtn').on('click', function() {
        $("#search-input").stop().animate({
            'width': "860px"
        }, 1000);
    });

    $('.appIcon').hover(function() {
        $('.codeImg').stop().animate({
            "display": "block"
        }, 1000);
    });
    /*翻页*/
    $('.pagination').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    /*回到顶部*/
    $('.backTop').click(function() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        // $(document).scrollTop = 0;
    });
});
