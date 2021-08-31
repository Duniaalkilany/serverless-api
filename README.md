# serverless-api


## Author: 

* ### Dunia Alkilany 


## description
  ###  single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services .



  ## UML/Application

![img](/serverless-api.png)
   

## Links and Resources:

 ### Deployed API:
 [AWS API](https://k3wid1zl6c.execute-api.us-east-1.amazonaws.com/people):
 
   https://k3wid1zl6c.execute-api.us-east-1.amazonaws.com/people


* ### pull request :
[PR](https://github.com/Duniaalkilany/serverless-api/pull/1) :

https://github.com/Duniaalkilany/serverless-api/pull/1


* ### Endpoints:
   

  - post `/people` 


  - send in body ` {"id":"3132bf55-438b-4bb1-bd55-3e5732814588","name":"dunia","phone":"0788888888","gender":"female"}` 

  ```

  
      {
         "id":"3132bf55-438b-4bb1-bd55-3e5732814588",
        "name":"dunia",
        "phone":"0788888888",
        "gender":"female"
      }
  

  ```

   - get `/people` 



  ```

  [
      {
        "id":"3132bf55-438b-4bb1-bd55-3e5732814588",
        "name": "dunia",
        "phone":"0788888888",
        "gender": "female"
      
      }
  ]

  ```


  - get `/people/${id}` 
 



  ```
       {
        "id":"3132bf55-438b-4bb1-bd55-3e5732814588",
        "name":"dunia",
        "phone":"0788888888",
        "gender":"female"
       }

  ```


  - put `/people/${id}`
  

  - send in body ` {"id":"3132bf55-438b-4bb1-bd55-3e5732814588","name":"mariam","phone":"0799999999","gender":"female"}` 

  ```
       {
         "id":"3132bf55-438b-4bb1-bd55-3e5732814588",
        "name":"mariam",
        "phone":"0799999999",
        "gender":"female"  
       }

  ```

  

  - delete `/people/${id}` 

  ```
       
         { message: `Deleted record ${id}`}
       

   ```
  



