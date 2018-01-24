/**
 * Created by Shaomg on 2018/1/4.
 */

$(document).ready(function () {

    initData();
    changeWidth();

    /*for (var i = 0; i < 15; i++) {
        addBlogItem(i);
    }*/

    var userInfo = {
        "start": 0,
        "end": 10
    };
    var object = $.toJSON(userInfo);
    readBlogAjax(object);
});

$(window).resize(function () {
    $('#edit_classify').width($('#edit_saveInfo_div').width() - 205);
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