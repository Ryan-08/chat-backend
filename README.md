![image](https://github.com/Ryan-08/chat-backend/assets/58720218/79e344b0-510c-4c0a-8386-06c0919475c2)# chat-backend
backend chat api for next-chatapp-frontend

### endpoint

#### user
- POST: "/user/register"
  - description: create a new user
  - request body: JSON object with name, email, and password
  - response: message
  #### example response:
  ![response register](https://github.com/Ryan-08/chat-backend/assets/58720218/c1f28481-08b2-41c8-aeb2-b8b5f91b4567)
- POST: "/user/login"
  - description: user login
  - request body: JSON object with email and password
  - response: json message and token
  #### example response:
  ![response login](https://github.com/Ryan-08/chat-backend/assets/58720218/41dbd309-5525-4c19-898f-d8e0131991c3)
- POST: "/chatroom"
  - description: create a new chat room
  - request body: JSON object with name attribute
  - response: message
  #### example response:
  - success:
  - ![image](https://github.com/Ryan-08/chat-backend/assets/58720218/4746b3ed-ab18-4b3f-91c8-88ac2eff4e43)
  - unauthorized:
  - ![image](https://github.com/Ryan-08/chat-backend/assets/58720218/6fde0e8e-24e4-4132-bc0a-8d58f56c8315)  
  - room already exist:
  - ![image](https://github.com/Ryan-08/chat-backend/assets/58720218/4e12f0a4-0bf2-4b03-a28b-aac8f8d90aa5)
- GET: "/chatroom"
  - description: get all chat room
  - query parameters: ""
  - response: JSON object list of chatroom
  #### example response:
  ![image](https://github.com/Ryan-08/chat-backend/assets/58720218/38f4dae1-c5e1-4c85-8d37-150ee4cdbbf4)
- GET: "/message/:id"
  - description: get all messages from specific chat room
  - path parameters: id (unique room id)
  - response: jSON object list of messages
  #### example response:
  ![image](https://github.com/Ryan-08/chat-backend/assets/58720218/76524b24-77b7-4337-9908-a9c5711e4e52)
