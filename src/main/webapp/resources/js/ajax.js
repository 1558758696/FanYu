function signinBtnAjax(account, pwd) {
    $.ajax({
        type: "post",
        url: FanYu.url + '/register.do?userName=' + account + '&passWord=' + pwd,
        dataType: "json",
        timeout: 5000,
        success: function (data, status) {
            if (data.registerState === 'success') {
                showDialog(data.info);
                $('#signin_div').fadeOut();
                $('#login_div').fadeIn();
                $('#login_account_input').val(account);
                $('#signin_account_input').val('');
                $('#signin_pwd_input_one').val('');
                $('#signin_pwd_input_two').val('');
                $('#login_pwd_input').val('');
            } else if (data.registerState === 'fail') {
                showDialog(data.info);
            }
        },
        fail: function (err, status) {
            console.log(err)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败')
        }
    });
}

function loginBtnAjax(account, pwd) {
    $.ajax({
        type: "post",
        url: FanYu.url + '/login.do?userName=' + account + '&passWord=' + pwd,
        dataType: "json",
        timeout: 5000,
        success: function (data, status) {
            if (data.loginState === 'success') {
                showDialog(data.info);
                sessionStorage.setItem('userId', data.userId);
                sessionStorage.setItem('headPortrait', data.headPortrait);
                window.location.reload();
            } else if (data.loginState === 'fail') {
                showDialog(data.info);
            }
        },
        fail: function (err, status) {
            console.log(err)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败')
        }
    });
}

function updateImage(object) {
    $.ajax({
        type: "post",
        url: FanYu.url + '/update.do',
        dataType: "json",
        data: {
            'userInfo': object
        },
        timeout: 3000,
        success: function (data, status) {
            if (data.updateState === 'success') {
                $('#nav_headportrait').attr('src', data.userHeadPortrait);
                sessionStorage.setItem('headPortrait', data.userHeadPortrait);
                showDialog(data.info);
            } else if (data.updateState === 'fail') {
                showDialog(data.info);
            }
        },
        fail: function (err, status) {
            console.log(err)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败')
        }
    });
}