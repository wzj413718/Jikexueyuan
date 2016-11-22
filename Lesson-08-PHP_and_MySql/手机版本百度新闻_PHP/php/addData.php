<?php 
		require 'config.php';
		$getImage=$_REQUEST["nImg"];
		$changeImage=htmlspecialchars($getImage);
		$getContent=$_REQUEST["nContent"];
		$changeContent=htmlspecialchars($getContent);
		$getDate=$_REQUEST["nDate"];
		$getSheet=$_REQUEST["nType"];
		$sql="INSERT INTO `$getSheet`(`newsImage`, `newsContent`, `newsData`, `type`) VALUES ('".addslashes($changeImage)."','".addslashes($changeContent)."','".$getDate."','".$getSheet."')";
		$result=mysql_query($sql,$con);
		echo  $getSheet;
		mysql_close($con);
 ?>