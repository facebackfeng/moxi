<?php
    //注册
    include 'connect.php';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';//手机号注册
    $email = isset($_POST['email']) ? $_POST['email'] : '';//邮箱注册
    $name = isset($_POST['name']) ? $_POST['name'] : '';//昵称，注册必传
    $psd = isset($_POST['psd']) ? $_POST['psd'] : '';//密码,注册必传
    $name_cid = isset($_POST['name_cid']) ? $_POST['name_cid'] : '';//根据昵称查找cid
    if($phone){
        $sql = "INSERT INTO userinf(name,password,phone) VALUES('$name','$psd','$phone')";
        $res = $conn->query($sql);
        if($res){
            $return = array(
                'code' => 0,
                'message' => '注册成功'
            );
        }else{
            $return = array(
                'code' => 1,
                'message' => '注册失败'
            );
        }
    }
    if($email){
        $sql = "INSERT INTO userinf(name,password,email) VALUES('$name','$psd','$email')";
        $res = $conn->query($sql);
        if($res){
            $return = array(
                'code' => 0,
                'message' => '注册成功'
            );
        }else{
            $return = array(
                'code' => 1,
                'message' => '注册失败'
            );
        }
    }
    if($name_cid){
        $sql = "SELECT * FROM userinf WHERE name='$name_cid'";
        $res1 = $conn->query($sql);
        $return = $res1->fetch_all(MYSQLI_ASSOC);
    }
    
    echo json_encode($return,JSON_UNESCAPED_UNICODE);
?>