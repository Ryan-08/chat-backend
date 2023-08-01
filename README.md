# chat-backend
backend chat api for next-chatapp-frontend

### endpoint

#### user
- POST: "/user/register"
  -- description: create a new user
  -- request body: JSON object with name, email, and password
  -- response: message
  #### example response:
  [response register][![image](https://github.com/Ryan-08/chat-backend/assets/58720218/c1f28481-08b2-41c8-aeb2-b8b5f91b4567)
]
- POST: "/user/login"
  -- description: user login
  -- request body: JSON object with email and password
  -- response: json message and token
- POST: "/chatroom"
  -- description: create a new chat room
  -- request body: JSON object with name attribute
  -- response: message
- GET: "/chatroom"
  -- description: get all chat room
  -- query parameters: ""
  -- response: JSON object list of chatroom
- GET: "/message/:id"
  -- description: get all messages from specific chat room
  -- path parameters: id (unique room id)
  -- response: jSON object list of messages
