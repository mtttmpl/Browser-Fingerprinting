<?php require_once('includes/load.php'); ?>
<html>
    <head>
    <script type="text/JavaScript" src="//code.jquery.com/jquery.js"></script>
    <script type="text/JavaScript" src="js/fingerprint.js"></script>
    <script type="text/JavaScript" src="js/swfobject-2.2.min.js"></script>
    <script type="text/JavaScript" src="js/evercookie.js"></script>
    </head>
    <body>
        <div class="log_target">
            PHP found no cookie or fingerprint in cookie was not on the blocked list in the database<br />
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
                evercookie.set("uid", fingerprint);
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
                // for demo only output to log area
                for (var item in all_candidates) {
                    $('.log_target').append("Storage mechanism " + item +" returned " + all_candidates[item] + "<br>");
                }
                if(best_candidate == null || best_candidate == undefined) { // no evercookie is found, build fingerprint and set
                    var fingerprint = set_fingerprint();
                    // for demo output to log area
                    $('.log_target').append("No Evercookie found<br />Building new fingerprint<br />Setting Evercookie<br />");
                } else {
                    // for demo output to log area
                    $('.log_target').append("evercookie found: "+best_candidate+"<br />");
                    // for demo output to log area
                    var gen_fingerprint = generate_fingerprint();
                    $('.log_target').append("generate fingerprint to verify no tampering: "+gen_fingerprint+"<br />");
                    if(best_candidate == gen_fingerprint) {
                        $('.log_target').append("No tampering found<br />");
                        var fingerprint = best_candidate;
                    } else {
                        $('.log_target').append("Tampering found<br />Building new fingerprint<br />Setting Evercookie<br />");
                        var fingerprint = set_fingerprint();
                        $('.log_target').append("Generated fingerprint is "+fingerprint+"<br />");
                    }
                    $('.log_target').append("AJAX call to check if fingerprint generated is not blcoked<br />");
                }
                var blocked_status = check_fingerprint(fingerprint); // check if fingerpring is blocked
                if(blocked_status !== false) {
                    blocked_status = handle_blocked(blocked_status);
                    $('.log_target').append("AJAX returned: "+blocked_status+"<br />");
                } else {
                    $('.log_target').append("AJAX failed, force reload for php to pick up http cookie<br />");
                    location.reload();
                }
            }
            $(document).ready(function() {
                var cookie = getPhpCookie("uid");

                if (cookie == null) {
                    evercookie.get("uid", getCookie);
                } else {
                    $('.log_target').append("Found HTTP cookie, page loaded so assume no block in place<br />");
                }
            });
        </script>
    </body>
</html>