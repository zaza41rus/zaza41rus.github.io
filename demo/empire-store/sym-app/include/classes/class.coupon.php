<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
class Coupon{
	var $error = '';
	var $msg = '';
	public $sdb;
	
	public function __construct(){
	global $db;
	 $this->sdb = $db;
	}
	
	public function is_coupon($code){
	$stmt = "SELECT * FROM  " . PFX . "coupons WHERE `code` = :code AND`active` = 1  ";
	$this->sdb->query($stmt);
	$this->sdb->bind(':code',$code);
	$coupon = $this->sdb->single();
	if($coupon){
	return $coupon ;
	}
	$this->error = "No such coupon exists";
	return false;
	}
	public function details($code){
		$details = $this->is_coupon($code);
		return $details;
	}
	
}
?>