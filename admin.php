<?php require_once('includes/load.php'); ?>
<?php
$users = new users;
$auth = $users->auth();
if($auth === false) {
  header("location: login.php");
}
$view = new view;
$admin = new admin;
$security = new security;
if(isset($_GET['block'])) {
 $blockResult = $security->block($_GET['block']);
}
if(isset($_GET['unblock'])) {
  $unblockResult = $security->unblock($_GET['unblock']);
}

$view->get_theme_part('header', array('title' => 'Admin - Browser Fingerprinting'));
?>
    <div class="row-fluid">
        <?php
          if(isset($blockResult) && $blockResult === true) {
            echo '<div class="alert alert-success" role="alert">The fingerprint was blocked successfully.</div>';
          } elseif(isset($blockResult) && $blockResult === false) {
            echo '<div class="alert alert-danger" role="alert">Something went wrong when blocking the fingerprint. Please try again.</div>';
          }
          if(isset($unblockResult) && $unblockResult === true) {
            echo '<div class="alert alert-success" role="alert">The fingerprint was unblocked successfully.</div>';
          } elseif(isset($unblockResult) && $unblockResult === false) {
            echo '<div class="alert alert-danger" role="alert">Something went wrong when unblocking the fingerprint. Please try again.</div>';
          }
        ?>
        <div class="panel panel-default">
          <div class="panel-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Fingerprint</th>
                      <th>IP Address</th>
                      <th>Proxy</th>
                      <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                <?php
                    $logData = $admin->get_log();
                    if($logData === false) {
                      echo '<tr><td colspan="6">There is no log data to show at the moment</td></tr>';
                    } else {
                      $stopDupArray = array();
                      foreach($logData as $row) {
                        if(in_array($row['fingerprint'].'-'.$row['user'], $stopDupArray)) {

                        } else {
                          $stopDupArray[] = $row['fingerprint'].'-'.$row['user'];
                          ?>
                            <tr>
                              <td><?php echo $row['id']; ?></td>
                              <td><?php echo $row['user']; ?></td>
                              <td><?php echo $row['fingerprint']; ?></td>
                              <td><?php echo $row['ipaddress']; ?></td>
                              <td><?php echo $row['proxy']; ?></td>
                              <?php
                                if($security->check_block($row['fingerprint'])) {
                                  ?>
                                    <td><a href="?unblock=<?php echo $row['fingerprint']; ?>">Unblock</a></td>
                                  <?php
                                } else {
                                  ?>
                                    <td><a href="?block=<?php echo $row['fingerprint']; ?>">Block</a></td>
                                  <?php
                                }
                              ?>
                          </tr>
                          <?php
                        }
                      }
                    }
                ?>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
<?php
$view->get_theme_part('footer');
?>