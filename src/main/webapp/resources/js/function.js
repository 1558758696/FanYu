/**
 * Created by Shaomg on 2018/1/4.
 */

var isLess = true;
var isGreater = true;

function init() {
    FanYu.diaLog = new $.zui.Messager();
    FanYu.ImageReader = new FileReader(), rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
    FanYu.ImageReader.onload = function (oFREvent) {

        var userInfo = {
            "userId": sessionStorage.getItem('userId'),
            "userHeadPortrait": oFREvent.target.result
        };
        var object = $.toJSON(userInfo);
        updateImage(object);
        showDialog('正在更新...');
    };
}

function loginBtnClick() {
    var account = $('#login_account_input').val();
    var pwd = $('#login_pwd_input').val();
    if (account === '') {
        showDialog('账号不能为空');
    } else if (pwd === '') {
        showDialog('密码不能为空');
    } else {
        var userInfo = {
            "userName": account,
            "passWord": pwd
        };
        var object = $.toJSON(userInfo);
        loginBtnAjax(object);
        showDialog('正在登录...');
    }
}

function signinBtnClick() {
    var account = $('#signin_account_input').val();
    var pwdone = $('#signin_pwd_input_one').val();
    var pwdtwo = $('#signin_pwd_input_two').val();
    if (account === '') {
        showDialog('账号不能为空');
    } else if (pwdone === '' || pwdtwo === '') {
        showDialog('密码不能为空');
    } else if (pwdone !== pwdtwo) {
        showDialog('两次密码不一致');
    } else if (account.length < 2 || account.length > 22) {
        showDialog('用户名应为6~22位');
    } else if (pwdone.length < 6 || pwdone.length > 22) {
        showDialog('密码应为6~22位');
    } else {
        var userInfo = {
            "userName": account,
            "passWord": pwdone
        };
        var object = $.toJSON(userInfo);
        signinBtnAjax(object);
        showDialog('正在注册...');
    }
}

function alterBtnClick() {
    var account = $('#alter_account_input').val();
    var pwdone = $('#alter_pwd_input_one').val();
    var pwdtwo = $('#alter_pwd_input_two').val();
    if (account === '') {
        showDialog('账号不能为空');
    } else if (pwdone === '' || pwdtwo === '') {
        showDialog('密码不能为空');
    } else if (pwdone !== pwdtwo) {
        showDialog('两次密码不一致');
    } else if (pwdone.length < 6 || pwdone.length > 22) {
        showDialog('密码应为6~22位');
    } else {
        var userInfo = {
            "userName": account,
            "passWord": pwdone
        };
        var object = $.toJSON(userInfo);
        alterBtnAjax(object);
        showDialog('正在修改...');
    }
}


var arr1 = ['张三', '李四', '王五', '柳柳', '我是一只小坏蛋', 'S先生', '哈哈哈', '嘿嘿嘿'];
var arr2 = ['123', '342', '323', '432', '5243', '9999999+', '66-', '99+'];
var arr3 = ['说散就散', '365个祝福', '红昭愿', '不配说爱你', '漂洋过海来看你', '你的眼神', '一个人走', '(DJ)拥抱你离去'];
var arr4 = ['Android', 'Java', 'Html', 'C++', 'Python', 'C#', 'JavaScript', 'C'];

function addBlogItem(i) {
    var html = '<div id="content_left_item" class=\'ui segment\'>' +
        '<div id="content_left_item_Tit">' +
        '<span id="content_left_item_Tit_span">' + arr3[i] + '</span>' +
        '</div>' +
        '<div id="content_left_item_classify" class=\'ui pink top right ribbon label\'>' + arr4[i] + '</div>' +
        '<div id="content_left_item_bottom">' +
        '<span class="content_left_item_bottom">' +
        '<span>作者 :</span>' +
        '<span id="author" class="content_left_item_bottm_right">' + arr1[i] + '</span>' +
        '</span>' +
        '<span class="content_left_item_bottom">' +
        '<span>时间 :</span>' +
        '<span class="content_left_item_bottm_right">' + getNowFormatDate() + '</span>' +
        '</span>' +
        '<span class="content_left_item_bottom">' +
        '<span>阅读 :</span>' +
        '<span class="content_left_item_bottm_right">' + arr2[i] + '</span>' +
        '</span>' +
        '<span class="content_left_item_bottom">' +
        '<span>评论 :</span>' +
        '<span class="content_left_item_bottm_right">' + arr2[i] + '</span>' +
        '</span>' +
        '<span style="position: absolute; right: 20px;">' +
        '<img id="collect" src="resources/img/collect.png" width="20" title="收藏"/>' +
        '</span>' +
        '</div>' +
        '</div>';
    $('#content_left').append(html);
}

function addLastItem(state) {
    var html;
    switch (state) {
        case 'load':
            html = '<div id="load_item" class="ui segment">\n' +
                '<span id="load_item_text">加载更多...</span>\n' +
                '</div>';
            break;
        case 'no':
            html = '<div id="load_item" class="ui segment">\n' +
                '<spn id="load_item_text">我是有底线的!</spn>\n' +
                '</div>';
            break;
            break
    }

    $('#content_left').append(html);
}

function searchBlog() {
    var searchtext;
    if (!$('#li_search2').is(':hidden')) {
        searchtext = $('#li_search2 .search_text').val();
    }
    if (!$('#li_search1').is(':hidden')) {
        searchtext = $('#li_search1 .search_text').val();
    }
    if ($.trim(searchtext) == '') {
        showDialog('搜索内容为空');
    } else {
        showDialog(searchtext)
    }
}

function changeWidth() {
    var currentWidth = $('.navbar-default').width();
    if (currentWidth < FanYu.changWidth) {
        if (isLess) {

            $("#li_search1").show();
            $("#li_search2").hide();
            $("#li_search2 .search_text").val('');

            $('#content_right').hide();
            $('#content_left').css('width', '100%');
            $('#content_mid').css({'width': '100%', 'margin': '0'});
            $('.container-fluid').css('margin', '0');
            $('#content').css({'width': '98%', 'margin': '0 1%'});

            $('#edit_left_div').hide();
            $('#edit_mid_cutoffrule').hide();
            $('#edit_right_div').css({'width': '100%', 'top': '0', 'left': '0'});

            isGreater = true;
            isLess = false;
        }
    } else if (currentWidth > FanYu.changWidth) {
        if (isGreater) {

            $("#li_search1").hide();
            $("#li_search2").show();
            $("#li_search1 .search_text").val('');

            $('#content_left').css('width', '69%');
            $('#content_mid').css({'width': '100%', 'margin': '0'});
            if ($('#content_mid').is(":hidden")) {
                $('#content_right').show();
            }

            $('.container-fluid').css('margin', '0 5%');
            $('#content').css({'width': '90%', 'margin': '0 5%'});


            $('#edit_left_div').show();
            $('#edit_mid_cutoffrule').show();
            $('#edit_right_div').css({'width': '80%', 'top': '-200%', 'left': '20%'});
            isLess = true;
            isGreater = false;
        }
    }
}

function scrollTopBtn() {
    $('#userInfo_div').css('top', -($(window).scrollTop() - 51));
    if ($(window).scrollTop() > 50) {
        $('#userInfo_div').fadeOut();
    }
    if ($(window).scrollTop() > FanYu.scrollTop) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
}

function scrollTop() {
    $('html,body').animate({scrollTop: 0}, 'slow');
}

function showDialog(m) {
    FanYu.diaLog.update(m);
    FanYu.diaLog.show();
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes();
    return currentdate;
}

function loadImageFile() {
    if (document.getElementById("uploadImage").files.length === 0) {
        return;
    }
    var oFile = document.getElementById("uploadImage").files[0];
    if (!rFilter.test(oFile.type)) {
        showDialog("您必须选择一个有效的图像文件");
        return;
    }
    FanYu.ImageReader.readAsDataURL(oFile);
}
