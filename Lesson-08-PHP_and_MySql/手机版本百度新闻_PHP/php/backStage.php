<?php 
		require 'config.php';
		$bsId=$_REQUEST['id'];
		$sql="SELECT * FROM `$bsId` WHERE 1";
		$result=mysql_query($sql,$con);
		$arr=array();
		$res=array();
		while ($row=mysql_fetch_array($result)) {
			array_push($arr,array("ID"=>$row['ID'],"newsImage"=>$row['newsImage'],"newsContent"=>$row['newsContent'],"newsData"=>$row['newsData']));
		}
		$res=array('errorcode:'=>0,'result'=>$arr);
		echo json_encode($res);
		mysql_close($con);
 ?> 