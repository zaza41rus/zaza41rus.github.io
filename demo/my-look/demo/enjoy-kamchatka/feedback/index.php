<?php

$act = isset($_REQUEST['act']) ? $_REQUEST['act'] : die('error');
$params = isset($_REQUEST['json']) ? json_decode($_REQUEST['json'], true) : array();
$jsonBox = array();
$error = array();
$info = array();
$exemple = array();
$form = array();
$host = $_SERVER['HTTP_HOST'];
$ref = $_SERVER['HTTP_REFERER'];





$form['form-1'] = array(

	'fields' => array(

		'name' => array(
			'title' => 'Имя',
			'validate' => array(
				'preg' => '%[A-Z-a-zА-Яа-я\s]%',
				'minlength' => '3',
				'maxlength' => '75',
			),
			'messages' => array(
				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',
				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',
				'maxlength' => 'Максимальная длинна поля [ %1$s ] превышает допустимую - %2$s',
			)
		),

		'e-mail' => array(
			'title' => 'E-mail',
			'validate' => array(
				'preg' => '/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i',
				'minlength' => '3',
			),
			'messages' => array(
				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',
				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',
			)
		),
		


	),		
	
	
	
	'cfg' => array(
		'charset' => 'utf-8',
		'subject' => 'ENJOY KAMCHATKA',
		'title' => 'ENJOY KAMCHATKA',
		'ajax' => true,
		'validate' => true,
		'from_email' => 'noreply@email.com',
		'from_name' => 'ENJOY KAMCHATKA',
		'to_email' => 'zaza41rus@gmail.com, noreply2@email.com',
		'to_name' => 'noreply1, noreply2',
		'geoip' => true,
		'referer' => true,
		'type' => 'html',
		'tpl' => true,
		'antispam' => 'email77',
		'antispamjs' => 'address77',
		'okay' => '
		<div class="">
			<img class="koza" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgWDcgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIKdmlld0JveD0iMCAwIDc1ODcgNzU5MSIKIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgIDwhW0NEQVRBWwogICAgLnN0cjEge3N0cm9rZTojQThEQkU4O3N0cm9rZS13aWR0aDoyMH0KICAgIC5zdHIwIHtzdHJva2U6I0E4REJFODtzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLWxpbmVjYXA6cm91bmR9CiAgICAuZmlsMyB7ZmlsbDpub25lfQogICAgLmZpbDEge2ZpbGw6I0ZFRjdGMX0KICAgIC5maWwwIHtmaWxsOiNBOERCRTh9CiAgICAuZmlsMiB7ZmlsbDojRUI3RTdGfQogICAgLmZpbDUge2ZpbGw6I0ZFRkVGRTtmaWxsLW9wYWNpdHk6MC44NTA5ODB9CiAgICAuZmlsNCB7ZmlsbDojRkVGRUZFO2ZpbGwtb3BhY2l0eTowLjg1MDk4MH0KICAgXV0+CiAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSLQodC70L7QuV94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxjaXJjbGUgY2xhc3M9ImZpbDAiIGN4PSIzNzkzIiBjeT0iMzc5MyIgcj0iMzc5MyIvPgogIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNMjkzOCA0NDk3YzU4OSwtNDU2IDc2MCwtODc1IDUzMiwtMTIzNiAtMjkzLDI1MiAtNTA1LDQzOCAtNzkwLDY4OSAtMTMzLDExOCAtMTg5LDMxMCAtMTg5LDQ4N2wwIDk2M2M0MzcsNjA5IDczMiw0OTUgODA4LC0xOSAtMTksLTM1MSAtMTQzLC02MzcgLTM2MSwtODg0bDAgMHoiLz4KICA8cGF0aCBjbGFzcz0iZmlsMSIgZD0iTTI3NDggNzQzNWwyMzM5IC03NiAtMTcyIC0xNTAyYzEzMywtMTE1IDIwMCwtMjc2IDIxOSwtNDk1IDAsLTkzMiAwLC0xODU0IDAsLTI3ODUgLTY2LC0zNTIgLTUwNCwtMzMzIC01MjMsMGwwIDM3MGMtNDcsLTM2MSAtNTA0LC0zODAgLTUzMiwwIC0yOSwtMzg5IC01NDIsLTM4OSAtNTgwLDEwbDAgLTEwNDZjLTM4LC0zNjEgLTUyMywtMzgwIC01ODAsMGw5IDM3NjUgNTcgMTYyIC0yMzcgMTU5NyAwIDB6Ii8+CiAgPHBhdGggY2xhc3M9ImZpbDIiIGQ9Ik0yNzQ4IDc0NDRsMjM3IC0xNjA2IDE5MzAgMTljNjcsNTYxIDEwNSw5NTAgMTcyLDE1MDIgLTU4MCwyMjggLTEzNzksMzQyIC0yMzM5LDg1eiIvPgogIDxsaW5lIGNsYXNzPSJmaWwzIHN0cjAiIHgxPSI0MDc5IiB5MT0iMjgyNCIgeDI9IjQwNzkiIHkyPSAiMzUyNyIgLz4KICA8bGluZSBjbGFzcz0iZmlsMyBzdHIwIiB4MT0iMzUwOCIgeTE9IjI4MzMiIHgyPSIzNTA4IiB5Mj0gIjM1MzciIC8+CiAgPGxpbmUgY2xhc3M9ImZpbDMgc3RyMCIgeDE9IjQ2MDIiIHkxPSIyODQzIiB4Mj0iNDYwMiIgeTI9ICIzNTQ2IiAvPgogIDxsaW5lIGNsYXNzPSJmaWwzIHN0cjAiIHgxPSIyOTA5IiB5MT0iMzYwMyIgeDI9IjI5MDkiIHkyPSAiNDMwNyIgLz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImZpbDQiIGQ9Ik0zMjE0IDIxNjhjLTE2MiwtMzggLTIxOSwtMTcxIC0yMTAsLTM2MiAxMzMsLTEwNCAyNjcsLTk1IDQwOSwwIDAsMTcyIC0yOCwzMTQgLTE5OSwzNjJ6Ii8+CiAgIDxwYXRoIGlkPSIxIiBjbGFzcz0iZmlsMyBzdHIxIiBkPSJNMzIxNCAyMTY4Yy0xNjIsLTM4IC0yMTksLTE3MSAtMjEwLC0zNjIgMTMzLC0xMDQgMjY3LC05NSA0MDksMCAwLDE3MiAtMjgsMzE0IC0xOTksMzYyeiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImZpbDUiIGQ9Ik00ODc3IDI4NjJjLTE2MSwtMzggLTIxOCwtMTcxIC0yMDksLTM2MiAxMzMsLTk1IDI2NiwtOTUgNDA5LDAgMCwxNzIgLTI5LDMxNCAtMjAwLDM2MnoiLz4KICAgPHBhdGggaWQ9IjEiIGNsYXNzPSJmaWwzIHN0cjEiIGQ9Ik00ODc3IDI4NjJjLTE2MSwtMzggLTIxOCwtMTcxIC0yMDksLTM2MiAxMzMsLTk1IDI2NiwtOTUgNDA5LDAgMCwxNzIgLTI5LDMxNCAtMjAwLDM2MnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=" alt="Коза">
		</div>
		<h1 class="grayy">ОКАЙ</h1> <br>
		<span class="grayy">
		Загляните в свой почтовый ящик <span class="txt-spam">SPAM</span><br>
		</span>	',
		'fuck' => 'ФАК - ERROR',
		'spam' => 'Cпам робот',
		'notify' => 'color-modal',
		'usepresuf' => false
	)
);

















if($act == 'cfg') {
   $jsonBox['configs'] = ExportConfigs($form);
    die(json_encode($jsonBox));
}

function ExportConfigs($form) {
    $need = array('antispam','antispamjs','notify');
    $conf = array();
     foreach($form as $name => $data) {
         foreach($data['cfg'] as $k => $cfg) {
           if(in_array($k, $need)) {
               $conf[$name]['cfg'][$k] = $cfg;
           }
         }
     }

    return $conf;
}


if(isset($form[$act])) {

   $form = $form[$act];
   $getdata = array();
   $sb = array(); // subject и body


      foreach($form['fields'] as $name => $field) {

            $title = (isset($field['title'])) ? $field['title'] : $name;
            $getdata[$name]['title'] = $title;
            $rawdata = isset($_POST[$name]) ? trim($_POST[$name]) : '';

              if(isset($field['validate'])) {              

                  $def = 'Поле с именем [ '.$name.' ] содержит ошибку.';
                  // -0-
                  if(isset($field['validate']['required']) &&
                      empty($rawdata)) {
                      $error[$name] = isset($field['messages']['required']) ? sprintf($field['messages']['required'], $title) :
                                     (isset($messages['validator']['required']) ? sprintf($messages['validator']['required'], $title) : $def);
                  }
                  // -1-
                  if(isset($field['validate']['minlength']) &&
                      mb_strlen($rawdata) < $field['validate']['minlength']) {
                      $error[$name] = isset($field['messages']['minlength']) ? sprintf($field['messages']['minlength'], $title, $field['validate']['minlength']) : $def;
                  }
                  // -2-
                  if(isset($field['validate']['maxlength']) &&
                    mb_strlen($rawdata) > $field['validate']['maxlength']) {
                        $error[$name] = isset($field['messages']['maxlength']) ? sprintf($field['messages']['maxlength'], $title, $field['validate']['maxlength']) : $def;
                  }
                  // -3-
                  if(isset($field['validate']['preg']) && mb_strlen($rawdata) > 0 &&
                      !preg_match($field['validate']['preg'], $rawdata)) {
                      $error[$name] = isset($field['messages']['preg']) ? sprintf($field['messages']['preg'], $title, $field['validate']['preg']) : $def;
                  }
                  // -4-
                  if(isset($field['validate']['substr']) &&
                      mb_strlen($rawdata) > $field['validate']['substr']) {
                      $rawdata = mb_substr($rawdata, 0, $field['validate']['substr']);
                  }

               $outdata = htmlspecialchars($rawdata);

               $getdata[$name]['value'] = $outdata;

              }
               else {
                 $getdata[$name]['value'] = htmlspecialchars($rawdata);
              }

               if(empty($getdata[$name]['value'])) {
                     unset($getdata[$name]);
                  }


      } //foreach end


    if(isset($form['cfg']['antispam']) && isset($_POST[$form['cfg']['antispam']])) {
        if(!empty($_POST[$form['cfg']['antispam']])) {
         $error[] = $form['cfg']['spam'];
        }
    }
     if(isset($form['cfg']['antispamjs']) && isset($_POST[$form['cfg']['antispamjs']])) {
         if(!empty($_POST[$form['cfg']['antispamjs']])) {
             $error[] = $form['cfg']['spam'];
         }
     }


    if(count($error) == 0) {

      if(function_exists("mb_internal_encoding")) mb_internal_encoding($form['cfg']['charset']);
      $get_fromName = (isset($form['fields'][$form['cfg']['from_name']]) && isset($getdata[$form['cfg']['from_name']]['value']) && mb_strlen($getdata[$form['cfg']['from_name']]['value']) > 2) ? $getdata[$form['cfg']['from_name']]['value'] : ((mb_strlen($form['cfg']['from_name']) > 2 && !isset($_POST[$form['cfg']['from_name']])) ? $form['cfg']['from_name'] : 'Anonymous');
      $get_fromEmail = (isset($form['fields'][$form['cfg']['from_email']]) && isset($getdata[$form['cfg']['from_email']]['value']) && mb_strpos('@', $getdata[$form['cfg']['from_email']]['value']) === false) ? $getdata[$form['cfg']['from_email']]['value'] : ((mb_strpos('@', $form['cfg']['from_email']) !== false) ? $form['cfg']['from_email'] : 'no-reply@'.$host);

      $fromName = (function_exists("mb_encode_mimeheader")) ? mb_encode_mimeheader($get_fromName, $form['cfg']['charset'], "Q") : $get_fromName;
      $sb['subject'] = (function_exists("mb_encode_mimeheader")) ? mb_encode_mimeheader($form['cfg']['subject'], $form['cfg']['charset'], "Q") : $form['cfg']['subject'];
      
      $toName = trim($form['cfg']['to_name'], " ,");
      $toEmail = trim($form['cfg']['to_email'], " ,");
 
      if(strpos($toName, ",") !== false) { 
         $exp_toName = explode(",", $toName);   
         $c = count($exp_toName);
          for($i=0; $i<$c; $i++) {
           $exp_toName[$i] = (function_exists("mb_encode_mimeheader")) ? mb_encode_mimeheader(trim($exp_toName[$i]), $form['cfg']['charset'], "Q") : trim($exp_toName[$i]);
          } 
       } 
        else {
          $toName = (function_exists("mb_encode_mimeheader")) ? mb_encode_mimeheader($toName, $form['cfg']['charset'], "Q") : $toName;
       }
       
      if(strpos($toEmail, ",") !== false) { 
         $exp_toEmail = explode(",", $toEmail);
      }         
      
      $To = '';
      
       if(isset($exp_toEmail)) {
        $c = count($exp_toEmail);
          for($i=0; $i < $c; $i++) { 
               $To .= ((isset($exp_toName) && isset($exp_toName[$i])) ? $exp_toName[$i] : $toName) . " <".trim($exp_toEmail[$i]).">";
               if($i < ($c-1)) $To .= ", ";
           }
       } 
        else {
           $To = ((isset($exp_toName) && isset($exp_toName[0])) ? $exp_toName[0] : $toName)." <".$toEmail.">";
       }


      $headers = "Return-Path: <".$get_fromEmail.">\r\n";
      $headers .= "From: ".$fromName." <".$get_fromEmail.">\r\n";
      $headers .= "X-Mailer: Feedback, v0.3 (http://artuelle.com)\r\n";
      $headers .= "X-Priority: 3\r\n";
      $headers .= "Reply-To: ".$fromName." <".$get_fromEmail.">\r\n";
      //$headers .= "To: ".$To."\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/" . $form['cfg']['type'] . "; charset=\"" . $form['cfg']['charset'] . "\"\r\n";
      $headers .= "Content-Transfer-Encoding: 8bit\r\n";

      $sb['body'] = "";
      // парсим шаблон
      if($form['cfg']['tpl']) {
       $out = tpl(array('name' => $act, 'getdata' => $getdata, 'cfg' => $form['cfg']));
       if(is_string($out)) {
          $sb['body'] = $out;
       }
     }
      // или отдаем голый текст
        if(mb_strlen(trim($sb['body'])) < 10) {
          if(isset($form['cfg']['title']))
              $sb['body'] .= $form['cfg']['title']."\r\n\r\n";
          foreach($getdata as $name => $data) {
              $sb['body'] .= $data['title'].": ".$data['value']."\r\n";
          }
          if($form['cfg']['referer'])
              $sb['body'] .= "\r\n\r\n\r\n\r\n".$ref;
      }
      // если есть что добавить
       if(isset($form['cfg']['adds']) &&
          is_array($form['cfg']['adds'])) {
          $sb = adds($sb);
       }

      //отправка письма
      $mail = mail($To, $sb['subject'], $sb['body'], $headers);

      if($mail) {
          $jsonBox['ok'] = 1;
          $info[] = $form['cfg']['okay'];

         //setcookie("limit", "1", time() + $form['cfg']['limit']);

      }
       else {
           $info[] = $form['cfg']['fuck'];
       }

    }

 } else {
    $error[] = 'Нет настроек формы с именем #'.$act;
 }
    
    if(count($error) > 0) {
        $jsonBox['errors'] = $error;
    }
    if(count($info) > 0) {
        $jsonBox['infos'] = $info;
    }

    die(json_encode($jsonBox)); //мертвые с косами

/* добавляет любые доп данные из вне в нужное место
 * (например в заголовок письма необходимо дабавить Ник юзера или Номер заказа )
 *
 *  */

function adds($vars) {
    global $form;
    $adds = $form['cfg']['adds'];
    foreach($adds as $key => $opts) {
        if(is_string($key)) {
            $one = array();
            $two = array();
            foreach($opts as $i => $val) {
                if(isset($_POST[$val])) {
                  $one[] = '%%'.$val.'%%';
                  $two[] = $_POST[$val];
                }
            }
           $vars[$key] = str_replace($one, $two, $vars[$key]);
        }
    }
       return $vars;
}
/*
 * парсер шаблона
 */
 function tpl($vars) {
    $tpl = 'tpl/'.$vars['name'].'.tpl';
    if(file_exists($tpl)) {
     $template = file_get_contents($tpl);
        foreach($vars['getdata'] as $name => $data) {
            $template = str_replace(array("%%".$name.".title%%", "%%".$name.".value%%"), array($data['title'], $data['value']), $template);
        }
        return $template;
    }
     else {
      return false;
    }
 }

