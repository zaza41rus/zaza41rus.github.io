<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
class Category{
	var $error = '';
	var $msg = '';
	public $sdb;
	
	public function __construct(){
	global $db;
	 $this->sdb = $db;
	}
	
	public function all(){
	$stmt = "SELECT * FROM  " . PFX . "categories WHERE active = 1";
	$this->sdb->query($stmt);
	$categories = $this->sdb->resultset();
	if($categories){
		return $categories ;
	}
	return false;
}	
	public function is_category($id){
	$stmt = "SELECT * FROM  " . PFX . "categories WHERE id = :id AND  active = 1";
	$this->sdb->query($stmt);
	$this->sdb->bind(':id',$id);
	$category = $this->sdb->single();
	if($category){
	return $category ;
	}
	$this->error = "No such coupon exists";
	return false;
	}
	public function details($id){
		$details = $this->category($id);
		return $details;
	}
}
?>