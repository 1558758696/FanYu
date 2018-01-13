/**
 * Created by Shaomg on 2018/1/8.
 */
$(document).ready(function () {

    for (var i = 0; i < 14; i++) {
        addBlogItem(i);
    }
    addLastItem('load');

    $('#content_left').on('click', '#content_left_item_Tit_span,#author,#collect,#load_item', function () {
        switch ($(this).attr('id')) {
            case 'content_left_item_Tit_span':
                $(this).css('opacity', '0.5');
                var readBlogs = $(this).text();
                sessionStorage.setItem('blogsName', readBlogs);
                window.open('./blogs.html');
                break;
            case 'author':
                var authorDetails = $(this).text();
                showDialog(authorDetails);
                break;
            case 'collect':
                var collectBlogs = $(this).parent().parent().parent().children().first().text();
                showDialog(collectBlogs);
                break;
            case 'load_item':
                switch ($(this).children().text()) {
                    case '加载更多...':
                        showDialog("加载更多...");
                        break;
                }
                break;
        }
    });
});





