$(() => {
    $(".erweima i").hover(function() {
       
        let suoying = $(this).index();
        
        $(".big img").eq(suoying-1).show().siblings().hide();
    },function(){
        $(".big img").hide();
    })

})