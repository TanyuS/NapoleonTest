
(function($){
    $(window).load(function(){
        $(".sidebar__menu").mCustomScrollbar({scrollButtons:{enable:true}});
   		$(":date").dateinput({format: "dd.mm.yyyy"});
    });
})(jQuery);