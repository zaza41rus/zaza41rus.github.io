<?php
require_once('../sym-app/include/cart-load.php');
if(isset($_REQUEST['symbiotic'])){
$order_id= $_REQUEST['order_id'];
}
$paymentStatus = '2';
$order->callback($order_id,$paymentStatus);
?>

      <html>
<style type="text/css">
h2 {
color: 7c7c7c;
}
   
.loader,
.loader:before,
.loader:after {
  background: #AB936D;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader {
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0 #AB936D;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em #AB936D;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0 #AB936D;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em #AB936D;
    height: 5em;
  }
}
</style>
     <head><title>Обработка вашей оплаты...</title></head>
   <body onLoad="document.forms['payment_form'].submit();">
     <center><h2>Пожалуйста, подождите, ваш заказ обрабатывается.</h2></center>
	   <center><div class="loader">Loading...</div></center>
	<form method="post" name="payment_form"  action="<?php echo $setting['website_url'];?>/?sym-callback=1">
	<input type="hidden" name="order_id" value="<?php echo $order_id; ?>">
	</form></body></html>
      