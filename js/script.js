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

    $('.featured_items_product').hover(function(){
        $(this).find('.quick_view').css({
            'right':'-45px',
            'transition':'0.3s'
        })
        $(this).find('.add_cart_btn').css({
            'transform': 'translateX(0%)',
            'transition':'0.3s'
        })
        $(this).find('.price').css({
            'transform': 'translateX(210%)',
            'transition':'0.3s'
        })

    },function(){
        $(this).find('.quick_view').css({
            'right':'-83px',
            'transition':'0.3s'
        })
        $(this).find('.add_cart_btn').css({
            'transform': 'translateX(-100%)',
            'transition':'0.3s'
        })
        $(this).find('.price').css({
            'transform': 'translateX(0%)',
            'transition':'0.3s'
        })
    })

    new Swiper('.block_preview_slider',{
        navigation: {
            nextEl: '#preview-arrow-next',
            prevEl: '#preview-arrow-prev',
        },
        autoplay: {
            delay: 6000,
        },
        
        loop: true,
    })
    new Swiper('.featured_slider',{
        navigation: {
            nextEl: '#featured-next',
            prevEl: '#featured-prev',
        },
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
        },
        
        
    })
    new Swiper('.reviews_slider',{
        navigation: {
            nextEl: '#reviews-next',
            prevEl: '#reviews-prev',
        },
        slidesPerView: 1,
        autoplay: {
            delay: 6000,
        },
        loop: true,
        
    })

    new Swiper('.gift_baskets_slider',{
        navigation: {
            nextEl: '#gift-arrow-next',
            prevEl: '#gift-arrow-prev',
        },
        autoplay: {
            delay: 3000,
        },
        
        loop: true,
    })
    new Swiper('.instagram_slider',{
        slidesPerView: 4.35,
        
        freeMode: true,
        autoplay: {
            delay: 3000,
        },
        
        loop: true,
    })


})