$(function(){

    $("#menu").hide();
        $(window).scroll(function(){            
            var topo = $(window).scrollTop();
            if(topo < 422){
                $("#menu").fadeOut('700');
            }
            else if(topo > 2000){
                $("#menu").fadeOut('700');
            }
            else {
                $("#menu").fadeIn('600');
             }
        });
});
    