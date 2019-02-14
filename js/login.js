$(function () {
    // 下拉菜单
    var categorys = getid('categorys');
    var menu = getid('menu');
    pullMenu(categorys, menu);

    //登录

    //注册
    //选项卡功能
    var register_nav = getid('register-nav');
    var register_navList = register_nav.getElementsByTagName('li');
    var register_tb = getid('register-tb');
    var register_tbList = register_tb.getElementsByClassName('concard');
    xuanxiangka(register_navList, register_tbList);

    //邮箱注册
    //邮箱验证
    var isok1 = false;
    $('#userEmail').on('blur', function () {
        var valEmail = $.trim($(this).val());
        // console.log(valEmail);
        if (valEmail) {
            if (checkReg.email(valEmail)) {
                //验证邮箱是否已被注册
                $.ajax({
                    type: 'GET',
                    url: '../api/checkname.php',
                    data: 'email=' + valEmail,
                    success: function (str) {
                        var arr = JSON.parse(str);
                        // console.log(arr);
                        if (!arr.code) {
                            $('#userEmail_mess').html(arr.message);
                            $('#userEmail_mess').css('color', 'green');
                            isok1 = true;
                        } else {
                            $('#userEmail_mess').html(arr.message);
                            $('#userEmail_mess').css('color', 'red');
                        }
                    }
                });
            } else {
                $('#userEmail_mess').html('邮箱格式不正确');
                $('#userEmail_mess').css('color', 'red');
            }
        } else {
            $('#userEmail_mess').html('内容不能为空');
            $('#userEmail_mess').css('color', 'red');
        }
    });
    //手机号验证
    var isok2 = false;
    $('#userPhone').on('blur', function () {
        var valPhone = $.trim($(this).val());
        // console.log(valEmail);
        if (valPhone) {
            if (checkReg.tel(valPhone)) {
                //验证邮箱是否已被注册
                $.ajax({
                    type: 'GET',
                    url: '../api/checkname.php',
                    data: 'phone=' + valPhone,
                    success: function (str) {
                        var arr = JSON.parse(str);
                        // console.log(arr);
                        if (!arr.code) {
                            $('#userPhone_mess').html(arr.message);
                            $('#userPhone_mess').css('color', 'green');
                            isok2 = true;
                        } else {
                            $('#userPhone_mess').html(arr.message);
                            $('#userPhone_mess').css('color', 'red');
                        }
                    }
                });
            } else {
                $('#userPhone_mess').html('手机号格式不正确');
                $('#userPhone_mess').css('color', 'red');
            }
        } else {
            $('#userPhone_mess').html('内容不能为空');
            $('#userPhone_mess').css('color', 'red');
        }

    });

    //昵称验证
    var isok3 = false;
    var isok4 = false;

    function checkuser(name, message) {
        name.on('blur', function () {
            var valName = $.trim(name.val());
            if (valName) {
                if (checkReg.name2(valName)) {
                    $.ajax({
                        type: 'GET',
                        url: '../api/checkname.php',
                        data: 'username=' + valName,
                        success: function (str) {
                            var arr = JSON.parse(str);
                            // console.log(arr);
                            if (!arr.code) {
                                message.html(arr.message);
                                message.css('color', 'green');
                                // isok = true;
                                // console.log(name.selector);
                                if (name.selector == '#userName') {
                                    ok3();
                                } else {
                                    ok4();
                                }
                            } else {
                                message.html(arr.message);
                                message.css('color', 'red');
                            }
                        }
                    });

                } else {
                    message.html('3~10个字符,只含有汉字、数字、字母、_');
                    message.css('color', 'red');
                }
            } else {
                message.html('内容不能为空');
                message.css('color', 'red');
            }
        });
    }
    checkuser($('#userName'), $('#userName_mess'));
    checkuser($('#userName2'), $('#userName2_mess'));
    // console.log(checkuser($('#userName'), $('#userName_mess')));
    function ok3() {
        isok3 = true;
    }
    function ok4() {
        isok4 = true;
    }

    

    //密码验证
    var isok5 = false;
    var isok6 = false;
    checkpsw($('#userPsd'), $('#userPsd_mess'));
    checkpsw($('#userPsd2'), $('#userPsd2_mess'));
    function checkpsw(name, message) {
        name.on('blur', function () {
            var valPsw = $.trim(name.val());
            if (valPsw) {
                if (checkReg.psd2(valPsw)) {
                    message.html('6~16位字符,只能包含字母,数字或下划线');
                    message.css('color', 'green');
                    if (name.selector == '#userPsd') {
                        ok5();
                    } else {
                        ok6();
                    }
                } else {
                    message.html('6~16位字符,只能包含字母,数字或下划线');
                    message.css('color', 'red');
                }
            } else {
                message.html('内容不能为空');
                message.css('color', 'red');
            }
        });
    }
    function ok5() {
        isok5 = true;
    }
    function ok6() {
        isok6 = true;
    }
    //再次输入密码验证
    var isok7 = false;
    var isok8 = false;
    checkConfirmPsw($('#userPsdAgain'), $('#userPsdAgain_mess'));
    checkConfirmPsw($('#userPsdAgain2'), $('#userPsdAgain2_mess'));
    function checkConfirmPsw(name, message) {
        name.on('blur', function () {
            var valPsw1 = $.trim(name.val());
            var valPsw2 = $.trim(name.parent().prev().find('input').val());
            if (valPsw1) {
                if (checkReg.confirm_pwd(valPsw1, valPsw2)) {
                    message.html('');
                    if (name.selector == '#userPsdAgain') {
                        ok7();
                    } else {
                        ok8();
                    }
                } else {
                    message.html('两次输入的密码不一致');
                    message.css('color', 'red');
                }
            } else {
                message.html('内容不能为空');
                message.css('color', 'red');
            }
        });
    }
    function ok7() {
        isok7 = true;
    }
    function ok8() {
        isok8 = true;
    }

    //验证码
    var isok9 = false;
    $('#yzm_inf').html(randomYZM(5));
    $('#changeOne').on('click',function(){
        $('#yzm_inf').html(randomYZM(5));
    });
    $('#yzm').on('blur',function(){
        var valyzm = $.trim($(this).val()).toLowerCase();
        // console.log(valyzm);
        if(valyzm == $('#yzm_inf').html().toLowerCase()){
            isok9 = true;
        }
    });

    var isok10 = false;
    $('#yzm2_inf').html(randomYZM(5));
    $('#changeOne2').on('click',function(){
        $('#yzm2_inf').html(randomYZM(5));
    });
    $('#yzm2').on('blur',function(){
        var valyzm = $.trim($(this).val()).toLowerCase();
        // console.log(valyzm);
        if(valyzm == $('#yzm2_inf').html().toLowerCase()){
            isok10 = true;
        }
    });

    //服务协议
    var isokS = false;
    $('#agreement').on('click',function(){
        isokS = !isokS;
    });
    //注册
    $('#register-button').on('click', function () {
        if(isokS){//协议
            if(isok9){//验证码
                if(isok1 && isok3 && isok5 && isok7){
                    var email = $.trim($('#userEmail').val());
                    var username = $.trim($('#userName').val());
                    var password = $.trim($('#userPsd').val());
                    $.ajax({//插入数据用户表
                        type: 'POST',
                        url: '../api/register.php',
                        data: 'email='+email+'&name='+username+'&psd='+password,
                        success: function(str){
                            var arr = JSON.parse(str);
                            // console.log(arr);
                            $.ajax({//获取数据库用户cid
                                type: 'POST',
                                url: '../api/register.php',
                                data: 'name_cid='+username,
                                success: function(str){
                                    var arr = JSON.parse(str);
                                    // console.log(arr[0].cid);
                                    //设置cookie
                                    $.cookie('cid',null,{ expires: -1, path: '/' });
                                    $.cookie('cid',arr[0].cid, { expires: 7, path: '/' });

                                    $('main .successnone').css('display','none');
                                    $('main .successblock').css('display','block');
                                    setTimeout(() => {//跳转首页
                                        window.location.href = '../index.html';
                                    }, 2000);
                                }
                            });
                        }
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
                    message: '验证码不正确'
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
                message: '请同意服务协议'
            });
        }
    });

    var isokS2 = false;
    $('#agreement2').on('click',function(){
        isokS2 = !isokS2;
    });
    $('#register-button2').on('click', function () {
        if(isokS2){
            if(isok10){
                if(isok2 && isok4 && isok6 && isok8){
                    var phone = $.trim($('#userPhone').val());
                    var username = $.trim($('#userName2').val());
                    var password = $.trim($('#userPsd2').val());
                    $.ajax({
                        type: 'POST',
                        url: '../api/register.php',
                        data: 'phone='+phone+'&name='+username+'&psd='+password,
                        success: function(str){
                            var arr = JSON.parse(str);
                            // console.log(arr);
                            $.ajax({
                                type: 'POST',
                                url: '../api/register.php',
                                data: 'name_cid='+username,
                                success: function(str){
                                    var arr = JSON.parse(str);
                                    // console.log(arr[0].cid);
                                    $.cookie('cid',null,{ expires: -1, path: '/' });
                                    $.cookie('cid',arr[0].cid, { expires: 7, path: '/' });

                                    $('main .successnone').css('display','none');
                                    $('main .successblock').css('display','block');
                                    setTimeout(() => {
                                        window.location.href = '../index.html';
                                    }, 2000);
                                }
                            });
                        }
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
                    message: '验证码不正确'
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
                message: '请同意服务协议'
            });
        }
    });

    //登录
    $('#login-button').on('click',function(){
        var Username = $.trim($('#login-username').val());
        var Userpsd = $.trim($('#login-password').val());
        // console.log(Username,Userpsd);
        if(Username && Userpsd){
            $.ajax({
                type: 'POST',
                url: '../api/login.php',
                data: 'name='+Username+'&psd='+Userpsd,
                success: function(str){
                    var arr = JSON.parse(str);
                    console.log(arr);
                    if(!arr.code){
                        $.cookie('cid',null,{ expires: 7, path: '/' });
                        $.cookie('cid',arr.cid, { expires: 7, path: '/' });

                        $('main .successnone').css('display','none');
                        $('main .successblock').css('display','block');
                        setTimeout(() => {
                            window.location.href = '../index.html';
                        }, 2000);
                    }else{
                        var d1 = new Dialog();
                        d1.init({
                            id: '1',
                            Style: 1,
                            w: 300,
                            h: 150,
                            color: 'red',
                            pos: 'center',
                            message: arr.message
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
                message: '内容不能为空'
            });
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