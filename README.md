# study-assignment
This nodejs application consist one endpoint shaped as '/records'.
You can reach out deployed version on the heroku stage.Follow this url https://nodejs-study-assignment.herokuapp.com/records.

# Setup Local Guide
* First you should have nodejs and npm on your computer
* execute npm install and npm start command
* Show logs and see application up smoothly

# Data Format
if you use this endpoint successfully you must send data as correct format to server side.Server provide only json format,you can copy this format and try with postman or other tool. 

{
  "startDate": "2016-01-01",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}

Server handle our valid request and gather proper query execution result data.Response data structure lie that;

{
    "code": 0,
    "message":"Successful",
    "data": [
        {
            "key": "...",
            "createdAt": "...",
            "totalCount": ...
        },
        {
            "key": "...",
            "createdAt": "...",
            "totalCount": ...
        },
}

If you send invalid data to server meantime interceptor avoid request thread reach out to database execution side.There are several code and message defined below.
    
    Codes are,
    
    SUCCESS_CODE: 0,
    EMPTY_FIELD_CODE: 1,
    NOT_VALID_DATE_FORMAT_CODE: 2,
    SUBSTRACT_DATE_ERROR_CODE: 3,
    SUBSTRACT_COUNTS_ERROR_CODE: 4

    Finally messages are,
    
    SUCCESS_MESSAGE: 'Success',
    EMPTY_FIELD: 'Request missing propert.Please check and retry.',
    NOT_VALID_DATE_FORMAT: 'Please valid date format.',
    SUBSTRACT_DATE_ERROR: 'End date cannot equal or lower than start date',
    SUBSTRACT_COUNTS_ERROR: 'Max count cannot lower than min count'
  

