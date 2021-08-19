$(document).ready(function(){


    $('.navigation_links li').hover(function(){
        $(this).find('.down_menu').slideDown({
            duration: 300,
        })
    },function(){
        $(this).find('.down_menu').slideUp({
            duration: 80,
        })
    }) 


    $('.li_open').hover(function(){
        $(this).find('.li_open_menu').fadeIn()
    },function(){
        $(this).find('.li_open_menu').fadeOut()
    }) 





})