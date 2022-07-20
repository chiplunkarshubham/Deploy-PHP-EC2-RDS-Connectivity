<html>
<head>
	<title>Welcome to my excellent blog</title>
</head>
<body>
<img src='https://aws-devops-cicddemoshubham.s3.amazonaws.com/achievement.jpg'>   <!--Optional-->
<h1>Welcome to my excellent blog</h1>
<?php
$dbserver = "mysqldaabase.c04odrrucaii.us-east-1.rds.amazonaws.com"; //endpoint for aws
$dbuser = "shubham";
$dbpassword = "password";
// In a production blog, we would not store the MySQL
// password in the document root. Instead, we would store it in a
// configuration file elsewhere on the web server VM instance.
$conn = new mysqli($dbserver, $dbuser, $dbpassword);
if (mysqli_connect_error()) 
{
        echo ("Database connection failed: " . mysqli_connect_error());
} 
else 
{
        echo ("Database connection succeeded.");
}
?>
</body>
</html>