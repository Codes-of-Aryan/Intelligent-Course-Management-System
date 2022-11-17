from flask import Flask
from flask_mysql_connector import MySQL

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)


# 
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:12345678@localhost/Alpha'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_DATABASE'] = 'sys'
mysql = MySQL(app)

EXAMPLE_SQL = 'select * from sys.user_summary'


# using the new_cursor() method
@app.route('/new_cursor')
def new_cursor():
    cur = mysql.new_cursor(dictionary=True)
    cur.execute(EXAMPLE_SQL)
    output = cur.fetchall()
    return str(output)


# using the connection property
@app.route('/connection')
def connection():
    conn = mysql.connection
    cur = conn.cursor()
    cur.execute(EXAMPLE_SQL)
    output = cur.fetchall()
    return str(output)


# using the execute_sql() method to easily
# select sql and optionally output to Pandas
@app.route('/easy_execute')
def easy_execute():
    df = mysql.execute_sql(EXAMPLE_SQL, to_pandas=True)
    return str(df.to_dict())

name = ["Divtej", "Bhatia"]


@app.route('/test')
def index():
    return name

if __name__ == '__main__':
    app.run(debug=True)