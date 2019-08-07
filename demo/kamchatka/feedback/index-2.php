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




$form['form-house'] = array(
	'fields' => array(
		'name' => array(
			'title' => ' ► Имя			',
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
			'title' => ' ► Mail			',
			'validate' => array(
				'preg' => '/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i',
				'minlength' => '3',
			),
			'messages' => array(
				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',
				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',

			)
			
		),

		'tell' => array(
			'title' => ' ► Тел.			',

		),
		
		'data1' => array(
			'title' => ' ► С			',

		),		
		'data2' => array(
			'title' => ' ► По			',

		),
		
		'select' => array(
			'title' => ' ► Кол-во		',

		),
		
		'range' => array(
			'title' => ' ► Бюджет сутки/руб.	',

		),
		
		'checkbox1' => array(
			'title' => ' ► Трансфер			',

		),
		'checkbox2' => array(
			'title' => ' ► Здоровье		',

		),
		'checkbox3' => array(
			'title' => ' ► Дети			',

		),		
		'checkbox3' => array(
			'title' => ' ► Животные			',

		),	
		'text' => array(
			'title' => ' ► Дополнительно	',

		),		
	),
	'cfg' => array(
		'charset' => 'utf-8',
		'subject' => 'Заявка на НОЧЛЕГ',
		'title' => '
Ваша заявка разослана всем 
туроператорам зарегестрированным 
в нашем сервисе.

Ожидайте отклика от 
заинтересовавшейся стороны... 
=============================

',
		'title2' => '

=============================
Спасибо, что воспользовались 
услугами нашего сервиса. 

Надеемся, он поможет Вам 
насладиться Камчаткой, по 
приемлимым ценам...
',
		'ajax' => true,
		'validate' => true,
'from_email' => 'e-mail',
'from_name' => 'name',
'to_email' => 'travel@kamchatka.love',
'to_name' => 'Kamchatka.Love',
		'geoip' => true,
		'referer' => true,
		'type' => 'plain',
		'tpl' => false,
		'antispam' => 'email77',
		'antispamjs' => 'address77',
		'okay' => '',
		'fuck' => 'Сообщение отправлено - ERROR',
		'spam' => 'Cпам робот',
		'notify' => 'color-modal',
		'usepresuf' => false
	)
);



$form['form-vulkan'] = array(
	'fields' => array(
		'name' => array(
			'title' => ' ► Имя			',
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
			'title' => ' ► Mail			',
			'validate' => array(
				'preg' => '/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i',
				'minlength' => '3',
			),
			'messages' => array(
				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',
				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',

			)
			
		),

		'tell' => array(
			'title' => ' ► Тел.			',

		),
				
		'radio' => array(
			'title' => ' ► Тур			',

		),
		
		'data1' => array(
			'title' => ' ► С			',

		),		
		'data2' => array(
			'title' => ' ► По			',

		),
		
		'select' => array(
			'title' => ' ► Кол-во		',

		),
		

		'checkbox1' => array(
			'title' => ' ► Вегатарианцы		',

		),
		'checkbox2' => array(
			'title' => ' ► Здоровье		',

		),
		'checkbox3' => array(
			'title' => ' ► Дети			',

		),		

		'text' => array(
			'title' => ' ► Дополнительно	',

		),		
	),
	'cfg' => array(
		'charset' => 'utf-8',
		'subject' => 'Заявка на ВОСХОЖДЕНИЕ',
		'title' => '
Ваша заявка разослана всем 
туроператорам зарегестрированным 
в нашем сервисе.

Ожидайте отклика от 
заинтересовавшейся стороны... 
=============================

',
		'title2' => '

=============================
Спасибо, что воспользовались 
услугами нашего сервиса. 

Надеемся, он поможет Вам 
насладиться Камчаткой, по 
приемлимым ценам...
',
		'ajax' => true,
		'validate' => true,
'from_email' => 'e-mail',
'from_name' => 'name',
'to_email' => 'travel@kamchatka.love',
'to_name' => 'Kamchatka.Love',
		'geoip' => true,
		'referer' => true,
		'type' => 'html',
		'tpl' => true,
		'antispam' => 'email77',
		'antispamjs' => 'address77',
		'okay' => '',
		'fuck' => 'Сообщение отправлено - ERROR',
		'spam' => 'Cпам робот',
		'notify' => 'color-modal',
		'usepresuf' => false
	)
);


$form['form-splav'] = array(
	'fields' => array(
		'name' => array(
			'title' => ' ► Имя			',
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
			'title' => ' ► Mail			',
			'validate' => array(
				'preg' => '/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i',
				'minlength' => '3',
			),
			'messages' => array(
				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',
				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',

			)
			
		),

		'tell' => array(
			'title' => ' ► Тел.			',

		),
			
		'radio' => array(
			'title' => ' ► Тур			',

		),
		
		'data1' => array(
			'title' => ' ► С			',

		),		
		'data2' => array(
			'title' => ' ► По			',

		),
		
		'select' => array(
			'title' => ' ► Кол-во		',

		),
		

		'checkbox1' => array(
			'title' => ' ► Вегатарианцы		',

		),
		'checkbox2' => array(
			'title' => ' ► Здоровье		',

		),
		'checkbox3' => array(
			'title' => ' ► Дети			',

		),		

		'text' => array(
			'title' => ' ► Дополнительно	',

		),		
	),
	'cfg' => array(
		'charset' => 'utf-8',
		'subject' => 'Заявка на СПЛАВ',
		'title' => '
Ваша заявка разослана всем 
туроператорам зарегестрированным 
в нашем сервисе.

Ожидайте отклика от 
заинтересовавшейся стороны... 
=============================

',
		'title2' => '

=============================
Спасибо, что воспользовались 
услугами нашего сервиса. 

Надеемся, он поможет Вам 
насладиться Камчаткой, по 
приемлимым ценам...
',
		'ajax' => true,
		'validate' => true,
'from_email' => 'e-mail',
'from_name' => 'name',
'to_email' => 'travel@kamchatka.love',
'to_name' => 'Kamchatka.Love',
		'geoip' => true,
		'referer' => true,
		'type' => 'plain',
		'tpl' => false,
		'antispam' => 'email77',
		'antispamjs' => 'address77',
		'okay' => '',
		'fuck' => 'Сообщение отправлено - ERROR',
		'spam' => 'Cпам робот',
		'notify' => 'color-modal',
		'usepresuf' => false
	)
);


$form['form-polet'] = array(
	'fields' => array(
		'name' => array(
			'title' => ' ► Имя			',
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
			'title' => ' ► Mail			',
			'validate' => array(
				'preg' => '/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i',
				'minlength' => '3',
			),
			'messages' => array(
				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',
				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',

			)
			
		),

		'tell' => array(
			'title' => ' ► Тел.			',

		),
		
		'data1' => array(
			'title' => ' ► Когда			',

		),				
		'radio' => array(
			'title' => ' ► Стоимость			',

		),
		
		'select' => array(
			'title' => ' ► Кол-во			',

		),

		'text' => array(
			'title' => ' ► Дополнительно			',

		),		
	),
	'cfg' => array(
		'charset' => 'utf-8',
		'subject' => 'Заявка на ПОЛЕТ',
		'title' => '
Ваша заявка разослана всем 
туроператорам зарегестрированным 
в нашем сервисе.

Ожидайте отклика от 
заинтересовавшейся стороны... 
=============================

',
		'title2' => '

=============================
Спасибо, что воспользовались 
услугами нашего сервиса. 

Надеемся, он поможет Вам 
насладиться Камчаткой, по 
приемлимым ценам...
',
		'ajax' => true,
		'validate' => true,
'from_email' => 'e-mail',
'from_name' => 'name',
'to_email' => 'travel@kamchatka.love',
'to_name' => 'Kamchatka.Love',
		'geoip' => true,
		'referer' => true,
		'type' => 'plain',
		'tpl' => false,
		'antispam' => 'email77',
		'antispamjs' => 'address77',
		'okay' => '',
		'fuck' => 'Сообщение отправлено - ERROR',
		'spam' => 'Cпам робот',
		'notify' => 'color-modal',
		'usepresuf' => false
	)
);

$form['form-fishing'] = array(
	'fields' => array(
		'name' => array(
			'title' => ' ► Имя			',
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
			'title' => ' ► Mail			',
			'validate' => array(
				'preg' => '/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i',
				'minlength' => '3',
			),
			'messages' => array(
				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',
				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',

			)
			
		),

		'tell' => array(
			'title' => ' ► Тел.			',

		),
		
		'radio' => array(
			'title' => ' ► Стоимость			',

		),
		
		'data1' => array(
			'title' => ' ► С			',

		),		

		'data2' => array(
			'title' => ' ► По			',

		),	
		
		'select' => array(
			'title' => ' ► Кол-во		',

		),

		'range' => array(
			'title' => ' ► Кол-во суток		',

		),
		'checkbox1' => array(
			'title' => ' ► Вегатарианцы		',

		),
		'checkbox2' => array(
			'title' => ' ► Здоровье		',

		),
		'checkbox3' => array(
			'title' => ' ► Дети			',

		),			
		
		'text' => array(
			'title' => ' ► Дополнительно	',

		),		
	),
	'cfg' => array(
		'charset' => 'utf-8',
		'subject' => 'Заявка на РЫБАЛКУ',
		'title' => '
Ваша заявка разослана всем 
туроператорам зарегестрированным 
в нашем сервисе.

Ожидайте отклика от 
заинтересовавшейся стороны... 
=============================

',
		'title2' => '

=============================
Спасибо, что воспользовались 
услугами нашего сервиса. 

Надеемся, он поможет Вам 
насладиться Камчаткой, по 
приемлимым ценам...
',
		'ajax' => true,
		'validate' => true,
'from_email' => 'e-mail',
'from_name' => 'name',
'to_email' => 'travel@kamchatka.love',
'to_name' => 'Kamchatka.Love',
		'geoip' => true,
		'referer' => true,
		'type' => 'plain',
		'tpl' => false,
		'antispam' => 'email77',
		'antispamjs' => 'address77',
		'okay' => '',
		'fuck' => 'Сообщение отправлено - ERROR',
		'spam' => 'Cпам робот',
		'notify' => 'color-modal',
		'usepresuf' => false
	)
);


$form['form-step'] = array(
	'fields' => array(
		'name' => array(
			'title' => ' ► Имя			',
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
			'title' => ' ► Mail			',
			'validate' => array(
				'preg' => '/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i',
				'minlength' => '3',
			),
			'messages' => array(
				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',
				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',

			)
			
		),

		'tell' => array(
			'title' => ' ► Тел.			',

		),
		
		'data1' => array(
			'title' => ' ► С			',

		),		

		'data2' => array(
			'title' => ' ► По			',

		),	
		
		'select' => array(
			'title' => ' ► Кол-во		',

		),
		'radio' => array(
			'title' => ' ► Тур			',

		),

		'checkbox1' => array(
			'title' => ' ► Вегатарианцы		',

		),
		'checkbox2' => array(
			'title' => ' ► Здоровье		',

		),
		'checkbox3' => array(
			'title' => ' ► Дети			',

		),			
		
		'text' => array(
			'title' => 'Дополнительно	',

		),		
	),
	'cfg' => array(
		'charset' => 'utf-8',
		'subject' => 'Заявка на ПЕШИЙ ТУР',
		'title' => '
Ваша заявка разослана всем 
туроператорам зарегестрированным 
в нашем сервисе.

Ожидайте отклика от 
заинтересовавшейся стороны... 
=============================

',
		'title2' => '

=============================
Спасибо, что воспользовались 
услугами нашего сервиса. 

Надеемся, он поможет Вам 
насладиться Камчаткой, по 
приемлимым ценам...
',
		'ajax' => true,
		'validate' => true,
'from_email' => 'e-mail',
'from_name' => 'name',
'to_email' => 'travel@kamchatka.love',
'to_name' => 'Kamchatka.Love',
		'geoip' => true,
		'referer' => true,
		'type' => 'plain',
		'tpl' => false,
		'antispam' => 'email77',
		'antispamjs' => 'address77',
		'okay' => '',
		'fuck' => 'Сообщение отправлено - ERROR',
		'spam' => 'Cпам робот',
		'notify' => 'color-modal',
		'usepresuf' => false
	)
);






$form['form-SUP'] = array(
	'fields' => array(
		'name' => array(
			'title' => ' ► Имя			',
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
			'title' => ' ► Mail			',
			'validate' => array(
				'preg' => '/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i',
				'minlength' => '3',
			),
			'messages' => array(
				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',
				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',

			)
			
		),

		'tell' => array(
			'title' => ' ► Тел.			',

		),
		
		'data1' => array(
			'title' => ' ► С			',

		),		

		'data2' => array(
			'title' => ' ► По			',

		),	
		
		'select' => array(
			'title' => ' ► Кол-во			',

		),
		'radio' => array(
			'title' => ' ► Тур			',

		),

		'text' => array(
			'title' => ' ► Дополнительно			',

		),		
	),
	'cfg' => array(
		'charset' => 'utf-8',
		'subject' => 'Заявка на SUP',
		'title' => '
Ваша заявка разослана всем 
туроператорам зарегестрированным 
в нашем сервисе.

Ожидайте отклика от 
заинтересовавшейся стороны... 
=============================

',
		'title2' => '

=============================
Спасибо, что воспользовались 
услугами нашего сервиса. 

Надеемся, он поможет Вам 
насладиться Камчаткой, по 
приемлимым ценам...
',
		'ajax' => true,
		'validate' => true,
'from_email' => 'e-mail',
'from_name' => 'name',
'to_email' => 'travel@kamchatka.love',
'to_name' => 'Kamchatka.Love',
		'geoip' => true,
		'referer' => true,
		'type' => 'plain',
		'tpl' => false,
		'antispam' => 'email77',
		'antispamjs' => 'address77',
		'okay' => '',
		'fuck' => 'Сообщение отправлено - ERROR',
		'spam' => 'Cпам робот',
		'notify' => 'color-modal',
		'usepresuf' => false
	)
);





$form['form-4-4'] = array(
	'fields' => array(
		'name' => array(
			'title' => ' ► Имя			',
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
			'title' => ' ► Mail			',
			'validate' => array(
				'preg' => '/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i',
				'minlength' => '3',
			),
			'messages' => array(
				'preg' => 'Поле [ %1$s ] возможно содержит ошибку',
				'minlength' => 'Минимальная длинна поля [ %1$s ] меньше допустимой - %2$s',

			)
			
		),

		'tell' => array(
			'title' => ' ► Тел.			',

		),
		
		'data1' => array(
			'title' => ' ► С			',

		),		

		'data2' => array(
			'title' => ' ► По			',

		),	
		
		'select' => array(
			'title' => ' ► Кол-во		',

		),
		'range' => array(
			'title' => ' ► Бюджет		',

		),
		'checkbox1' => array(
			'title' => ' ► Вегатарианцы		',

		),
		'checkbox2' => array(
			'title' => ' ► Здоровье		',

		),
		'checkbox3' => array(
			'title' => ' ► Дети			',

		),
		'text' => array(
			'title' => ' ► Дополнительно	',

		),		
	),
	'cfg' => array(
		'charset' => 'utf-8',
		'subject' => 'Заявка на  ТУР 4*4',
		'title' => '
Ваша заявка разослана всем 
туроператорам зарегестрированным 
в нашем сервисе.

Ожидайте отклика от 
заинтересовавшейся стороны... 
=============================

',
		'title2' => '

=============================
Спасибо, что воспользовались 
услугами нашего сервиса. 

Надеемся, он поможет Вам 
насладиться Камчаткой, по 
приемлимым ценам...
',
		'ajax' => true,
		'validate' => true,
'from_email' => 'e-mail',
'from_name' => 'name',
'to_email' => 'travel@kamchatka.love',
'to_name' => 'Kamchatka.Love',
		'geoip' => true,
		'referer' => true,
		'type' => 'plain',
		'tpl' => false,
		'antispam' => 'email77',
		'antispamjs' => 'address77',
		'okay' => '',
		'fuck' => 'Сообщение отправлено - ERROR',
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
      $get_fromEmail = (isset($form['fields'][$form['cfg']['from_email']]) && isset($getdata[$form['cfg']['from_email']]['value']) && mb_strpos('@', $getdata[$form['cfg']['from_email']]['value']) === false) ? $getdata[$form['cfg']['from_email']]['value'] : ((mb_strpos('@', $form['cfg']['from_email']) !== false) ? $form['cfg']['from_email'] : 'travel@'.$host);

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
              $sb['body'] .= $data['title'].": ".$data['value']."\r\n\r\n";
          }
		  
		  
          
		  if($form['cfg']['referer'])
			  $sb['body'] .= $form['cfg']['title2']."\r\n\r\n";
              $sb['body'] .= "С, Уважением ".$ref;

          
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
    $tpl = 'tpl/client/'.$vars['name'].'.tpl';
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

