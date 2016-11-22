<?php 
	require 'config.php';
	$id=$_REQUEST['delid'];
	$type=$_REQUEST['ntype'];
	$sql="DELETE FROM `$type` WHERE ID=$id";
	$dd=mysql_query($sql,$con);
	if(!$dd){
		echo "flase";
	}else{
		echo $type;
	}
	mysql_close($con);
 ?>