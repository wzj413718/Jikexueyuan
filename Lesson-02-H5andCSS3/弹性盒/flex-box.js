/**
 * Created by WZJ on 2016/6/18.
 */
$(document).ready(function () {
    /*flex-direction的设置*/
    $("#column").on('click', fColumn);
    function fColumn() {
        $("#newBox").css("flex-direction", "column");
    }

    $("#column_reverse").on('click', fcolumn_reverse);
    function fcolumn_reverse() {
        $("#newBox").css("flex-direction", "column-reverse");
    }

    $("#row").on('click', fRow);
    function fRow() {
        $("#newBox").css("flex-direction", "row");
    }

    $("#row_reverse").on('click', frow_reverse);
    function frow_reverse() {
        $("#newBox").css("flex-direction", "row-reverse");
    }

    /*align-item的设置*/
    $("#flex_start").on('click', fFlex_start);
    function fFlex_start() {
        $("#newBox").css("align-items", "flex-start");
    }

    $("#flex_end").on('click', fFlex_end);
    function fFlex_end() {
        $("#newBox").css("align-items", "flex-end");
    }

    $("#center").on('click', fCenter);
    function fCenter() {
        $("#newBox").css("align-items", "center");
    }

    $("#baseline").on('click', fBaseline);
    function fBaseline() {
        $("#newBox").css("align-items", "baseline");
    }

    $("#stretch").on('click', fStretch);
    function fStretch() {
        $("#newBox").css("align-items", "stretch");
    }

    /*justify-content*/
    $("#jFlex_start").on('click', fJflex_start);
    function fJflex_start() {
        $("#newBox").css("justify-content", "flex-start");
    }

    $("#jFlex_end").on('click', fJflex_end);
    function fJflex_end() {
        $("#newBox").css("justify-content", "flex-end");
    }

    $("#jCenter").on('click',fJcenter);
    function fJcenter() {
        $("#newBox").css("justify-content", "center");
    }

    $("#space_between").on('click', fSpace_between);
    function fSpace_between() {
        $("#newBox").css("justify-content", "space-between");
    }

    $("#space_around").on('click', fSpace_around);
    function fSpace_around() {
        $("#newBox").css("justify-content", "space-around");
    }
});