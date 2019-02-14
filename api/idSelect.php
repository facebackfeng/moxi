<?php
    include 'connect.php';
    //查询数据
    $good_id = isset($_GET['good_id']) ? $_GET['good_id'] : '';
    $keyword = isset($_GET['keyword']) ? $_GET['keyword'] : '';
    //列表页通过id跳转详情页查询数据
    if($good_id){
        $sql = "SELECT * FROM goodslist WHERE good_id='$good_id'";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
    }
    //通过关键字模糊查询
    if($keyword){
        $sql = "SELECT * FROM goodslist WHERE name like '%$keyword%'";
        $res = $conn->query($sql);
        $res_on = $res->fetch_all(MYSQLI_ASSOC);
        $row = array(
            'list' => $res_on,
            'total' => count($res_on),
            'qty' => 28
        );
    }
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
    
?>