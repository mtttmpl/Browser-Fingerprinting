<?php
class admin {
    function get_log() {
        global $db;
        $query_string = "SELECT * FROM login_log";
        $query = $db->query($query_string);
        if($query->num_rows > 0) {
            $data = array();
            while($row = $query->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        } else {
            return false;
        }
    }

    function get_fingerprint($fingerprint) {
        global $db;
        $query_string = "SELECT * FROM login_log WHERE `fingerprint` = '$fingerprint'";
        $query = $db->query($query_string);
        if($query->num_rows > 0) {
            $data = array();
            while($row = $query->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        } else {
            return false;
        }
    }
}
?>