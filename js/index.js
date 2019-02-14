$(function() {
    //判断是否登录
    // console.log($.cookie('cid'));
    if($.cookie('cid')){
        var cid = $.cookie('cid');
        // console.log(cid);
        $.ajax({
            type: 'GET',
            url: 'api/checkname.php',
            data: 'cid='+cid,
            success: function(str){
                var arr = JSON.parse(str);
                // console.log(arr);
                var html = `<a href="">[Hi,${arr[0].name}]</a>
                            <a class="loginout" href="javascript:;">退出登录</a>`;
                $('#userinf').html(html);
            }
        });
        //退出清除cookie
        $('#userinf').on('click','.loginout',function(){
            $.cookie('cid',null,{expires: -1, path: '/'});
            window.location.href = 'html/login.html';
        });
        //登录渲染购物车商品数量
        $.ajax({
            type: 'GET',
            url: 'api/checkname.php',
            data: 'cartnum='+cid,
            success: function(str){
                var arr = JSON.parse(str);
                // console.log(arr);
                $('#carNum').html('&nbsp;'+arr+'&nbsp;');
                $('#carNum').css('font-style','normal');
                $('#carNum').css('font-weight','bold');
            }
        });
    }

    //模糊查询
    $('#searchButton').on('click',function(){
        var keyword = $.trim($('#searchBox').val());
        // console.log(111);
        if(keyword){
            window.location.href = 'html/goodslist.html?keyword='+keyword;
        }else{
            var d1 = new Dialog();
            d1.init({
                id: '1',
                Style: 1,
                w: 300,
                h: 150,
                color: 'red',
                pos: 'top',
                message: '请输入内容'
            });
        }
    });

    //轮播图
    var num = 0;
    //初始化图片
    for(var i=0; i<$('#bannerList li').size(); i++){
        $('#bannerList li').eq(i).css('opacity',0);
    }
    $('#bannerList li').eq(0).css('opacity',1);
    $('#bannerList li').eq(0).css('z-index',1);

    //下一张动画
    function next() {
        $('#bannerList li').eq(num).animate({
            opacity : 0
        },600);
        $('#bannerList li').eq(num).css('z-index',0);
        num = ++num >= $('#bannerList li').size() ? 0 : num;
        $('#bannerList li').eq(num).animate({
            opacity : 1
        },600);
        $('#bannerList li').eq(num).css('z-index',1);
        lightNow();
        bgColor();
    }
    var timer = setInterval(next,3000);
    
    //光标
    function lightNow() {
        for(var i=0; i<$('#bannerLight span').size(); i++){
            $('#bannerLight span').eq(i).removeClass('active');
        }
        $('#bannerLight span').eq(num).addClass('active');
    }

    //鼠标移入移出清除定时器
    $('#bannerList').on('mouseover',function(){
        clearInterval(timer);
    });
    $('#bannerList').on('mouseout',function(){
        clearInterval(timer);
        timer = setInterval(next,3000);
    });

    //鼠标选中光标跳到对应图片
        $('#bannerLight span').on('mouseenter',function() {
            $('#bannerList li').eq(num).animate({
                opacity : 0
            },600);
            $('#bannerList li').eq(num).css('z-index',0);
            num = $(this).index();
            $('#bannerList li').eq(num).animate({
                opacity : 1
            },600);
            $('#bannerList li').eq(num).css('z-index',1);
            lightNow();
            bgColor();
        });
    

    //背景颜色跟随
    var arrColor = ['rgb(101, 199, 212)','rgb(255, 229, 230)','rgb(223, 223, 223)','rgb(252, 236, 218)'];
    function bgColor() {
        $('#banner').css('background',arrColor[num]);
    }

    //热卖品牌图片渲染
    $.ajax({
        type: 'GET',
        url: 'api/checkname.php',
        data: 'homepic=1',
        success: function(str){
            var arr = JSON.parse(str);
            // console.log(arr);
            var res = arr.map(function(item){
                return `<li>
                            <a href="html/goodslist.html">
                                <img src="${item.url}" alt="">
                            </a>
                        </li>`;
            }).join('');
            $('#inBandSalesList').html(res);
        }
    });

    
    //小轮播图
    var arr = ['f1','f2','f3','f4','f5','f6','f7','f8','f9'];
    for(var i=0;i<arr.length;i++){
        loops(arr[i]);
    }

    function loops(idName) {
        var num = 0;
        var timer = setInterval(next2,5000);
        function next2() {
            num = ++num >= $('#'+idName).find('ul li').size() ? 0 : num;
            $('#'+idName).find('ul').animate({
                left : -num*299
            })
            lightFollow();
        }
        function lightFollow() {
            for(var i=0; i<$('#'+idName).find('p span').size(); i++){
                $('#'+idName).find('p span').eq(i).removeClass('active');
            }
            $('#'+idName).find('p span').eq(num).addClass('active');
        }
        //鼠标移入移出清除定时器
        $('#'+idName).on('mouseover',function(){
            clearInterval(timer);
        });
        $('#'+idName).on('mouseout',function(){
            clearInterval(timer);
            timer = setInterval(next2,5000);
        });
        //点击跳图
        $('#'+idName).find('p span').on('click',function(){
            num = $(this).index();
            $('#'+idName).find('ul').animate({
                left : -num*299
            });
            lightFollow();
        });
    }


    //选项卡
    itemCard('itemcardBtn2','con_f2');
    itemCard('itemcardBtn3','con_f3');
    function itemCard(firstName,secName){
        $('#'+firstName+' span').on('mouseenter',function(){
            $('#'+firstName+' span').attr('class','');
            $(this).addClass('active');
            $('#'+secName+' .f_con').css('display','none');
            $('#'+secName+' .f_con').eq($(this).index()).css('display','block');
        });
    }
    loops('f2_2');
    loops('f3_2');

    //楼层跳跃
    var leftFixed = getid('leftFixed');
    var floorButtons = leftFixed.getElementsByTagName('li');
    var recommend = getid('recommend');
    var floors = recommend.getElementsByClassName('con');
    $(window).scroll(function() {
        var scrollTop = window.scrollY;
        var divTop = floors[0].offsetTop - 200;
        // console.log(scrollTop);
        if(scrollTop > divTop){
            leftFixed.style.display = 'block';
        }else{
            leftFixed.style.display = 'none';
        }
    });
    floorJump(floorButtons,floors,'activeColor');

    //回到顶部
    var toTop = getid('toTop');
    goTop(toTop);
    //关注摩西二维码出现
    var attenMoxi2 = getid('attenMoxi2');
    var attention2 = getid('attention2');
    pullMenu(attenMoxi2,attention2);

    //右下角广告
    var d1 = new Dialog();
    d1.init({
        id: '1',
        Style: 2,
        w: 242,
        h: 250,
        color:'red',
        pos: 'rightbottom',
        message: '<img src="img/timg.gif" alt="">',
        // mark: true
    });
});