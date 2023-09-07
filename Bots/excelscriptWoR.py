import pandas as pd
import os
import mysql.connector
import time
from datetime import datetime

# set the directory path where the excel files are located
directory_path = r"C:\Users\ahmed\Desktop\excel sheets"

# create an empty list to hold the data frames
data_frames = []

# loop through each file in the directory and append the data frame to the list
for filename in os.listdir(directory_path):
    if filename.endswith(".xls"):
        file_path = os.path.join(directory_path, filename)
        df = pd.read_excel(file_path)
        data_frames.append(df)

# concatenate the data frames into a single data frame
merged_df = pd.concat(data_frames)

# drop duplicates but keep one row
merged_df.drop_duplicates(keep='first', inplace=True)

# # write the merged data frame to a new excel file
merged_file_path = os.path.join(directory_path, "merged.xlsx")
# merged_df.to_excel(merged_file_path, index=False)


print("Merged file saved to:", merged_file_path)

# initialize lists to hold the values of each column
column1_values = []
column2_values = []
column3_values = []
column4_values = []
column5_values = []
column6_values = []
column7_values = []
column8_values = []
column9_values = []
column10_values = []
column11_values = []
column12_values = []
column13_values = []

#Takes each column name and puts it into a specific list
# iterate over each row in the merged data frame and extract the values
for index, row in merged_df.iterrows():
    column1_value = row['رقم الطريق']
    column2_value = row['اسم السفينة']
    column3_value = row['IMO']
    column4_value = row['الجنسية']
    column5_value = row['نوع السفينة']
    column6_value = row['التوكيل الملاحي']
    column7_value = row['الوصول الفعلي']
    column8_value = row['تاريخ المغادرة المتوقع']
    column9_value = row['المحطةالاولي']
    column10_value = row['نوع العملية']
    column11_value = row['البضائع']
    column12_value = row['مكان الرسو']
    column13_value = row['تاريخ الرسو']
    
    # append the values to their respective lists
    column1_values.append(column1_value)
    column2_values.append(column2_value)
    column3_values.append(column3_value)
    column4_values.append(column4_value)
    column5_values.append(column5_value)
    column6_values.append(column6_value)
    column7_values.append(column7_value)
    column8_values.append(column8_value)
    column9_values.append(column9_value)
    column10_values.append(column10_value)
    column11_values.append(column11_value)
    column12_values.append(column12_value)
    column13_values.append(column13_value)

size = len(column1_values)


# # print the values of the first row to verify that they were extracted correctly
# print("Column 1 value:", column1_values[0])
# print("Column 2 value:", column2_values[0])
# print("Column 3 value:", column3_values[0])
# print("Column 4 value:", column4_values[0])
# print("Column 5 value:", column5_values[0])
# print("Column 6 value:", column6_values[0])
# print("Column 7 value:", column7_values[0])
# print("Column 8 value:", column8_values[0])
# print("Column 9 value:", column9_values[0])
# print("Column 10 value:", column10_values[0])
# print("Column 11 value:", column11_values[0])
# print("Column 12 value:", column12_values[0])
# print("Column 13 value:", column13_values[0])


db = mysql.connector.connect(
    host="localhost",
    user="admin",
    passwd="admin",
    database="test"
)


mycr = db.cursor()
for i in range(size):
    
    mycr.execute(f"INSERT INTO testtable(`Route#`,`ShipName`,`IMO`,`Nationality`,`ShipType`,`Agent`,`Actualarrival`,`Est.Departdate`,`OpType`,`Items`,`Platform#`,`DockingDate`) VALUES ('{column1_values[i]}','{column2_values[i]}','{column3_values[i]}','{column4_values[i]}','{column5_values[i]}','{column6_values[i]}','{datetime.strptime(column7_values[i],'%d/%m/%Y %H:%M')}','{datetime.strptime(column8_values[i],'%d/%m/%Y %H:%M')}','{column10_values[i]}','{column11_values[i].strip()}','{column12_values[i]}','{datetime.strptime(column13_values[i],'%d/%m/%Y %H:%M')}');")

db.commit()

# mycr.execute(f"INSERT INTO testtable(`Route#`,`ShipName`,`IMO`,`Nationality`,`ShipType`,`Agent`,`Actualarrival`,`Est.Departdate`,`OpType`,`Items`,`Platform#`,`DockingDate`) VALUES ('{column1_values[0]}','{column2_values[0]}','{column3_values[0]}','{column4_values[0]}','{column5_values[0]}','{column6_values[0]}','{datetime.strptime(column7_values[0],'%d/%m/%Y %H:%M')}','{datetime.strptime(column8_values[0],'%d/%m/%Y %H:%M')}','{column10_values[0]}','{column11_values[0]}','{column12_values[0]}','{datetime.strptime(column13_values[0],'%d/%m/%Y %H:%M')}');")
# db.commit()

    

