<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
$pagename = 'Детали заказа'; 
require_once('./include/admin-load.php');
if(isset($_REQUEST['id'])){
	if(!empty($_REQUEST['id'])){
	
			$result = $order->update($_REQUEST['id'], "seen", "yes");
		$order->msg = false;
		
		if(isset($_REQUEST['action'])) { 
		if(isset($_REQUEST['status'])){
			if($_REQUEST['action'] == "paymentstatus"){
				$result = $order->update($_REQUEST['id'], "payment", $_REQUEST['status']);
			}
		if($_REQUEST['action'] == "orderstatus"){
				$result = $order->update($_REQUEST['id'], "status", $_REQUEST['status']);
			}
			}
		
			if($_REQUEST['action'] == "track"){
			$result = $order->update($_REQUEST['id'], "track", $_REQUEST['track']);
			}
			if($_REQUEST['action'] == "trackurl"){
			$result = $order->update($_REQUEST['id'], "track_url", $_REQUEST['track_url']);
			}
			if($_REQUEST['action'] == "remarks"){
			$result = $order->update($_REQUEST['id'], "remarks", $_REQUEST['remarks']);
			}
					}
			
		$details = $order->details($_REQUEST['id']);
		if(!isset($details['id'])){
		unset($details);
		}
	}else{
		header("location:orders.php");
	}
	}
	if(!empty($order->msg)){
	$success = $order->msg;
	}
	if(!empty($order->error)){
	$error = $order->error;
	}
require_once('./header.php');

?><ul class="nav nav-pills"><li>
<a href="orders.php" >Все заказы</a></li><li><a href="orders-new.php" >Новые заказы</a></li><li><a href="orders-monthly.php" >Ежемесячные заказы</a></li><li><a href="create-invoice.php" >Создание счетов-фактур</a></li></ul><hr>
<?php if(!isset($details)){?>
<div class="col-md-12">
<form action="order-details.php" method="get" class="form-inline">
<h4>Подробнее о заказе</h4>
 <div class="form-group">
<input class="form-control"type="text" name="id" placeholder="Номер заказа" required></div> 
<button class="btn btn-default">Показать детали</button>
</form></div>
<?php } else { 
switch ($details['payment']){
	case '1':
	$payment = 'Выполнен';
	break;
	case '2':
	$payment = 'В ожидании';
	break;
	case '3':
	$payment = 'Ошибка заказа';
	break;
	case '4':
	$payment = 'Возвращенный';
	break;
	default:
	$payment = 'Неизвесно';	
}
switch ($details['status']){
	case '1':
	$status = 'Выполнен';
	break;
	case '2':
	$status = 'В ожидании';
	break;
	case '3':
	$status = 'Отменен';
	break;
	case '4':
	$status = 'Отправлен';
	break;
	case '5':
	$status = 'Доставлен';
	break;
	case '6':
	$status = 'Возвращенный';
	break;
	default:
	$status = 'Неизвесно';
}
$details['coupon'] = !empty($details['coupon']) ? $details['coupon']: 'Нету';

 ?>
<h2>Заказ ID: <?php echo $_REQUEST['id']; ?></h2>

<table  style="width:100%;">
<tr>
<th></th>
<th>Адрес доставки</th>
</tr>
<tr>
<td>
<b>E-mail клиента:</b> <?php $x = $customer->details($details['customer']); echo $x['email'];?><br>
<b>Дата:</b> <?php echo $details['date']; ?><br>
</td>
<td>
<?php
$addr_details = $address->details($details['address']);
?>
<table><tr><td>
Имя:</td><td><?php echo $addr_details['name'];?></td></tr><tr><td>
Телефон:</td><td><?php echo $addr_details['mobile'];?></td></tr><tr><td>
Адрес:</td><td><?php echo nl2br($addr_details['address']);?></td></tr><tr><td>
Страна:</td><td><?php echo $addr_details['country'];?></td></tr><tr><td>
Индекс: </td><td><?php echo $addr_details['zip'];?></td></tr>
</table>
</td>
</tr>
</table>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Все заказы</th>
<th>Купон на скидку</th>
<th>Tax</th>
<th>Доставка</th>
<th>Итого к оплате</th>
<th>Способ оплаты</th>
<th>Статус оплаты</th>
<th>Статус заказа</th>
</tr>
</thead>
<tbody>
<tr>
<td><?php echo $setting['currency_symbol'] ." ".$details['amount']; ?></td>
<td><?php echo $setting['currency_symbol'] ." ". $details['discount'] . "<br /><small>" .$details['coupon'] . "</small>"; ?></td>
<td><?php echo $setting['currency_symbol'] ." ".$details['tax']; ?></b></td>
<td><?php echo $setting['currency_symbol'] ." ".$details['shipping']; ?></b></td>
<td><?php echo $setting['currency_symbol'] ." ".$details['net']; ?></b></td>
<td><?php echo $details['gateway'];?></td>
<td><?php echo $payment; ?></td>
<td><?php echo $status; ?></td>
</tr>
</tbody>
</table>
<h2>Предметы</h2>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Продукт ID</th>
<th>Продукт имя</th>
<th>Опции</th>
<th>Цена</th>
<th>Кол-во</th>
<th>Итого цена</th>
</tr>
</thead>
<tbody><?php 
$products = json_decode($details['items'],true);
$i = 0;
foreach($products as $pro){
	$i = $i + 1;
$pro['price'] =  number_format($pro['price'], 2, '.', '');
if($pro['shipping'] != 0){
		$append = "<br><small>Shipping: ". $setting['currency_symbol'] ." " .$pro['shipping']."</small>";
		}else{
		$append ="";
		}
		if(empty($pro['opt_name'])){
	$pro['opt_name'] = "Нету";
	}
?>
<tr>

<td><?php echo $pro['id']; ?></td>
<td><span class="sym-img" data-show-lightbox="false" data-responsive="false" data-size="small" data-pid="<?php echo $pro['id']; ?>"></span> <?php echo $pro['name']; ?></td>
<td><?php echo $pro['opt_name']; ?></td>
<td><?php echo $setting['currency_symbol'] ." " .number_format($pro['price'], 2, '.', '')  .$append ; ?></td>
<td><?php echo $pro['count']   ; ?></td>
<td><?php echo $setting['currency_symbol'] ." " .number_format($pro['price']  * $pro['count'], 2, '.', '');?></td>
</tr>
<?php } ?>
</tbody>
</table>
<h2>Обновление заказа</h2>

<table class="table">
<tr>
<td><form action="order-details.php?id=<?php echo $details['id']; ?>" method="post" class="form-inline">
Трек ID<br><span class="col-md-8 no-gutter">
<input class="form-control"type="text"  required value="<?php echo $details['track'];?>" name="track" placeholder="Tracking ID" >
 <input class="form-control"type="hidden" name="action" value="track"></span><span class="col-md-4 no-gutter">
<button class="btn btn-default">Обновить</button></span>
</form></td>
<td><form action="order-details.php?id=<?php echo $details['id']; ?>" method="post" class="form-inline">
Трек URL<br><span class="col-md-8 no-gutter">
<input class="form-control"type="text"  class="input-small" required value="<?php echo $details['track_url'];?>" name="track_url" placeholder="Tracking URL" id="track_url">

<input class="form-control"type="hidden" name="action" value="trackurl"></span><span class="col-md-4 no-gutter">
<button class="btn btn-default">Обновить</button></span>
</form></td>
<td><form action="order-details.php?id=<?php echo $details['id']; ?>" method="post" class="form-inline">
Замечания<br><span class="col-md-8 no-gutter">
<textarea class="form-control" name="remarks"   class="input-small" required ><?php echo $details['remarks'];?></textarea>

<input class="form-control"type="hidden" name="action" value="remarks"></span><span class="col-md-4 no-gutter">
<button class="btn btn-default">Обновить</button></span>
</form></td>
<td></td>
</tr>
<tr><td>
<form action="order-details.php?id=<?php echo $details['id']; ?>" method="post" class="form-inline">
Статус оплаты<br><input class="form-control"type="hidden" name="action" value="paymentstatus">
<select class="form-control" name="status"  id="payment_status" class="input-small">
<option value="1" <?php $i=1; if($i == $details['payment']){ echo "selected=selected"; }?>>Выполнено</option>
<option value="2" <?php $i=2; if($i == $details['payment']){ echo "selected=selected"; }?>>В ожидании</option>
<option value="3" <?php $i=3; if($i == $details['payment']){ echo "selected=selected";}?>>Не удалось</option>
<option value="4" <?php $i=4; if($i == $details['payment']){ echo "selected=selected"; }?>>Возвращено</option>
</select>&nbsp;
<button class="btn btn-default">Обновить</button>
</form></td><td>
<form action="order-details.php?id=<?php echo $details['id']; ?>" method="post"  class="form-inline">
Статус заказа<br><input class="form-control"type="hidden" name="action" value="orderstatus">
<select class="form-control" name="status" id="order_status" class="input-small">
<option value="1" <?php $i=1; if($i == $details['status']){ echo "selected=selected"; }?>>Выполнено</option>
<option value="2" <?php $i=2; if($i == $details['status']){ echo "selected=selected"; }?>>В ожидании</option>
<option value="3" <?php $i=3; if($i == $details['status']){ echo "selected=selected"; }?>>Отменен</option>
<option value="4" <?php $i=4; if($i == $details['status']){ echo "selected=selected"; }?>>Отправленный</option>
<option value="5" <?php $i=5; if($i == $details['status']){ echo "selected=selected"; }?>>Доставленно</option>
<option value="6" <?php $i=6; if($i == $details['status']){ echo "selected=selected"; }?>>Возвращено</option>
</select>&nbsp;
<button class="btn btn-default">Обновить</button>
</form>
</td>
<td>
<form action="create-invoice.php"  method="get" class="form-inline">Счет-фактура<br>
<input class="form-control"type="hidden" name="id" value="<?php echo $details['id']; ?>">
<button class="btn btn-default">Создание счета-фактуры</button>
</form>
</td>
</tr>
</table>
<?php }  ?>

<?php
require_once('./footer.php');

?>