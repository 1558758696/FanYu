$(document).ready(function () {
    $('#somedialog').click(function (e) {
        switch ($(e.target).attr('id')){
            case 'signin_Tit':
                $('#signin_div').fadeOut();
                $('#login_div').fadeIn();
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
                $('#signin_div').fadeIn();
                $('#login_div').fadeOut();
                break;
            case 'login_account_input':
                break;
            case 'login_pwd_input':
                break;
            case 'no_signin':
                $('#signin_div').fadeIn();
                $('#login_div').fadeOut();
                break;
            case 'forget_pwd':
                showDialog('忘记密码');
                break;
            case 'login_btn':
                loginBtnClick();
                break;
            default:
                $('#signin_div').fadeOut();
                $('#login_div').fadeIn();
                $('#login_account_input').val('');
                $('#login_pwd_input').val('');
                $('#signin_account_input').val('');
                $('#signin_pwd_input_one').val('');
                $('#signin_pwd_input_two').val('');
        }
    });
});