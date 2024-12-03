<?php
require('connect.php');

// Retrieve the username and password from the form
$username = $_POST['user'];
$password = $_POST['pw'];

// Validate the input
if (empty($username) || empty($password)) {
    die('Please enter a username and password.');
}

// Query the database for a user with the given username and password
$sql = "SELECT * FROM rooms";
$results = mysqli_query($conn,$sql);
// This stuff is for testing
// while($column=mysqli_fetch_assoc($results)){
//     echo $column['roomNum'] . "<br/>";
//     echo $column['teacherName'] . "<br/>";
//     echo $column['teacherViewPassword'] . "<br/> <br/> <br/>";
// }
?>
<script type="text/javascript">
document.querySelector('form').style.display = 'none';
document.querySelector('#connectDIV').style.display = 'flex';
setTimeout(function() {
document.querySelector('#connectDIV').style.display = 'none';
document.querySelector('#tRoom').style.display = 'flex';
}, 1500);
document.querySelector('#tName').textContent = <?php echo json_encode($username); ?>;
</script>