<?php
class users {
    function do_login($user, $password, $fingerprint) {
        global $db;
        $is_blocked = new security($fingerprint, false);
        if($is_blocked->blocked == 'not blocked') {
            if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
                $ip = $_SERVER['HTTP_CLIENT_IP'];
                $proxy = '1';
            } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
                $proxy = '1';
            } else {
                $ip = $_SERVER['REMOTE_ADDR'];
                $proxy = '0';
            }
            $time = strtotime("now");
            $query_string = "INSERT INTO `login_log` (`time`, `user`, `fingerprint`, `ipaddress`, `proxy`) VALUES ('$time', '$user', '$fingerprint', '$ip', '$proxy')";
            $db->query($query_string);
            // check login details correct here
            return true;
        } else {
            return false;
        }
    }

    function auth() {
        if(isset($_SESSION['user']['id'])) {
            return true;
        } else {
            return false;
        }
    }

    function do_admin_login($user, $password) {
        global $db;
        $query_string = "SELECT * FROM `users` WHERE `email` = '$user' AND `password` = '$password'";
        $query = $db->query($query_string);
        if($query->num_rows > 0) {
            $data = $query->fetch_assoc();
            $_SESSION['user']['id'] = $data['id'];
            return true;
        } else {
            return false;
        }
    }

    function do_admin_logout() {
        session_destroy();
    }
}
?>