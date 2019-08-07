<?php
$title='Order Status';
require_once('header.inc.php');
require_once('nav.inc.php');
if(isset($_REQUEST['id'])){
	if(!empty($_REQUEST['id'])){
		$details = $order->details($_REQUEST['id']);
	}else{
		echo "Order  doesn't exists";
	}
	}else{
		$details = false ;
	}
	?>

	<h2>Статус заказа</h2>
	<hr>
<?php 
if(!$details){?>
<div class="row">
<div class="col-sm-12">
<h4>Получить статус заказа</h4>
<form action="order-status.php" method="get" class="form-inline">
  <div class="form-group"> <label class="sr-only">Номер заказа</label>
<input class="form-control" type="text" name="id" placeholder="Номер заказа" required>
</div>
  <button type="submit" class="btn btn-primary">Показать Детали</button>
</form>

</div></div>
<hr>
<?php
if($order->msg){
	echo "<div class=\"alert alert-success\" style=\"display:block;\">$order->msg</div>";
	}
	if($order->error){
	echo "<div class=\"alert alert-danger\" style=\"display:block;\">$order->error</div>";
	}
} else {
switch ($details['payment']){
	case '1':
	$payment = 'Выполнено';
	break;
	case '2':
	$payment = 'В ожидании';
	break;
	case '3':
	$payment = 'Не удалось';
	break;
	case '4':
	$payment = 'Возвращено';
	break;
	default:
	$role = 'Неизвестно';	
}
switch ($details['status']){
	case '1':
	$status = 'Утвержденный';
	break;
	case '2':
	$status = 'В ожидании';
	break;
	case '3':
	$status = 'Отменен';
	break;
	case '4':
	$status = 'отправленный';
	break;
	case '5':
	$status = 'Доставленный';
	break;
	case '6':
	$status = 'Возвращенный';
	break;
	default:
	$status = 'Неизвестно';
}
$details['coupon'] = !empty($details['coupon']) ? $details['coupon']: 'Нету';
 ?>
<h3>Заказ ID: <?php echo $_REQUEST['id']; ?></h3>
<table class="table table-bordered">
<thead>
<tr>
<th>Итого к оплате</th>
<th>Скидочный купон</th>
<th>Сборы</th>
<th>Доставка</th>
<th>Способ оплаты</th>
<th>Статус оплаты</th>
<th>Статус заказа</th>
</tr>
</thead>
<tbody>
<tr>
<td><?php echo  $setting['currency_symbol'] ." ".$details['net'] ; ?></td>
<td><?php echo $setting['currency_symbol'] ." ". $details['discount'] . " (" .$details['coupon'] . " )"; ?></td>
<td><?php echo  $setting['currency_symbol'] ." ".$details['tax'] ; ?></td>
<td><?php echo  $setting['currency_symbol'] ." ".$details['shipping'] ; ?></td>
<td><?php echo $details['gateway'];?></td>
<td><?php echo $payment; ?></td>
<td><?php echo $status; ?></td>
</tr>
</tbody>
</table>
<h3>Предметы</h3>
<table class="table table-bordered ">
<thead>
<tr>
<th>№</th>
<th>Название продукта</th>
<th>Опции</th>
<th>Цена</th>
<th>Кол-во</th>
<th>Итоговая цена продуктов</th>
</tr>
</thead>
<tbody><?php 
$products = json_decode($details['items'],true);
$i = 0;
foreach($products as $pro){
	$i = $i + 1;
	if($pro['shipping'] == 0){$append = "";}else{$append = "<br><small>Доставка: ". $setting['currency_symbol'] ." " .$pro['shipping']."</small>";}
	if(empty($pro['opt_name'])){
	$pro['opt_name'] = "Нету";
	}
?>
<tr>
<td><?php echo $i;?></td>
<td><?php echo $pro['name'] ; ?></td>
<td><?php echo $pro['opt_name']; ?></td>
<td><?php echo   $setting['currency_symbol'] ." " .number_format($pro['price'], 2, '.', '')  .$append ; ?></td>
<td><?php echo $pro['count']   ; ?></td>
<td><?php echo $setting['currency_symbol'] ." " . number_format($pro['price'] * $pro['count'], 2, '.', '') ;?></td>
</tr>
<?php } ?>
</tbody>
<tfoot><tr>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th>Итого: <?php echo $setting['currency_symbol']. " " .$details['amount'];?></th>
</tr></tfoot>
</table>
<h3>Детали доставки</h3>
<?php if(!empty($details['track'])){
if(empty($details['track_url'])){$details['track_url'] ="#";} 
echo "Трек id:".$details['track'] ." <a href=\"".$details['track_url'] ."\">Нажмите здесь, чтобы отслеживать</a>";
 } else {
echo 'Никаких подробностей пока нет.';
}?>
<h3>Замечания</h3>
<?php if(!empty($details['remarks'])){
echo $details['remarks'];
}else{
echo 'Никаких подробностей пока нет.';
} 
 }  ?>
 </div>
<?php
require_once('footer.inc.php');
?>