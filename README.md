Ctrl+C - Code Sharing App
Ctrl+C is a simple and efficient code-sharing app where users can paste code snippets and get a sharable link. The links expire after 7 days, ensuring temporary and secure sharing.

Live Demo
[Visit Ctrl+C](https://ctrl-c.onrender.com)


Features
✅ Paste & Share – Users can paste their code and generate a unique link.
✅ Automatic Expiry – Links automatically expire after 7 days.
✅ Minimal & Fast – A lightweight app with a simple and clean UI.
✅ Syntax Highlighting – (Optional) Display code with proper syntax formatting.
✅ REST API Support – (Optional) API endpoints to programmatically create and retrieve snippets.

Tech Stack
Backend: Node.js, Express.js

Frontend: HTML, CSS, Tailwind CSS

Database: MongoDB (or any other used)

Hosting: Render

Installation & Setup
1. Clone the Repository

```
git clone https://github.com/Canol001/ctrl+c.git
cd ctrl-c
```

2. Install Dependencies
```
npm install
```
4. Set Up Environment Variables
Create a .env file and configure the following:

env
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection_string
BASE_URL=https://ctrl-c.onrender.com
EXPIRATION_DAYS=7
5. Start the Server
```
npm start
```
The server will run at http://localhost:3000.
![image](https://github.com/user-attachments/assets/421b1581-926b-441d-8a40-fe139a1923f9)

Usage
1. Paste Code
Users enter their code in the text area and click the "Generate Link" button.

2. Get a Unique Link
A sharable link is provided, e.g.,

```
https://ctrl-c.onrender.com/codet/abcd1234
```
3. Accessing the Code
Anyone with the link can view the code until it expires in 7 days.
![image](https://github.com/user-attachments/assets/adadf5d5-8d2a-427d-b710-3d8551e6fe33)

API Endpoints (If implemented)
Method	Endpoint	Description
POST	/api/snippet	Create a new code snippet
GET	/api/snippet/:id	Retrieve a code snippet
DELETE	/api/snippet/:id	Manually delete a snippet
Future Enhancements
🚀 User Authentication – Allow users to manage their snippets.
🎨 Dark Mode – Improve UI for better readability.
📌 Pin Snippets – Allow users to extend the expiration time.
📊 Analytics – Track snippet views.
![image](https://github.com/user-attachments/assets/27821cc8-b2f1-40a4-8f7a-58d03afb2500)

Contributing
We welcome contributions! Follow these steps to contribute:

Fork the repo

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m "Added new feature")

Push to your branch (git push origin feature-name)

Open a Pull Request

License
This project is licensed under the MIT License.

