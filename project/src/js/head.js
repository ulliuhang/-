$("html").ready(function () {
    $(".floor").find("li").click(function () {
        let top = $(" .big-div").eq($(this).index()).offset().top;
        $(this).addClass("box-cur").siblings().removeClass("box-cur");
        document.documentElement.scrollTo({
            top: top,
            behavior: "smooth"
        })
    })
})