(function ($) {
    "use strict";
    jQuery(document).ready(function($){       

        $(".menu-trigger").on("click", function(){
            $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
            return false;
        });
        $(".menu-close, .off-canvar-overlay").on("click", function(){
            $(".off-canvar-menu, .secess-page").removeClass("active");
            return false;
        }); 
        // mobile off canver menu 
        $(".menu-trigger").on("click", function(){
          $(".off-canvar-mobile-menu, .off-canvar-overlay").addClass("active");
          return false;
      });
      $(".menu-close").on("click", function(){
          $(".off-canvar-mobile-menu").removeClass("active");
          return false;
      }); 
        $('.responsive').slick({
            dots:false,
            infinite: true,
            autoplay: true,
            arrows: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              
            ]
          });
         
        

      
    }); 
    

}(jQuery));