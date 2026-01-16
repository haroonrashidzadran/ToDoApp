# Professional To-Do App

A full-stack task management application built with Django REST Framework and React.

## Features

- ✅ Create, read, update, and delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Set task priority (Low, Medium, High)
- ✅ Add due dates to tasks
- ✅ Clean and responsive UI
- ✅ Real-time updates

## Tech Stack

**Backend:**
- Django 4.2.7
- Django REST Framework 3.14.0
- Django CORS Headers 4.3.1
- SQLite Database

**Frontend:**
- React 18.2.0
- Axios 1.6.2
- Modern CSS with gradient design

## Project Structure

```
To Do App/
├── backend/
│   ├── todoproject/
│   │   ├── todoproject/      # Django settings
│   │   └── tasks/            # Tasks app
│   ├── manage.py
│   └── requirements.txt
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/       # React components
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## Installation & Setup

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend/todoproject
```

2. Install Python dependencies:
```bash
pip install -r ../requirements.txt
```

3. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

4. Create superuser (optional):
```bash
python manage.py createsuperuser
```

5. Start Django server:
```bash
python manage.py runserver
```

Backend will run at `http://localhost:8000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start React development server:
```bash
npm start
```

Frontend will run at `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks/` | Get all tasks |
| POST | `/api/tasks/` | Create new task |
| GET | `/api/tasks/{id}/` | Get specific task |
| PUT | `/api/tasks/{id}/` | Update task |
| PATCH | `/api/tasks/{id}/` | Partial update |
| DELETE | `/api/tasks/{id}/` | Delete task |

## Usage

1. Start both backend and frontend servers
2. Open browser at `http://localhost:3000`
3. Add tasks using the form
4. Click checkbox to mark tasks complete
5. Edit or delete tasks using action buttons
6. Set priority and due dates for better organization

## Development

### Backend
- Models: `backend/todoproject/tasks/models.py`
- Views: `backend/todoproject/tasks/views.py`
- Serializers: `backend/todoproject/tasks/serializers.py`

### Frontend
- Main App: `frontend/src/App.js`
- Components: `frontend/src/components/`
- Styling: `frontend/src/App.css`

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is open source and available under the MIT License.

## Author

Haroon Rashid Zadran

## Acknowledgments

- Django REST Framework documentation
- React documentation
- Modern UI/UX design principles
