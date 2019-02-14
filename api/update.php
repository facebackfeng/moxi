<?php
    include 'connect.php';
    //购物车实现增减删
    //根据传入的数据进行不同的操作
    $good_id = isset($_POST['good_id']) ? $_POST['good_id'] : '';//必传
    $color = isset($_POST['color']) ? $_POST['color'] : '';//必传
    $cid = isset($_POST['cid']) ? $_POST['cid'] : '';//必传
    $addnum = isset($_POST['addnum']) ? $_POST['addnum'] : '';//数量增加
    $cutnum = isset($_POST['cutnum']) ? $_POST['cutnum'] : '';//数量减少
    $changenum = isset($_POST['changenum']) ? $_POST['changenum'] : '';//手动输入数量
    $delete = isset($_POST['delete']) ? $_POST['delete'] : '';//删除
    if($addnum){
        $sql = "UPDATE cart SET num=num+1 WHERE good_id='$good_id' and color = '$color' and cid='$cid'";
        $res = $conn->query($sql);
    }
    if($cutnum){
        $sql = "UPDATE cart SET num=num-1 WHERE good_id='$good_id' and color = '$color' and cid='$cid'";
        $res = $conn->query($sql);
    }
    if($changenum){
        $sql = "UPDATE cart SET num=$changenum WHERE good_id='$good_id' and color = '$color' and cid='$cid'";
        $res = $conn->query($sql);
    }
    if($delete){
        $sql = "DELETE FROM cart WHERE good_id='$good_id' and color = '$color' and cid='$cid'";
        $res = $conn->query($sql);
    }
    
    if($res){
        echo 0;
    }else{
        echo 1;
    }
?>