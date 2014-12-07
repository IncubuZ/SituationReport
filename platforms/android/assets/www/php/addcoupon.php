<?php
include("configDB.php");
 
$category = $_POST['Category'];
$website = $_POST['Website'];
$title  = $_POST['CouponTitle'];
$description = $_POST['CouponDescription'];
$code = $_POST['CouponCode'];
$affiliatelink = $_POST['AffiliateLink'];
$affiliateimage = $_POST['AffiliateImage'];
 
 

$query = "INSERT INTO Coupons(Category,Website,CouponTitle,CouponDescription,CouponCode,AffiliateLink,AffiliateImage) VALUES ('$category','$website','$title','$description','$code', '$affiliatelink', '$affiliateimage')";
 
mysql_query($query);
 
mysql_close();
echo "You successfully added your Coupon";  
?>