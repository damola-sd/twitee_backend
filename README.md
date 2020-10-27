**Register**
----
  Registers a single user.

* **URL**

  api/user/register

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**
 **Required:**
 
   `email=[string]`
   `password=[string]`


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsIm5hbWUiOiJEYW1vbGFzZCIsImVtYWlsIjoiZGFtb2xhc2RAZ21haWwuY29tIiwiaWF0IjoxNjAzNzYzNTc4LCJleHAiOjE2MDQ5NzMxNzh9.eUTIDSOOSWD1MuWOUQL91WY4ixzZbmVVTnVVbOwR5Wc",
  "user": {
    "id": 21,
    "name": "Damolasd",
    "email": "damolasd@gmail.com"
  }
}`
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "Could not create profile" }`

  OR



* **Sample Call:**

  ```json
    "email": "jane@example.com",
    "password: "password"
  ```

  **Login**
----
  Logsin a User and returns a token.

* **URL**

  api/user/login

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**
 **Required:**
 
   `email=[string]`
   `password=[string]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
  "status": 200,
  "data": {
    "message": "talk2mm97@gmail.com successfully logged in.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsIm5hbWUiOiJUYWxrMm1tOTciLCJlbWFpbCI6InRhbGsybW05N0BnbWFpbC5jb20iLCJpYXQiOjE2MDM3NTM4MjUsImV4cCI6MTYwNDk2MzQyNX0.dICFMPo-JPR-6cwYV5uDLSR9KXtUHifuo2zX9hKTPBY"
  }
}`
 
* **Error Response:**

  * **Code:** 401 Bad Request <br />
    **Content:** `'Invalid credentials'`

  OR



* **Sample Call:**

  ```json
    "email": "jane@example.com",
    "password: "password"
  ```

  