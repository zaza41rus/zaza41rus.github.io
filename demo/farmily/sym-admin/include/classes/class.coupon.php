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
	public function all(){
	$stmt =  "SELECT * FROM  " . PFX . "coupons WHERE active = 1" ;
	$this->sdb->query($stmt);
	$coupon = $this->sdb->resultset();
	if($coupon){
	return $coupon ;
	}
	return false;
}
	public function is_coupon($id){
		$stmt = "SELECT * FROM  " . PFX . "coupons WHERE id = :id";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$coupon = $this->sdb->single();
		if($coupon){
		return $coupon ;
		}
		$this->error = "Этот купон больше не действителен";
		return false;
	}
	public function details($id){
		$details = $this->is_coupon($id);
		return $details;
	}
	public function add($code,$off,$type,$min){
		$code = trim($code);
		$code = strtoupper($code);
		$off = trim($off);
		$type = trim($type);
		$min = trim($min);
	if(empty($code) || empty($off)){
			$this->error = 'Пожалуйста, введите все данные';
			return false;
		}
		if(!is_numeric($off)){
			$this->error = 'Неверные данные';
			return false;
		}
		if(!is_numeric($type) || $type > 2 || $type < 1){
			$this->error = 'Неверные данные';
			return false;
		}
		if(!is_numeric($min)){
			$this->error = 'Неверные данные';
			return false;
		}
		
		if($type == '1' && $off > 100){
		$this->error = 'Неверная цена со скидкой';
			return false;
		}
				if($type == '2' && $off > $min){
		$this->error = 'Неверная цена со скидкой';
			return false;
		}
		if($type == '2'){
		$off = number_format($off,2);
		}
		
		
		$stmt ="INSERT INTO " . PFX . "coupons (`id`, `code`, `off`,`off_type`,`order_min`,`active`) VALUES (NULL, :code  , :off ,:type ,:min ,'1')";
		$this->sdb->query($stmt);
		$this->sdb->bind(':code',$code);
		$this->sdb->bind(':off',$off);
		$this->sdb->bind(':type',$type);
		$this->sdb->bind(':min',$min);
		$add = $this->sdb->execute();
	if($add){
		$this->msg = "Купон успешно добавлен";
		return true;
		}	
		$this->error = 'Ошибка сохранения купона';
		return false;	
	}
	
public function update($id,$code,$off,$type,$min){
		$code = trim($code);
		$code = strtoupper($code);
		$off = trim($off);
		$min = trim($min);
		if($this->is_coupon($id)){
		if(empty($code) || empty($off)){
			$this->error = 'Пожалуйста, введите все данные';
			return false;
		}
		if(!is_numeric($type) || $type > 2 || $type < 1){
			$this->error = 'Неверные данные';
			return false;
		}
		if(!is_numeric($off)){
			$this->error = 'Неверные данные';
			return false;
		}
		if(!is_numeric($min)){
			$this->error = 'Неверные данные';
			return false;
		}
		
				if($type == '1' && $off > 100){
		$this->error = 'Invalid discount price';
			return false;
		}
				if($type == '2' && $off > $min){
		$this->error = 'Неверная цена со скидкой';
			return false;
		}
		if($type == '2'){
		$off = number_format($off,2);
		}
		
		$stmt = "UPDATE " . PFX . "coupons  SET `code` = :code,`off` = :off,`off_type`= :type,`order_min` = :min WHERE id =:id";
		$this->sdb->query($stmt);
		$this->sdb->bind(':code',$code);
		$this->sdb->bind(':off',$off);
		$this->sdb->bind(':type',$type);
		$this->sdb->bind(':min',$min);
		$this->sdb->bind(':id',$id);
		$update = $this->sdb->execute();
								
	if($update){
		$this->msg = "Купон успешно обновлен";
		return true;
	}
	$this->error = "Ошибка сохранения купона";
	return false;
	}
	$this->error = "Ошибка сохранения купона";
	return false;
	}
	public function remove($id){
		if($this->is_coupon($id)){
		$stmt = "UPDATE " . PFX . "coupons  SET `active` = '0' WHERE id =:id";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$update = $this->sdb->execute();
								
	if($update){
		$this->msg = "Купон удален успешно";
		return true;
	}
	$this->error = "Ошибка удаления купона";
	return false;
	}
	$this->error = "Ошибка удаления купона";
	return false;
	}	
	public function restore($id){
		
		$stmt = "UPDATE " . PFX . "coupons  SET `active` = '1' WHERE id =:id";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$update = $this->sdb->execute();
								
	if($update){
		$this->msg = "Купон успешно восстановлен";
		return true;
	}
	$this->error = "Ошибка при восстановлении купона";
	return false;
	}
	
		public function deleted(){
	$stmt =  "SELECT * FROM  " . PFX . "coupons WHERE active = 0" ;
	$this->sdb->query($stmt);
	$coupon = $this->sdb->resultset();
	if($coupon){
	return $coupon ;
	}
	return false;
}
}
?>