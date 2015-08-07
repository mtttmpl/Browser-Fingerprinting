<?php
class security {
    public $blocked = null;

    function __construct($uid = null, $ajax = true) {
       if($uid == null) {
           if(isset($_COOKIE['uid'])) {
                $status = $this->check_block($_COOKIE['uid']);
                if($status == true) {
                    echo 'PHP found cookie and matched to blocked ID';
                    die();
                }
           }
       } else {
            $status = $this->check_block($uid);
            if($status == true) {
                if($ajax == true) {
                    echo 'blocked';
                    die();
                } else {
                    $this->blocked = 'blocked';
                }
            } else {
                if($ajax == true) {
                    echo 'not blocked';
                    die();
                } else {
                    $this->blocked = 'not blocked';
                }
            }
       }
    }

    function check_block($fingerprint) {
        global $db;
        $query_string = "SELECT * FROM `blocked_fingers` WHERE `fingerprint` = '$fingerprint'";
        $query = $db->query($query_string);
        if($query->num_rows > 0) {
            return true;
        } else {
            return false;
        }
    }

    function block($fingerprint) {
        global $db;
        $time = strtotime("now");
        $query_string = "INSERT INTO `blocked_fingers` (`fingerprint`, `time`) VALUES ('$fingerprint', '$time')";
        if($db->query($query_string)) {
            return true;
        } else {
            return false;
        }

    }

    function unblock($fingerprint) {
        global $db;
        $query_string = "DELETE FROM `blocked_fingers` WHERE `fingerprint` = '$fingerprint'";
        if($db->query($query_string)) {
            return true;
        } else {
            return false;
        }
    }
}
?>