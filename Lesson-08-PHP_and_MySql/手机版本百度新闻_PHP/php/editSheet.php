<?php 
	require 'config.php';
	$ID = $_REQUEST['ID'];
	$imageNew = $_REQUEST['imageNew'];
        $contentNew = $_REQUEST['contentNew'];
        $changeContent=htmlspecialchars($contentNew);/*使用htmlspecicalchars将html语言转换字符串*/
        $edDataNew = $_REQUEST['edDataNew'];
        $type = $_REQUEST['type'];
	$sql="UPDATE `$type` SET `newsImage`='".addslashes($imageNew)."',`newsContent`='".addslashes($changeContent)."',`newsData`='".$edDataNew."' WHERE `ID`='$ID'";
	$up=mysql_query($sql,$con);
	if(!$up){
		echo "error".mysql_error();
	}else{
		echo $type;
	}
 ?>