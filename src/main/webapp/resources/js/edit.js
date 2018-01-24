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

        var blogTit = $('#edit_text').val();
        if (blogTit.length === 0 || blogTit.length > 10) {
            showDialog('文章名称应为1~10个字符');
        } else {
            editBtnClick(this);
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

    var leng = 11;
    $(window).unload(function () {
        if (iframe.window.getEditContent().length != leng) {
            leng = iframe.window.getEditContent().length;
            setTempInfo('Edit', iframe.window.getEditContent())
        }
    })
});
