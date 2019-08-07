<?php
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
class Address{
	 var $error = '';
	 var $msg = '';
	var $key = 'SYMBIOTIC';
	public $sdb;
	
	public function __construct(){
	global $db;
	 $this->sdb = $db;
	}
	 
	 	public function is_address($id){
		global $crypt;
		$id = $crypt->decrypt($id);
		$uid = $crypt->decrypt($_SESSION['uid']);
		$stmt = "SELECT * FROM  " . PFX . "address WHERE id = :id AND `customer` = :uid AND active = 1";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$this->sdb->bind(':uid',$uid);
		$address = $this->sdb->single();
		if($address){
		$cid = $address['customer'];
		$address['customer'] =  $crypt->encrypt($cid);
		return $address;
		}
		$this->error = "Хм. Подозреваем, что такого адреса не существует";
		return false;
	}
	
	public function all(){
	global $crypt;
	$uid = $crypt->decrypt($_SESSION['uid']);
	$stmt = "SELECT * FROM  " . PFX . "address WHERE  `customer` = :uid  AND `active` = 1 ORDER BY id DESC";
	$this->sdb->query($stmt);
	$this->sdb->bind(':uid',$uid);
	$address = $this->sdb->resultset();
	if($address){
	for($i = 0; $i < count($address); ++$i){
	$aid = $address[$i]['id'];
	$cid = $address[$i]['customer'];
	$address[$i]['id'] =  $crypt->encrypt($aid);
	$address[$i]['customer'] =  $crypt->encrypt($cid);
	}
	return $address ;
	}
	return false;
	}
	public function details($id){
		$details = $this->is_address($id);
		return $details;
	}
	public function update($id,$column,$data){
	global $crypt;
		$id = trim($id);
		$column = trim($column);
		$data = trim($data);
	if(empty($column) || empty($data)){
	$this->msg = false;
	$this->error = "Вы не заполнили все обязательные поля.";
	return false;
	}
	if($this->is_address($id)){
	$id = $crypt->decrypt($id);
		$stmt = "UPDATE " . PFX . "address  SET $column = :data WHERE id =:id";
		$this->sdb->query($stmt);
		$this->sdb->bind(":data",$data);
		$this->sdb->bind(":id",$id);
		$update = $this->sdb->execute();
	
	if($update){
		$this->msg = "Данные успешно обновлены";
		return true;
	}
	}
	$this->error = "Ошибка при обновлении";
	return false;
	}
	
	public function add($customer,$name,$address,$country,$region,$zip,$mobile){
	global $crypt;
	if(empty($customer) || empty($name) || empty($address) || empty($country)|| empty($region) || empty($zip) || empty($mobile)){
		$this->error = "Вы не заполнили все обязательные поля.";
	return false;
	}
	if(count($this->all()) >= 4){
	$this->error = "Вы можете добавить только 4 адреса. Удалите предыдущий для добавления нового адреса";
	return false;
	}
	$customer = $crypt->decrypt($customer);
	
		$stmt = "INSERT INTO " . PFX . "address (`id`, `customer`, `name`,`address`, `country`,`region`,`zip`,`mobile`,`active`) VALUES (NULL, :customer ,:name, :address , :country,:region ,:zip , :mobile,'1')";
		$this->sdb->query($stmt);
		$this->sdb->bind(":customer",$customer);
		$this->sdb->bind(":name",$name);
		$this->sdb->bind(":address",$address);
		$this->sdb->bind(":country",$country);	
		$this->sdb->bind(":region",$region);
		$this->sdb->bind(":zip",$zip);
		$this->sdb->bind(":mobile",$mobile);
		$add = $this->sdb->execute();
	if($add){
	$this->msg = 'Новый адрес добавлен';
		return true;
		}
		$this->error = 'Ошибка добавления нового адреса';
		return false;
	}
}
?>