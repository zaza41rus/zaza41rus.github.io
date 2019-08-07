<?php
/* 
 	If you understand PHP & html you can format here order emails sent to customer & admin
*/
$messageResult 				= array();
$to 						= $_REQUEST["business"];
$sender 					= $_REQUEST["sof_email"];
$shippingCharges 			= $_REQUEST["handling_cart"];

$cartLength 				= $_REQUEST["cartLength"];
$currencyCode 				= $_REQUEST["currency_code"];

$adminEmailHeaders 			= "From: " . strip_tags($sender) . "\r\n";
$adminEmailHeaders 			.= "Reply-To: ". strip_tags($sender) . "\r\n";
//$adminEmailHeaders 			.= "CC: sample@website.com\r\n";
$adminEmailHeaders 			.= "MIME-Version: 1.0\r\n";
//$adminEmailHeaders 			.= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$adminEmailHeaders 			.= "Content-Type: text/html; charset=UTF-8\r\n";

$customerEmailHeaders 		= "From: " . strip_tags($to) . "\r\n";
$customerEmailHeaders 		.= "Reply-To: ". strip_tags($to) . "\r\n";
$customerEmailHeaders 		.= "MIME-Version: 1.0\r\n";
$customerEmailHeaders 		.= "Content-Type: text/html; charset=UTF-8\r\n";

// message
$startMessage 				= "<html><head>
  <title>Order Details</title>
</head>
<body style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;\" >
  <p>";

    $customerInformation = "";

  	if( !empty( $_REQUEST["fname"])  )
    {
    	$customerInformation .= "<br/>Имя: ";
		$customerInformation .= $_REQUEST["fname"];
    }

    if( !empty( $_REQUEST["lname"] ) )
	{
		$customerInformation .= "<br/>Фамилия: ";
		$customerInformation .= $_REQUEST["lname"];
	}

	if( !empty( $_REQUEST["sof_bname"] ) )
	{
		$customerInformation .= "<br/>Business Name: ";
		$customerInformation .= $_REQUEST["sof_bname"];
	}

	if( !empty($_REQUEST["sof_email"]) )
	{
		$customerInformation .= "<br/>Email: ";
		$customerInformation .= $_REQUEST["sof_email"];
	}

	if( !empty($_REQUEST["sof_ph"]) )
	{
		$customerInformation .= "<br/>Phone: ";
		$customerInformation .= $_REQUEST["sof_ph"];
	}
	
	if( !empty($_REQUEST["sof_add"]) )
	{
		$customerInformation .= "<br/>Код скидки: ";
		$customerInformation .= $_REQUEST["sof_add"];
	}
	
	if( !empty($_REQUEST["sof_country"]) )
	{
		$customerInformation .= "<br/>Квартира: ";
		$customerInformation .= $_REQUEST["sof_country"];
	}	

	
	if( !empty($_REQUEST["sof_city"]) )
	{
		$customerInformation .= "<br/>Город: ";
		$customerInformation .= $_REQUEST["sof_city"];
	}

	if( !empty($_REQUEST["sof_zip"]) )
	{
		$customerInformation .= "<br/>Код скидки: ";
		$customerInformation .= $_REQUEST["sof_zip"];
	}	
	
	if( !empty($_REQUEST["sof_message"]) )
	{
		$customerInformation .= "<br/>Сообщение: ";
		$customerInformation .= $_REQUEST["sof_message"];
	}

	$cartMessage = "<br/></p><strong>Детали заказа.</strong><br/><br/>
  <table border='1' cellpadding='5' cellspacing='0'>
    <tr>
      <th>Наименование</th><th>Цена</th><th>Кол-во</th><th>Итого</th>
    </tr>";
	$totalAmount = 0;
	for ( $counter = 1; $counter < $cartLength; $counter++) {	
		$cartMessage .= "<tr><td>";
		$cartMessage .= $_REQUEST["item_name_".$counter];
		$cartMessage .= "</td><td>";
		$cartMessage .= $_REQUEST["amount_".$counter]. " " . $currencyCode;
		$cartMessage .= "</td><td>";
		$cartMessage .= $_REQUEST["quantity_".$counter];
		$cartMessage .= "</td><td>";
		$cartMessage .= $_REQUEST["quantity_".$counter] * $_REQUEST["amount_".$counter]. " " . $currencyCode;
		$cartMessage .= "</td></tr>";
		
		$totalAmount = $totalAmount + ($_REQUEST["quantity_".$counter] * $_REQUEST["amount_".$counter]);
	}
	$cartMessage .= "</table>";
	$cartMessage .= "<br/><div style='font-weight: normal; font-size: 14px; line-height: 1.6; background: #ECF8FF; margin: 0 0 15px; padding: 15px;'>Доставка: " .$shippingCharges. " " . $currencyCode . "<br/>Итого к оплате (без учета -10% скидки):<strong> " . ($totalAmount + $shippingCharges). " " . $currencyCode . "</strong></div style='font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.6; background: #ECF8FF; margin: 0 0 15px; padding: 15px;'>";
  $endMessage = "</body></html>";

// Remove the backslashes that normally appears when entering " or '
$to = stripslashes($to); 
//$message = stripslashes($message); 

$adminMessageSubject = "Заказ с сайта Семейная ферма";
$adminMessageSubjectHtml = "Привет админ Семейной Фермы, <h3>Вам поступил очередной заказ с сайта</h3> <span style='color:#999999;'><strong>Дата заказа: </strong>" . date("l jS \of F Y h:i:s A") . " </span> <br><br> <strong>Информация по заказу: </strong><br>";

$customerMessageSubject = "Заказ на сайте Семейная Ферма";
$customerMessageSubjectHtml = "Здравствуйте, <h3>Ваш заказ с сайта Семейная Ферма: </h3> <span style='color:#999999;'><strong>Дата заказа: </strong>" . date("l jS \of F Y h:i:s A") . " </span> <br><br> <strong>Информация по вашему заказу: </strong><br>";

$adminMessage = $startMessage . $adminMessageSubjectHtml . $customerInformation . $cartMessage . $endMessage;
$customerMessage = $startMessage . $customerMessageSubjectHtml . $customerInformation . $cartMessage . $endMessage;

/* 
 Send order email to store admin
*/
if(isset($adminMessage) and isset($adminMessageSubject) and isset($sender)){
	$adminMessageStatus = mail($to, $adminMessageSubject, $adminMessage, $adminEmailHeaders);

	$messageResult['adminMailSent'] = $adminMessageStatus;
}
/* 
 Send order email to customer
*/
if(isset($customerMessage) and isset($customerMessageSubject) and isset($sender)){
	$customerMessageStatus = mail($sender, $customerMessageSubject, $customerMessage, $customerEmailHeaders);

	$messageResult['customerMailSent'] = $customerMessageStatus;
}

echo json_encode( $messageResult );