$(document).ready(function() {
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
    $("li.mob_more").toggle(function() {
        $(".mob_nav_bar").css('height', '108');
    }, function() {
        $(".mob_nav_bar").css('height', '42');
    });
    /*显示相机*/
    $(".cmera").on('click', showCmera);
    /*显示编辑菜单*/
    $(".nav_button").on('click', showNav);
    $(".traffic_button").on('click', showTraffic);
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
    $(".nav_box").toggleClass('showThis');
}

function showTraffic() {
    $(".traffic_box").toggleClass('showThis');
}
