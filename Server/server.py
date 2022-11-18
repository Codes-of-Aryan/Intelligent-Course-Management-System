from flask import Flask
# from flask_mysql_connector import MySQL


import mysql.connector

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

#Importing self made module for 
#Facial Recognition 
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
in the file 

name = recognize() 
print(name)
'''

app = Flask(__name__)









# 
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
    host = "localhost",
    user = "root",
    passwd = "ADD PASS"
)

my_cursor = mydb.cursor()


my_cursor.execute(
    "USE Alpha ; "
)

my_cursor.execute(
    "SELECT First_Name FROM Student "
)


@app.route('/test')
def index():
    # for x in my_cursor:
    #     if x[0] == 'Smaran' :
    #         name = [x[0], ""]
    #         return(name)
    name = ["Smaran", "Goli"]
    return name
        




if __name__ == '__main__':
    app.run(debug=True)