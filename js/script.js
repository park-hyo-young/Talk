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
    // 대화상대 스크롤 업/다운
    $('.talk_member').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('up') === true) {
            $('.list_box').stop().slideDown();
        } else {
            $('.list_box').stop().slideUp();
        }
    })

    // 스크롤 버튼
    $('.talk_body').scroll(function(e) {
        e.preventDefault();
        if ($(this).scrollTop() < 100) {
            $('.down_btn').fadeIn();
        } else {
            $('.down_btn').fadeOut();
        }
    });
    // 스크롤 버튼, 새로운 메세지 알림 팝업 클릭 시 아래로 스크롤
    $(".down_btn, .new_message").click(function(e){
        e.preventDefault();
        $('.talk_body').animate({scrollTop : ( $(document).height())}, 600);
    });
    // 새로운 메세지 알림 팝업
    $('.new_message').click(function(e){
        e.preventDefault();
        $(this).fadeOut(100);
    });

    // 외부 영역/닫기 버튼 클릭 시 팝업 닫기
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

    // 마우스 클릭시 toggle
    $('.off i').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
    });
});