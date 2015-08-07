<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title><?php if(isset($args['title'])) { echo $args['title']; } ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="<?php echo BASE_URL; ?>assets/css/bootstrap.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
      .sidebar-nav {
        padding: 9px 0;
      }

      @media (max-width: 980px) {
        /* Enable use of floated navbar text */
        .navbar-text.pull-right {
          float: none;
          padding-left: 5px;
          padding-right: 5px;
        }
      }
    </style>
    <link href="<?php echo BASE_URL; ?>assets/css/bootstrap-responsive.css" rel="stylesheet">
    <link href="<?php echo BASE_URL; ?>assets/css/custom.css" rel="stylesheet">
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="<?php echo BASE_URL; ?>assets/js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo BASE_URL; ?>assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo BASE_URL; ?>assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo BASE_URL; ?>assets/ico/apple-touch-icon-72-precomposed.png">
                    <link rel="apple-touch-icon-precomposed" href="<?php echo BASE_URL; ?>assets/ico/apple-touch-icon-57-precomposed.png">
                                   <link rel="shortcut icon" href="<?php echo BASE_URL; ?>assets/ico/favicon.png">
  </head>

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="../" class="navbar-brand">Browser Fingerprinting</a>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <li>
              <a href="<?php echo BASE_URL; ?>">Home</a>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a href="login.php?do_logout">Log Out</a></li>
          </ul>

        </div>
      </div>
    </div>
    <div class="container fixed-top-margin">