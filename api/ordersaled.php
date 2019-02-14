<?php
    include 'connect.php';
    //排序
    //根据销量升序或降序
    //order为true 升序
    $order = isset($_POST['order']) ? $_POST['order'] : '';
    $qty = isset($_POST['qty']) ? $_POST['qty'] : '';
    if($order == 'up'){
        $sql = "SELECT * FROM goodslist ORDER BY salednum";
    }
    if($order == 'down'){
        $sql = "SELECT * FROM goodslist ORDER BY salednum DESC";
    }
    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    $arr = array_slice($row,0,$qty);
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);

?>