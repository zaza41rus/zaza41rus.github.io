<?php
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
class Order{

	 var $error = '';
	 var $msg = '';
	 public $sdb;
	
	public function __construct(){
	global $db;
	 $this->sdb = $db;
	}
 
	 	public function is_order($id){
		global $crypt;
		$id = $crypt->decrypt($id);
			$stmt ="SELECT * FROM  " . PFX . "orders WHERE id = :id";
			$this->sdb->query($stmt);
			$this->sdb->bind(':id',$id);
			$result = $this->sdb->single();
			if($result ){
			$result['id']= $crypt->encrypt($result['id']);
			$result['customer']= $crypt->encrypt($result['customer']);
			$result['address']= $crypt->encrypt($result['address']);
			if($_SESSION['uid'] == $result['customer']){
			return $result;
			}else{
			$this->error = "No such order exists";
			return false;
			}
			}
		$this->error = "No such order exists";
		return false;
	}
	
	public function all(){
	global $crypt;
	$cid = $crypt->decrypt($_SESSION['uid']);
	
	$stmt = "SELECT * FROM  " . PFX . "orders WHERE `customer` = :cid AND `callback` != '0' ORDER BY `id` DESC";
	$this->sdb->query($stmt);
	$this->sdb->bind(':cid',$cid);
	$orders = $this->sdb->resultset();
	for($i = 0; $i < count($orders); ++$i){
	$cid = $orders[$i]['customer'];
	$orders[$i]['customer'] =  $crypt->encrypt($cid);	
	$oid = $orders[$i]['id'];
	$orders[$i]['id'] =  $crypt->encrypt($oid);
	}
	return $orders;
	}
	public function details($id){
		$details = $this->is_order($id);
		return $details;
	}
	public function update($id,$column,$data){
	global $crypt;
	if($this->is_order($id)){
		$id = trim($id);
		$column = trim($column);
		$data = trim($data);
	 $id = $crypt->decrypt($id);
	$stmt = "UPDATE " . PFX . "orders  SET $column = :data WHERE id =:id";
			$this->sdb->query($stmt);
			$this->sdb->bind(':id',$id);
			$this->sdb->bind(':data',$data);
			$update = $this->sdb->execute();
			
	if($update){
		$this->msg = "Order updated successfully";
		return true;
	}
	}
	$this->error = "Error updating order";
	return false;
	}
	
	public function add($email,$address,$items,$net,$total,$tax,$shipping,$discount,$couponused,$gateway,$id = null){
	global $crypt;
		if($this->is_order($id)){
			return $id;
		}
		$email = trim($email);
		$address = trim($address);
		$address = $crypt->decrypt($address);
		$items =trim($items);
		$net= trim($net);
		$total= trim($total);
		$tax= trim($tax);
		$shipping= trim($shipping);
		$discount= trim($discount);
		$gateway = trim($gateway);
		
		$date = date('d M Y');
		$stmt = "INSERT INTO " . PFX . "orders (`id`, `date`, `items`,`net`, `amount`,`tax`,`discount`,`shipping`,`coupon`, `payment`, `status`,`customer`,`address`,`gateway`,`callback`,`seen`) VALUES (NULL, :date , :items , :net,:total ,:tax,:discount ,:shipping , :couponused , '2', '2',:email,:address,:gateway, '0', 'no')";
		$this->sdb->query($stmt);
		$this->sdb->bind(':date',$date);
		$this->sdb->bind(':items',$items);
		$this->sdb->bind(':net',$net);
		$this->sdb->bind(':total',$total);
		$this->sdb->bind(':tax',$tax);
		$this->sdb->bind(':discount',$discount);
		$this->sdb->bind(':shipping',$shipping);
		$this->sdb->bind(':couponused',$couponused);
		$this->sdb->bind(':email',$email);
		$this->sdb->bind(':address',$address);
		$this->sdb->bind(':gateway',$gateway);
		$add = $this->sdb->execute();
		if($add){
		$oid = $this->sdb->lastInsertId();
		
		$order_id= $crypt->encrypt($oid);
		return 	$order_id;
		}
		return false;
	}
	public function callback($id,$payment){
	global $product;
		if(isset($_SESSION['basket']['order_id'])){
			if($_SESSION['basket']['order_id'] == $id){
				switch($payment){
				case '1':
				$p = '1';
				break;	
				case '2':
				$p = '2';
				break;
				case '3':
				$p = '3';
				break;	
				default:
				$p = '2';
				break;	
			}
			$this->update($id, 'payment', $p);
			$this->update($id, 'callback', '1');
			foreach($_SESSION['basket']['items'] as $item){
			if($item['count'] > 0){
			$result = $product->stock($item['id'],$item['count']);
			}
			}
			}
		}
		unset($_SESSION['basket']);
		$_SESSION['sym-callback'] = true;
		$_SESSION['sym-order'] = $id;
		return true;
	}
}
?>