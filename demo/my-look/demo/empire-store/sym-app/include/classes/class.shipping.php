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
	public function region_details($id){
	$details = $this->is_region($id);
		return $details;
	}
		
	
}
?>