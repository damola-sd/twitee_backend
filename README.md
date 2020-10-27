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