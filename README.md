# Nodejs-application-rabbitmq-minio

# first unzip the given folder

# 1.Run the command -  npm install
# It sets up every dependency needed for the project

 # How to setup the minio server locally .

 # 1.This url provide the information how to setup the minio server for different Operating Systems -- https://min.io/
# 2.For windows operating system  here is the procedure
 # 2.1 first install by using this command -- https://dl.min.io/server/minio/release/windows-amd64/minio.exe

 # 2.2 Run this command by commandprompt where the exe file has been downloaded - .minio.exe server C:\minio --console-address :9090
 # 2.3 Replace C:\minio with the directory where it is download in your pc
# 2.4 The cmd prompt  will show the result as API: http://192.0.2.10:9000  http://127.0.0.1:9000
# RootUser: minioadmin
# RootPass: minioadmin

# Documentation: https://min.io/docs/minio/linux/index.html

# 2.5 Open the url - http://127.0.0.1:9090
# This will redirect to minio console login page where user and password credentials are minioadmin and minioadminrespectively.

# create the access key and secret key and replace this in publisher.js file.

# 2.6 You can create the bucket hardedcoded by clicking on button create bucket or else by using nodejs.

# How to setup the rabbitmq locally

#  for different operating system refer this url - https://www.rabbitmq.com/
# 3.1 For windows follow this procedure click on download + installation Here it recomended windows installer click here and it is depended on erlang.first install latest version of erlang 25.0 versionof 64 bit file. by clicking on couple of next button install button will arrive and install the erlang.
# 3.2 Download the rabbitmq-server 3.11.3 exe .
# 3.3 install rabbitmq. and  click on allow access button for access permission

# 3.4 rabbit mq cmd prompt  inside this -- rabbitmq-plugins enable rabbitmq_managementand hit enter
# 3.5 open a new tab -- http://localhost:15672
# enter user name - guest
# enter password  - guest

# Run the command npm start you will get Listening on port 3000....

 





