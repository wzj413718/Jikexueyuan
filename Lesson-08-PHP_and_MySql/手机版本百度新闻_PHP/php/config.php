<?php 
	header("Content-type:application/json; charset=utf-8");
	$con=mysql_connect('localhost','root',''); 
	if(!$con){
		die("连接数据库失败".mysql_error());
	}
	mysql_query("set names utf8");
	mysql_select_db('baidunews',$con);/*打开数据库*/
?>
