<?php
    include 'connect.php';
    //接收传来的数据，根据不同的数据进行不同的操作
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $email = isset($_GET['email']) ? $_GET['email'] : '';
    $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
    $cid = isset($_GET['cid']) ? $_GET['cid'] : '';
    $cartnum = isset($_GET['cartnum']) ? $_GET['cartnum'] : '';
    $homepic = isset($_GET['homepic']) ? $_GET['homepic'] : '';
    //验证用户名
    if($username){
        $sql = "SELECT * FROM userinf WHERE name='$username'";
        $res = $conn->query($sql);
        $res_on = $res->fetch_all(MYSQLI_ASSOC);
        // var_dump($res_on);
        if($res_on){
            $return = array(
                'code' => 1,
                'message' => '该用户名已被注册'
            );
        }else{
            $return = array(
                'code' => 0,
                'message' => '可以注册'
            );
        }
    }
    //验证邮箱
    if($email){
        $sql = "SELECT * FROM userinf WHERE email='$email'";
        $res = $conn->query($sql);
        $res_on = $res->fetch_all(MYSQLI_ASSOC);
        // var_dump($res_on);
        if($res_on){
            $return = array(
                'code' => 1,
                'message' => '该邮箱已被注册'
            );
        }else{
            $return = array(
                'code' => 0,
                'message' => '可以注册'
            );
        }
    }
    //验证手机
    if($phone){
        $sql = "SELECT * FROM userinf WHERE name='$phone'";
        $res = $conn->query($sql);
        $res_on = $res->fetch_all(MYSQLI_ASSOC);
        // var_dump($res_on);
        if($res_on){
            $return = array(
                'code' => 1,
                'message' => '该手机号已被注册'
            );
        }else{
            $return = array(
                'code' => 0,
                'message' => '可以注册'
            );
        }
    }
    //通过cid查询用户信息
    if($cid){
        $sql = "SELECT * FROM userinf WHERE cid='$cid'";
        $res = $conn->query($sql);
        $return = $res->fetch_all(MYSQLI_ASSOC);
        // var_dump($res_on);   
    }
    //通过cartnum查询购物车数量，传入cid
    if($cartnum){
        $sql = "SELECT * FROM cart WHERE cid='$cartnum'";
        $res = $conn->query($sql);
        $res_on = $res->fetch_all(MYSQLI_ASSOC);
        $return = count($res_on);
        // var_dump($res_on);   
    }
    //通过homepic查询homepic图片
    if($homepic){
        $sql = "SELECT * FROM homepic";
        $res = $conn->query($sql);
        $return = $res->fetch_all(MYSQLI_ASSOC);
    }
    
    echo json_encode($return,JSON_UNESCAPED_UNICODE);
?>