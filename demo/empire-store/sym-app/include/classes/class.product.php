<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
class Product{
	var $error = '';
	var $msg = '';
	public $sdb;
	
	public function __construct(){
	global $db;
	 $this->sdb = $db;
	}
	
	public function all(){
	$stmt = "SELECT * FROM  " . PFX . "products WHERE active = 1";
	$this->sdb->query($stmt);
	$products = $this->sdb->resultset();
	if($products){
	for($i = 0; $i < count($products); ++$i){
	$pid = $products[$i]['id'];
	$products[$i]['image'] = $this->get_primary_image($pid);
	}
	return $products ;
	}
	return false;
	}	
	public function by_category($cat){
	$stmt = "SELECT * FROM  " . PFX . "products WHERE category = :cat  AND active = 1";
	$this->sdb->query($stmt);
	$this->sdb->bind(':cat',$cat);
	$products = $this->sdb->resultset();
	if($products){
	for($i = 0; $i < count($products); ++$i){
	$pid = $products[$i]['id'];
	$products[$i]['image'] = $this->get_primary_image($pid);
	}
	return $products ;
	}
	return false;
	}	
	
	public function is_product($id){
	$stmt = "SELECT * FROM  " . PFX . "products WHERE active = 1  AND id = :id";
	$this->sdb->query($stmt);
	$this->sdb->bind(':id',$id);
	$product = $this->sdb->single();
	if($product){
	$pid = $product['id'];
	$product['image'] = $this->get_primary_image($pid);
	return $product ;
	}
	$this->error = "No such product exists";
	return false;
	}
	
	public function is_option($id){
	$stmt = "SELECT * FROM  " . PFX . "options WHERE  id = :id AND active = 1 ";
	$this->sdb->query($stmt);
	$this->sdb->bind(':id',$id);
	$product = $this->sdb->single();
	if($product){
	$pid = $product['id'];
	$product['image'] = $this->get_primary_image($pid);
	return $product ;
	}
	$this->error = "No such product exists";
	return false;
	}
	
	public function details($id){
		$details = $this->is_product($id);
		return $details;
	}
	
	public function option_details($id){
		$details = $this->is_option($id);
		return $details;
	}
	
	
	public function options($id){
		if($this->is_product($id)){
	
		$stmt = "SELECT * FROM " . PFX . "options WHERE product_id = :id AND active = '1'";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$products = $this->sdb->resultset();
		if($products){
		return $products ;
		}
		}
		$this->error = "Product not found";
		return false;
	}
public function stock($id,$stock){
		$id = trim($id);
		$stock = trim($stock);
		if(!is_numeric($stock)){
			$this->error = 'Unknown error';
			return false;
		}
		$details = $this->is_product($id);
		if($details){
		$newStock = $details['stock'] - $stock ;
			$stmt ="UPDATE " . PFX . "products SET `stock` = :newStock  WHERE `id` = :id";
			$this->sdb->query($stmt);
			$this->sdb->bind(':id',$id);
			$this->sdb->bind(':newStock',$newStock);
			$update = $this->sdb->execute();						
		if($update){
			$this->msg = "Product updated successfully";
			return true;
		}
		$this->error = "Error Saving Product";
		return false;
		}
		$this->error = "Error Saving Product";
		return false;
		}
		public function search($q){
		$stmt ="SELECT * FROM  " . PFX . "products WHERE ( name LIKE :q OR description LIKE :q)  AND active = 1 LIMIT 0, 20";
		$query = "%" .$q. "%";
		$this->sdb->query($stmt);
		$this->sdb->bind(':q',$query);
		$products = $this->sdb->resultset();
		if($products){
		for($i = 0; $i < count($products); ++$i){
		$pid = $products[$i]['id'];
		$products[$i]['image'] = $this->get_primary_image($pid);
		}
		return $products ;
		}
		$this->error = "No results for your query";
		return false;
	}
		function get_images($id){
		$stmt = "SELECT * FROM  " . PFX . "products_images WHERE product_id = :id AND `active` = 1";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$images = $this->sdb->resultset();
		if($images){
		return $images ;
		}
		return false;
	}
		
	function get_primary_image($id){
		$stmt = "SELECT * FROM  " . PFX . "products_images WHERE `product_id` = :id AND `primary` = 1 AND `active` = 1";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$image = $this->sdb->single();
		if($image){
		return $image['image'] ;
		}
		return 'no-image.svg';
	}
	
}
?>