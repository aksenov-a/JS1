    $(document).ready(function(){
        $(window).scroll(function () {
		   if ($(this).scrollTop() > 899) {
                $('#BtnTop').fadeIn();
                $('#BtnDown').fadeIn();
            } else {
                $('#BtnTop').fadeOut();
                $('#BtnDown').fadeOut();
            }
        });
		window.onscroll = function() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
       $('#BtnDown').fadeOut();
    }
};
              $('#BtnTop').click(function () {
            $('html').animate({
                scrollTop: 0
            }, 500);
        });
  $('#BtnDown').click(function(){
  $('html').animate({scrollTop: $(document).height() - $(window).height()}, 600);
  return false;
  });
    });
