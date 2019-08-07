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
		$this->error = 'Кол-во продуктов должно быть не мение 1. А лучше более...';
		return false;
		 
		}
	 	$verify_product = $product->is_product($id);
	 	if($verify_product){
		$pro_detail =$product->details($id);
		if(SHIPPINGMODE == '2'){
		$pro_detail['shipping'] = '0';
		}
		if($pro_detail['stock'] < 1){
		$this->error = 'Закончилось';
		return false;
			}
	 	if($option != null){
	 		$verify_option = $product->is_option($option);
	 		if($verify_option){
	 			$detail = $product->option_details($option);
	 			if(isset($_SESSION['basket']['items'][$id.'_'.$option])){
						$this->error = 'Хотите еще? Изменить кол-во можно в самой корзине.';
						return false;
					}
					
	 			$_SESSION['basket']['items'][$id.'_'.$option] = array('id'=>$id,'count'=>$qty,'name'=> $pro_detail['name'],'opt_name'=>  $detail['name'],'price'=>  $detail['price'],'stock'=>$pro_detail['stock'],'img'=>$pro_detail['image'],'opt_id'=>$detail['id'],'shipping'=> $pro_detail['shipping'],'region'=> $pro_detail['regions'],'type'=>'option');
				$this->msg = 'Продукт в корзине!';
	 			return true;
				}
			}
	 			if(isset($_SESSION['basket']['items'][$id])){
										$this->error = 'Хотите еще? Изменить кол-во можно в самой корзине.';
						return false;
				}
	 			$_SESSION['basket']['items'][$id] = array('id'=>$id,'count'=>$qty,'name'=> $pro_detail['name'],'opt_name'=>  null,'price'=>number_format($pro_detail['price'], 2, '.', ''),'stock'=>$pro_detail['stock'],'img'=>$pro_detail['image'],'opt_id'=>null,'shipping'=> $pro_detail['shipping'],'region'=> $pro_detail['regions'],'type'=>'product');
	 			$this->msg = 'Продукт в корзине!';
				return true;
	 	}

	 	$this->error = 'Упс! Ошибка. Видимо что-то случилось!';
		return false;
	 }
	 public function update($id,$count){
	  	if(is_numeric($count) && ctype_digit($count)){
	 		if(isset($_SESSION['basket']['items'][$id])){
			if($count > $_SESSION['basket']['items'][$id]['stock']){
			$this->error = 'Фото недоступно';
			return false;
			}
			if($count == '0'){
			unset($_SESSION['basket']['items'][$id]);
			$this->msg =  'Успешное удаление';
			if(count($_SESSION['basket']['items']) == 0){
			unset($_SESSION['basket']);
			$this->msg =  'Корзина обновлена';
			}
			return true;
			}
	 			$_SESSION['basket']['items'][$id]['count'] = $count;
	 			$this->msg =  'Корзина обновлена';
				return true;
	 		}
	 	}
		$this->error = 'Упс! Херь какаято - не обновилась корзина! Попробуйте еще раз';
	 	return false;
	 }
	 public function empty_cart(){
	 	unset($_SESSION['basket']);
	 	$this->msg =  'Корзина обновлена';
				return true;
	 	 }
	}
?>