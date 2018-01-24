$(document).ready(function () {
    $('#float_div').click(function (e) {
        switch ($(e.target).attr('id')) {
            case 'signin_Tit':
                break;
            case 'signin_account_input':
                break;
            case 'signin_pwd_input_one':
                break;
            case 'signin_pwd_input_two':
                break;
            case 'signin_btn':
                signinBtnClick();
                break;
            case 'login_Tit':
                break;
            case 'login_account_input':
                break;
            case 'login_pwd_input':
                break;
            case 'no_signin':
                $('#signin_div').fadeIn();
                $('#login_div').fadeOut();
                $('#signin_account_input').focus();
                break;
            case 'forget_pwd':
                showDialog('忘记密码');
                break;
            case 'login_btn':
                loginBtnClick();
                break;
            case 'alter_Tit':
                break;
            case 'alter_account_input':
                break;
            case 'alter_pwd_input_one':
                break;
            case 'alter_pwd_input_two':
                break;
            case 'alter_btn':
                alterBtnClick();
                break;
            case 'float_div':
                $('#login_div').fadeIn();
                $('#signin_div').fadeOut();
                $('#alter_div').fadeOut();
                $('#float_div').fadeOut(200);
                break;
            case 'alter_div':
                break;
            case 'login_div':
                break;
            case 'signin_div':
                break;
            default:
                isOpenLoginDiv = false;
                $('#login_div').fadeIn();
                $('#signin_div').fadeOut();
                $('#alter_div').fadeOut();
                $('#login_account_input').val('');
                $('#login_pwd_input').val('');
                $('#signin_account_input').val('');
                $('#signin_pwd_input_one').val('');
                $('#signin_pwd_input_two').val('');
                $('#alter_account_input').val('');
                $('#alter_pwd_input_one').val('');
                $('#alter_pwd_input_two').val('');
        }
    });

    document.onkeydown = function () {
        if (event.keyCode == 13) {
            if (isOpenLoginDiv) {
                if ($("#signin_div").is(":visible")) {
                    signinBtnClick();
                }
                if ($("#login_div").is(":visible")) {
                    loginBtnClick();
                }
                if ($("#alter_div").is(":visible")) {
                    alterBtnClick();
                }
            } else {
                var search1 = $('#search').is(':focus');
                var search2 = $('#search2').is(':focus');
                if (search1) {
                    searchBlog();
                } else if (search2) {
                    searchBlog();
                }
            }
        }
    };
});
