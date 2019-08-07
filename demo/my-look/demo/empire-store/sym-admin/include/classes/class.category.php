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
	$products = $this->sdb->resultset();
	if($products){
	return $products ;
	}
	return false;
	}	
	public function is_category($id){
		$stmt = "SELECT * FROM  " . PFX . "categories WHERE active = 1  AND id = :id";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$category = $this->sdb->single();
		if($category){
		return $category ;
		}
		$this->error = "No such category exists";
		return false;
	}
	public function details($id){
		$details = $this->is_category($id);
		return $details;
	}
	public function add($name,$slang){
		$name = trim($name);
		$slang = trim($slang);
		
		if(empty($slang) || empty($name)){
			$this->error = 'Please input Category name and slang';
			return false;
		}
		$stmt = "INSERT INTO " . PFX . "categories (`id`, `name`, `slang`,`products`,`active`) VALUES (NULL, :name  , :slang ,'0','1')";
		$this->sdb->query($stmt);
		$this->sdb->bind(':name',$name);
		$this->sdb->bind(':slang',$slang);
		$add = $this->sdb->execute();
	if($add){
		$this->msg = "Category added successfully";
		return true;
		}	
		$this->error = 'Error saving Category';
		return false;	
	}
	
	public function update($id,$name,$slang,$products){
		$name = trim($name);
		$slang = trim($slang);
		$products = trim($products);
		if($this->is_category($id)){
		
		$stmt = "UPDATE " . PFX . "categories  SET `name` = :name ,`slang` = :slang ,`products` = :products  WHERE id =:id";
		$this->sdb->query($stmt);
		$this->sdb->bind(':name',$name);
		$this->sdb->bind(':slang',$slang);
		$this->sdb->bind(':products',$products);
		$this->sdb->bind(':id',$id);
		$update = $this->sdb->execute();
								
	if($update){
		$this->msg = "Category updated successfully";
		return true;
	}
	$this->error = "Error Saving Category";
	return false;
	}
	$this->error = "Error Saving Category";
	return false;
	}
	public function remove($id){
		if($this->is_category($id)){
		$img = $this->details($id);
		$img = $img['image'];
		
		$stmt = "UPDATE " . PFX . "categories  SET `active` = '0'  WHERE id =:id";
		$this->sdb->query($stmt);
		$this->sdb->bind(':id',$id);
		$update = $this->sdb->execute();
								
	if($update){
	$this->msg  =  "Category removed successfully";
		return true;
	}
	$this->error = "Error Removing Category";
	return false;
	}
	$this->error = "Error Removing Category";
	return false;
	}
}
?>