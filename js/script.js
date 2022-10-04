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
        if ($(this).scrollTop() < 10) {
            $('.down_btn').fadeIn();
        } else {
            $('.down_btn').fadeOut();
        }
    });
    // 스크롤 버튼, 새로운 메세지 알림 팝업 클릭 시 아래로 스크롤
    $('.down_btn, .new_message').click(function(e){
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
            $('.popup_back').fadeOut(200);
            $('.side_bar').removeClass('open');
        }
    });
    $('.close_btn').on('click', function(e){
        e.preventDefault();
        $('.popup_back').fadeOut(200);
        $('.side_bar').removeClass('open');
    });
    $('.search_popup_btn').on('click', function(e){
        e.preventDefault();
        $('.search_popup').fadeIn(200);
        $('.side_bar').addClass('open');
    });
    $('.info_popup_btn').on('click', function(e){
        e.preventDefault();
        $('.info_popup').fadeIn(200);
        $('.side_bar').addClass('open');
    });

    // 마우스 클릭시 toggle
    $('.off i').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
    });

    // 탭메뉴
    $('.snb_btns .list_btn').click(function(e){
        e.preventDefault();
		var tab_id = $(this).attr('data-tab');
		$('.snb_btns .list_btn, .talk_list_area').removeClass('active');
		$(this).addClass('active');
		$('#' + tab_id).addClass('active');
	})

    // 검색 input에 값 있으면 배경/테두리 색 변경, clear 버튼 생성
    $('.search_box input').each(function(){
        if (!$(this).val() == '') {
            $(this).siblings('.clear').show();
            // $(this).siblings('.search_btn').addClass('active');
            $(this).parent().addClass('active');
        } 
        $(this).on('input', function () {
            if ($(this).val() == '') {
                $(this).siblings('.clear').hide();
                $(this).siblings('.search_btn').addClass('active');
                $(this).parent().removeClass('active');
            } else {
                $(this).siblings('.clear').show();
                $(this).siblings('.search_btn').addClass('active');
                $(this).parent().addClass('active');
            }
        })
    });
    // clear 버튼 클릭하면 input 값 지우기
    $('.search_box .clear').on('click', function() {
        $(this).hide();
        $(this).siblings('input').val('');
        $(this).siblings('.search_btn').removeClass('active');
        $(this).parent().removeClass('active');
    });

    // textarer에 값 있으면 버튼 active
    $('.text_area textarea').each(function(){
        if (!$(this).val() == '') {
            $('.btn_group .submit').addClass('active');
        } 
        $(this).on('input', function () {
            if ($(this).val() == '') {
                $('.btn_group .submit').removeClass('active');
            } else {
                $('.btn_group .submit').addClass('active');
            }
        })
    });
});