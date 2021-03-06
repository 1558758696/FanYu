function signinBtnAjax(object) {
    $.ajax({
        type: "post",
        url: FanYu.user + '/register.do',
        dataType: "json",
        data: {
            'userInfo': object
        },
        timeout: 5000,
        beforeSend: function () {
            $('#signin_btn').attr('disabled', "true");
            $('.pro-bar-container').show();
        },
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
        },
        complete: function (XMLHttpRequest, textStatus) {
            $('#signin_btn').removeAttr("disabled");
            $('.pro-bar-container').fadeOut();
        }
    });
}


function loginBtnAjax(object) {
    $.ajax({
        type: "post",
        url: FanYu.user + '/login.do',
        dataType: "json",
        data: {
            'userInfo': object
        },
        timeout: 5000,
        beforeSend: function () {
            $('#login_btn').attr('disabled', "true");
            $('.pro-bar-container').show();
        },
        success: function (data, status) {
            if (data.loginState === 'success') {
                showDialog(data.info);
                setTempInfo('userId', data.userId);
                setTempInfo('userName', jQuery.parseJSON(object).userName);
                setTempInfo('headPortrait', data.headPortrait);
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
        },
        complete: function (XMLHttpRequest, textStatus) {
            $('#login_btn').removeAttr("disabled");
            $('.pro-bar-container').fadeOut();
        }
    });
}

function alterBtnAjax(object) {
    $.ajax({
        type: "post",
        url: FanYu.user + '/updatePassWord.do',
        dataType: "json",
        data: {
            'userInfo': object
        },
        timeout: 5000,
        beforeSend: function () {
            $('#alter_btn').attr('disabled', "true");
            $('.pro-bar-container').show();
        },
        success: function (data, status) {
            if (data.updatePassWordState === 'success') {
                showDialog(data.info);
                $('#login_div').fadeIn();
                $('#signin_div').fadeOut();
                $('#alter_div').fadeOut();
                $('#float_div').fadeOut(200);
            } else if (data.updatePassWordState === 'fail') {
                showDialog(data.info);
            }
        },
        fail: function (err, status) {
            console.log(err);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败');
        },
        complete: function (XMLHttpRequest, textStatus) {
            $('#alter_btn').removeAttr("disabled");
            $('.pro-bar-container').fadeOut();
        }
    });
}

function updateImage(object) {
    $.ajax({
        type: "post",
        url: FanYu.user + '/updateHeadPortrait.do',
        dataType: "json",
        data: {
            'userInfo': object
        },
        beforeSend: function () {
            $('.pro-bar-container').show();
        },
        success: function (data, status) {
            if (data.updateHeadPortraitState === 'success') {
                $('#nav_headportrait').attr('src', data.userHeadPortrait);
                setTempInfo('headPortrait', data.userHeadPortrait);
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
        },
        complete: function (XMLHttpRequest, textStatus) {
            $('.pro-bar-container').fadeOut();
        }
    });
}

function saveBtnAjax(object) {
    $.ajax({
        type: "post",
        url: FanYu.blog + '/addBlog.do',
        dataType: "json",
        data: {
            'blogInfo': object
        },
        timeout: 5000,
        beforeSend: function () {
            $('.pro-bar-container').show();
        },
        success: function (data, status) {
            showDialog(data.info + "" + data.blogId);
        },
        fail: function (err, status) {
            console.log(err);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败');
        },
        complete: function (XMLHttpRequest, textStatus) {
            $('.pro-bar-container').fadeOut();
        }
    });
}


function readBlogAjax() {
    var userInfo = {
        "stateId": 1,
        "start": $('#content_left').children().length,
        "end": 10
    };
    var object = $.toJSON(userInfo);

    $.ajax({
        type: "post",
        url: FanYu.blog + '/selectByLimit.do',
        dataType: "json",
        data: {
            'blogInfo': object
        },
        beforeSend: function () {
            $('.pro-bar-container').show();
        },
        success: function (data, status) {
            for (var i = 0; i < data.length; i++) {
                addBlogItem(data[i]);
                isLoad = true;
            }
            if (data.length == 0) {
                addLastItem();
            }
        },
        fail: function (err, status) {
            console.log(err);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showDialog('连接服务器失败');
        },
        complete: function (XMLHttpRequest, textStatus) {
            $('.pro-bar-container').fadeOut();
        }
    });
}


function readBlogContentAjax(id) {
    $.ajax({
        type: "post",
        url: FanYu.blog + '/selectById.do',
        dataType: "json",
        data: {
            'blogId': id
        },
        // timeout: 5000,
        beforeSend: function () {
            $('.pro-bar-container').show();
        },
        success: function (data, status) {
            $('#title').text(data.title);
            $('#blogTit').text(data.title);
            $('#author').text(data.user);
            $('#date').text(data.date);
            $('#blogContent').append(data.content);
        },
        fail: function (err, status) {
            console.log(err);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // showDialog('连接服务器失败');
        },
        complete: function (XMLHttpRequest, textStatus) {
            $('.pro-bar-container').fadeOut();
        }
    });
}

function uploadImagePath(file) {
    data = new FormData();
    data.append("file", file);
    console.log(data);
    $.ajax({
        data: data,
        type: "post",
        url: FanYu.upload + '/uploadImg.do',
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            iframe.window.setimagePath(data.path);
        }
    });
}