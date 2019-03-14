'use strict';
window.onload = function(){

    //toggle main menu btn
    $('#mainMenuBtn').on('click', function(){
        $('body').toggleClass('show-main-menu');
    });

    $(document).mouseup(function (e) {
        var div = $("#mainMenuBtn");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.closest('body').removeClass('show-main-menu');
        }
    });

};