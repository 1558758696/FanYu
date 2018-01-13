$(document).ready(function () {

    var isOpenEdit = true;
    var isOpenScreen = true;
    
    // $('#nav_home').text(FanYu.NavHome);
    // $('#nav_classify').text(FanYu.NavClassify);
    // $('#nav_collect').text(FanYu.NavCollect);
    // $('#nav_note').text(FanYu.NavNote);
    // $('#nav_login').text(FanYu.NavLogin);

    var userId = sessionStorage.getItem('userId');
    if (userId != null) {
        $('#nav_login').hide();
        $('#nav_headportrait').show();
        $('#nav_headportrait').attr('src',sessionStorage.getItem('headPortrait'));
    } else {
        $('#nav_headportrait').hide();
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
                $("#uploadImage").trigger("click");
                break;
            default :
                searchBlog();
                break
        }
    });

    document.onkeydown = function () {
        if (event.keyCode == 13) {
            var search1 = $('#search').is(':focus');
            var search2 = $('#search2').is(':focus');
            if (search1) {
                searchBlog();
            } else if (search2) {
                searchBlog();
            }
        }
    };

    $('#top').click(function () {
        scrollTop();
    });
});
