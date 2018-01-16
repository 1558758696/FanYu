$(document).ready(function () {

    $('#edit_right_Tit_right_div').on('click', '#edit_save,#edit_issue', function () {
        switch ($(this).attr('id')) {
            case 'edit_save':
                showDialog('保存');
                // console.info(iframe.window.getEditContent());
                break;
            case 'edit_issue':
                showDialog('发布');
                break;
        }
    });

    var leng = 11;
    $(window).unload(function () {
        if (iframe.window.getEditContent().length != leng) {
            leng = iframe.window.getEditContent().length;
            sessionStorage.setItem('Edit', iframe.window.getEditContent())
        }
    })
});