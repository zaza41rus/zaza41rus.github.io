<?php
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
class Cart{
	 var $error = '';
	 var $msg = '';
	 public function add($id,$qty='1',$option =null){
	 	global $product;
	 	if($qty <= 0){
		$this->error = 'Количество продуктов должна быть 1 или более';
		return false;
		 
		}
	 	$verify_product = $product->is_product($id);
	 	if($verify_product){
		$pro_detail =$product->details($id);
		if(SHIPPINGMODE == '2'){
		$pro_detail['shipping'] = '0';
		}
		if($pro_detail['stock'] < 1){
		$this->error = 'Распродано';
		return false;
			}
	 	if($option != null){
	 		$verify_option = $product->is_option($option);
	 		if($verify_option){
	 			$detail = $product->option_details($option);
	 			if(isset($_SESSION['basket']['items'][$id.'_'.$option])){
						$this->error = 'Продукт уже в корзине';
						return false;
					}
					
	 			$_SESSION['basket']['items'][$id.'_'.$option] = array('id'=>$id,'count'=>$qty,'name'=> $pro_detail['name'],'opt_name'=>  $detail['name'],'price'=>  $detail['price'],'stock'=>$pro_detail['stock'],'img'=>$pro_detail['image'],'opt_id'=>$detail['id'],'shipping'=> $pro_detail['shipping'],'region'=> $pro_detail['regions'],'type'=>'option');
				$this->msg = 'Продукт добавлена в корзину успешно';
	 			return true;
				}
			}
	 			if(isset($_SESSION['basket']['items'][$id])){
										$this->error = 'Продукт уже в корзине';
						return false;
				}
	 			$_SESSION['basket']['items'][$id] = array('id'=>$id,'count'=>$qty,'name'=> $pro_detail['name'],'opt_name'=>  null,'price'=>number_format($pro_detail['price'], 2, '.', ''),'stock'=>$pro_detail['stock'],'img'=>$pro_detail['image'],'opt_id'=>null,'shipping'=> $pro_detail['shipping'],'region'=> $pro_detail['regions'],'type'=>'product');
	 			$this->msg = 'Продукт добавлена в корзину успешно';
				return true;
	 	}

	 	$this->error = 'Unexpected error';
		return false;
	 }
	 public function update($id,$count){
	  	if(is_numeric($count) && ctype_digit($count)){
	 		if(isset($_SESSION['basket']['items'][$id])){
			if($count > $_SESSION['basket']['items'][$id]['stock']){
			$this->error = 'Фото не доступено';
			return false;
			}
			if($count == '0'){
			unset($_SESSION['basket']['items'][$id]);
			$this->msg =  'Item removed successfully';
			if(count($_SESSION['basket']['items']) == 0){
			unset($_SESSION['basket']);
			$this->msg =  'Корзина успешно обновлена ';
			}
			return true;
			}
	 			$_SESSION['basket']['items'][$id]['count'] = $count;
	 			$this->msg =  'Корзина успешно обновлена';
				return true;
	 		}
	 	}
		$this->error = 'Корзина не обновляется, попробуйте еще раз';
	 	return false;
	 }
	 public function empty_cart(){
	 	unset($_SESSION['basket']);
	 	$this->msg =  'Корзина успешно обновлена';
				return true;
	 	 }
	}
?>