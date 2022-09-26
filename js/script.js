$(document).ready(function(){
    // 상담시간 안내 팝업
    $('.clock_notcie').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('up') === true) {
            $('.time_list > .time').stop().slideUp();
        } else {
            $('.time_list > .time').stop().slideDown();
        }
    })
    $('.dropdown').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('up');
    });

    $('.talk_member').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('up') === true) {
            $('.member_list').stop().slideDown();
        } else {
            $('.member_list').stop().slideUp();
        }
    })

    // 스크롤 버튼
    $('.talk_body').scroll(function(e) {
        e.preventDefault();
        if ($(this).scrollTop() < 10) {
            $('.down_btn').fadeIn();
        } else {
            $('.down_btn').fadeOut();
        }
    });
    $(".down_btn, .new_message").click(function(e){
        e.preventDefault();
        $('.talk_body').animate({scrollTop : ( $(document).height())}, 600);
    });
    $('.new_message').click(function(e){
        e.preventDefault();
        $(this).fadeOut(100);
    });

    // 외부영역 클릭시 팝업 닫기
    $(document).mouseup(function (e){
        e.preventDefault();
        if($('.popup_back').has(e.target).length === 0){
            $('.popup_back').fadeOut(500);
            $('.side_bar').removeClass('open');
        }
    });

    $('.close_btn').on('click', function(e){
        e.preventDefault();
        $('.popup_back').fadeOut(500);
        $('.side_bar').removeClass('open');
    });
    
    $('.search_popup_btn').on('click', function(e){
        e.preventDefault();
        $('.search_popup').fadeIn(500);
        $('.side_bar').addClass('open');
    });
    $('.info_popup_btn').on('click', function(e){
        e.preventDefault();
        $('.info_popup').fadeIn(500);
        $('.side_bar').addClass('open');
    });
});