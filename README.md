
# Intelligent Course Management System

A course management system to provide a single online environment for teaching and learning materials to be shared between instructors and students, view personalised weekly schedule and join online meetings. As an additional feature, facial recognition is used for the login component<br> 

Made as a part of the course COMP3278 - Introduction to Database Management System <br> 
Contributors: 
- Mohammad Abdur Rahman
- Aryan Agrawal 
- Divtej Singh Bhatia 
- Smaran Goli
- Rahul Agarwal 

## Running Instructions
1. First, please run the <b><u>db_script.py</u></b> (using the command <i>'python db_script.py'</i>) in the Database directory to generate the database in your local machine. (Please replace the username and password in db_script.py with your local sql username and password (line 7 and line 8))<br>

2. Please go to the directory FaceRecognition and run the command <i>pip install -r requirements.txt</i> in the command line inorder to download all the modules/libraries required to run the facial recognition.<br>

3. To run the Frontend (React): 
    - Go to the directory course-management-system and use the command <i>npm start</i> 
    - Note, Please make sure you go to localhost:3000/welcome to start the web application

4. To run the Backend (Flask): 
    - <i>python server.py</i> in the Server directory
    - Please also change the password and username in the server.py file with your local sql username and password

Note - some local machines might require <i>'python3 filename.py'</i> instead of <i>'python filename.py'</i>, depending on which version of python is set as default 

## Features

- Facial recognition for login
- View classes within one hour
- Lecture/Tutorial location
- Lecture/Tutorial timings
- Lecture/Tutorial Notes
- Consultation hours
- Consultation location
- Zoom link to lecture/tutorial
- Automatically email Upcoming lecture information
- View Course Page with all the course details
- Personalised weekly schedule
- Profile page and Login history