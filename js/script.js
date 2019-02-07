$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();
    console.log(positionY);
    if (positionY > 1500){
        $("#scrolltop").css("opacity", 1);
    }
    if (positionY < 1500){
        $("#scrolltop").css("opacity", 0);
    }
})