window.onload=function() {
    // 产品下拉
    $(".navProduct").mouseenter(function(){
        $(this).css({"overflow":"visible"})
        $(".navProduct i").removeClass("glyphicon-menu-right").addClass("glyphicon-menu-down")
        
    }).mouseleave(function(){
        $(this).css({"overflow":"hidden"})
        $(".navProduct i").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-right")
    })
}