<?php
    include 'connect.php';
    //列表页获取数据渲染
    //传入页码和条数
    $page = isset($_GET['page']) ? $_GET['page'] : '';
    $qty = isset($_GET['qty']) ? $_GET['qty'] : '';
    // header("Content-Type:text/html;charset=utf-8");
    
    $sql = "SELECT * FROM goodslist";
    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    $arr = array_slice($row,($page-1)*$qty,$qty);
    // $arr = array_slice($row,0,28);
    // var_dump($arr);
    $return = array(
        'total' => count($row),
        'list' => $arr,
        'qty' => $qty,
        'page' => $page
    );
    echo json_encode($return,JSON_UNESCAPED_UNICODE);
?>