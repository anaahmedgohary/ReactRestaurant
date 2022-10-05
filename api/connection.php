<?php 
	/**
	* Database Connection
	*/
	class DbConnect {
		 $server = process.env.HOST;
		 $dbname = process.env.DATABASE;
		 $user = process.env.USERNAME;
		 $pass = process.env.PASSWORD;

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



 <?php
//   $mysqli = mysqli_init();
//   $mysqli->ssl_set(NULL, NULL, "/etc/ssl/certs/ca-certificates.crt", NULL, NULL);
//   $mysqli->real_connect($_ENV["HOST"], $_ENV["USERNAME"], $_ENV["PASSWORD"], $_ENV["DATABASE"]);
//   $mysqli->close();
?> 