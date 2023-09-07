import pandas as pd
import os
import mysql.connector
import time
from datetime import datetime

# set the directory path where the excel files are located
path = r"Country Codes.xlsx"

# create an empty list to hold the data frames
data_frames = []

df = pd.read_excel(path)
data_frames.append(df)
# concatenate the data frames into a single data frame
merged_df = pd.concat(data_frames)

# initialize lists to hold the values of each column
Code_values = []
Name_values = []


#Takes each column name and puts it into a specific list
# iterate over each row in the merged data frame and extract the values
for index, row in merged_df.iterrows():
    Code_value = row['Country Code']
    Name_value = row['Country Name']
    
    
    # append the values to their respective lists
    Code_values.append(Code_value)
    Name_values.append(Name_value)

size = len(Code_values)


# print the values of the first row to verify that they were extracted correctly
# print("Column 1 value:", Code_values[247])
# print("Column 2 value:", Name_values[247])



db = mysql.connector.connect(
    host="localhost",
    user="admin",
    passwd="admin",
    database="orcl"
)




mycr = db.cursor()
for i in range(size):
    name = str(Name_values[i]).replace("'", "''")
    mycr.execute(f"INSERT INTO countries(`Country_Code`,`Country_Name`) VALUES ('{Code_values[i]}','{name}');")


db.commit()



    

