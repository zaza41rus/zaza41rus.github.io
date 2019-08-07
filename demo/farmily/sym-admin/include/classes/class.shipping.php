<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
class Shipping{
	var $error = '';
	var $msg = '';
	public $sdb;
	
	public function __construct(){
	global $db;
	 $this->sdb = $db;
	}
	public function region_all(){
	$stmt = "SELECT * FROM  " . PFX . "shipping_regions WHERE active = 1";
	$this->sdb->query($stmt);
	$shipping_regions = $this->sdb->resultset();
	if($shipping_regions){
	return $shipping_regions ;
	}
	return false;
	}
	public function per_page($start,$total){
	$stmt = "SELECT * FROM  " . PFX . "shipping_regions WHERE active = 1 LIMIT :start, :total";
	$this->sdb->query($stmt);
	$this->sdb->bind(':start',$start);
	$this->sdb->bind(':total',$total);
	$products = $this->sdb->resultset();
	if($products){
	return $products ;
	}
	return false;
	}
	public function count_all(){
	$stmt = "SELECT * FROM  " . PFX . "shipping_regions WHERE active = 1";
	$this->sdb->query($stmt);
	$products = $this->sdb->execute();
	$products = $this->sdb->rowCount();
	return $products ;
	}	
	public function is_region($id){
		$stmt = "SELECT * FROM  " . PFX . "shipping_regions WHERE id = :id AND  active = 1";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$shipping_region = $this->sdb->single();
		if($shipping_region){
		return $shipping_region ;
		}
		$this->error = "No such region exists";
		return false;
	}	
	public function region_by_zip($id){
		$stmt = "SELECT * FROM  " . PFX . "shipping_regions WHERE zip = :id AND  active = 1";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$shipping_region = $this->sdb->single();
		if($shipping_region){
		return $shipping_region ;
		}
		$this->error = "No such region exists";
		return false;
	}
	
	public function region_details($id){
	$details = $this->is_region($id);
		return $details;
	}
	public function region_add($name,$price,$zip){
		$name = trim($name);
		$price = trim($price);
		$zip = trim($zip);
		if($this->region_by_zip($zip)){
			$this->error = 'ZIP code already in use';
			return false;
		}
		$this->error ="";
		if(!is_numeric($price)){
			$this->error = 'Invalid Price';
			return false;
		}
		$price = number_format($price ,2,'.','');
		
	if(empty($name)){
			$this->error = 'Please input all details';
			return false;
		}
		
		$stmt = "INSERT INTO " . PFX . "shipping_regions (`id`, `name`,`zip`,`shipping`,`active`) VALUES (NULL, :name,:zip,:price,'1')";
		$this->sdb->query($stmt);
		$this->sdb->bind(':name',$name);
		$this->sdb->bind(':zip',$zip);
		$this->sdb->bind(':price',$price);
		$add = $this->sdb->execute();
	if($add){
		$this->msg = "Region added successfully";
		return true;
		}	
		$this->error = 'Error saving region';
		return false;	
	}
	
public function region_update($id,$name,$price,$zip){
		$name = trim($name);
		$price = trim($price);
		$zip = trim($zip);
		if(!is_numeric($price)){
			$this->error = 'Invalid Price';
			return false;
		}
		if($this->region_by_zip($zip)){
			$this->error = 'ZIP code already in use';
			return false;
		}
		$this->error ="";
		$price = number_format($price ,2,'.','');
		if($this->is_region($id)){
		if(empty($name)){
			$this->error = 'Please input region name';
			return false;
		}
		
	$stmt = "UPDATE " . PFX . "shipping_regions  SET `name` = :name,`shipping` = :price,`zip` = :zip WHERE id =:id";
		$this->sdb->query($stmt);
		$this->sdb->bind(':name',$name);
		$this->sdb->bind(':price',$price);
		$this->sdb->bind(':zip',$zip);
		$this->sdb->bind(':id',$id);
		$update = $this->sdb->execute();					
	if($update){
		$this->msg = "Region updated successfully";
		return true;
	}
	$this->error = "Error Saving region";
	return false;
	}
	$this->error = "Error Saving region";
	return false;
	}
	public function region_remove($id){
		if($this->is_region($id)){
		$stmt = "UPDATE " . PFX . "shipping_regions  SET `active` = '0' WHERE id =:id";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$update = $this->sdb->execute();	
								
	if($update){
		$this->msg = "Region removed successfully";
		return true;
	}
	$this->error = "Error removing region";
	return false;
	}
	$this->error = "Error removing region";
	return false;
	}
	
	
	
	
}
?>