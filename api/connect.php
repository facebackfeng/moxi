<?php
    /*
	 	连接数据库：操纵数据库
	 		* 写好配置信息
	 		* 检测是否连接成功
	 */
	
    //中文乱码
    header("content-type:text/html;charset=utf-8");
    //配置信息
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'project';
    //创建数据库连接
    $conn = new mysqli($servername,$username,$password,$dbname);
    //测试是否成功
	//js使用对象和方法：是用.      arr.length  arr.push()
    //php使用对象和方法： ->     $conn->属性名    $conn->方法名()
    if($conn->connect_error) {
		//打印这里，失败了
		die('连接失败：'.$conn->connect_error);
	}else{
		//连接成功
        // echo '成功连接数据库';
        mysqli_query($conn,"set character set 'utf8'");
        mysqli_query($conn,"set names 'utf8'");
	}
?>