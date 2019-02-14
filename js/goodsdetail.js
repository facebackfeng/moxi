$(function () {
    var categorys = getid('categorys');
    var menu = getid('menu');
    pullMenu(categorys, menu);

    // 判断是否登录
    if($.cookie('cid')){
        var cid = $.cookie('cid');
        // console.log(cid);
        $.ajax({
            type: 'GET',
            url: '../api/checkname.php',
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
            window.location.href = '../html/login.html';
        });
        //登录渲染购物车商品数量
        $.ajax({
            type: 'GET',
            url: '../api/checkname.php',
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

    //详情页数据渲染
    var webdata = decodeURI(location.search);//网址解码,取？号后面部分
    // console.log(data);
    var str = webdata.slice(1);//去问号
    var good_id = str.split('=')[1];
    // console.log(good_id);
    $.ajax({
        type: "GET",
        url: "../api/idSelect.php",
        data : "good_id=" + good_id,
        success: function(str){
            var arr = JSON.parse(str);
            console.log(arr);
            $(document).attr('title',arr[0].name);
            html1 = `<a href="goodslist.html"><strong>${arr[0].belong1}</strong><span>${arr[0].belong2}</span></a>`;
            $('#detailBox h2').html(html1);
            $('#detailBox .small-img1').find('img').attr("src",arr[0].url1);
            $('#detailBox .small-img2').find('img').attr("src",arr[0].url2);
            $('.images-cover').find('img').attr("src",arr[0].url1);
            $('.magnifier-view').find('img').attr("src",arr[0].url1);
            $('#detailDl dt').html(arr[0].name);
            $('#em-pricecny').html(arr[0].nowprice);
            html2 = `¥${arr[0].oldprice}`;
            $('#detailDl .hyb-price-ago').html(html2);
            html3 = `品牌：${arr[0].brand}`;
            $('.hyb-p-li1').html(html3);
            html4 = `<div class="hyb-p-dt">
                        编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：
                    </div>
                    ${arr[0].code}`;
            $('.hyb-p-code').html(html4);
            $('.has').html(arr[0].has);
            html5 = `<div class="hyb-p-dt">
                        销&nbsp;量&nbsp;：
                    </div>
                    ${arr[0].salednum}`;
            $('.hyb-p-saled').html(html5);
        }
    });

    //配送信息点击功能
    var hyb_p_setlist = getid('hyb-p-setlist');
    var hyb_p_setlists = hyb_p_setlist.getElementsByTagName('li');
    var setlist_mess = getid('setlist-mess');
    var setlist_messes = setlist_mess.getElementsByClassName('mess');
    xuanxiangka(hyb_p_setlists, setlist_messes);

    //颜色点击选中
    $('#hyb-color li').on('click', function () {
        $('#hyb-color li').removeClass('active');
        $(this).addClass('active');
    });

    //数量加减功能
    $('#detailDl').on('click', '.addnum', function () {
        var val = $(this).prev().val();
        val++;
        $(this).next().text('');
        if (val > $('#detailDl .has').html()) {
            $(this).next().text('库存不足！');
            val = $('#detailDl .has').html();
        }
        $(this).prev().val(val);
    });
    $('#detailDl').on('click', '.cutnum', function () {
        var val = $(this).next().val();
        val--;
        $(this).next().next().next().text('');
        if (val < 1) {
            $(this).next().next().next().text('不能少于1件');
            val = 1;
        }
        $(this).next().val(val);
    });

    //加入购物车
    $('.addToCart').on('click',function(){
        if($.cookie('cid')){
            var cid = $.cookie('cid');
            var good_num = $('#inputNum').val();
            var good_color = $('#hyb-color .active a').text();
            console.log(good_num);
            if(good_color){
                $.ajax({
                    type: "POST",
                    url: "../api/addToCart.php",
                    data : "good_id=" + good_id + "&color="+good_color+"&num="+good_num+"&cid="+cid,
                    success: function(code) {
                        // console.log(code);
                        if(code == 0){
                            var d1 = new Dialog();
                            d1.init({
                                id: '1',
                                Style: 1,
                                w: 300,
                                h: 150,
                                color: 'green',
                                pos: 'center',
                                message: '加入购物车成功',
                                mark: true
                            });
                        }
                    }
                });
            }else{
                var d1 = new Dialog();
                d1.init({
                    id: '1',
                    Style: 1,
                    w: 300,
                    h: 150,
                    color: 'red',
                    pos: 'center',
                    message: '请选择颜色'
                });
            }
        }else{
            var d1 = new Dialog();
            d1.init({
                id: '1',
                Style: 1,
                w: 300,
                h: 150,
                color: 'red',
                pos: 'center',
                message: '请先登录'
            });
        }
    });

    //立即购买
    $('.buy').on('click',function(){
        if($.cookie('cid')){
            var cid = $.cookie('cid');
            var good_num = $('#inputNum').val();
            var good_color = $('#hyb-color .active a').text();
            // console.log(good_num);
            if(good_color){
                $.ajax({
                    type: "POST",
                    url: "../api/addToCart.php",
                    data : "good_id=" + good_id + "&color="+good_color+"&num="+good_num+"&cid="+cid,
                    success: function(code) {
                        // console.log(code);
                        if(code == 0){
                            setTimeout(() => {
                                window.location.href = '../html/cart.html';
                            }, 500);
                        }
                    }
                });
            }else{
                var d1 = new Dialog();
                d1.init({
                    id: '1',
                    Style: 1,
                    w: 300,
                    h: 150,
                    color: 'red',
                    pos: 'center',
                    message: '请选择颜色'
                });
            }
        }else{
            var d1 = new Dialog();
            d1.init({
                id: '1',
                Style: 1,
                w: 300,
                h: 150,
                color: 'red',
                pos: 'center',
                message: '请先登录'
            });
        }
    });

    //评论区选项卡
    var hyb_title = getid('hyb-title');
    var hyb_titles = hyb_title.getElementsByTagName('li');
    var hyb_cons = getid('hyb-cons');
    var hyb_contents = hyb_cons.getElementsByClassName('con');
    xuanxiangka(hyb_titles, hyb_contents);


    //评论数据渲染，懒加载
    var totalNum = 10;
    $.ajax({
        type: "POST",
        url: "../api/comment.php",
        data: "page=1&qty=8",
        success: function (str) {
            var arr = JSON.parse(str);
            // console.log(arr.list);
            show(arr);
            totalNum = Math.ceil(arr.total / arr.qty);
        }

    });
    function show(arr) {
        var res = arr.list.map(function (item) {
            return `<li>
                        ${item.name}：
                        <p>${item.mess}</p>
                    </li>`;
        }).join('');
        $('#comment').append(res);
    }
    var num = 2;
    var isok = true;
    $('.con-comment').scroll(function () {
        if (num <= totalNum) {
            if (isok) {
                if ($('.con-comment').scrollTop() >= $('#comment').height() - $('.con-comment').height()) {
                    isok = false;
                    setTimeout(() => {
                        $.ajax({
                            type: "POST",
                            url: "../api/comment.php",
                            data: "page=" + num + "&qty=8",
                            success: function (str) {
                                var arr = JSON.parse(str);
                                show(arr);
                            }
                        });
                        num++;
                        isok = true;
                    }, 1000);
                }
            }
        } else {
            $('.con-comment .p').text('没有更多了');
        }
    });

    //模糊查询
    $('#searchButton').on('click',function(){
        var keyword = $.trim($('#searchBox').val());
        if(keyword){
            window.location.href = 'goodslist.html?keyword='+keyword;
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
});