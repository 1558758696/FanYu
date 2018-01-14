var isOpenLoginDiv = false;
$(document).ready(function () {

    var isOpenEdit = true;
    var isOpenScreen = true;

    var userId = sessionStorage.getItem('userId');
    if (userId !== null) {
        if(userId == 'quit'){
            $('#nav_headportrait').hide();
            $('#nav_note').hide();
            $('#nav_login').show();
        }else{
            $('#nav_login').hide();
            $('#nav_note').show();
            $('#nav_headportrait').show();
            $('#nav_headportrait').attr('src', sessionStorage.getItem('headPortrait')); 
        }
    } else{
        $('#nav_headportrait').hide();
        $('#nav_note').hide();
        $('#nav_login').show();
    }
    
    $('.container-fluid').on('click', '#nav_home,#nav_classify,#nav_collect,.search_btn,#nav_login,#nav_headportrait,#nav_note', function () {
        switch ($(this).attr('id')) {
            case 'nav_home':
                if ($('.navbar-default').width() > FanYu.changWidth) {
                    $('#content_right').fadeIn();
                }
                $('#content_left').fadeIn();
                $('#content_mid').fadeOut();
                isOpenEdit = true;
                break;
            case 'nav_classify':
                showDialog('分类');
                break;
            case 'nav_collect':
                showDialog('收藏');
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

                    if (sessionStorage.getItem('Edit') != null) {
                        iframe.window.setEditContent(sessionStorage.getItem('Edit'))
                    } else {
                        iframe.window.setEditContent('<p><br></p>')
                    }
                    if (isOpenScreen) {
                        var context = iframe.window.getEditContext();
                        context.invoke('fullscreen.toggle', null, $(".note-icon-arrows-alt"));
                        isOpenScreen = false;
                    }
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

    $('#userInfo_div').on('click', '#alter_headPortrait,#alter_password,#quit', function () {
        switch ($(this).attr('id')) {
            case 'alter_headPortrait':
                $("#uploadImage").trigger("click");
                break;
            case 'alter_password':
                $('#float_div').fadeIn(400);
                $('#login_div').fadeOut();
                $('#signin_div').fadeOut();
                $('#alter_div').fadeIn();
                $('#alter_account_input').val(sessionStorage.getItem('userName'));
                $('#alter_pwd_input_one').focus();
                isOpenLoginDiv = true;
                break;
            case 'quit':
                sessionStorage.setItem('userId', 'quit');
                window.location.reload();
                break;
        }
    });

    $('#top').click(function () {
        scrollTop();
    });
});
