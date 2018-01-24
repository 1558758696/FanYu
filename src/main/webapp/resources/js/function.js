/**
 * Created by Shaomg on 2018/1/4.
 */

var isLess = true;
var isGreater = true;
var classify = ['生活', '情感', '生活类', '情感类', '生活类', '情感类', '生活类', '情感类', '生活类', '情感类', '生活类', '情感类', '生活类', '情感类', '生活类', '情感类', '生活类', '情感类', '其他'];

function initData() {
    FanYu.diaLog = new $.zui.Messager();
    FanYu.ImageReader = new FileReader(), rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
    FanYu.ImageReader.onload = function (oFREvent) {
        var userInfo = {
            "userId": getTempInfo('userId'),
            "userHeadPortrait": oFREvent.target.result
        };
        var object = $.toJSON(userInfo);
        updateImage(object);
    };
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
    }
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
            "userId": getTempInfo('userId'),
            "passWord": pwdone
        };
        var object = $.toJSON(userInfo);
        alterBtnAjax(object);
    }
}

function editBtnClick(t) {
    var blogInfo = {
        "userId": getTempInfo('userId'),
        "categoryId": blogClassify, //博客类型
        "stateId": 1,  //是否发布
        "title": $('#edit_text').val(),
        "content": iframe.window.getEditContent()
    };
    if ($(t).text() === '保存') {
        blogInfo.stateId = 1;

    } else if ($(t).text() === '发布') {
        blogInfo.stateId = 2;
    }
    var object = $.toJSON(blogInfo);
    saveBtnAjax(object);
}


function initEditClassify(i) {
    var html = '<li class="edit_classify_ul_li">\n' +
        '<div><span>' + i + '</span>' + classify[i] + '</div>\n' +
        '</li>';
    $('#edit_classify_ul').append(html);
}


var arr1 = ['张三', '李四', '王五', '柳柳', '我是一只小坏蛋', 'S先生', '哈哈哈', '嘿嘿嘿'];
var arr2 = ['123', '342', '323', '432', '5243', '9999999+', '66-', '99+'];
var arr3 = ['说散就散', '365个祝福', '红昭愿', '不配说爱你', '漂洋过海来看你', '你的眼神', '一个人走', '(DJ)拥抱你离去'];
var arr4 = ['Android', 'Java', 'Html', 'C++', 'Python', 'C#', 'JavaScript', 'C'];

/*function addBlogItem(i) {
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
        '<span style="display: none">阅读 :</span>' +
        '<span class="content_left_item_bottm_right">' + arr2[i] + '</span>' +
        '</span>' +
        '<span class="content_left_item_bottom">' +
        '<span style="display: none;">评论 :</span>' +
        '<span class="content_left_item_bottm_right">' + arr2[i] + '</span>' +
        '</span>' +
        '<span id="blogId" style="display: none;">' + arr2[i] + '</span>' +
        '<span style="position: absolute; right: 20px;">' +
        '<img id="collect" src="resources/img/collect.png" width="20" title="收藏"/>' +
        '</span>' +
        '</div>' +
        '</div>';
    $('#content_left').append(html);
}*/

function addBlogItem(i) {
    console.info(blogList[i].blogId);
    var html = '<div id="content_left_item" class=\'ui segment\'>' +
        '<div id="content_left_item_Tit">' +
        '<span id="content_left_item_Tit_span">' + blogList[i].title + '</span>' +
        '</div>' +
        '<div id="content_left_item_classify" class=\'ui pink top right ribbon label\'>' + blogList[i].category + '</div>' +
        '<div id="content_left_item_bottom">' +
        '<span class="content_left_item_bottom">' +
        '<span>作者 :</span>' +
        '<span id="author" class="content_left_item_bottm_right">' + blogList[i].user + '</span>' +
        '</span>' +
        '<span class="content_left_item_bottom">' +
        '<span>时间 :</span>' +
        '<span class="content_left_item_bottm_right">' + blogList[i].date + '</span>' +
        '</span>' +
        '<span class="content_left_item_bottom" style="display: none;">' +
        '<span>阅读 :</span>' +
        '<span class="content_left_item_bottm_right">' + blogList[i].read + '</span>' +
        '</span>' +
        '<span class="content_left_item_bottom" style="display: none;">' +
        '<span>评论 :</span>' +
        '<span class="content_left_item_bottm_right">' + blogList[i].comment + '</span>' +
        '</span>' +
        '<span id="blogId" style="display: none;">' + blogList[i].blogId + '</span>' +
        '<span style="position: absolute; right: 20px;">' +
        '<img id="collect" src="resources/img/collect.png" width="20" title="收藏"/>' +
        '</span>' +
        '</div>' +
        '</div>';
    $('#content_left').append(html);
}

var isLoad = true;

function loadMore() {
    if (isLoad) {
        isLoad = false;
        for (var i = 0; i <= 5; i++) {
            addBlogItem(i);
        }
        isLoad = true;
    }
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

var isOpen = true;

function userBlogListShow() {
    if (isOpen) {
        $("#edit_right_div").animate({
            left: "+=18%",
            width: '82%'
        }, 400);
        $("#edit_left_div").fadeIn(600);
        $("#edit_mid_cutoffrule").fadeIn(600);
        isOpen = false;

        $('#edit_left_div').empty();
        for (var i = 0; i < 5; i++) {
            addUserBlogItem(i);
        }
    } else {
        $("#edit_right_div").animate({
            left: "-=18%",
            width: '100%'
        }, 400);
        $("#edit_left_div").fadeOut(600);
        $("#edit_mid_cutoffrule").fadeOut(600);
        isOpen = true;
    }
}

function addUserBlogItem(i) {
    var html = '<div id="userBlogItem">\n' +
        '<div id="userBlogItem_top">\n' +
        '<div id="userBlogItem_Tit">' + arr3[i] + '</div>\n' +
        '<div id="userBlogItem_Btn">\n' +
        '<button id="userBlogItem_Delete"></button>\n' +
        '</div>\n' +
        '</div>\n' +
        '<div id="userBlogItem_Time">' + getNowFormatDate() + '</div>\n' +
        '<div id="userBlogItem_Content">我只是一个过客，在你的世界路过...</div>\n' +
        '</div>';

    $('#edit_left_div').append(html);
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

            $('#float_div_content').css('margin-top', ($('#float_div').height() - 350) / 2);
            $('#float_div').css('margin-top', '-314.5px');

            if ($('#edit_left_div').is(':visible')) {
                $('#edit_left_div').hide();
                $('#edit_mid_cutoffrule').hide();
                $('#edit_right_div').css({'width': '100%', 'left': '0'});
            } else {
                $('#edit_right_div').css({'width': '100%'});
            }

            if ($('#edit_div').is(':visible')) {
                iframe.window.blogListBtnHideAndShow(true);
            }
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

            $('#float_div_content').css('margin-top', ($('#float_div').height() - 350) / 2);
            $('#float_div').css('margin-top', '-50px');


            if ($('#edit_left_div').is(':visible')) {
                $('#edit_left_div').show();
                $('#edit_mid_cutoffrule').show();
                $('#edit_right_div').css({'width': '82%', 'left': '18%'});
            } else {
                $('#edit_right_div').css({'width': '100%'});
            }

            if ($('#edit_div').is(':visible')) {
                iframe.window.blogListBtnHideAndShow(false);
                isOpen = true;
            }
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

function setTempInfo(k, v) {
    sessionStorage.setItem(k, v)
}

function getTempInfo(k) {
    return sessionStorage.getItem(k)
}

function removeTempInfo(k) {
    sessionStorage.removeItem(k)
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
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}
