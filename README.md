📝 Task Manager – Full Stack Application
🔗 Live Demo

Frontend: https://task-manager-yashi.netlify.app/ 

Backend API: https://task-manager-4tt6.onrender.com/api/tasks/ 

🚀 Tech Stack Used
Frontend

React.js

Axios (for API communication)

CSS (Glassmorphism UI + Responsive Design)

Backend

Python

Django

Django REST Framework

SQLite (Database)

Gunicorn (Production server)

Deployment

Frontend: Netlify

Backend: Render

✨ Features

Create new tasks

Mark tasks as completed

Delete tasks

Real-time progress percentage indicator

Responsive & modern UI

Fully deployed full-stack architecture

🛠 Steps to Run Locally
1️⃣ Clone the repository
git clone https://github.com/yashijain22/task-manager.git
cd task-manager

2️⃣ Setup Backend
cd backend
python -m venv venv
venv\Scripts\activate   # On Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


Backend runs at:

http://127.0.0.1:8000/

3️⃣ Setup Frontend

Open new terminal:

cd frontend
npm install
npm start


Frontend runs at:

http://localhost:3000/

🧠 Assumptions Made

The application is a simple task management tool without user authentication.

SQLite is used for simplicity in development.

No role-based access control was required.

Tasks are globally visible (no multi-user separation).

📦 Architecture Overview

React frontend communicates with Django REST API via HTTP.

REST API handles CRUD operations.

Progress calculation handled on frontend.

Production server managed using Gunicorn.

👩‍💻 Author

Yashi Jain
GitHub: https://github.com/yashijain22
