<?php
switch ($details['payment']){
	case '1':
	$payment = 'Выполнено';
	break;
	case '2':
	$payment = 'В ожидании';
	break;
	case '3':
	$payment = 'Неудачный';
	break;
	case '4':
	$payment = 'Возвращено';
	break;
	default:
	$role = 'Неизвестно';	
}
switch ($details['status']){
	case '1':
	$status = 'Одобрено';
	break;
	case '2':
	$status = 'В ожидании';
	break;
	case '3':
	$status = 'Отменен';
	break;
	case '4':
	$status = 'Отплавленный';
	break;
	case '5':
	$status = 'Доставленный';
	break;
	case '6':
	$status = 'Возвращено';
	break;
	default:
	$status = 'Неизвестно';
}
$details['coupon'] = !empty($details['coupon']) ? $details['coupon']: 'Нету';
 ?>
<h1 style="text-align: center;" >Ваш заказ</h1>
<h3>Номер заказа: <?php echo $_REQUEST['order']; ?></h3>
<table width="100%" cellpadding="0" cellspacing="0" border="1">
<thead>
<tr>
<th>Итого к оплате</th>
<th>Скидочный купон</th>
<th>Сборы</th>
<th>Доставка</th>
<th>Метод оплаты</th>
<th>Статус оплаты</th>
<th>Стаус заказа</th>
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
<h3>Продукты которые в заказе</h3>
<table width="100%" cellpadding="0" cellspacing="0" border="1">
<thead>
<tr>
<th>№</th>
<th>Продукт</th>
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
	if($pro['shipping'] == 0){$append = "";}else{$append = "<br><small>Shipping: ". $setting['currency_symbol'] ." " .$pro['shipping']."</small>";}
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
<h3>Детали заказа</h3>
<?php if(!empty($details['track'])){
if(empty($details['track_url'])){$details['track_url'] ="#";} 
echo "Трек id:".$details['track'] ." <a href=\"".$details['track_url'] ."\">Кликните здесь чтоб перейти к треку</a>";
 } else {
echo 'Никаких подробностей пока нет.';
}?>
<h3>Примечания</h3>
<?php if(!empty($details['remarks'])){
echo $details['remarks'];
}else{
echo 'Никаких подробностей пока нет.';
} 
 ?>