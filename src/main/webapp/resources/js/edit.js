$(document).ready(function () {


    $('#edit_left_div').on('click', '#userBlogItem,#userBlogItem_Delete', function () {
        switch ($(this).attr('id')) {
            case 'userBlogItem':
                showDialog($(this).children().first().text());
                break;
            case 'userBlogItem_Delete':
                showDialog($(this).parent().parent().text());
                break;
        }
        return false;
    });


    $('.edit_Btn_Item').click(function () {
        switch ($(this).text()) {
            case '保存':
                var blogInfo = {
                    "userId": getTempInfo('userId'),
                    "categoryId": 1, //博客类型
                    "stateId": 1,  //是否发布
                    "title": 'asdf',
                    "content": iframe.window.getEditContent()
                };
                var object = $.toJSON(blogInfo);
                saveBtnClick(object);
                showDialog('保存');
                break;
            case '发布':
                showDialog('发布');
                break;
        }
    });

    var isOpenSaveInfo = true;
    $('#edit_upBtn').click(function () {
        if (isOpenSaveInfo) {
            $('#edit_saveInfo_div').animate({
                'height': '-=60px',
                'margin-top': '0'
            });
            $('#edit_saveInfo_content').fadeOut();
            isOpenSaveInfo = false;
            $('#edit_upBtn button').css('background-image', 'url("./resources/img/down.png")');
        } else {
            $('#edit_saveInfo_content').fadeIn();
            $('#edit_saveInfo_div').animate({
                'height': '+=60px',
                'margin-top': '-60px'
            });
            isOpenSaveInfo = true;
            $('#edit_upBtn button').css('background-image', 'url("./resources/img/up.png")');
        }
    });

    $('.edit_classify_ul_li').click(function () {
        $('.edit_classify_ul_li div').css('background', '#fff');
        $(this).children().css('background', '#a1a1a1');
    });

    var leng = 11;
    $(window).unload(function () {
        if (iframe.window.getEditContent().length != leng) {
            leng = iframe.window.getEditContent().length;
            setTempInfo('Edit', iframe.window.getEditContent())
        }
    })
});
