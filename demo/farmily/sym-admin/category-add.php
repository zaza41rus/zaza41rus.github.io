<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
$pagename = 'Add category'; 
require_once('./include/admin-load.php');

if(isset($_REQUEST['cat_name']) && isset($_REQUEST['cat_slang'])){

	
		
	$name = trim($_REQUEST['cat_name']);
	$slang = trim($_REQUEST['cat_slang']);
	$result =$category->add($name,$slang);

}
if(!empty($category->msg)){
	$success = $category->msg;
	}
	if(!empty($category->error)){
	$error = $category->error;
	}
require_once('./header.php');

?><ul class="nav nav-pills"><li>
<a href="categories.php" >Categories</a></li></ul>
<hr>
<form action="category-add.php" method="post" class="form-horizontal">

<div class="form-group">
<label class="col-md-3 control-label text-right" for="">Category Name:</label><div class="col-md-4">
<input class="form-control" required type="text" name="cat_name" value="" id=""></div></div>
<div class="form-group">
<label class="col-md-3 control-label text-right" for="">Category Slang:</label><div class="col-md-4">
<input class="form-control"required type="text" name="cat_slang" value="" id=""></div>
</div>
<div class="form-group"><div class="col-md-4 col-md-offset-3">
<button class="btn btn-primary">Save</button></div></div>
</form>

<?php
require_once('./footer.php');

?>