/**
 * Created by Shaomg on 2018/1/4.
 */

$(document).ready(function () {

    initData();
    changeWidth();

    /* for (var i = 0; i < 10; i++) {
     addBlogItem(i);
     }*/
    readBlogAjax();
});

$(window).resize(function () {
    $('#edit_classify').width($('#edit_saveInfo_div').width() - 205);
    $("#content_left_item").css('height', 'auto');
    $('#float_div_content').css('margin-top', ($('#float_div').height() - 350) / 2);
    changeWidth();
});

$(window).scroll(function () {
    if (($(document).height() - $(window).height() - $(document).scrollTop()) <= $(window).height()) {
        loadMore();
    }

    /*if($(this).scrollTop() + $(this).height() == $(document).height()){
        addLastItem()
    }*/
    scrollTopBtn();
});