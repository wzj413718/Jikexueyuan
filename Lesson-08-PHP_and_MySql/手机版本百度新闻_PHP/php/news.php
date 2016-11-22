<?php 
		require 'config.php';
		$sheetId=$_REQUEST["id"];/*获取ajax中传递id的值*/
		$itemStart=$_REQUEST["itemStart"];
		$itemEnd=$_REQUEST["itemEnd"];
		mysql_selectdb('baidunews',$con);
		mysql_query('set names utf8');
		$result=mysql_query("SELECT * FROM  $sheetId LIMIT $itemStart,$itemEnd");
		/*执行一条Mysql语句，通过获取的到id值，来判断查询哪个表里的数据*/
                  $arr =array();
		while ($row=mysql_fetch_array($result)) {
			array_push($arr, array('id'=>$row['ID'],'newsImage'=>$row['newsImage'],'newsContent'=>$row['newsContent'],'newsData'=>$row['newsData']));
		}
		$res=array("errcode"=>0,"result"=>$arr);
		echo json_encode($res);
		mysql_close($con);
 ?>