<?php require_once('includes/load.php'); ?>
<?php
    if(isset($_GET['do_login'])) {
        $users = new users;
        if(isset($_COOKIE['uid'])) {
            $finderprint = $_COOKIE['uid'];
        } else {
            $fingerprint = null;
        }
        $result = $users->do_login($_POST['user'], $_POST['password'], $_COOKIE['uid']);
        if($result == true) {
            echo 'Logged in';
        } else {
            echo 'not logged in';
        }
    }
?>
<html>
    <head>
    <script type="text/JavaScript" src="//code.jquery.com/jquery.js"></script>
    <script type="text/JavaScript" src="js/fingerprint.js"></script>
    <script type="text/JavaScript" src="js/swfobject-2.2.min.js"></script>
    <script type="text/JavaScript" src="js/evercookie.js"></script>
    </head>
    <body>
        <div>
        <form action="?do_login" method="POST">
            <input type="text" name="user" />
            <input type="password" name="password" />
            <input type="Submit" name="Login" />
        </form>
        </div>
        <script type="text/javascript">
            var evercookie = new evercookie({
                baseurl: '/fingerprinting', // http://edgeserver.net/fingers - where the application runs on server
                asseturi: '/assets', // http://edgetserver.net/finders/assets - where the assets folders relative to baseurl
                phpuri: '/includes' // http://edgeserver.net/finges/includes - where evercookie php files are relative to baseurl
            });
            function getPhpCookie(name) {
                var dc = document.cookie;
                var prefix = name + "=";
                var begin = dc.indexOf("; " + prefix);
                if (begin == -1) {
                    begin = dc.indexOf(prefix);
                    if (begin != 0) { return null; }
                } else {
                    begin += 2;
                    var end = document.cookie.indexOf(";", begin);
                    if (end == -1) {
                        end = dc.length;
                    }
                }
                return unescape(dc.substring(begin + prefix.length, end));
            }
            function set_fingerprint() {
                var fingerprint = generate_fingerprint();
                //evercookie.set("uid", fingerprint);
                return fingerprint;
            }

            function check_fingerprint(fingerprint) {
                $.post("check_fingerprint.php",
                  {
                    uid: fingerprint
                  })
                  .done(function(data){ return data; })
                  .fail(function(){ return 'failed'; })
                ;
            }

            function handle_blocked(blocked_status) {
                if(blocked_status == 'no uid provided') {
                    return 'no uid provided';
                } else if(blocked_status == 'blocked') {
                    //$('html').html("");
                    return 'blocked';
                } else {
                    return 'not blocked';
                }
            }

            function getCookie(best_candidate, all_candidates) {
                if(best_candidate == null || best_candidate == undefined) { // no evercookie is found, build fingerprint and set
                    var fingerprint = set_fingerprint();
                } else {
                    var gen_fingerprint = generate_fingerprint();
                    if(best_candidate == gen_fingerprint) {
                        var fingerprint = best_candidate;
                    } else {
                        var fingerprint = set_fingerprint();
                    }
                }
                alert(fingerprint);
                var blocked_status = check_fingerprint(fingerprint); // check if fingerpring is blocked
                if(blocked_status !== false) {
                    blocked_status = handle_blocked(blocked_status);
                } else {
                    location.reload();
                }
            }
            $(document).ready(function() {
                //var cookie = getPhpCookie("uid");
                var cookie = null;

                if (cookie == null) {
                    evercookie.get("uid", getCookie);
                }
            });
        </script>
    </body>
</html>