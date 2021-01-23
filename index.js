if($(window).width() < 991){
    $("#home,#about-us,#skill,#projects").attr("data-toggle","collapse")
}

 $(window).on('resize', function(){
    var win = $(this);
    if (win.width() <= 991) { 
        $("#home,#about-us,#skill,#projects").attr("data-toggle","collapse")
     }
     
     else{
        $("#home,#about-us,#skill,#projects").removeAttr("data-toggle")
     }
});