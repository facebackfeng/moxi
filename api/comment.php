<?php
    include 'connect.php';
    //获取评论数据渲染
    //传入页码和条数
    $page = isset($_POST['page']) ? $_POST['page'] : '';
    $qty = isset($_POST['qty']) ? $_POST['qty'] : '';
    
    $sql = "SELECT * FROM comment";
    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    $arr = array_slice($row,($page-1)*$qty,$qty);
    // $arr = array_slice($row,0,8);
    // var_dump($arr);
    $return = array(
        'total' => count($row),
        'list' => $arr,
        'qty' => $qty,
        'page' => $page
    );
    echo json_encode($return,JSON_UNESCAPED_UNICODE);
?>