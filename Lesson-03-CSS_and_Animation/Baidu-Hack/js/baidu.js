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
