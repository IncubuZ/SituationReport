<? 
$server = "mysql.hostinger.in.th";
$username = "u754078369_admin";
$password = "74767375";
$database = "u754078369_srdb";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
mysql_select_db($database, $con); ?>