$(window).ready(function () {
    changeWidth();
    readBlogContentAjax(sessionStorage.getItem('blogId'));
    $('#top').click(function () {
        scrollTopBtnClick();
    })
});

$(window).resize(function () {
    changeWidth();
});

$(window).scroll(function () {
    scrollTopBtn();
});

function changeWidth() {
    var width = document.body.offsetWidth;
    if (width < FanYu.changWidth) {
        $('#content').css({'width': '100%', 'margin': '10px 0'});
    } else if (width > FanYu.changWidth) {
        $('#content').css({'width': '70%', 'margin': '10px 15%'});
    }
}

function scrollTopBtn() {
    if ($(window).scrollTop() > FanYu.scrollTop) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
}

function scrollTopBtnClick() {
    $('html,body').animate({scrollTop: 0}, 'slow');
}