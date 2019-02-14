<?php
    //登录
    include 'connect.php';
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $psd = isset($_POST['psd']) ? $_POST['psd'] : '';
    
    $sql = "SELECT * FROM userinf WHERE name='$name' AND password='$psd'";
    $res = $conn->query($sql);
    $res_on = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($res_on);
    if($res_on){
        $return = array(
            'code' => 0,
            'message' => '登录成功',
            'cid' => current(current($res_on))
        );
    }else{
        $return = array(
            'code' => 1,
            'message' => '用户名或密码不正确'
        );
    }
    echo json_encode($return,JSON_UNESCAPED_UNICODE);
?>