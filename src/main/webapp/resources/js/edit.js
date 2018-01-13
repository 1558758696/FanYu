$(document).ready(function () {

    /*$('#edit_save').text(FanYu.editSave);
    $('#edit_issue').text(FanYu.editIssue);
    $('#edit_left_top_h1').text(FanYu.editTit);
    $('#edit_left_top_h3').text(FanYu.editHint);
*/
    $('#edit_right_Tit_right_div').on('click', '#edit_save,#edit_issue', function () {
        switch ($(this).attr('id')) {
            case 'edit_save':
                showDialog('保存');
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