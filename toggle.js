// <!-- /* AWS ALMAHASNEH 20200388 SECTION 1*/ -->
// <!-- /* TARIQ HINDAWI 20200202 SECTION 3 */ -->
// <!----------------------------------------------------------------------------------------------------------------------------------------->   
$("document").ready(function(){
    $(".toggle").click(function(){
        $("#myUl").toggle();
    });
});


       $(window).resize(function() {
        if(innerWidth>991){
            if($("#myUl").attr("style", "display:none")){
                $("#myUl").toggle();
            }
}
});
