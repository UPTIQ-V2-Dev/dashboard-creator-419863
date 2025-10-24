# Backend API Specification

## Database Models (Prisma Schema)

```prisma
model User {
  id              Int      @id @default(autoincrement())
  email           String   @unique
  name            String?
  password        String
  role            String   @default("USER")
  isEmailVerified Boolean  @default(false)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  tokens          Token[]
  dashboardStats  DashboardStats?
  recentItems     RecentItem[]
}

model Token {
  id          Int       @id @default(autoincrement())
  token       String
  type        String
  expires     DateTime
  blacklisted Boolean
  createdAt   DateTime  @default(now())
  user        User      @relation(fields: [userId], references: [id])
  userId      Int
}

model DashboardStats {
  id             Int  @id @default(autoincrement())
  skillsCount    Int  @default(0)
  totalApps      Int  @default(0)
  totalAgents    Int  @default(0)
  activeProjects Int  @default(0)
  user           User @relation(fields: [userId], references: [id])
  userId         Int  @unique
}

model RecentItem {
  id          String   @id @default(cuid())
  type        String
  name        String
  description String?
  lastUpdated DateTime @default(now())
  status      String   @default("draft")
  user        User     @relation(fields: [userId], references: [id])
  userId      Int
}

model QuickAction {
  id           String @id @default(cuid())
  type         String
  title        String
  description  String
  icon         String
  primaryColor String
}

model WelcomeVideo {
  id          String @id @default(cuid())
  title       String
  description String
  thumbnail   String
  duration    String
  url         String
}
```

---

EP: POST /auth/register
DESC: Register a new user account.
IN: body:{name:str!, email:str!, password:str!}
OUT: 201:{user:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}, tokens:{access:{token:str, expires:str}, refresh:{token:str, expires:str}}}
ERR: {"400":"Invalid input or duplicate email", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/register -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
EX_RES_201: {"user":{"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":false,"createdAt":"2025-10-24T10:30:00Z","updatedAt":"2025-10-24T10:30:00Z"},"tokens":{"access":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-10-24T11:30:00Z"},"refresh":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-11-23T10:30:00Z"}}}

---

EP: POST /auth/login
DESC: Login with email and password.
IN: body:{email:str!, password:str!}
OUT: 200:{user:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}, tokens:{access:{token:str, expires:str}, refresh:{token:str, expires:str}}}
ERR: {"401":"Invalid email or password", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/login -H "Content-Type: application/json" -d '{"email":"john@example.com","password":"password123"}'
EX_RES_200: {"user":{"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2025-10-24T10:30:00Z","updatedAt":"2025-10-24T10:30:00Z"},"tokens":{"access":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-10-24T11:30:00Z"},"refresh":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-11-23T10:30:00Z"}}}

---

EP: POST /auth/logout
DESC: Logout and blacklist refresh token.
IN: body:{refreshToken:str!}
OUT: 204:{}
ERR: {"404":"Token not found", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/logout -H "Content-Type: application/json" -d '{"refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}'
EX_RES_204: {}

---

EP: POST /auth/refresh-tokens
DESC: Refresh access and refresh tokens.
IN: body:{refreshToken:str!}
OUT: 200:{access:{token:str, expires:str}, refresh:{token:str, expires:str}}
ERR: {"401":"Invalid refresh token", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/refresh-tokens -H "Content-Type: application/json" -d '{"refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}'
EX_RES_200: {"access":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-10-24T11:30:00Z"},"refresh":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-11-23T10:30:00Z"}}

---

EP: POST /auth/forgot-password
DESC: Send password reset email to user.
IN: body:{email:str!}
OUT: 204:{}
ERR: {"404":"User not found with this email", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/forgot-password -H "Content-Type: application/json" -d '{"email":"john@example.com"}'
EX_RES_204: {}

---

EP: POST /auth/reset-password
DESC: Reset user password using reset token.
IN: query:{token:str!}, body:{password:str!}
OUT: 204:{}
ERR: {"401":"Invalid or expired reset token", "500":"Internal server error"}
EX_REQ: curl -X POST "/auth/reset-password?token=abc123" -H "Content-Type: application/json" -d '{"password":"newPassword123"}'
EX_RES_204: {}

---

EP: POST /auth/send-verification-email
DESC: Send email verification to authenticated user.
IN: headers:{Authorization:str!}
OUT: 204:{}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/send-verification-email -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_204: {}

---

EP: POST /auth/verify-email
DESC: Verify user email using verification token.
IN: query:{token:str!}
OUT: 204:{}
ERR: {"401":"Invalid or expired verification token", "500":"Internal server error"}
EX_REQ: curl -X POST "/auth/verify-email?token=abc123"
EX_RES_204: {}

---

EP: GET /users
DESC: Get all users with pagination and filtering.
IN: headers:{Authorization:str!}, query:{name:str, role:str, sortBy:str, limit:int, page:int}
OUT: 200:{results:arr[{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}], page:int, limit:int, totalPages:int, totalResults:int}
ERR: {"401":"Unauthorized", "403":"Forbidden - Admin access required", "500":"Internal server error"}
EX_REQ: curl -X GET "/users?limit=10&page=1&role=USER" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"results":[{"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2025-10-24T10:30:00Z","updatedAt":"2025-10-24T10:30:00Z"}],"page":1,"limit":10,"totalPages":1,"totalResults":1}

---

EP: POST /users
DESC: Create a new user (admin only).
IN: headers:{Authorization:str!}, body:{name:str!, email:str!, password:str!, role:str!}
OUT: 201:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"400":"Invalid input or duplicate email", "401":"Unauthorized", "403":"Forbidden - Admin access required", "500":"Internal server error"}
EX_REQ: curl -X POST /users -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"name":"Jane Doe","email":"jane@example.com","password":"password123","role":"USER"}'
EX_RES_201: {"id":2,"email":"jane@example.com","name":"Jane Doe","role":"USER","isEmailVerified":false,"createdAt":"2025-10-24T10:45:00Z","updatedAt":"2025-10-24T10:45:00Z"}

---

EP: GET /users/{userId}
DESC: Get a specific user by ID.
IN: headers:{Authorization:str!}, params:{userId:int!}
OUT: 200:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"401":"Unauthorized", "403":"Forbidden", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X GET /users/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2025-10-24T10:30:00Z","updatedAt":"2025-10-24T10:30:00Z"}

---

EP: PATCH /users/{userId}
DESC: Update a specific user by ID.
IN: headers:{Authorization:str!}, params:{userId:int!}, body:{name:str, email:str, password:str}
OUT: 200:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"400":"Invalid input or duplicate email", "401":"Unauthorized", "403":"Forbidden", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X PATCH /users/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"name":"John Updated"}'
EX_RES_200: {"id":1,"email":"john@example.com","name":"John Updated","role":"USER","isEmailVerified":true,"createdAt":"2025-10-24T10:30:00Z","updatedAt":"2025-10-24T11:00:00Z"}

---

EP: DELETE /users/{userId}
DESC: Delete a specific user by ID.
IN: headers:{Authorization:str!}, params:{userId:int!}
OUT: 200:{}
ERR: {"401":"Unauthorized", "403":"Forbidden", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X DELETE /users/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {}

---

EP: GET /api/dashboard
DESC: Get complete dashboard data for authenticated user.
IN: headers:{Authorization:str!}
OUT: 200:{stats:{skillsCount:int, totalApps:int, totalAgents:int, activeProjects:int}, recentItems:arr[{id:str, type:str, name:str, description:str, lastUpdated:str, status:str}], user:{id:str, name:str, email:str, avatar:str, initials:str}, quickActions:arr[{id:str, type:str, title:str, description:str, icon:str, primaryColor:str}], welcomeVideo:{id:str, title:str, description:str, thumbnail:str, duration:str, url:str}}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /api/dashboard -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"stats":{"skillsCount":1256,"totalApps":24,"totalAgents":18,"activeProjects":7},"recentItems":[{"id":"1","type":"agent","name":"X Data Analyzer Agent","description":"Analyze and process data from X platform","lastUpdated":"2025-10-24T10:30:00Z","status":"active"}],"user":{"id":"1","name":"John Doe","email":"john@example.com","initials":"JD"},"quickActions":[{"id":"1","type":"app","title":"App","description":"Your workspace to create AI-powered apps","icon":"layout-grid","primaryColor":"rgb(34, 197, 94)"}],"welcomeVideo":{"id":"1","title":"Welcome to Uptiq AI Workbench!","description":"Take a quick tour...","thumbnail":"/api/placeholder/300/200","duration":"3:24","url":"#"}}

---

EP: GET /api/dashboard/stats
DESC: Get dashboard statistics for authenticated user.
IN: headers:{Authorization:str!}
OUT: 200:{skillsCount:int, totalApps:int, totalAgents:int, activeProjects:int}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /api/dashboard/stats -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"skillsCount":1256,"totalApps":24,"totalAgents":18,"activeProjects":7}

---

EP: GET /api/dashboard/recent-items
DESC: Get recent items for authenticated user.
IN: headers:{Authorization:str!}, query:{limit:int}
OUT: 200:arr[{id:str, type:str, name:str, description:str, lastUpdated:str, status:str}]
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET "/api/dashboard/recent-items?limit=5" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: [{"id":"1","type":"agent","name":"X Data Analyzer Agent","description":"Analyze and process data from X platform","lastUpdated":"2025-10-24T10:30:00Z","status":"active"}]

---

EP: GET /api/dashboard/skills-count
DESC: Get skills count for authenticated user.
IN: headers:{Authorization:str!}
OUT: 200:{skillsCount:int}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /api/dashboard/skills-count -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"skillsCount":1256}

---

EP: GET /api/user/profile
DESC: Get current user profile information.
IN: headers:{Authorization:str!}
OUT: 200:{id:str, name:str, email:str, avatar:str, initials:str}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /api/user/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"id":"1","name":"John Doe","email":"john@example.com","avatar":null,"initials":"JD"}

---

EP: PUT /api/user/profile
DESC: Update current user profile information.
IN: headers:{Authorization:str!}, body:{name:str, email:str, avatar:str}
OUT: 200:{id:str, name:str, email:str, avatar:str, initials:str}
ERR: {"400":"Invalid input", "401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X PUT /api/user/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"name":"John Updated","email":"john.updated@example.com"}'
EX_RES_200: {"id":"1","name":"John Updated","email":"john.updated@example.com","avatar":null,"initials":"JU"}

---

EP: POST /mcp
DESC: Handle MCP (Model Context Protocol) POST requests.
IN: headers:{Authorization:str!}, body:obj
OUT: 200:obj
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X POST /mcp -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"method":"tools/list","params":{}}'
EX_RES_200: {"result":{"tools":[]}}

---

EP: GET /mcp
DESC: Handle MCP (Model Context Protocol) GET requests.
IN: headers:{Authorization:str!}, query:obj
OUT: 200:obj
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /mcp -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"result":{}}

---

EP: DELETE /mcp
DESC: Handle MCP (Model Context Protocol) DELETE requests.
IN: headers:{Authorization:str!}, body:obj
OUT: 200:obj
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X DELETE /mcp -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"id":"tool-123"}'
EX_RES_200: {"result":{"success":true}}
