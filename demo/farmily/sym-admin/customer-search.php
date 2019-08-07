<?php
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
$pagename = 'Search Customers'; 
require_once('./include/admin-load.php');
if($user->is_admin(USER)){
if(isset($_REQUEST['action']) && isset($_REQUEST['id'])){
			if($_REQUEST['action'] == "activate"){
				$result = $customer->status($_REQUEST['id'],'1');
				
			}
		if($_REQUEST['action'] == "deactivate"){
				$result = $customer->status($_REQUEST['id'],'0');
				
			}
		
}
if(!empty($_REQUEST['q'])){
	$customers = $customer->search($_REQUEST['q']);
}else{
$customers = array();
}
$currpage = (isset($_GET['page'])) ? $_GET['page'] : 1;
$maxres = 50;
$num = count($customers);
$pages = $num / $maxres;
$pages = ceil($pages);
$start = ( $currpage - 1 ) * $maxres ;
$last = $start + $maxres -1;

if(!empty($customer->msg)){
	$success = $customer->msg;
	}
	if(!empty($customer->error)){
	$error = $customer->error;
	}
}
////////////////
require_once('./header.php');
if($user->is_admin(USER)){
 ?>
<form role="search" style="">
    <div class="input-group">
		<input name="q" type="text" class="form-control input-block-level" placeholder="Search by name, id, phone no, email">
        <div class="input-group-btn">
            <button type="submit" class="btn btn-default">
				<span class="glyphicon glyphicon-search"></span> Search
            </button>
        </div>
    </div>
</form> 
<div class="text-center"><ul class="pagination">
<?php 
$i='';
$count= 1;
echo "<li><a href=\"customer-search.php?page=1\">First</a></li>";
for($i = 1 ; $i<=$pages ; $i++){
if(($currpage - $i) <=3  && ($count <= 7)){

echo "<li><a href=\"customer-search.php?page=" . $i . "\">" . $i . "</a></li>";
$count = $count+1 ;
}
elseif($currpage==$i){
echo "<li><a href=\"customer-search.php?page=" . $i . "\">" . $i . "</a></li>";
$count = $count+ 1;

}
}
echo "<li><a href=\"customer-search.php?page=" . $pages . "\">Last</a></li>";
?>
</ul></div>
<table class="table">
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Info</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<?php for($i = $start; $i <= $last; $i++) {
if (isset($customers[$i])){

	?>
<tr>
<td><?php echo $customers[$i]['id']; ?></a></td>
<td><?php echo $customers[$i]['name']; ?> </td>
<td><?php echo $customers[$i]['email']; ?> </td>
<td><?php echo $customers[$i]['mobile']; ?> </td>
 <td><a href='customer.php?id=<?php echo $customers[$i]['id']; ?>' class='btn btn-link'>Info</a></td>
<td><?php
if($customers[$i]['active'] == 1){ ?>
<a href="customer-search.php?id=<?php echo $customers[$i]['id']; ?>&action=deactivate&page=<?php echo $currpage;?>" class="status">Active</a>
<?php }else{ ?>
<a href="customer-search.php?id=<?php echo $customers[$i]['id']; ?>&action=activate&page=<?php echo $currpage;?>" class="status">Deactive</a>
<?php }  }
}?></tbody>

</table>
<?php } else {?>
<p><strong>You are not authorised to view this page.</strong></p>
<?php }

require_once('./footer.php');

?>
?>