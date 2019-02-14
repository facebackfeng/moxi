$(function(){
    var categorys = getid('categorys');
    var menu = getid('menu');
    pullMenu(categorys,menu);

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
    //热门商品渲染
    $.ajax({
        type: "POST",
        url: "../api/ordersaled.php",
        data: "order=down&qty=8",
        success: function(str){
            var arr = JSON.parse(str);
            var res = arr.map(function(item){
                return `<li>
                            <a href="goodsdetail.html?good_id=${item.good_id}" target="_blank"><img src="${item.url1}" alt=""></a>
                            <a href="goodsdetail.html?good_id=${item.good_id}" target="_blank" class="goods_name">${item.name}</a>
                            <span class="price">${item.nowprice}</span>
                        </li>`;
            }).join('');
            $('#hotsaled').html(res);
        }
    });

    //商品渲染
    var totalNum = 0;
    
    function render(arr) {
        var res = arr.list.map(function(item){
            return `<li>
                        <a href="goodsdetail.html?good_id=${item.good_id}" target="_blank"><img src="${item.url1}" alt="" title="${item.name}"></a>
                        <p title="RMB:${item.nowprice}元">${item.nowprice}元人民币<span>/${(item.nowprice*10/item.oldprice).toFixed(1)}折</span></p>
                        <a href="goodsdetail.html?good_id=${item.good_id}" target="_blank" class="goodsName" title="${item.name}">${item.name}</a>
                    </li>`;
        }).join('');
        $('#goodsList').append(res);
    }
    //模糊查询
    $('#searchButton').on('click',function(){
        var keyword = $.trim($('#searchBox').val());
        if(keyword){
            mohuSelect(keyword);
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
    function mohuSelect(key) {
        $.ajax({
            type: 'GET',
            url: '../api/idSelect.php',
            data: 'keyword='+key,
            success: function(str){
                var arr = JSON.parse(str);
                // console.log(arr);
                var res = arr.list.map(function(item){
                    return `<li>
                                <a href="goodsdetail.html?good_id=${item.good_id}" target="_blank"><img src="${item.url1}" alt="" title="${item.name}"></a>
                                <p title="RMB:${item.nowprice}元">${item.nowprice}元人民币<span>/${(item.nowprice*10/item.oldprice).toFixed(1)}折</span></p>
                                <a href="goodsdetail.html?good_id=${item.good_id}" target="_blank" class="goodsName" title="${item.name}">${item.name}</a>
                            </li>`;
                }).join('');
                $('#goodsList').html(res);

                totalNum = Math.ceil(arr.total/arr.qty);
                $('#items-num').html('');
                for(var i=0; i<totalNum; i++){
                    $('#items-num').append("<a>"+(i+1)+"</a>");
                    $('#items-num').children().eq(0).addClass('item-active');
                }
                $('#pager_con').find('.totalpage').html('共'+totalNum+'页');
            }
        });
    }
    //其他页面搜素内容网址传输关键字，列表页获取关键字渲染
    var webdata = decodeURI(location.search);//网址解码,取？号后面部分
    // console.log(webdata);
    if(webdata){
        var str = webdata.slice(1);//去问号
        var keyword = str.split('=')[1];
        mohuSelect(keyword);
    }else{
        //正常商品渲染
        $.ajax({
            type: "GET",
            url: "../api/render.php",
            data: "page=1&qty=28",
            success: function(msg){
                var arr = JSON.parse(msg);
                // console.log(arr);
                render(arr);
                totalNum = Math.ceil(arr.total/arr.qty);
                // console.log(totalNum);
                //页码
                for(var i=0; i<totalNum; i++){
                    $('#items-num').append("<a>"+(i+1)+"</a>");
                    $('#items-num').children().eq(0).addClass('item-active');
                }
                $('#pager_con').find('.totalpage').html('共'+totalNum+'页');
            }
        });
    }
    //页码跳转
    function renderJump(page) {
        $.ajax({
            type: "GET",
            url: "../api/render.php",
            data: "page="+page+"&qty=28",
            success: function(str){
                var arr = JSON.parse(str);
                render(arr);
            }
        });
        window.scrollTo(0,0);
        $('#pager_con').find('.items a').removeClass('item-active');
    }
    //点击页码
    $('#pager_con').on('click','.items a',function(){
        // console.log($(this).text());
        var page = $(this).text()*1;
        $('#goodsList').html('');
        renderJump(page);
        $(this).addClass('item-active');
    });
    //点击上一页
    $('#pager_con').on('click','.last',function(){
        var page = $('#pager_con').find('.item-active').text()-1;
        // console.log(lastpage);
        if(page>0){
            $('#goodsList').html('');
            renderJump(page);
            $('#pager_con').find('.items a').eq(page-1).addClass('item-active');
        }else{
            var d1 = new Dialog();
            d1.init({
                id: '1',
                Style: 1,
                w: 300,
                h: 150,
                pos: 'center',
                message: '当前已经是第一页'
            });
        }
        // renderJump(page);
    });
    //点击下一页
    $('#pager_con').on('click','.next',function(){
        var page = $('#pager_con').find('.item-active').text()*1+1;
        // console.log(totalNum);
        if(page < totalNum+1){
            $('#goodsList').html('');
            renderJump(page);
            $('#pager_con').find('.items a').eq(page-1).addClass('item-active');
        }else{
            var d1 = new Dialog();
            d1.init({
                id: '1',
                Style: 1,
                w: 300,
                h: 150,
                color: 'green',
                pos: 'center',
                message: '当前已经是最后一页'
            });
        }
        // renderJump(page);
    });
    //输入页码跳转
    $('#pager_con').on('click','.ensure',function () {
       if($('#topage').val() > 0 && $('#topage').val() <= totalNum) {
           var page = $('#topage').val();
           $('#goodsList').html('');
           renderJump(page);
           $('#pager_con').find('.items a').eq(page-1).addClass('item-active');
       }else {
        var d1 = new Dialog();
        d1.init({
            id: '1',
            Style: 1,
            w: 300,
            h: 150,
            color: 'red',
            pos: 'center',
            message: '请输入正确的页码'
        });
       }
    });

    //销量排序
    function order(order) {
        $.ajax({
            type: "POST",
            url: "../api/ordersaled.php",
            data: "order="+order+"&qty=28",
            success: function(str){
                var arr = JSON.parse(str);
                // console.log(arr);
                var res = arr.map(function(item){
                    return `<li>
                                <a href="goodsdetail.html?good_id=${item.good_id}" target="_blank"><img src="${item.url1}" alt="" title="${item.name}"></a>
                                <p title="RMB:${item.nowprice}元">${item.nowprice}元人民币<span>/${(item.nowprice*10/item.oldprice).toFixed(1)}折</span></p>
                                <a href="goodsdetail.html?good_id=${item.good_id}" target="_blank" class="goodsName" title="${item.name}">${item.name}</a>
                            </li>`;
                }).join('');
                $('#goodsList').html(res);
            }
        });
    }
    $('#order .xiaoliangdown').on('click',function(){
        order('down');
    });
    $('#order .xiaoliangup').on('click',function(){
        order('up');
    });

    //价格区间
    $('#order .makesure').on('click',function(){
        var lowprice = $('#lowPrice').val();
        var highprice = $('#highPrice').val();
        // console.log(lowprice,highprice);
        $.ajax({
            type: "POST",
            url: "../api/orderprice.php",
            data: "order=up&qty=28&lowprice="+lowprice+"&highprice="+highprice,
            success: function(str){
                var arr = JSON.parse(str);
                // console.log(arr);
                var res = arr.list.map(function(item){
                    return `<li>
                                <a href="goodsdetail.html?good_id=${item.good_id}" target="_blank"><img src="${item.url1}" alt="" title="${item.name}"></a>
                                <p title="RMB:${item.nowprice}元">${item.nowprice}元人民币<span>/${(item.nowprice*10/item.oldprice).toFixed(1)}折</span></p>
                                <a href="goodsdetail.html?good_id=${item.good_id}" target="_blank" class="goodsName" title="${item.name}">${item.name}</a>
                            </li>`;
                }).join('');
                $('#goodsList').html(res);

                totalNum = Math.ceil(arr.total/arr.qty);
                $('#items-num').html('');
                for(var i=0; i<totalNum; i++){
                    $('#items-num').append("<a>"+(i+1)+"</a>");
                    $('#items-num').children().eq(0).addClass('item-active');
                }
                $('#pager_con').find('.totalpage').html('共'+totalNum+'页');
            }
        });
    });

    //默认排序
    $('#order .moren').on('click',function(){
        $('#goodsList').html('');
        $.ajax({
            type: "GET",
            url: "../api/render.php",
            data: "page=1&qty=28",
            success: function(msg){
                var arr = JSON.parse(msg);
                // console.log(arr);
                render(arr);
                totalNum = Math.ceil(arr.total/arr.qty);
                // console.log(totalNum);
                //页码
                $('#items-num').html('');
                for(var i=0; i<totalNum; i++){
                    $('#items-num').append("<a>"+(i+1)+"</a>");
                    $('#items-num').children().eq(0).addClass('item-active');
                }
                $('#pager_con').find('.totalpage').html('共'+totalNum+'页');
            }
        });
    });

    
});