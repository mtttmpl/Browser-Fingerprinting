<?php

class view {

    public function get_theme_part($part, $args=NULL) {
        if(file_exists(ROOT_PATH.'includes/theme/'.$part.'.php')) {
            include(ROOT_PATH.'includes/theme/'.$part.'.php');
            return true;
        } else {
            return false;
        }
    }
}

?>