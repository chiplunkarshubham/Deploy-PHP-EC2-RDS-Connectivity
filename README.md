# Deploy-PHP-EC2-RDS-Connectivity or PHP-Compute Engine-Cloud SQL
To check connectivity between EC2 and RDS using simple PHP Code

For VM (CE or EC2) for ubuntu/debian based.

Commands:
	apt-get update
	apt-get install apache2 php php-mysql -y
	apt-get install mysql-client -y
	cd /var/www/html
	sudo nano/vi index.php  //Paste the given index.php code
	service apache2 restart

Roles:
	Create and attach S3 Full Access and RDS full access role to EC2.
		How To verify you got access after attaching?
		Commands: [Install AWS CLI on ec2 instance using: apt install awscli]
			aws configure //Set the region in which you are working, and format as json, rest just click enter
			aws rds describe-db-instances  // After setting the db
			telnet mysqldaabase.c04odrrucaii.us-east-1.rds.amazonaws.com 3306   //After setting the db
	Attach role to the service account of your CE to have admin access of Cloud SQL	
		How To verify you got access after attaching?
		Commands:
			glcloud config set compute/region REGION
			gcloud sql databases list
			telnet IP_ADDRESS_OF_RDS 3306   //After setting the db

For Database (RDS or Cloud SQL) set user and password and other configurations.
For RDS:
	Allow the EC2 instance private IP in the security group
For Cloud SQL:
	In the Connection section add the IP address of Compute Engine

How to check:
	Enter the public IP of the EC2 or CE followed by index.php // Eg. X.X.X.X/index.php
	You must get "Welcome to my excellent blog Database connection succeeded."

Login to database from VM:
	For AWS

		mysql -h mysqldaabase.c04odrrucaii.us-east-1.rds.amazonaws.com -u shubham -p [Enter, and in the next line give the password]
	For GCP

		mysql -h IP_ADDRESS_OF_RDS -u shubham -p [Enter, and in the next line give the password]


Create and S3/Cloud Storage bucket and add and image in it, make sure it is public
AWS: Give Ec2 s3 full acess
GCP: Give Service Account role to Admin access to Cloud Storage
Add this line of code in the index.php code.

	cd /var/www/html
	sudo nano index.php
	For AWS:
		after(<body>)  <img src='https://aws-devops-cicddemoshubham.s3.amazonaws.com/achievement.jpg'>   before <h1></h1>	
	For GCP:
		after(<body>)  <img src='https://storage.googleapis.com/qwiklabs-gcp-0005e186fa559a09/my-excellent-blog.png'>   before <h1></h1>
	service apache2 restart

 
