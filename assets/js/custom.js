(function ($) {
    "use strict";
    jQuery(document).ready(function($){       

        $(".menu-trigger").on("click", function(){
            $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
            return false;
        });
        $(".menu-close, .off-canvar-overlay").on("click", function(){
            $(".off-canvar-menu, .off-canvar-overlay").removeClass("active");
            return false;
        }); 
         
        

      
    }); 

    jQuery (window).lode(function(){

    });

}(jQuery));