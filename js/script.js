$(document).ready(function(){
    // 상담시간 안내 팝업
    $('.clock-notcie').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('up') === true) {
            $('.time-list > .time').stop().slideUp();
        } else {
            $('.time-list > .time').stop().slideDown();
        }
    })
    $('.dropdown').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('up');
    });

    $('.talk-member').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('up') === true) {
            $('.member-list').stop().slideDown();
        } else {
            $('.member-list').stop().slideUp();
        }
    })

    // 스크롤 버튼
    $('.talk-body').scroll(function(e) {
        e.preventDefault();
        if ($(this).scrollTop() < 10) {
            $('.down-btn').fadeIn();
        } else {
            $('.down-btn').fadeOut();
        }
    });
    $(".down-btn, .new-message").click(function(e){
        e.preventDefault();
        $('.talk-body').animate({scrollTop : ( $(document).height())}, 600);
    });
    $('.new-message').click(function(e){
        e.preventDefault();
        $(this).fadeOut(100);
    });

    // 외부영역 클릭시 팝업 닫기
    $(document).mouseup(function (e){
        e.preventDefault();
        if($('.popup-back').has(e.target).length === 0){
            $('.popup-back').fadeOut(500);
            $('.side-bar').removeClass('open');
        }
    });

    $('.close-btn').on('click', function(e){
        e.preventDefault();
        $('.popup-back').fadeOut(500);
        $('.side-bar').removeClass('open');
    });
    
    $('.search-popup-btn').on('click', function(e){
        e.preventDefault();
        $('.search-popup').fadeIn(500);
        $('.side-bar').addClass('open');
    });
    $('.info-popup-btn').on('click', function(e){
        e.preventDefault();
        $('.info-popup').fadeIn(500);
        $('.side-bar').addClass('open');
    });
});