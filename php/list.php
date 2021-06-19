<?php
include('mysql.php');
$pid = $_GET["pid"];
$res = mysqli_query($link,"select * from scenics where pid=$pid");
$arr1 = [];
while($row = mysqli_fetch_assoc($res)){
    array_push($arr1,$row);
}

if($arr1){
    $arr = [
        "meta"=>[
            "status"=>0,
            "msg"=>'数据获取成功'
        ],
        "data"=>$arr1
    ];
}else{
    $arr = [
        "meta"=>[
            "status"=>1,
            "msg"=>'数据获取失败'
        ],
        "data"=>null
    ];
}
echo json_encode($arr);

