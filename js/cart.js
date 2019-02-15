$(function () {
    var categorys = getid('categorys');
    var menu = getid('menu');
    pullMenu(categorys, menu);

    // 判断是否登录
    if ($.cookie('cid')) {
        var cid = $.cookie('cid');
        // console.log(cid);
        $.ajax({
            type: 'GET',
            url: '../api/checkname.php',
            data: 'cid=' + cid,
            success: function (str) {
                var arr = JSON.parse(str);
                // console.log(arr);
                var html = `<a href="">[Hi,${arr[0].name}]</a>
                            <a class="loginout" href="javascript:;">退出登录</a>`;
                $('#userinf').html(html);
            }
        });
        //退出清除cookie
        $('#userinf').on('click', '.loginout', function () {
            $.cookie('cid', null, { expires: -1, path: '/' });
            window.location.href = '../html/login.html';
        });
        //登录渲染购物车商品数量
        $.ajax({
            type: 'GET',
            url: '../api/checkname.php',
            data: 'cartnum=' + cid,
            success: function (str) {
                var arr = JSON.parse(str);
                // console.log(arr);
                $('#carNum').html('&nbsp;' + arr + '&nbsp;');
                $('#carNum').css('font-style', 'normal');
                $('#carNum').css('font-weight', 'bold');
            }
        });
        // 购物车数据渲染
        $.ajax({
            type: 'GET',
            url: '../api/cartRender.php',
            data: 'cid=' + cid,
            success: function (str) {
                var arr = JSON.parse(str);
                // console.log(arr);
                if (arr == 1) {
                    $('#cart .cartdata').css('display', 'none');
                    $('#cart .nogoods').css('display', 'block');
                } else {
                    var res = arr.map(function (item) {
                        return `<li goodId="${item.good_id}">
                                    <div class="good-check fl"><input type="checkbox"></div>
                                    <div class="goodsname fl">
                                        <a href="" class="goods-img"><img src="${item.url}" alt=""></a>
                                        <a href="" class="goods-name">${item.name}</a>
                                        <span>${item.color}</span>
                                    </div>
                                    <div class="price fl">${item.nowprice}</div>
                                    <div class="num fl" kucun="${item.has}">
                                        <span class="cutnum changenum">-</span>
                                        <input class="nownum" type="text" value="${item.num}">
                                        <span class="addnum changenum">+</span>
                                    </div>
                                    <div class="allPrice fl">${(item.nowprice * item.num).toFixed(2)}元</div>
                                    <div class="deleteGoods fl">
                                        <a href="javascript:;">移入收藏夹</a>
                                        <br>
                                        <a class="delete" href="javascript:;">删除</a>
                                    </div>
                                </li>`;
                    }).join('');
                    $('#goodsList').html(res);
                }
            }
        });




        //购物车功能实现

        //增加数量
        $('#goodsList').on('click', '.addnum', function () {
            var val = $(this).prev().val();
            var kucun = $(this).parent().attr('kucun');
            var gid = $(this).parent().parent().attr('goodId');
            var color = $(this).parent().parent().find('.goodsname span').text();
            val++;
            // console.log(color);
            if (val > kucun) {
                val = kucun;
                var d1 = new Dialog();
                d1.init({
                    id: '1',
                    Style: 1,
                    w: 300,
                    h: 150,
                    color: 'red',
                    pos: 'center',
                    message: '库存不足！'
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "../api/update.php",
                    data: 'good_id=' + gid + '&color=' + color + '&addnum=1&cid=' + cid
                });
            }

            $(this).prev().val(val);
            subTotal($(this));
            updateNum();
        });
        //减少功能
        $('#goodsList').on('click', '.cutnum', function () {
            var val = $(this).next().val();
            var gid = $(this).parent().parent().attr('goodId');
            var color = $(this).parent().parent().find('.goodsname span').text();
            val--;
            // console.log(color);
            if (val < 1) {
                val = 1;
                var d1 = new Dialog();
                d1.init({
                    id: '1',
                    Style: 1,
                    w: 300,
                    h: 150,
                    color: 'red',
                    pos: 'center',
                    message: '最少选择一件'
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "../api/update.php",
                    data: 'good_id=' + gid + '&color=' + color + '&cutnum=1&cid=' + cid
                });
            }

            $(this).next().val(val);
            subTotal($(this));
            updateNum();
        });
        function subTotal(now) { //小计
            var num = now.parent().find('input').val(); //数量
            var price = now.parent().prev().text();
            price = $.trim(price); //工具方法：去除前后空格
            //		console.log(num,price);
            var all = (num * price).toFixed(2); //保留两个小数，小计：数量*单价
            now.parent().next().html(all + '元');
            // updateNum();
        }
        
        //手动输入数量
        $('#goodsList').on('input','.nownum',function(){
            var val = $(this).val();
            var gid = $(this).parent().parent().attr('goodId');
            var color = $(this).parent().parent().find('.goodsname span').text();
            $.ajax({
                type: 'POST',
                url: '../api/update.php',
                data: 'good_id=' + gid + '&color=' + color + '&changenum='+val+'&cid=' + cid
            });
            subTotal($(this));
            updateNum();
        });

        //删除当前商品
        $('#goodsList').on('click', '.delete', function () {
            var gid = $(this).parent().parent().attr('goodId');
            var color = $(this).parent().parent().find('.goodsname span').text();
            var mes = confirm('是否将商品移除购物车？');
            if (mes) {
                $(this).parent().parent().remove();
                $.ajax({
                    type: "POST",
                    url: "../api/update.php",
                    data: 'good_id=' + gid + '&color=' + color + '&delete=1&cid=' + cid
                });
            }
            update();
            updateNum();
        });
        function update() {
            if ($('.addnum').size() == 0) {
                $('#cart .cartdata').css('display', 'none');
                $('#cart .nogoods').css('display', 'block');
            }
        }

        //全选
        var isok = true;
        $('.allchecked').on('click', function () {
            if (isok) {
                $(this).find('input').prop('checked', 'checked');
                $('#goodsList .good-check input').prop('checked', 'checked');
            } else {
                $(this).find('input').removeAttr('checked');
                $('#goodsList .good-check input').removeAttr('checked');
            }
            isok = !isok;
            updateNum();
        });
        //勾选复选框
        $('#goodsList').on('click', '.good-check input', function () {
            updateNum();
        });

        //总数量和总价格改变
        var arr = [];
        function updateNum() {
            //空数组：存被勾选的行的下标
            arr.length = 0;
            var le = $('.good-check input').size(); //复选框的总个数
            for (var i = 0; i < le; i++) {
                if ($('.good-check input').eq(i).prop('checked')) {
                    //意味着这一行被勾选
                    arr.push(i);
                }
            }

            //		console.log(arr);

            //统计被勾选的行对应的数量，累加放到底部对应位置
            //统计被勾选的行对应的小计，累加放到底部对应位置
            var num = 0; //总数量
            var totalPrice = 0; //存总价
            for (var i = 0; i < arr.length; i++) {
                num += $('.nownum').eq(arr[i]).val() * 1;
                var price = $('.allPrice').eq(arr[i]).text(); //199.98元
                price = $.trim(price); //去掉前后空格
                price = (price.substring(0, price.length - 1) * 1); //199.98
                //			console.log(price);
                totalPrice += price;
            }

            //		console.log(num);
            var html = `已选商品<span>${num}</span>件&nbsp;&nbsp;&nbsp;&nbsp;总价（不含运费）：<span>￥${totalPrice.toFixed(2)}</span>
            <a href="javascript:;" class="pay">结算</a>`;
            $('.total-mess').html(html);
            //勾选所有复选框，全选框也选中
            if (arr.length == $('.good-check input').size()) {
                $('.allchecked input').prop('checked', 'checked');
            } else {
                $('.allchecked input').prop('checked', '');
            }
        }
    } else {
        $('#cart .cartdata').css('display', 'none');
        $('#cart .nogoods').css('display', 'block');
    }

    //轮播图
    //数据渲染
    $.ajax({
        type: "GET",
        url: "../api/render.php",
        data: "page=1&qty=18",
        success: function (str) {
            var arr = JSON.parse(str);
            // console.log(arr.list);
            var res = arr.list.map(function (item) {
                return `<li>
                            <div class="tabs-pic">
                                <a href="goodsdetail.html?good_id=${item.good_id}">
                                    <img src="${item.url1}" title="${item.name}">
                                </a>
                            </div>
                            <p class="tabs-name"><a href="goodsdetail.html?good_id=${item.good_id}">${item.name}</a></p>
                            <p class="tabs-price">${parseInt(item.nowprice * 16.372)}日元(约${item.nowprice}元人民币)</p>
                        </li>`;
            }).join('');
            $('#moveimg').html(res);
            // console.log(res);
            //1、ul的宽度：图片的宽度*图片个数
            var wNum = $('#moveimg li').size() * $('#moveimg li').eq(0).outerWidth();
            $('#moveimg').css('width', wNum);
            var iW = $('#moveimg li').eq(0).outerWidth() * 6;//运动距离

            //2、开定时器，每次运动6个图距离，往左边运动：-6*iW
            var timer = null;
            clearInterval(timer);
            timer = setInterval(next, 4000);//间隔时间

            function next() {//动画时间间隔：5000-2000
                $('#moveimg').animate({ 'left': -iW }, 1000, function () {
                    //出去的图片，剪切放到末尾
                    $('#moveimg li:lt(6)').insertAfter($('#moveimg li:last'));
                    //ul归位
                    $('#moveimg').css('left', 0);
                });
            }


            function prev() {
                //先剪切最后的六个图插入到ul首位
                for (var i = 0; i < 6; i++) {
                    $('#moveimg li:last').insertBefore($('#moveimg li:first'));
                }
                //预留6个图位置
                $('#moveimg').css('left', -iW);
                //挪到可视区
                $('#moveimg').animate({ 'left': 0 }, 1000);
            }

            //3、上下按钮可以点击切换
            $('#box').hover(function () {
                clearInterval(timer);
            }, function () {
                clearInterval(timer);
                timer = setInterval(next, 4000);//间隔2秒切一个图
            });

            //点击切换下一页：六张图
            $('#next').click(function () {
                next();
            });

            $('#prev').click(function () {
                prev();
            });
        }
    });

    //关注摩西二维码出现
    var attenMoxi2 = getid('attenMoxi2');
    var attention2 = getid('attention2');
    pullMenu(attenMoxi2, attention2);

    //模糊查询
    $('#searchButton').on('click', function () {
        var keyword = $.trim($('#searchBox').val());
        if (keyword) {
            window.location.href = 'goodslist.html?keyword=' + keyword;
        } else {
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