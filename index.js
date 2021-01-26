function closeLoading(){
   $("#loading").css("display" , "none")
}

if($(window).width() < 991){
   $("#nav-home,#nav-profile,#nav-skill,#nav-about-us,#nav-projects").attr("data-toggle","collapse")
}

$(window).on('resize', function(){
   var win = $(this);
   if (win.width() <= 991) { 
       $("#nav-home,#nav-profile,#nav-skill,#nav-about-us,#nav-projects").attr("data-toggle","collapse")
    }
    
    else{
       $("#nav-home,#nav-profile,#nav-skill,#nav-about-us,#nav-projects").removeAttr("data-toggle")
    }
});