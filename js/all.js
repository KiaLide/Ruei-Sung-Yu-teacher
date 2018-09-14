$(document).ready(function(){
    $(".showmenu").click(function(){
        event.preventDefault();
    });

    $(".showmenu").click(function(){
        $(".menu-list").toggleClass("active");
    });

    $(".menu-list li").click(function(){
        $(this).parent().parent().find(".menu-list").removeClass("active")
    });

    $(".back-to-top a").click(function(){
        event.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
});