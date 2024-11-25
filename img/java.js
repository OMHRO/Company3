$(document).ready(function()
{

          // going up

        $(".up").css({
          display:"none"
        });

        $(window).scroll(function(){

              let scrollWindow = $(this).scrollTop();

              if(scrollWindow >= 640)
              {

                    $(".up").css({
                      display:"block"

                    });

              } else {
                $(".up").css({
                  display:"none"
                });

            };

        });

        $(".up").click(function () {

              $("html, body").animate({

                  scrollTop:  $("html").offset().top

              }, 2500);

        });

    let winH = $(window).height(),
        uppH = $(".upper-bar").innerHeight(),
        navH = $("nav").innerHeight();

        $(".slider , .carousel-item").height(winH - (uppH + navH));

        //featured work shuffle
        $(".featured ul li span").on('click', function(){

                $(this).addClass("active").parent().siblings().children().removeClass("active");

                if ($(this).data("class") === "all" )
                {
                    $(".featured .images .box-img").css("opacity","1")
                } else {
                    $(".featured .images .box-img").css("opacity","0.5")
                    $($(this).data("class")).parent().css("opacity","1")
                }
        });

        //classs to links
        $(".navbar-nav .nav-item a").on('click', function(){

            $(this).parent().addClass("active").siblings().removeClass()

              // console.log($(this).parent().data("call"))
        })

          $(".navbar-nav .nav-item a").on('click', function(){

                $("html, body").animate({

                      scrollTop: $("#" + $(this).parent().data("call")).offset().top

                },2500)

          });
});

// console.log("yes")

// loading

$(window).ready(function(){

    $("#round1 .box-ani").fadeOut(6000, function(){

          $(this).parent().fadeOut(2000, function(){

             $(this).parent().css("overflow","auto")
          });

    });

});
