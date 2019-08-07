 <?php
$to = 'travel@kamchatka.love, zaza41rus@gmail.com';

if ( isset( $_POST['sendMail'] ) ) {
  $name  = substr( $_POST['name'], 0, 64 );
  $tel = substr( $_POST['tel'], 0, 64 );
  $email   = substr( $_POST['email'], 0, 64 );
  
   $data1   = substr( $_POST['data1'], 0, 64 ); 
   $data2   = substr( $_POST['data2'], 0, 64 ); 
   $select   = substr( $_POST['select'], 0, 64 ); 
   $range   = substr( $_POST['range'], 0, 64 );
   $radio   = substr( $_POST['tab'], 0, 64 ); 
    
    $checkbox1   = substr( $_POST['checkbox1'], 0, 64 );
    $checkbox2   = substr( $_POST['checkbox2'], 0, 64 );
    $checkbox3   = substr( $_POST['checkbox3'], 0, 64 );
   

    
 
    
  $message = substr( $_POST['message'], 0, 250 );
 

  if ( !empty( $_FILES['file']['tmp_name'] ) and $_FILES['file']['error'] == 0 ) {
    $filepath = $_FILES['file']['tmp_name'];
    $filename = $_FILES['file']['name'];
  } else {
    $filepath = '';
    $filename = '';
  }
 
  $body = "Письмо сформированно туристом, \r\nжелающего воспользоваться Вашими услугами. \r\nМожете проигнорировать данное сообщение, \r\nлибо связаться с туристом и обговорить детали предоставления услуг. \r\nТак-же можете, предложить туристу свое встречное коммерческое предложение... \r\n\r\n";

  $body .= "-------------------------------------------------------------\r\n\r\n";
   
  $body .= "Имя:\r\n".$name."\r\n\r\n";
  $body .= "E-mail:\r\n".$email."\r\n\r\n";
  $body .= "Телефон:\r\n".$tel."\r\n\r\n";
    
  $body .= "Дата с:\r\n".$data1."\r\n\r\n";
  $body .= "Дата по:\r\n".$data2."\r\n\r\n";
  $body .= "Тур:\r\n".$radio."\r\n\r\n"; 
  $body .= "Сколько туристов:\r\n".$select."\r\n\r\n";
    
  $body .= "Вегатарианцы:\r\n".$checkbox1."\r\n\r\n";
  $body .= "Инвалиды:\r\n".$checkbox2."\r\n\r\n";
  $body .= "Дети:\r\n".$checkbox3."\r\n\r\n";
    
     
  $body .= "Дополнительно:\r\n".$message."\r\n\r\n";

  
  
  $body .= "-------------------------------------------------------------\r\n\r\n";
  
  $body .= "Больше не желаете получать такие уведомления с проекта http://kamchatka.love/ ? \r\nИли, у Вас есть предложения, как улучшить работу проекта? \r\nСообщите нам об этом, на: \r\nmailto:travel@kamchatka.love \r\n\r\n";
  
  

  send_mail($to, $body, $email, $filepath, $filename);

}




// Вспомогательная функция для отправки почтового сообщения с вложением
function send_mail($to, $body, $email, $filepath, $filename)
{
  $subject = 'Бронь пешего тура Kamchatka.love';
  $boundary = "--".md5(uniqid(time())); // генерируем разделитель
  $headers = "From: ".$email."\r\n";   
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
  $multipart = "--".$boundary."\r\n";
  $multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
  $multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

  $body = $body."\r\n\r\n";
 
  $multipart .= $body;
 
  $file = '';
  if ( !empty( $filepath ) ) {
    $fp = fopen($filepath, "r");
    if ( $fp ) {
      $content = fread($fp, filesize($filepath));
      fclose($fp);
      $file .= "--".$boundary."\r\n";
      $file .= "Content-Type: application/octet-stream\r\n";
      $file .= "Content-Transfer-Encoding: base64\r\n";
      $file .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
      $file .= chunk_split(base64_encode($content))."\r\n";
    }
  }
  $multipart .= $file."--".$boundary."--\r\n";
	mail($to, $subject, $multipart, $headers);
}
?>