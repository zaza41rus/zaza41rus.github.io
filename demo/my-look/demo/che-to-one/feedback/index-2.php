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



$form['form-3'] = array(

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

		'tell' => array(

			'title' => 'Телефон',

			'validate' => array(

				'preg' => "/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/",

				'minlength' => '5',

			),

			'messages' => array(

				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',

				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',

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



		'radio' => array(

			'title' => 'Ваш выбор chё.to',

			'validate' => array(

				'minlength' => '1',

			),

			'messages' => array(

				'minlength' => '[ %1$s ] необходимо выбрать',

			)

		),

		'HET-NAME' => array(

			'title' => 'Имя получателя',

			'validate' => array(



			),

			'messages' => array(



			)

		),	

		'HET-TEL' => array(

			'title' => 'Телефон получателя',

			'validate' => array(



			),

			'messages' => array(



			)

		),
		
		'HET-POZELANIY' => array(

			'title' => 'Особые отметки/пожелания',

			'validate' => array(

				'minlength' => '0',

			),

			'messages' => array(

				'minlength' => '[ %1$s ] необходимо заполнить',

			)

		),		
		
		'HET-ADRESS' => array(

			'title' => 'Адрес вручения',

			'validate' => array(

				'minlength' => '0',

			),

			'messages' => array(

				'minlength' => '[ %1$s ] необходимо заполнить',

			)

		),	

		



		

		'HET-CHAS' => array(

			'title' => 'Час вручения',

			'validate' => array(

				'minlength' => '0',

			),

			'messages' => array(

				'minlength' => '[ %1$s ] необходимо выбрать',

			)

		),

		'HET-DAY' => array(

			'title' => 'День вручения',

			'validate' => array(

				'minlength' => '0',

			),

			'messages' => array(

				'minlength' => '[ %1$s ] необходимо выбрать',

			)

		),		

		'HET-MESYAC' => array(

			'title' => 'Мясяц вручения',

			'validate' => array(

				'minlength' => '0',

			),

			'messages' => array(

				'minlength' => '[ %1$s ] необходимо выбрать',

			)

		),		

		'AHOHNMHO' => array(

			'title' => 'Сказать от кого подарок',

			'validate' => array(

				'minlength' => '0',

			),

			'messages' => array(

				'minlength' => '[ %1$s ] необходимо установить',

			)

		),			



	),		
	
	
	
	
	'cfg' => array(
		'charset' => 'utf-8',
		'subject' => 'Chё.to заказали',
		'title' => 'Удивиляй вместе с chё.to',
		'ajax' => true,
		'validate' => true,
'from_email' => 'e-mail',
'from_name' => 'name',
'to_email' => 'hi@che.to',
'to_name' => 'Chё.to',
		'geoip' => true,
		'referer' => true,
		'type' => 'html',
		'tpl' => true,
		'antispam' => 'email77',
		'antispamjs' => 'address77',
		'okay' => '
		<div class="">
			<img class="koza" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgWDcgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIKdmlld0JveD0iMCAwIDc5OCA3OTgiCiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZGVmcz4KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICA8IVtDREFUQVsKICAgIC5zdHIwIHtzdHJva2U6I0M4RENDMztzdHJva2Utd2lkdGg6Mi43NDA0MTtzdHJva2UtbGluZWNhcDpyb3VuZH0KICAgIC5maWwzIHtmaWxsOm5vbmV9CiAgICAuZmlsMCB7ZmlsbDojQzhEQ0MzfQogICAgLmZpbDIge2ZpbGw6I0VCN0Q2Q30KICAgIC5maWwxIHtmaWxsOiNGRkNDODB9CiAgICAuZmlsNCB7ZmlsbDojRkZEOUQ5O2ZpbGwtb3BhY2l0eTowLjg1MDk4MH0KICAgIC5maWw1IHtmaWxsOiNGRkQ5RDk7ZmlsbC1vcGFjaXR5OjAuODUwOTgwfQogICBdXT4KICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9ItCh0LvQvtC5X3gwMDIwXzEiPgogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+CiAgPGNpcmNsZSBjbGFzcz0iZmlsMCIgY3g9IjM5OSIgY3k9IjM5OSIgcj0iMzk5Ii8+CiAgPHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik0zMDkgNDczYzYyLC00OCA4MCwtOTIgNTYsLTEzMCAtMzUsMzAgLTY5LDYwIC0xMDMsOTBsMCAxMzVjNDYsNjQgNzcsNTIgODUsLTIgLTIsLTM3IC0xNSwtNjcgLTM4LC05M3oiLz4KICA8cGF0aCBjbGFzcz0iZmlsMSIgZD0iTTI4OSA3ODJsMjQ2IC04IC0xOCAtMTU4YzE0LC0xMiAyMSwtMjkgMjMsLTUyIDAsLTk4IDAsLTE5NSAwLC0yOTMgLTcsLTM3IC01MywtMzUgLTU1LDBsMCAzOWMtNSwtMzggLTUzLC00MCAtNTYsMCAtMywtNDEgLTU3LC00MSAtNjEsMWwwIC0xMTBjLTQsLTM4IC01NSwtNDAgLTYxLDBsMSAzOTYgNiAxNyAtMjUgMTY4eiIvPgogIDxwYXRoIGNsYXNzPSJmaWwyIiBkPSJNMjg5IDc4M2wyNSAtMTY5IDIwMyAyYzcsNTkgMTEsMTAwIDE4LDE1OCAtNjEsMjQgLTE0NSwzNiAtMjQ2LDl6Ii8+CiAgPGxpbmUgY2xhc3M9ImZpbDMgc3RyMCIgeDE9IjQyOSIgeTE9IjI5NyIgeDI9IjQyOSIgeTI9ICIzNzEiIC8+CiAgPGxpbmUgY2xhc3M9ImZpbDMgc3RyMCIgeDE9IjM2OSIgeTE9IjI5OCIgeDI9IjM2OSIgeTI9ICIzNzIiIC8+CiAgPGxpbmUgY2xhc3M9ImZpbDMgc3RyMCIgeDE9IjQ4NCIgeTE9IjI5OSIgeDI9IjQ4NCIgeTI9ICIzNzMiIC8+CiAgPGxpbmUgY2xhc3M9ImZpbDMgc3RyMCIgeDE9IjMwNiIgeTE9IjM3OSIgeDI9IjMwNiIgeTI9ICI0NTMiIC8+CiAgPHBhdGggY2xhc3M9ImZpbDQiIGQ9Ik0zMzggMjI4Yy0xNywtNCAtMjMsLTE4IC0yMiwtMzggMTQsLTExIDI4LC0xMCA0MywwIDAsMTggLTMsMzMgLTIxLDM4eiIvPgogIDxwYXRoIGNsYXNzPSJmaWw1IiBkPSJNNTEzIDMwMWMtMTcsLTQgLTIzLC0xOCAtMjIsLTM4IDE0LC0xMCAyOCwtMTAgNDMsMCAwLDE4IC0zLDMzIC0yMSwzOHoiLz4KIDwvZz4KPC9zdmc+Cg==" alt="Коза">
		</div>
		<h1>ОКАЙ!</h1> <br>
		На ваш почтовый ящик отправлено сообщение <span class="txt-spam">(может попасть в папку SPAM)</span> с деталями и информацией <span class="txt-mod">&laquo;Как оплатить&raquo;</span> <br>
			',
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


$headers = "Return-Path: <".$toEmail.">\r\n";
$headers .= "From: ".$toName." <".$toEmail.">\r\n";
$headers .= "X-Mailer: Feedback, v0.3 (http://artuelle.com)\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "Reply-To: ".$toName." <".$toEmail.">\r\n";
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
$mail = mail($get_fromEmail, $sb['subject'], $sb['body'], $headers);

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

