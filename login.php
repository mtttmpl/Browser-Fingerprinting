<?php require_once('includes/load.php'); ?>
<?php
  if(isset($_GET['do_login'])) {
      $users = new users;
      $result = $users->do_admin_login($_POST['user'], md5($_POST['password']));
      if($result === true) {
        header("location: admin.php");
      }
  } elseif(isset($_GET['do_logout'])) {
      $users = new users;
      $users->do_admin_logout();
  }
?>
<?php
$view = new view;
$view->get_theme_part('header-login', array('title' => 'Login - Browser Fingerinting'));
?>
    <div class="container">
      <?php
        if(isset($result) && $result === false) {
          echo '<div class="alert alert-danger" role="alert" style="width: 300px;margin-left: auto;margin-right: auto;">We couldn\'t find a user matching that info. Please try again.</div>';
        }
      ?>
      <form class="form-signin" action='?do_login' method="POST">
        <h2 class="form-signin-heading">Sign In</h2>
        <input type="text" name="user" class="input-block-level" placeholder="Email address">
        <input type="password" name="password" class="input-block-level" placeholder="Password">
        <input type="hidden" name="return_to" value="">
        <button class="btn btn-large btn-primary" type="submit">Sign in</button>
      </form>

    </div> <!-- /container -->
<?php
$view->get_theme_part('footer-login');
?>