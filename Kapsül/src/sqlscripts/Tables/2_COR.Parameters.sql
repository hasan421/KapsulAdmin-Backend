CREATE TABLE COR.Parameter
(
    ParamType VARCHAR(20) NOT NULL,
    ParamCode VARCHAR(10) NOT NULL,
    ParamDescription NVARCHAR(120),
    ParamValue VARCHAR(20),
    ParamValue2 VARCHAR(20),
    ParamValue3 VARCHAR(20),
    ParamValue4 VARCHAR(20),
    SystemDate DATETIME,
    UpdateSystemDate DATETIME
)