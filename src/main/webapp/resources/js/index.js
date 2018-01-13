/**
 * Created by Shaomg on 2018/1/4.
 */
var vueNav;
var vueLogin;
var vueEdit;
$(document).ready(function () {
    vueNav = new Vue({
        el: '.navbar-default',
        data: {navHome: '首页', navClassify: '分类', navCollect: '收藏', navInRegardTo: '关于', navNote: '笔记', navLogin: '登录'}
    });
    vueLogin = new Vue({
        el: '#somedialog',
        data: {signinTit: '- 账号注册 -', signinText: '注册', loginTit: '- 账号登录 -', noSignin: '还没注册 ?', forgetPwd: '忘记密码 ?', loginText: '立即登录'}
    });
    vueEdit = new Vue({
        el: '#content',
        data: {editH1: '随心记', editH3: '记录生活的点点滴滴', editSave: '- 保存', editIssue: '发布 -'}
    });
    init();
    changeWidth();
});

$(window).resize(function () {
    $("#content_left_item").css('height', 'auto');
    changeWidth();
});

$(window).scroll(function () {
    scrollTopBtn();
});





