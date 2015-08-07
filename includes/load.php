<?php
ini_set('display_errors', 1);
error_reporting(E_ALL ^ E_NOTICE);

/** The name of the database */
define('DB_NAME', 'db197255_cm');

/** MySQL database username */
define('DB_USER', 'db197255_cm');

/** MySQL database password */
define('DB_PASSWORD', 'IWEB2.5m3n');

/** MySQL hostname */
define('DB_HOST', 'internal-db.s197255.gridserver.com');

/** Root domain or folder the site runs from */
define('BASE_URL', 'http://edgeserver.net/fingers/');

/** Path to Root */
define('ROOT_PATH', $ENV{'SITE_HTMLROOT'});

/** Connect to MySQL */
$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if(!$db) {
    echo '<h1>Error Connecting to Databsae</h1>';
    die();
} else {
    session_start();
    /** Load classes */
    require_once('security.class.php');
    require_once('users.class.php');
    require_once('view.class.php');
    require_once('admin.class.php');
}
?>