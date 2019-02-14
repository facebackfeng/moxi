$(function() {
    //关注摩西二维码出现
    var attenMoxi = getid('attenMoxi');
    var attention = getid('attention');
    pullMenu(attenMoxi,attention);

    //菜单导航
    for(var i=0; i<$('#menu>li').size(); i++){
        $('#menu>li').eq(i).on('mouseover',function () {
           $(this).addClass('act');
           $(this).find('.erji').css('display','block');
        });
        $('#menu>li').eq(i).on('mouseout',function () {
            $(this).removeClass('act');
            $(this).find('.erji').css('display','none');
        });
    }


});