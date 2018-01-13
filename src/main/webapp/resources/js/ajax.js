function loginBtnAjax(account, pwd) {
    $.ajax({
        type: "post",
        url: FanYu.url + '/login.do?userName=' + account + '&passWord=' + pwd,
        dataType: "json",
        timeout: 5000,
        success: function (data, status) {
            console.info(data);
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
            console.info(err)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败')
        }
    });
}

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
            console.info(err)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败')
        }
    });
}

function updateImage(object) {
    console.info(object.length);
    $.ajax({
        type: "post",
        url: 'user/test.do',
        dataType: "text",
        data: {
            'type':object
        },
        timeout:3000,
        success: function (data, status) {
            console.info(data + ":" + status);
        },
        fail: function (err, status) {
            console.log(err)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败')
        }

        /*type: "POST",
         url: FanYu.url + '/update.do?userInfo=' + object,
         // contentType: "application/json; charset=utf-8",
         dataType: "json",
         timeout: 5000,
         success: function (data, status) {
         // console.info(data);
         /!*if(data.updateState === 'success'){
         showDialog(data.info);
         $('#nav_headportrait').attr('src', object.imageInfo);
         }else if(data.updateState === 'fail'){
         showDialog(data.info);
         }*!/
         },
         fail: function (err, status) {
         console.info(err)
         },
         error: function (XMLHttpRequest, textStatus, errorThrown) {
         showDialog('连接服务器失败')
         }*/
    });
}