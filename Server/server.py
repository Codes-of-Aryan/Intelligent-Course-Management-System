from flask import Flask, jsonify
# from flask_mysql_connector import MySQL

import mysql.connector

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# Importing self made module for
# Facial Recognition
import os
import sys
current_dir = os.getcwd()
parent_dir = os.path.dirname(current_dir)
sys.path.append(parent_dir + '/FaceRecognition')
from faces import recognize

'''
Sample way of using the Facial recognition 
This would simply return the name of the user 
detected by the recognition back to this file  
in the file '''

# name = recognize()
name = 'Abdur,3035756579'
start_time = datetime.now()




# print(name)

uid = name.split(',')[1]
# print(uid)


app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:mehyr@SIS11@localhost/Alpha'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_DATABASE'] = 'sys'
# db = SQLAlchemy(app)


# Trying Simple Model of Student


# using the new_cursor() method
# @app.route('/new_cursor')
# def new_cursor():
#     cur = mysql.new_cursor(dictionary=True)
#     #cur.execute(EXAMPLE_SQL)
#     output = cur.fetchall()
#     return str(output)


# using the connection property
# @app.route('/connection')
# def connection():
#     conn = mysql.connection
#     cur = conn.cursor()
#    # cur.execute(EXAMPLE_SQL)
#     output = cur.fetchall()
#     return str(output)


# using the execute_sql() method to easily
# select sql and optionally output to Pandas
# @app.route('/easy_execute')
# def easy_execute():
#     df = mysql.execute_sql(EXAMPLE_SQL, to_pandas=True)
#     return str(df.to_dict())


mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="011110067",  # change password to your own
    auth_plugin='mysql_native_password'
)
# create cursor object
my_cursor = mydb.cursor()

my_cursor.execute(
    "USE Alpha ; "
)

# Query1 to get details of the student -> Profile Page
# Student: UID, Last_Name, First_Name, Email, Password, Curriculum_Major, Curroculum_Minor, Year_Of_Study, Image_Filename
my_cursor.execute(
    "SELECT * FROM Student WHERE UID = " + uid + ";"
)
values1 = my_cursor.fetchall()
# print(values1)
@app.route('/student-details')
def studentDetails():
    return jsonify(uid=values1[0][0], l_name=values1[0][1], f_name=values1[0][2], email=values1[0][3], password=values1[0][4], major=values1[0][5], minor=values1[0][6], curriculum=values1[0][7], year=values1[0][8], image=values1[0][9], department=values1[0][10])


# Query2 to get Course details within 1hr Lecture

# SELECT C.CourseID, C.course_Name, C.Lecture_Location, C.Lecture_Start_Time, C.Lecture_End_Time, 
# CM.Message, CC.Zoom_Link, CCLM.Lecture_Slide
# FROM Student S, Course C, CourseMessage CM, takes T, CourseContent CC, CourseContentLectureMaterial CCLM
# WHERE S.UID = T.UID 
# AND C.CourseID = T.CourseID 
# AND CM.CourseID = C.courseID 
# AND CC.CourseID = C.courseID 
# AND CCLM.CourseID = C.courseID 
# AND C.Lecture_Day = DAYNAME(Current_Date()) 
# AND (SELECT EXTRACT(HOUR FROM (SELECT SUBTIME (C.Lecture_Start_Time, CURRENT_TIME)))) = 0;
my_cursor.execute(
    "SELECT C.CourseID, C.course_Name, C.Lecture_Location, C.Lecture_Start_Time, C.Lecture_End_Time, CM.Message, CC.Zoom_Link, CCLM.Lecture_Slide FROM (Student S, Course C, CourseMessage CM, takes T, CourseContent CC, CourseContentLectureMaterial CCLM) WHERE (S.UID = " + uid + ") AND (S.UID = T.UID)  AND (C.CourseID = T.CourseID) AND (CM.CourseID = C.courseID) AND (CC.CourseID = C.courseID) AND (CCLM.CourseID = C.courseID) AND (C.Lecture_Day = DAYNAME(Current_Date())) AND ((SELECT EXTRACT(HOUR FROM (SELECT SUBTIME (C.Lecture_Start_Time, CURRENT_TIME)))) = 0); "
)
values2 = my_cursor.fetchall()
# print(values2)
@app.route('/one-hour-course')
def ohc():
    if (len(values2) != 0):
        return jsonify(CourseID=values2[0][0], CourseName=values2[0][1], Location=values2[0][2], 
        ClassStart=str(values2[0][3]), ClassEnd=str(values2[0][4]), Message=values2[0][5], 
        ZoomLink=values2[0][6], Slides=values2[0][7])
    else:
        return jsonify(CourseID= "NO UPCOMING LECTURE IN AN HOUR", CourseName="", Location="-", 
        ClassStart="-", ClassEnd="-", Message="-", 
        ZoomLink="-", Slides="-")


# Query3 to get course details within 1hr tutorial 

# SELECT C.CourseID, C.course_Name, C.Tutorial_Location, C.Tutorial_Start_Time, C.Tutorial_End_Time, 
# CM.Message, CC.Zoom_Link, CCLM.Tutorial_Slide
# FROM Student S, Course C, CourseMessage CM, takes T, CourseContent CC, CourseContentLectureMaterial CCLM
# WHERE S.UID = T.UID 
# AND C.CourseID = T.CourseID
# AND CM.CourseID = C.courseID 
# AND CC.CourseID = C.courseID
# AND CCLM.CourseID = C.courseID
# AND C.Tutorial_Day = DAYNAME(Current_Date()) 
# AND (SELECT EXTRACT(HOUR FROM (SELECT SUBTIME (C.Tutorial_Start_Time, CURRENT_TIME)))) = 0;
my_cursor.execute(
    "SELECT C.CourseID, C.course_Name, C.Tutorial_Location, C.Tutorial_Start_Time, C.Tutorial_End_Time, CM.Message, CC.Zoom_Link, CCLM.Tutorial_Slide FROM (Student S, Course C, CourseMessage CM, takes T, CourseContent CC, CourseContentLectureMaterial CCLM) WHERE (S.UID = " + uid + ") AND (S.UID = T.UID) AND (C.CourseID = T.CourseID) AND (CM.CourseID = C.courseID) AND (CC.CourseID = C.courseID) AND (CCLM.CourseID = C.courseID) AND (C.Tutorial_Day = DAYNAME(Current_Date())) AND ((SELECT EXTRACT(HOUR FROM (SELECT SUBTIME (C.Tutorial_Start_Time, CURRENT_TIME)))) = 0); "
)
values3 = my_cursor.fetchall()
# print(values3)
@app.route('/one-hour-tutorial')
def oht():
    if (len(values3) != 0):
        return jsonify(CourseID=values3[0][0], CourseName=values3[0][1], Location=values3[0][2], 
        ClassStart=str(values3[0][3]), ClassEnd=str(values3[0][4]), Message=values3[0][5], 
        ZoomLink=values3[0][6], Slides=values3[0][7])
    else:
        return jsonify(CourseID= "NO UPCOMING TUTORIAL IN AN HOUR", CourseName="", Location="-", 
        ClassStart="-", ClassEnd="-", Message="-", 
        ZoomLink="-", Slides="-")


# Query4 to get course name and course code for profile page of user
my_cursor.execute(
    "SELECT T.CourseID, C.course_Name FROM (Student S, Takes T, Course C) WHERE (S.UID = T.UID)  AND (C.CourseID = T.CourseID) AND (S.UID = " + uid + ");"
)
valuesx = my_cursor.fetchall()
print("valuesx: ", valuesx)
@app.route('/courses')
def courses():
    c_name = []
    c_code = []
    c_details = []
    for i in valuesx:
        c_code.append(i[0])
        c_name.append(i[1])
    for i in range(len(c_code)):
        c_details.append(c_code[i] + " " + c_name[i])
    return jsonify(courseDetails = c_details)


# Query5 to get Course details for all courses

# SELECT C.CourseID, C.course_Name, C.Consultation_Location, C.Consultation_Time, C.Consultation_Day, C.Lecture_Location, C.Lecture_Day, C.Lecture_Start_Time, C.Lecture_End_Time, C.Tutorial_Day, C.Tutorial_Start_Time, C.Tutorial_End_Time, C.Tutorial_Location, CM.Message, CC.Zoom_Link, CCLM.Lecture_Slide, CCLM.Tutorial_Slide
# FROM Student S, Course C, CourseMessage CM, Takes T, CourseContent CC, CourseContentLectureMaterial CCLM
# WHERE S.UID = T.UID 
# AND S.UID = '3035756579'
# AND C.CourseID = T.CourseID
# AND CM.CourseID = C.courseID 
# AND CC.CourseID = C.courseID
# AND C.courseID = CCLM.courseID;

my_cursor.execute(
    "SELECT C.CourseID, C.course_Name, P.First_Name, P.Last_Name, P.Email, C.Consultation_Location, C.Consultation_Time, C.Consultation_Day, C.Lecture_Location, C.Lecture_Day, C.Lecture_Start_Time, C.Lecture_End_Time, C.Tutorial_Location, C.Tutorial_Day, C.Tutorial_Start_Time, C.Tutorial_End_Time, CM.Message, CC.Zoom_Link, CCLM.Lecture_Slide, CCLM.Tutorial_Slide, P.DepartmentName FROM (Student S, Course C, Professor P, CourseMessage CM, takes T, CourseContent CC, CourseContentLectureMaterial CCLM) WHERE (P.StaffID = C.StaffID) AND (S.UID = " + uid + ") AND (S.UID = T.UID)  AND (C.CourseID = T.CourseID) AND (CM.CourseID = C.courseID) AND (CC.CourseID = C.courseID) AND (CCLM.CourseID = C.courseID);"
)
values5 = my_cursor.fetchall()
# print(values5)
@app.route('/course-details')
def courseDetails():
    return jsonify(CourseID=values5[0][0], CourseName=values5[0][1], ProfessorFirstName=values5[0][2], ProfessorLastName=values5[0][3], ProfessorEmail = values5[0][4], ConsultationLocation=values5[0][5], 
    ConsultationTime=str(values5[0][6]), ConsultationDay=(values5[0][7]), LectureLocation=values5[0][8], 
    LectureDay=values5[0][9], LectureStartTime=str(values5[0][10]), LectureEndTime=str(values5[0][11]), TutorialLocation=values5[0][12], 
    TutorialDay=values5[0][13], TutorialStartTime=str(values5[0][14]), TutorialEndTime=str(values5[0][15]), Message=values5[0][16], 
    ZoomLink=values5[0][17], LectureSlides=values5[0][18], TutorialSlides=values5[0][19], ProfessorDepartment=values5[0][20])








# Query6 to Get ALL LOGIN HISTORY

my_cursor.execute(
    "SELECT loginTimeStamp, loginDuration_in_minutes FROM LoginHistory WHERE UID = " + uid + ";"   
)
values6 = my_cursor.fetchall()
# print(values5)Q
@app.route('/login-details')
def loginDetails():
    l_date = []
    l_time = []
    l_duration = []
    l_all = []

    for i in valuesx:
        l_date.append(str(i[0]))
        l_time.append(str(i[1]))
        l_duration.append(str(i[2]))

    for i in range(len(l_date)):
        l_all.append(l_date[i] + " " + l_time[i] + " " + l_duration[i])
    return jsonify(loginDetails = l_all)

# DO NOT READ BELOW THIS

# # Jsonify code (updated) -> 
# # List course(lecture or tutorial) contents from the takes table
# # where uid matches with current signed in user.
# # Query is tested and works
# my_cursor.execute(
#     "SELECT C.CourseID, C.course_Name, C.Lecture_Location, C.Lecture_Start_Time, C.Lecture_End_Time, CM.Message, CC.Zoom_Link, CCLM.Lecture_Slide FROM (Student S, Course C, CourseMessage CM, takes T, CourseContent CC, CourseContentLectureMaterial CCLM) WHERE (S.UID = T.UID) AND (S.UID = " + uid + ") AND (C.CourseID = T.CourseID) AND (CM.CourseID = C.courseID) AND (CC.CourseID = C.courseID) AND (CCLM.CourseID = C.courseID) AND (C.Lecture_Day = DAYNAME(Current_Date())) AND (TIMEDIFF(C.Lecture_Start_Time, Current_Time()) < '00:60:00');"
# )
# values2 = my_cursor.fetchall()
# print(values2)
# ABDUR CHANGE THE APP.ROUTE HERE
# ABDUR CHANGE THE APP.ROUTE HERE
# ABDUR CHANGE THE APP.ROUTE HERE
# ABDUR CHANGE THE APP.ROUTE HERE
# ABDUR CHANGE THE APP.ROUTE HERE
# ABDUR CHANGE THE APP.ROUTE HERE
# ABDUR CHANGE THE APP.ROUTE HERE
# @app.route('/one-hour-course') # ABDUR CHANGE THE APP.ROUTE HERE
# def ohc():
#     return jsonify(CourseID=values2[0][0], CourseName=values2[0][1], Location=values2[0][2], 
#     ClassStart=str(values2[0][3]), ClassEnd=str(values2[0][4]), Message=values2[0][5], 
#     ZoomLink=values2[0][6], Slides=values2[0][7])


# Query to get Course details within 1 hr tutorial

# SELECT C.CourseID, C.course_Name, C.Tutorial_Location, C.Tutorial_Start_Time, C.Tutorial_End_Time, 
# CM.Message, CC.Zoom_Link, CCLM.Tutorial_Slide
# FROM Student S, Course C, CourseMessage CM, takes T, CourseContent CC, CourseContentLectureMaterial CCLM
# WHERE S.UID = T.UID 
# AND C.CourseID = T.CourseID
# AND CM.CourseID = C.courseID 
# AND CC.CourseID = C.courseID
# AND CCLM.CourseID = C.courseID
# AND C.Lecture_Day = DAYNAME(Current_Date()) 
# AND TIMEDIFF(C.Tutorial_Start_Time, Current_Time()) < '00:60:00';
# Jsonify code (updated) -> 
# List course(lecture or tutorial) contents from the takes table
# where uid matches with current signed in user.
# Query is tested and works
# my_cursor.execute(

#     """""
#     SELECT C.CourseID, C.course_Name, C.Tutorial_Location, C.Tutorial_Start_Time, C.Tutorial_End_Time, 
#     CM.Message, CC.Zoom_Link, CCLM.Tutorial_Slide
#     FROM Student S, Course C, CourseMessage CM, takes T, CourseContent CC, CourseContentLectureMaterial CCLM
#     WHERE S.UID = T.UID 
#     AND S.UID = """ + uid + """""
#     AND C.CourseID = T.CourseID
#     AND CM.CourseID = C.courseID 
#     AND CC.CourseID = C.courseID
#     AND CCLM.CourseID = C.courseID
#     AND C.Tutorial_Day = DAYNAME(Current_Date()) 
#     AND TIMEDIFF(C.Tutorial_Start_Time, Current_Time()) < '00:60:00';
     
#     """""
# )
# values = my_cursor.fetchall()
# print(values)

# # ABDUR CHANGE THE APP.ROUTE HERE
# # ABDUR CHANGE THE APP.ROUTE HERE
# # ABDUR CHANGE THE APP.ROUTE HERE
# # ABDUR CHANGE THE APP.ROUTE HERE
# # ABDUR CHANGE THE APP.ROUTE HERE
# # ABDUR CHANGE THE APP.ROUTE HERE
# # ABDUR CHANGE THE APP.ROUTE HERE
# @app.route('/one-hour-tutorial') # ABDUR CHANGE THE APP.ROUTE HERE
# def oneHourTutorial():
#     return jsonify(CourseID=values[0][0], CourseName=values[0][1], Location=values[0][2], 
#     ClassStart=values[0][3], ClassEnd=values[0][4], Message=values[0][5], 
#     ZoomLink=values[0][6], Slides=values[0][7])

# Query to list all the courses enrolled 
# SELECT T.CourseID, C.course_Name
# FROM Student S, Takes T, Course C
# WHERE S.UID = T.UID 
# AND C.CourseID = T.CourseID
# AND S.UID = 3035756579;

# # Query to display content of each course 
# SELECT C.CourseID, C.course_Name, C.Lecture_Location, C.Lecture_Day, C.Lecture_Start_Time, C.Lecture_End_Time, 
# CM.Message, CC.Zoom_Link
# FROM Student S, Course C, CourseMessage CM, Takes T, CourseContent CC
# WHERE S.UID = T.UID 
# AND S.UID = '3035756579'
# AND C.CourseID = T.CourseID
# AND CM.CourseID = C.courseID 
# AND CC.CourseID = C.courseID;


# Smaran, Divtej thinking how to implement login time



login_duration = datetime.now() - start_time

if __name__ == '__main__':
    app.run(port=8000)
