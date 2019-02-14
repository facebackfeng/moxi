<?php
    include 'connect.php';
    //购物车页数据渲染
    //传入用户cid，查询cid值所有商品
    $cid = isset($_GET['cid']) ? $_GET['cid'] : '';
    
    $sql = "SELECT * FROM cart where cid='$cid'";
    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    
    
    if($row){
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }else{
        echo 1;
    }
    
?>