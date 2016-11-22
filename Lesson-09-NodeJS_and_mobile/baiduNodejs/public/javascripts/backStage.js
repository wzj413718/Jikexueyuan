$(function() {
    showNews("type1");

    $('.list-group-item').on('click', function(e) {
        $(this).addClass('active').siblings().removeClass('active');
        e.preventDefault();
        var type = this.id;
        showNews(type);
    });
    /*显示数据*/
    function showNews(newstype) {
        $.ajax({
            url: '/select',
            type: 'POST',
            dataType: 'json',
            data: { newstype: newstype },
            success: function(data) {
                $('.table tbody tr').remove();
                for (var i = 0; i < data.length; i++) {
                    $('.table tbody').append('<tr id="res' + data[i].newsid + '" class="' + data[i].newstype + '"></tr>');
                    $('#res' + data[i].newsid).html(
                        "<td class='nID' news-id='" + data[i].newsid + "'>" + data[i].newsid + "</td>" +
                        "<td class='addImage'>" + data[i].newsimg + "</td>" +
                        "<td  class='addContent'>" + data[i].newscontent + "</td>" +
                        "<td  class='addData'>" + data[i].newstime + "</td>" +
                        '<td><button type="button" class="btn btn-danger delBtn">删除</button> <button type="button" class="btn btn-primary editBtn" data-toggle="modal" data-target=".modalEdit" style="margin-right: 20px;">修改</button> </td>');
                }
            },
            error: function() {
                alert("失败！");
            }
        });
    }

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
        var edType = $('.modalEdit .dataSheet').val();
        $.ajax({
            url: '/update',
            type: 'POST',
            dataType: 'json',
            data: { "newsid": edID, "newsimg": edImage, "newscontent": edContent, "newstime": edData },
            success: function(data) {
                alert('success');
                showNews(edType);
            },
            error: function(err) {
                alert("失败！");
            }
        })


    });

    /*添加数据*/
    $('.addsubmit').on('click', function(e) {
        e.preventDefault();
        var newsimg = $('.modalAdd .addNewsimage').val();
        var newscontent = $('.modalAdd .addNewscontent').val();
        var newstime = $('.modalAdd .addNewsdata').val();
        var newstype = $('.modalAdd .addDatasheet').val();
        $.ajax({
            url: '/insert',
            type: 'POST',
            dataType: 'json',
            data: { "newsimg": newsimg, "newscontent": newscontent, "newstime": newstime, "newstype": newstype },
            success: function(data) {
                console.log(data);
                alert(data['result']);
                $("#" + newstype).addClass('active').siblings().removeClass('active');
                showNews(newstype);
            },
            error: function(err) {
                alert("失败:");
            }
        });
    });

    /*删除数据*/
    $('.table tbody').on('click', '.delBtn', function(e) { /*给动态添加的按钮绑定事件*/
        var btnTgt = e.target; /*获得当前按钮焦点*/
        var newsid = $(btnTgt).parents().siblings('.nID').attr('news-id');
        var newstype = $(btnTgt).parents().siblings("tr").attr('class');
        console.log(newsid);
        var cfm = confirm("确定删除数据么？");
        if (cfm) {
            $.ajax({
                url: '/delete',
                type: 'POST',
                dataType: 'json',
                data: { "newsid": newsid },
                success: function(data) {
                    alert(data['result']);
                    console.log("newstype:" + newstype);
                    showNews(newstype);
                },
                error: function(err) {
                    alert("失败！");
                }
            });
        }
    });
});
