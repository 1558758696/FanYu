/**
 * Created by Shaomg on 2018/1/8.
 */
$(document).ready(function () {
    $('#content_left').on('click', '#content_left_item_Tit_span,#author,#collect,#load_item', function () {
        switch ($(this).attr('id')) {
            case 'content_left_item_Tit_span':
                var readBlogs = $(this).text();
                setTempInfo('blogsName', readBlogs);
                setTempInfo('blogId', $(this).parent().parent().find('#blogId').text());
                console.info(getTempInfo('blogId'));
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





