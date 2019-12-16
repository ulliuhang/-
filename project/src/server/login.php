<?php
#(1)连接数据库
header("content-type:text/html;charset=utf-8");
$host='localhost';
$name='root';
$password='';
$database='kaola';
$conn= new mysqli($host,$name,$password,$database);
if(!$conn) {
    die('连接数据库失败'. mysqli_error($conn));
}
$emailNum = $_REQUEST["emailNum"];
$passwordNum = $_REQUEST["passwordNum"];

$sql = "SELECT *FROM `emailuser` WHERE emailNum = '$emailNum'";
$result = mysqli_query($conn,$sql);
if (mysqli_num_rows($result) == 0) {
    $response["status"] = "error";
    $response["msg"] = "该用户不存在！";
    echo json_encode($response,true);
}else{
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
    if($data[0]["passwordNum"]!=$passwordNum) {
        $response["status"] = "error";
        $response["msg"] = "密码不正确!!";
        echo json_encode($response,true);
    }else{
        $response["status"] = "ok";
        $response["msg"] = "登录成功!!";
        echo json_encode($response,true);
    }
}


?>
