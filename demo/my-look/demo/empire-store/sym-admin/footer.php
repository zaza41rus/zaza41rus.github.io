</div>

</div>
<div class="row-fluid"><div class="col-md-10 col-md-offset-2 text-right"><hr><a href="http://bakemysite.com">&copy; BakeMySite <?php echo date('Y');?></a></div></div><br />
</div>
<div class="navbar navbar-inverse navbar-default navbar-fixed-top"><div class="container-fluid"><div class="navbar-header">
      <button data-target=".bs-navbar-collapse" data-toggle="collapse" type="button" class="navbar-toggle">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.php">Symbiotic Cart</a>
    </div>
	<nav role="navigation" class="collapse navbar-collapse bs-navbar-collapse">
<ul class="nav navbar-nav">
<li><a href="orders.php">Orders <?php if($num_new > 0){echo "<span class=\"badge\">".$num_new."</span>";}?></a></li>
<li><a href="product-add.php">Add product</a></li>
<li><a href="integration.php">Integration</a></li>
</ul>
<ul class="nav navbar-nav navbar-right"><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#" ><i class="icon-user icon-white"></i> <?php echo USER;?> <b class="caret"></b>&nbsp;&nbsp;</a><ul class="dropdown-menu">
<li><a href="<?php echo $setting['website_url'];  ?>" target="_blank">Visit Website</a></li>
<li><a href="settings.php">Website Settings</a></li>
<li><a href="settings-admins.php?edit=1&user=<?php echo USER;?>">Account Settings</a></li>
<li><a href="login.php?action=logout">Sign Out</a></li>
</ul></li></ul></nav></div></div>
</ul></li></ul></nav></div></div>
</body>
</html>