<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
include("configDB.php");
if(isset($POST['username'],$POST['password'])){
   $email=$POST['username']; $password=md5($POST['password']);
$query=mysqlquery("SELECT * FROM userstbl WHERE Email='".$email."' AND Password='".$password."'");
if(mysqlnum_rows($query)>0){
   $response=true;
   
}else{
   $response=false;
}
}

?>
<?php
session_start(); //เปิด seesion เพื่อทำงาน

//กำหนดภาษาของเอกสารให้เป็น UTF-8
$username = $_POST[username];
//ประกาศซตัวแปรชื่อ username โดยการรับค่ามาจากกล่อง username ที่หน้า Login
$password = $_POST[password];
//ประกาศซตัวแปรชื่อ password โดยการรับค่ามาจากกล่อง password ที่หน้า Login
if($username == "") {                    
//ถ้ายังไม่ได้กรอกข้อมูลที่ชื่อผู้ใช้ให้ทำงานดังต่อไปนี้
echo "คุณยังไม่ได้กรอกชื่อผู้ใช้ครับ";
} else if($password == "") {        //ถ้ายังไม่ได้กรอกรหัสผ่านให้ทำงานดังต่อไปนี้
echo "คุณยังไม่ได้กรอกรหัสผ่านครับ";
} else {                                               //ถ้ากรอกข้อมูลทั้งหมดแล้วให้ทำงานดังนี้
include("connect.php");           //เรียก function สำหรับติดต่อฐานข้อมูลจากหน้า connect.php ขึ้นมา
$check_log = mysql_query("select * from user where Login_user =’$username’ and Pw_user =’$password’");                           
//ใช้ภาษา SQL ตรวจสอบข้อมูลในฐานข้อมูล
$num = mysql_num_rows($check_log);
//ให้เอาค่าที่ได้ออกมาประกาศเป็นตัวแปรชื่อ $num
if($num <=0) {                                                           //ถ้าหากค่าที่ได้ออกมามีค่าต่ำกว่า 1
echo "Username หรือ Password อาจจะผิดกรุณา Login ใหม่อีกครั้ง <br /><a href=’index.php’>Back</a>";
} else {
while ($data = mysql_fetch_array($check_log) ) {
//ถ้าค่ามีมากกว่า 0 ขึ้นไป ให้ดึงข้อมูลออกมาทั้งหมด
if($data[status_user]==admin){                          //ตรวจสอบสถานะของผู้ใช้ว่าเป็น Admin
echo "Hi Welcome Back Admin<br />";             //สร้าง session สำหรับให้ admin นำค่าไปใช้งาน
$_SESSION[ses_userid] = session_id();            //สร้าง session สำหรับเก็บค่า ID
$_SESSION[ses_username] = $username;      //สร้าง session สำหรับเก็บค่า Username
$_SESSION[ses_status] = "admin";                      //สร้าง session สำหรับเก็บค่า สถานะความเป็น Admin
echo "<meta http-equiv=’refresh’ content=’1;URL=index_admin.php’>";
//ส่งค่าจากหน้านี้ไปหน้า index_admin.php
echo "waiting…………………………";
}elseif($data[status_user]==user){                              //ตรวจสอบสถานะของผู้ใช้งานว่าเป็น user
$_SESSION[ses_userid] = session_id();                      //สร้าง session สำหรับให้ User นำไปใช้งาน
$_SESSION[ses_username] = $username;
$_SESSION[ses_status] = "user";
echo "<meta http-equiv=’refresh’ content=’1;URL=index_user.php’>";
//ส่งค่าจากหน้านี้ไปหน้า index_user.php
echo "<br /> Waiting User…………………………";
}else{
echo "You Are Boss";
$_SESSION[ses_userid] = session_id();
$_SESSION[ses_username] = $username;
$_SESSION[ses_status] = "boss";
echo "<meta http-equiv=’refresh’ content=’1;URL=index_boss.php’>";
echo "<br /> Waiting Boss…………………………";
}
}
}
}
?>