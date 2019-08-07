<?php
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
class User{
	 var $error = '';
	 var $msg = '';
	 public $sdb;
	
	public function __construct(){
	global $db;
	 $this->sdb = $db;
	}
 
	public function is_user($id){
		global $crypt;
		global $encryption;
		$id = $crypt->decrypt($id);
		$stmt = "SELECT * FROM  " . PFX . "users WHERE `id` = :id";
		$this->sdb->query($stmt);
		$this->sdb->bind(":id",$id);
		$result = $this->sdb->single();
		if($result){
		$result['password'] = $encryption->decrypt($result['password']);
		return $result;	
		}
		$this->error = "User not found";
		return false;
	}	
	
	public function get_pass($email){
		global $encryption;
		$email = trim($email);
		$stmt = "SELECT password FROM  " . PFX . "customers WHERE `email` = :email";
		$this->sdb->query($stmt);
		$this->sdb->bind(":email",$email);
		$result = $this->sdb->single();
		if($result){
		$pwd = $encryption->decrypt($result['password']);
		return $pwd;	
		}
		$this->error = "User not found";
		return false;
	}
	
	public function is_new_user($email){
		$email = trim($email);
		$stmt = "SELECT * FROM  " . PFX . "customers WHERE `email` = :email";
		$this->sdb->query($stmt);
		$this->sdb->bind(":email",$email);
		$result = count($this->sdb->resultset());
		if($result == 0){
		return true;		
		}
		$this->error = "User already exists";
		return false;
	}
	public function details($id){
		$details = $this->is_user($id);
		return $details;
	}
	public function update($id,$column,$data){
	global $crypt;
	$id = trim($id);
	$column = trim($column);
	$data = trim($data);
	if($this->is_user($id)){
	$id = $crypt->decrypt($id);
	$stmt = "UPDATE " . PFX . "customers  SET :column = :data WHERE id =:id";
		$this->sdb->query($stmt);
		$this->sdb->bind(":column",$column);
		$this->sdb->bind(":data",$data);
		$this->sdb->bind(":id",$id);
		$update = $this->sdb->execute();
	if($update){
		$this->msg = "Setting updated successfully";
		return true;
	}
	$this->error = "Error updating status";
	return false;
	}
	$this->error = "Error updating status";
	return false;
	}
	
	public function add($name,$mobile,$email,$password){
		global $encryption;

		if(empty($name)){
			$this->error = "Please enter your name.";
		return false;	
		}
		if(empty($mobile) || !is_numeric($mobile) || !ctype_digit($mobile)){
			$this->error = "Please enter valid mobile no.";
		return false;
		}
		if($this->is_new_user($email)){
		$email = strtolower($email);
		$password = $encryption->encrypt($password);
		// $password = base64_encode($password);
		$stmt = "INSERT INTO " . PFX . "customers (`id`, `name`,`mobile`,`email`, `password`,`active`) VALUES (NULL, :name,:mobile,:email , :password, '1')";
		$this->sdb->query($stmt);
		$this->sdb->bind(":name",$name);
		$this->sdb->bind(":mobile",$mobile);
		$this->sdb->bind(":email",$email);
		$this->sdb->bind(":password",$password);
		$add = $this->sdb->execute();
		if($add){
	
	$headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=utf-8\n";
    $headers .= "from:Farmily <no-reply@".$_SERVER['HTTP_HOST']."> \n";
	$subject = "Информация о вашем АККАУНТЕ";
	$message = "<h2>Привет, ".$email ."</h2><br />";
	$message .= "Поздравляем, вы успешно зарегистрированы на ".$_SERVER['HTTP_HOST']." with this email id. <br />";
	$message .= "&copy; ".$_SERVER['HTTP_HOST'];
	@mail($email,$subject,$message,$headers);
	$this->msg = "Зарегистрирован успешно";
		return true;
		}
		$this->error = "Упс. Пожалуйста, попробуйте позже.";
		return false;
	}
	$this->error = "С таким emeil пользователь уже существует";
	return false;
	}
}
?>