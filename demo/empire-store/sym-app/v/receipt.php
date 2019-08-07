<?php
switch ($details['payment']){
	case '1':
	$payment = 'Completed';
	break;
	case '2':
	$payment = 'Pending';
	break;
	case '3':
	$payment = 'Failed';
	break;
	case '4':
	$payment = 'Refunded';
	break;
	default:
	$role = 'Unknown';	
}
switch ($details['status']){
	case '1':
	$status = 'Approved';
	break;
	case '2':
	$status = 'Pending';
	break;
	case '3':
	$status = 'Cancelled';
	break;
	case '4':
	$status = 'Shipped';
	break;
	case '5':
	$status = 'Delivered';
	break;
	case '6':
	$status = 'Returned';
	break;
	default:
	$status = 'Unknown';
}
$details['coupon'] = !empty($details['coupon']) ? $details['coupon']: 'None';
 ?>
 
<h1 style="font-family: sans-serif;text-align: center; max-width:600;margin: 0 auto;" >
<img src="http://buy-fish.ru/img/header.png" width="100%" alt=""> 
</h1>

<h1 style="font-family: sans-serif;text-align: center;" >
Детали вашего заказа</h1>

<h3 style="font-family: sans-serif;">Номер вашего заказа: <?php echo $_REQUEST['order']; ?></h3>
<table style="    font-family: sans-serif; text-align: center;max-width: 600;margin: 0 auto;margin-bottom: 20px;border-collapse: separate;border-spacing: 0px;border-color: white;border-radius: 2px;      -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);      -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);background: #f7f7f7;" width="100%" cellpadding="0" cellspacing="0" border="0">
<thead>
<tr>
<th>
<h1 style="    padding-top: 1em;" >
<img src="http://buy-fish.ru/img/buy2.png" width="200" alt="">
</h1>
</th>
</tr>
</thead>

<tbody>
<tr>

<td style="font-family: sans-serif;text-align: center;font-size: 2.5em;color: #EB7D6C;font-weight: bold;"><?php echo  $setting['currency_symbol'] ." ".$details['net'] ; ?>
<h2 style="color: #FBA699;font-size: 0.5em;margin-bottom: 20px;">
Внимание!<br>
В продаже имеется весовой товар.<br>
Окончательная цена будет согласовываться<br>
с Вами лично.</h2>
</td>


</tr>
</tbody>
</table>






<table style="font-family: sans-serif;text-align: center;max-width: 600;margin: 0 auto;margin-bottom: 20px;border-collapse: separate;border-spacing: 0px;border-color: white;border-radius: 2px;      -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);      -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);background: #f7f7f7;" width="100%" cellpadding="0" cellspacing="0" border="0">
<thead>
<tr>

<th>
<img src="http://buy-fish.ru/img/shiping.png" width="100" alt=""></th>
<td style="font-family: sans-serif;color: #3D7190;text-align: center;font-weight: bold;    font-size: 2em;"><?php echo  $setting['currency_symbol'] ." ".$details['shipping'] ; ?></td>

</tr>
</thead>

</table>




<h3 style="font-family: sans-serif; max-width:600;margin: 0 auto;    margin-bottom: 20px;">Продукты в корзине</h3>
<table style="font-family: sans-serif;max-width: 600;margin: 0 auto;margin-bottom: 20px;border-collapse: separate;border-spacing: 0px;border-color: white;" width="100%" cellpadding="0" cellspacing="0" border="1">
<thead>
<tr>
<th>#</th>
<th>Продукт</th>
<th>Опции</th>
<th>Цена</th>
<th>Кол-во</th>
<th>Итого</th>
</tr>
</thead>
<tbody><?php 
$products = json_decode($details['items'],true);
$i = 0;
foreach($products as $pro){
	$i = $i + 1;
	if($pro['shipping'] == 0){$append = "";}else{$append = "<br><small>Shipping: ". $setting['currency_symbol'] ." " .$pro['shipping']."</small>";}
	if(empty($pro['opt_name'])){
	$pro['opt_name'] = "None";
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
<h2 style="font-family: sans-serif; max-width:600;margin: 0 auto;    margin-bottom: 20px;">Мы свяжемся с вами в ближайшее время.</h2>