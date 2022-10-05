<?php 
	/**
	* Database Connection
	*/
	class DbConnect {
		private $server = 'us-east.connect.psdb.cloud';
		private $dbname = 'fooddelivery';
		private $user = 'd1q35zdh6g7m5eslvnal';
		private $pass = '************';

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
		}
	}
 ?>