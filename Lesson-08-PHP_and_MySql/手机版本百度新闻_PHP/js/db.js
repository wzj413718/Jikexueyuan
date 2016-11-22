$(document).ready(function() {
    loadData('technology');
    $('.list-group-item').click(function(e) {
        $(this).addClass('active').siblings().removeClass('active');
        e.preventDefault();
        loadData(this.id);
    });


    /*添加数据*/
    $('.addsubmit').on('click', function(e) {
        e.preventDefault();
        var newsImage = $('.modalAdd .addNewsimage').val();
        var newsContent = $('.modalAdd .addNewscontent').val();
        var newsData = $('.modalAdd .addNewsdata').val();
        var dataSheet = $('.modalAdd .addDatasheet').val();
        $.ajax({
            url: 'php/addData.php',
            type: 'POST',
            dataType: 'text',
            data: { nImg: newsImage, nContent: newsContent, nDate: newsData, nType: dataSheet },
            success: function(data) {
                $("#" + data).addClass('active').siblings().removeClass('active');
                loadData(data);
            },
            error: function() {
                alert("失败");
            }
        });
    });

    function loadData(id) {
        $.ajax({
            url: 'php/backStage.php',
            type: 'POST',
            dataType: 'text',
            data: { id: id },
            success: function(data) {
                var responseText = data;
                /*后台响应数据返回值*/
                testJson = eval("(" + responseText + ")");
                /*将字符串转换成josn*/
                console.log(testJson);
                var jsonResult = testJson.result;
                $('.table tbody tr td').remove();
                for (var i = 0; i < jsonResult.length; i++) {
                    $('.table tbody').append('<tr id="res' + jsonResult[i].ID + '"></tr>');
                    $('#res' + jsonResult[i].ID).html(
                        "<td class='nID' news-id='" + jsonResult[i].ID + "'>" + jsonResult[i].ID + "</td>" +
                        "<td class='addImage'>" + jsonResult[i].newsImage + "</td>" +
                        "<td  class='addContent'>" + jsonResult[i].newsContent + "</td>" +
                        "<td  class='addData'>" + jsonResult[i].newsData + "</td>" +
                        '<td><button type="button" class="btn btn-danger delBtn">删除</button> <button type="button" class="btn btn-primary editBtn" data-toggle="modal" data-target=".modalEdit" style="margin-right: 20px;">修改</button> </td>');
                }
            },
            error: function() {
                alert('失败');
            }
        });
    }

    /*删除数据*/
    $('.table tbody').on('click', '.delBtn', function(e) { /*给动态添加的按钮绑定事件*/
        var btnTgt = e.target; /*获得当前按钮焦点*/
        var delID = $(btnTgt).parent().prevAll(".nID").attr('news-id'); /*获取*/
        var ntype = $('.list-group .active').attr('id');
        console.log(ntype);
        console.log(delID);
        var cfm = confirm("确定删除数据么？");
        if (cfm) {
            $.ajax({
                url: 'php/delSheet.php',
                type: "POST",
                dataType: "text",
                data: { delid: delID, ntype: ntype },
                success: function(data) {
                    loadData(data);
                },
                error: function() {
                    alert('删除失败');
                }
            });
        }
    });


    /*修改数据*/
    $('table.table tbody').on('click', '.editBtn', function(e) {
        var edTgt = e.target;
        /*获取选择的表格的所有内容*/
        var ID = $(edTgt).parent().prevAll(".nID"); /*有ID值得tr元素*/
        var edID = ID.text();
        var edImage = ID.siblings('.addImage').text();
        var edContent = ID.siblings('.addContent').text();
        var edData = ID.siblings('.addData').text();
        var edType = $('.list-group .active').attr('id');
        $('.modalEdit .dataSheet option[value="' + edType + '"]').attr('selected', true);
        console.log(edType);
        /*将数据加载到模态框，以便进行修改*/
        $('.modalEdit .newsID').val(edID);
        $('.modalEdit .newsImage').val(edImage);
        $('.modalEdit .newsContent').val(edContent);
        $('.modalEdit .newsData').val(edData);
        $('.modalEdit .dataSheet').val(edType);

    });
    $('.modalEdit .editsubmit').on('click', function(e) { /*修改提交*/
        e.preventDefault();
        var edID = $('.modalEdit .newsID').val();
        var edImage = $('.modalEdit .newsImage').val();
        var edContent = $('.modalEdit .newsContent').val();
        var edData = $('.modalEdit .newsData').val();
        var edType = $('.modalEdit .dataSheet option').val();
        console.log(edType);
        $.ajax({
            url: 'php/editSheet.php',
            type: 'POST',
            dataType: 'text',
            data: { imageNew: edImage, contentNew: edContent, edDataNew: edData, type: edType, ID: edID },
            success: function(data) {
                console.log(data);
                $('.modalEdit').attr('data-dismiss', 'modal');
                loadData(data);
                alert('数据修改成功');
            },
            error: function() {
                alert("修改失败");
            }
        });
    });
});
