/**
 * Created by Shaomg on 2018/1/4.
 */
var vueNav;
var vueLogin;
var vueEdit;
var vueAlter;
$(document).ready(function () {

    vueNav = new Vue({
        el: '.navbar-default',
        data: {
            navHome: '首页',
            navClassify: '分类',
            navCollect: '收藏',
            navInRegardTo: '关于',
            navNote: '随心记',
            navLogin: '登录'
        }
    });
    vueLogin = new Vue({
        el: '#float_div',
        data: {
            signinTit: '- 账号注册 -',
            signinText: '注册',
            loginTit: '- 账号登录 -',
            noSignin: '还没注册 ?',
            forgetPwd: '忘记密码 ?',
            loginText: '立即登录',
            alterPwd: '修改密码',
            alterBtn: '确认修改'
        }
    });
    vueEdit = new Vue({
        el: '#edit_save_Btn',
        data: {
            editSave: '- 保存',
            editIssue: '发布 -'
        }
    });

    vueAlter = new Vue({
        el: '#userInfo_div',
        data: {
            alterDetails: '个人信息',
            alterrPortrait: '修改头像',
            alterPassword: '修改密码',
            alterQuit: '退出'
        }
    });
    init();
    changeWidth();

   /* for(var i = 0;i<15;i++){
        addBlogItem(i);
    }
    */
    var userInfo = {
        "start": 0,
        "end": 10
    };
    var object = $.toJSON(userInfo);
    readBlogAjax(object);
});

$(window).resize(function () {
    $("#content_left_item").css('height', 'auto');
    $('#float_div_content').css('margin-top', ($('#float_div').height() - 350) / 2);
    changeWidth();
});

$(window).scroll(function () {
    /*if (($(document).height() - $(window).height() - $(document).scrollTop()) <= $(window).height()) {
     loadMore();
     }*/
    scrollTopBtn();
});