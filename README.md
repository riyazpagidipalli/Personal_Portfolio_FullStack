
🌐 Personal Portfolio Website
🚀 Overview

*This project represents one of my biggest goals — creating a full-stack website from scratch.
Over the past three months, I’ve learned and implemented several technologies including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and Oracle.
Using these skills, I built my personal portfolio website to showcase my projects, skills, and achievements.

🛠️ Tech Stack

1)Frontend: HTML, CSS, JavaScript, React.js<br/>
2)Backend: Node.js, Express.js<br/>
3)Database: Oracle<br/>
4)Other Tools: Git, VS Code<br/>


🔐 1. Authentication

Definition:
Authentication is the process of verifying the user’s identity — confirming who they are.

Example:
When a user logs in using a username and password, the backend checks whether those credentials exist in the database.
If they’re valid, the user is authenticated.

In short:

“Are you really who you claim to be?”

Flow Example:

1.User enters email & password.

2.Server verifies credentials in database.

3.If correct → server issues a token (like JWT).

4.User can now access protected routes.


🛡️ 2. Authorization

Definition:
Authorization decides what a user can do after being authenticated.

Example:

->A normal user can view their profile.

In short:

“What actions or resources are you allowed to access?”

Flow Example:

1.User logs in (authenticated).

2.Server checks the user’s role/permissions (authorized).

3.Only then allows specific routes like /admin/dashboard.

🍪 3. Cookies

Definition:
Cookies are small pieces of data stored in the user’s browser by the website.
They help maintain session state between the browser and server.

Use cases:

1.Store session tokens (like JWT).

2.Remember login information (“Keep me signed in”).

3.Track user preferences.

Example:
When a user logs in, the server sends a cookie.

// Set JWT token
Cookies.set('token', jwtToken, { expires: 7, path: '/' })

// Get JWT token
const token = Cookies.get('token')

// Remove JWT token
Cookies.remove('token')

🔑 4. JWT (JSON Web Token)

Definition:
A JWT (JSON Web Token) is a secure way to send and verify user information between client and server after login.

Example:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJpZCI6MSwidXNlcm5hbWUiOiJSaXlheiJ9.
Q3VzdG9tU2lnbmF0dXJlMTIz

Flow Example (JWT in login):

1.User logs in with credentials.

2.Server validates → generates a JWT (signed with a secret key).

3.Token is sent to client (stored in cookie or localStorage).

4.Client includes JWT in Authorization header for future requests:

-->Authorization: Bearer <token>


5.Server verifies the token on each request — no need to log in again.


💡 Features

->Responsive and interactive UI<br/>
->Smooth navigation between pages<br/>
->Dynamic content rendering using React.js<br/>
->Secure backend API with Node.js and Express.js<br/>
->Data handling with Oracle database<br/>

📬 Contact

👨‍💻 Riyaz Pagidipalli<br/>
📧 Email: pagidipalliriyaz158@gmail.com<br/>
🎥 :(https://www.youtube.com/@riyazpagidipalli8756)<br/>
💼:(https://www.linkedin.com/in/riyaz-pagidipalli-55b848231)
