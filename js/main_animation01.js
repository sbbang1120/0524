$(function () {
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
    });
    //$('.mainSlide').on('afterChange', function () {
    //    console.log("변해라얍!")
    //})
    $('.main_slide .slick-current').addClass('on');
    $('.main_slide').on('afterChange', function () {
        let _this = $('.main_slide .slick-current');
        _this.addClass('xxxxxx').siblings().removeClass('xxxxxx');
    })
})