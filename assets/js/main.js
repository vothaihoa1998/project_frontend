$('.dropdown').on('click', function(e) {
    var target = $(e.target);
    var dropdown = target.closest('.dropdown');
    return !dropdown.hasClass('open') || !target.hasClass('dropdown-menu__search__input');
});

(function($) { // Begin jQuery
    $(function() { // DOM ready
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery

// slick

// $(document).ready(function(){
//     $('.slick-banner').slick({
//         mobileFirst: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: false,
//         pauseOnDotsHover:true,
//         autoplaySpeed:1200,
//         dots: true,
//         arrows: false,
//         infinite: true
//
//         // dots: true,
//         // infinite: true,
//         // speed: 300,
//         // slidesToShow: 1,
//         // adaptiveHeight: true
//     });
// });

$(document).ready(function(){
    $('.readers-img').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnDotsHover:true,
        autoplaySpeed:1000,
        dots: true,
        arrows: false,
        infinite: true
    });

    // add element right about
    // var eventsImg = document.getElementById('.events-img');
    // var coursesEventsContent = document.getElementById('.courses-events-content');
    // eventsImg.appendChild(coursesEventsContent);


    // add btn pause play
    var slickListt = document.getElementsByClassName('slick-dots');
    var btnReadersPausePlay = document.createElement('button');
    var iconPause = document.createElement('i');
    iconPause.classList.add('fas');
    iconPause.classList.add('fa-pause');
    btnReadersPausePlay.classList.add("btn-pause-play");
    btnReadersPausePlay.id = 'btn-pause-play';
    btnReadersPausePlay.appendChild(iconPause);
    slickListt[0].appendChild(btnReadersPausePlay);

    // event click btn pause/play
    btnReadersPausePlay.onclick  = ()=>{
        var child = btnReadersPausePlay.childNodes;
        var nameClassChild = child[0].classList[1];
        if(nameClassChild==="fa-pause")
        {
            btnReadersPausePlay.innerHTML = '<i class="fas fa-play"></i>';
            $('.readers-img').slick('slickPause');
        }
        else{
            btnReadersPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
            $('.readers-img').slick('slickPlay');
        }
    }
});


$(document).ready(function(){
    $('.events-img').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnDotsHover:true,
        autoplaySpeed:1000,
        dots: true,
        arrows: false,
        infinite: true
    });

    // add element right about
    // var eventsImg = document.getElementById('.events-img');
    // var coursesEventsContent = document.getElementById('.courses-events-content');
    // eventsImg.appendChild(coursesEventsContent);


    // add btn pause play
    var slickList = document.getElementsByClassName('slick-dots');
    var btnAboutPausePlay = document.createElement('button');
    var iconPause = document.createElement('i');
    iconPause.classList.add('fas');
    iconPause.classList.add('fa-pause');
    btnAboutPausePlay.classList.add("btn-pause-play");
    btnAboutPausePlay.id = 'btn-pause-play';
    btnAboutPausePlay.appendChild(iconPause);
    slickList[0].appendChild(btnAboutPausePlay);

    // event click btn pause/play
    btnAboutPausePlay.onclick  = ()=>{
        var child = btnAboutPausePlay.childNodes;
        var nameClassChild = child[0].classList[1];
        if(nameClassChild==="fa-pause")
        {
            btnAboutPausePlay.innerHTML = '<i class="fas fa-play"></i>';
            $('.events-img').slick('slickPause');
        }
        else{
            btnAboutPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
            $('.events-img').slick('slickPlay');
        }
    }
});

$(document).ready(function(){
    $('.slick-banner').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnDotsHover:true,
        autoplaySpeed:1000,
        dots: true,
        arrows: false,
        infinite: true
    });

    // add btn pause play
    var bannerslickList = document.getElementsByClassName('slick-dots');
    var btnBannerPausePlay = document.createElement('button');
    var iconPause = document.createElement('i');
    iconPause.classList.add('fas');
    iconPause.classList.add('fa-pause');
    btnBannerPausePlay.classList.add("btn-pause-play");
    btnBannerPausePlay.id = 'btn-pause-play';
    btnBannerPausePlay.appendChild(iconPause);
    bannerslickList[0].appendChild(btnBannerPausePlay);

    // event click btn pause/play
    btnBannerPausePlay.onclick  = ()=>{
        var child = btnBannerPausePlay.childNodes;
        var nameClassChild = child[0].classList[1];
        if(nameClassChild==="fa-pause")
        {
            btnBannerPausePlay.innerHTML = '<i class="fas fa-play"></i>';
            $('.slick-banner').slick('slickPause');
        }
        else{
            btnBannerPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
            $('.slick-banner').slick('slickPlay');
        }
    }
});








// $(document).ready(function(){
//     // var slick =  $('.events-img').slick({
//     //     infinite: true,
//     //     speed: 900,
//     //     slidesToScroll: 1,
//     //     slidesToShow: 1,
//     //     dots :true,
//     //     autoplay:true,
//     //     autoplaySpeed: 1500,
//     //     prevArrow: false,
//     //     nextArrow: false
//     // })
//
//     // add element right about
//     var aboutSliderImage = document.getElementById('events-img');
//     var botWrapContent = document.getElementById('courses-events-content');
//     aboutSliderImage.appendChild(botWrapContent);
//
//     // add btn pause play
//     var slickList = document.getElementsByClassName('slick-dots');
//     var btnAboutPausePlay = document.createElement('button');
//     var iconPause = document.createElement('i');
//     iconPause.classList.add('fas');
//     iconPause.classList.add('fa-pause');
//     btnAboutPausePlay.classList.add("btn-pause-play");
//     btnAboutPausePlay.id = 'btn-pause-play';
//     btnAboutPausePlay.appendChild(iconPause);
//     slickList[0].appendChild(btnAboutPausePlay);
//
//     // event click btn pause/play
//     btnAboutPausePlay.onclick  = ()=>{
//         var child = btnAboutPausePlay.childNodes;
//         var nameClassChild = child[0].classList[1];
//         if(nameClassChild==="fa-pause")
//         {
//             btnAboutPausePlay.innerHTML = '<i class="fas fa-play"></i>';
//             $('.events-img').slick('slickPause');
//         }
//         else{
//             btnAboutPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
//             $('.events-img').slick('slickPlay');
//         }
//     }
//
//
//     // slider book
//     var slick =  $('.book-list').slick({
//         infinite: true,
//         speed: 900,
//         slidesToScroll: 1,
//         slidesToShow: 4,
//         dots :true,
//         autoplay:true,
//         autoplaySpeed: 1500,
//         nextArrow:'<span class="next"><i class="fas fa-angle-right"></i></span>',
//         prevArrow:'<span class="prev"><i class="fas fa-angle-left"></i></span>',
//         slickPause:'<button class="my-btn" id="my-btn"><i class="fas fa-pause"></i></button>'
//     })
//     var btnBookPausePlay = document.createElement('button');
//     var iconPause = document.createElement('i');
//     iconPause.classList.add('fas');
//     iconPause.classList.add('fa-pause');
//     btnBookPausePlay.classList.add("btn-pause-play");
//     btnBookPausePlay.id = 'btn-pause-play';
//     btnBookPausePlay.appendChild(iconPause);
//     slickList[1].appendChild(btnBookPausePlay);
//
//     btnBookPausePlay.onclick  = ()=>{
//         var child = btnBookPausePlay.childNodes;
//         var nameClassChild = child[0].classList[1];
//         if(nameClassChild==="fa-pause")
//         {
//             btnBookPausePlay.innerHTML = '<i class="fas fa-play"></i>';
//             $('.book-list').slick('slickPause');
//         }
//         else{
//             btnBookPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
//             $('.book-list').slick('slickPlay');
//         }
//     }
//
//     //category
//
//     $('.category-item').on('click',function(){
//         // $(this).removeClass('avtive');
//         $('.category-item').not(this).removeClass('active');
//
//         var categoriTitle = $('#course-title');
//         console.log($(this).childNodes)
//         categoriTitle.text($(this).text())
//         $(this).addClass('active');
//         const value = $(this).attr('data-filter');
//         if(value=='course'){
//             $('.course-item').show('1000');
//         }
//         else{
//             $('.course-item').not('.'+value).hide('1000');
//             $('.course-item').filter('.'+value).show('1000');
//
//         }
//     })
//
//     //feel
//     $('.feel-slider').slick({
//         infinite: true,
//         speed: 900,
//         slidesToScroll: 1,
//         slidesToShow: 1,
//         dots :true,
//         autoplay:true,
//         autoplaySpeed: 1500,
//         nextArrow:'<span class="next"><i class="fas fa-angle-right"></i></span>',
//         prevArrow:'<span class="prev"><i class="fas fa-angle-left"></i></span>',
//         slickPause:'<button class="my-btn" id="my-btn"><i class="fas fa-pause"></i></button>'
//     })
//
//     var feelComtainer = document.getElementById('feel-container')
//     var feelWapper = document.getElementById('feel-wrapper')
//     var feelBtnPrev = document.querySelector('.feel-slider .prev')
//     var feelBtnNext = document.querySelector('.feel-slider .next')
//     var feelSlickDots = document.querySelector('.feel-slider .slick-dots')
//     feelComtainer.appendChild(feelBtnPrev)
//     feelComtainer.appendChild(feelBtnNext)
//     feelWapper.appendChild(feelSlickDots)
//
//     var btnFeelPausePlay = document.createElement('button');
//     var iconPause = document.createElement('i');
//     iconPause.classList.add('fas');
//     iconPause.classList.add('fa-pause');
//     btnFeelPausePlay.classList.add("btn-pause-play");
//     btnFeelPausePlay.id = 'btn-pause-play';
//     btnFeelPausePlay.appendChild(iconPause);
//     slickList[2].appendChild(btnFeelPausePlay);
//
//     btnFeelPausePlay.onclick  = ()=>{
//         var child = btnFeelPausePlay.childNodes;
//         var nameClassChild = child[0].classList[1];
//         if(nameClassChild==="fa-pause")
//         {
//             btnFeelPausePlay.innerHTML = '<i class="fas fa-play"></i>';
//             $('.feel-slider').slick('slickPause');
//         }
//         else{
//             btnFeelPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
//             $('.feel-slider').slick('slickPlay');
//         }
//     }
// })



