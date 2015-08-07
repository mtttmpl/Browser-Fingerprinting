<?php require_once('includes/load.php'); ?>
<?php
    if(isset($_POST['uid'])) {
        setcookie("uid", $_POST['uid']);
        new security($_POST['uid']);
    } else {
        echo 'no uid provided';
    }
?>