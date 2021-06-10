$(function(){
    /*表头 搜索功能模块 s*/
    $(".actions-list>li>a.js-search").click(function(){
        if($('.actions-list>li>a.js-search').hasClass("active")){
            $(".search-pop-div").slideUp("fast");
            $('.actions-list>li>a.js-search').removeClass('active');
        }else{
            $('.actions-list>li>a.js-search').addClass('active');
            $(".search-pop-div").slideDown("fast");
        }
    });
    $(".search-pop-div .btn-closeicon").click(function(){
        $(".search-pop-div").slideUp("fast");
        $('.actions-list>li>a.js-search').removeClass('active');
    });
    /*表头 搜索功能模块 e*/



});