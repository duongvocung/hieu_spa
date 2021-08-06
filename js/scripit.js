$('.icon-categorys').owlCarousel({
    loop: false,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3,
        },
        1000: {
            items: 6
        }
    }
});


$('.slider-library').owlCarousel({
    loop: false,
    margin: 25,
    dots: true,
    nav: true,
    navText: ['<span class="icon-previous"></span>', '<span class="icon-next-1"></span>'],
    responsive: {
        1024: {items: 3,
            dots:false
        },
        768:
            {items: 2,
                nav:false,
                dots:true,


            },
        0: {items: 1,
            navText:false},
    }
});



$('.ct').hide()
$('#all').show();
$('.all').click(function () {
    $('.ct').hide();
    $('#all').show();
})

$('.gym').click(function () {
    $('.ct').hide();
    $('#gym').show();
})
$('.spa').click(function () {
    $('.ct').hide();
    $('#spa').show();
})
$('.beauty').click(function () {
    $('.ct').hide();
    $('#beauty').show();
})
$('.massage').click(function () {
    $('.ct').hide();
    $('#massage').show();
})
$('.hair').click(function () {
    $('.ct').hide();
    $('#hair').show();
})




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 4,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: false,
    watchSlidesProgress: false,
    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 4,
    thumbs: {
        swiper: swiper,
    },

});
$(document).ready(function(){
    $('#play').click(function(){
        $('#frame').html('<iframe width="640" height="360" src="https://www.youtube.com/embed/VNtYWDpdQ1w?list=PLr6-GrHUlVf96NLj3PQq-tmEB6woZjwEl" frameborder="0" allowfullscreen id="video"></iframe>');
        $('#video').css('display', 'block');
        $('#video').css('position', 'fixed');
        $('#close').css('position', 'fixed');
        $('#close').css('display', 'block');
        $('#play').css('opacity', '0.5');
    });
});

$(document).ready(function(){
    $('#close').click(function(){
        $('#frame').html('');
        $('#play').data('clicked', 'no');
        $('#video').css('display', 'none');
        $('#close').css('display', 'none');
        $('#play').css('opacity', '1');
    });
});