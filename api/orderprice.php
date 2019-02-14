<?php
    include 'connect.php';
    //排序
    //根据价格区间
    //order为up 升序
    $order = isset($_POST['order']) ? $_POST['order'] : '';
    $qty = isset($_POST['qty']) ? $_POST['qty'] : '';
    $lowprice = isset($_POST['lowprice']) ? $_POST['lowprice'] : '';
    $highprice = isset($_POST['highprice']) ? $_POST['highprice'] : '';
    if($order == 'up'){
        $sql = "SELECT * FROM goodslist WHERE nowprice BETWEEN $lowprice and $highprice ORDER BY nowprice";
    }
    if($order == 'down'){
        $sql = "SELECT * FROM goodslist ORDER BY nowprice DESC";
    }
    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    $arr = array_slice($row,0,$qty);
    $return = array(
        'total' => count($row),
        'list' => $arr,
        'qty' => $qty
    );
    echo json_encode($return,JSON_UNESCAPED_UNICODE);

?>