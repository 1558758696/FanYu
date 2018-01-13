function signinBtnAjax(object) {
    $.ajax({
        type: "post",
        url: FanYu.url + '/register.do',
        dataType: "json",
        data: {
            'userInfo': object
        },
        timeout: 5000,
        success: function (data, status) {
            if (data.registerState === 'success') {
                showDialog(data.info);
                $('#signin_div').fadeOut();
                $('#login_div').fadeIn();
                $('#login_account_input').val(jQuery.parseJSON(object).userName);
                $('#signin_account_input').val('');
                $('#signin_pwd_input_one').val('');
                $('#signin_pwd_input_two').val('');
                $('#login_pwd_input').val('');
                $('#login_pwd_input').focus();
            } else if (data.registerState === 'fail') {
                showDialog(data.info);
            }
        },
        fail: function (err, status) {
            console.log(err);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败');
        }
    });
}


function loginBtnAjax(object) {
    $.ajax({
        type: "post",
        url: FanYu.url + '/login.do',
        dataType: "json",
        data: {
            'userInfo': object
        },
        timeout: 5000,
        success: function (data, status) {
            if (data.loginState === 'success') {
                showDialog(data.info);
                sessionStorage.setItem('userId', data.userId);
                sessionStorage.setItem('userName', jQuery.parseJSON(object).userName);
                sessionStorage.setItem('headPortrait', data.headPortrait);
                window.location.reload();
            } else if (data.loginState === 'fail') {
                showDialog(data.info);
            }
        },
        fail: function (err, status) {
            console.log(err);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败');
        }
    });
}

function alterBtnAjax(object) {
    $.ajax({
        type: "post",
        url: FanYu.url + '/updatePassWord.do',
        dataType: "json",
        data: {
            'userInfo': object
        },
        timeout: 5000,
        success: function (data, status) {
            if(data.updatePassWordState === 'success'){
                showDialog(data.info);
                $('#login_div').fadeIn();
                $('#signin_div').fadeOut();
                $('#alter_div').fadeOut();
                $('#float_div').fadeOut(200);
            }else if(data.updatePassWordState === 'fail'){
                showDialog(data.info);
            }
        },
        fail: function (err, status) {
            console.log(err);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败');
        }
    });
}

function updateImage(object) {
    $.ajax({
        type: "post",
        url: FanYu.url + '/updateHeadPortrait.do',
        dataType: "json",
        data: {
            'userInfo': object
        },
        timeout: 5000,
        success: function (data, status) {
            if (data.updateHeadPortraitState === 'success') {
                $('#nav_headportrait').attr('src', data.userHeadPortrait);
                sessionStorage.setItem('headPortrait', data.userHeadPortrait);
                showDialog(data.info);
            } else if (data.updateHeadPortraitState === 'fail') {
                showDialog(data.info);
            }
        },
        fail: function (err, status) {
            console.log(err);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败');
        }
    });
}