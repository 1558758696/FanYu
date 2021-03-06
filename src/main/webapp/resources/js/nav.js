var isOpenLoginDiv = false;
var blogClassify = 1;
$(document).ready(function () {

    var isOpenEdit = true;
    var isOpenScreen = true;

    var userId = getTempInfo('userId');
    if (userId !== null) {
        $('#nav_login').hide();
        $('#nav_note').show();
        $('#nav_headportrait').show();
        $('#nav_headportrait').attr('src', getTempInfo('headPortrait'));
    } else {
        $('#nav_headportrait').hide();
        $('#nav_note').hide();
        $('#nav_login').show();
    }

    $('.container-fluid').on('click', '#nav_home,#nav_classify,#nav_collect,.search_btn,#nav_login,#nav_headportrait,#nav_note', function () {
        switch ($(this).attr('id')) {
            case 'nav_home':
                window.location.reload();
                isOpenEdit = true;
                break;
            case 'nav_classify':
                showDialog('分类');
                break;
            case 'nav_collect':
                showDialog('收藏');
                console.info($('#content_left').children().length);
                break;
            case 'nav_login':
                $('#float_div').fadeIn(400);
                $('#signin_div').fadeOut();
                $('#alter_div').fadeOut();
                $('#login_div').fadeIn();
                $('#login_account_input').focus();
                isOpenLoginDiv = true;
                break;
            case 'nav_note':
                if (isOpenEdit) {
                    $('#content_right').fadeOut();
                    $('#content_left').fadeOut();
                    $('#content_mid').fadeIn();

                    if (getTempInfo('Edit') != null) {
                        iframe.window.setEditContent(getTempInfo('Edit'))
                    }

                    if (isOpenScreen) {
                        var context = iframe.window.getEditContext();
                        context.invoke('fullscreen.toggle', null, $(".note-icon-arrows-alt"));
                        isOpenScreen = false;
                    }

                    $('#edit_classify_ul').empty();
                    for (var i = 0; i < classify.length; i++) {
                        initEditClassify(i)
                    }
                    console.info($('#edit_saveInfo_div').width());
                    $('#edit_classify').width($('#edit_saveInfo_div').width() - 205);
                    
                    $('.edit_classify_ul_li').first().find('div').css('background', '#a1a1a1');
                    $('.edit_classify_ul_li').click(function () {
                        $('.edit_classify_ul_li div').css('background', '#fff');
                        $(this).children().css('background', '#a1a1a1');
                        blogClassify = parseInt($(this).find('span').text()) + 1;
                        console.info(blogClassify)
                    });
                    isOpenEdit = false;
                }
                break;
            case 'nav_headportrait':
                if ($("#userInfo_div").is(":hidden")) {
                    $('#userInfo_div').show(400);
                    $('#userInfo_div_ul').fadeIn();

                } else {
                    $('#userInfo_div_ul').fadeOut(50);
                    $('#userInfo_div').hide(400);
                }

                break;
            default :
                searchBlog();
                break
        }
    });


    $("body").click(function (e) {
        switch ($(e.target).attr('id')) {
            case 'nav_headportrait':
                break;
            case 'userInfo_div_personal_details':
                break;
            case 'alter_headPortrait':
                $("#uploadImage").trigger("click");
                break;
            case 'alter_password':
                $('#float_div').fadeIn(400);
                $('#login_div').fadeOut();
                $('#signin_div').fadeOut();
                $('#alter_div').fadeIn();
                $('#alter_account_input').val(getTempInfo('userName'));
                $('#alter_pwd_input_one').focus();
                isOpenLoginDiv = true;
                break;
            case 'userInfo_div':
                break;
            case 'quit':
                removeTempInfo('userId');
                window.location.reload();
                break;
            default:
                if ($('#userInfo_div').is(':visible')) {
                    $('#userInfo_div').fadeOut();
                }
                break
        }
    });

    $('#top').click(function () {
        scrollTop();
    });
});
