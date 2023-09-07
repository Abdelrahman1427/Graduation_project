USE orcl; ship_typesship_types
CREATE TABLE Agents (
  Agent_Code VARCHAR(10) PRIMARY KEY,
  Perm_No VARCHAR(255),
  Perm_dt_st DATE,
  Perm_dt_end DATE,
  Email VARCHAR(255),
  Telephone VARCHAR(255),
  Address VARCHAR(255),
  Agent_Name VARCHAR(255)
);

CREATE TABLE Ports (
  Port_Code VARCHAR(10) PRIMARY KEY,
  Port_Name VARCHAR(255)
);

CREATE TABLE Operations (
  Operation_Code VARCHAR(255) PRIMARY KEY,
  Operation_nm VARCHAR(255)
);

CREATE TABLE Ship_Types (
  Type_Code VARCHAR(10) PRIMARY KEY,
  Ship_type_nm VARCHAR(255)
);

CREATE TABLE Countries (
  Country_Code VARCHAR(10) PRIMARY KEY,
  Country_Name VARCHAR(255)
);

CREATE TABLE Ship_Description (
  IMO int PRIMARY KEY,
  Call_sign VARCHAR(255),
  Ship_Name VARCHAR(255),
  Ship_Country_Code VARCHAR(10),
  Ship_Type_Code VARCHAR(10),
  Crew_No INT,
  Passar_No INT,
  Width FLOAT,
  Length FLOAT,
  Draft FLOAT,
  Dead_Weight FLOAT,
  Gross_Ton FLOAT,
  Build_Date DATE,
  FOREIGN KEY (Ship_Country_Code) REFERENCES Countries (Country_Code),
  FOREIGN KEY (Ship_Type_Code) REFERENCES Ship_Types (Type_Code)
);

CREATE TABLE Ship_Departure (
  Voyage_No VARCHAR(255) PRIMARY KEY,
  Departure_Date_Plan DATE,
  Departure_Date_Actual DATETIME,
  Cargo_departure VARCHAR(255),
  IMO INT,
  Port_to VARCHAR(45),
  Maritime_Safety VARCHAR(255),
  Police VARCHAR(255),
  Customs VARCHAR(255),
  Port_Authority VARCHAR(255),
  Berth_No_Depth VARCHAR(255),
  FOREIGN KEY (IMO) REFERENCES Ship_Description (IMO),
  FOREIGN KEY (Port_to) REFERENCES Ports (Port_Code)
);

CREATE TABLE Ship_Arrival (
  Voyage_No VARCHAR(255) PRIMARY KEY,
  Arrival_Date_Plan DATE,
  Arrival_Date_Actual DATETIME,
  Cargo_Arrival VARCHAR(255),
  IMO INT,
  Port_from VARCHAR(10),
  Berth_No VARCHAR(255),
  Agent_Code VARCHAR(10),
  Berthing_Date DATE,
  FOREIGN KEY (IMO) REFERENCES Ship_Description (IMO),
  FOREIGN KEY (Port_from) REFERENCES Ports (Port_Code),
  FOREIGN KEY (Agent_Code) REFERENCES Agents (Agent_Code),
  FOREIGN KEY (Voyage_No) REFERENCES Ship_Departure (Voyage_No)
);
CREATE TABLE Employees (
Employee_ID INT PRIMARY KEY,
Employee_Name VARCHAR(255),
Employee_Password  VARCHAR(255) NOT NULL,
Employee_Type VARCHAR(255),
Email VARCHAR(255),
Telephone VARCHAR(255),
Address VARCHAR(255),
Agent_Code VARCHAR(10),
IMO INT,
  FOREIGN KEY (IMO) REFERENCES Ship_Description (IMO),
  FOREIGN KEY (Agent_Code) REFERENCES Agents (Agent_Code)

);

CREATE TABLE Admin (
Admin_ID INT PRIMARY KEY,
Username VARCHAR(255) UNIQUE NOT NULL,
Password VARCHAR(255) NOT NULL,
Employee_ID INT,
IMO INT,
  FOREIGN KEY (Employee_ID) REFERENCES Employees (Employee_ID)

);
