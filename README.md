# Church Website Project

## Overview
This project is a full-stack church website built with Next.js (frontend) and FastAPI (backend). It provides information about the church, sermons, events, news, and a contact form. An admin dashboard allows non-technical staff to manage content easily.

## Tech Stack
- Frontend: Next.js with Tailwind CSS
- Backend: FastAPI with MongoDB (Motor)
- Authentication: Supabase Auth (email/social login)
- Media Storage: Supabase Storage or Firebase
- Deployment: Vercel (frontend + backend), Supabase (auth, storage), MongoDB Atlas (database)

## Features
- Landing, About, Sermons, Events, Contact, Blog/News pages
- Admin dashboard for managing sermons, events, news, donations, and users
- JWT/OAuth authentication integrated with Supabase
- Mobile-friendly, SEO-optimized, and fast performance

## Project Structure
```
church-website/
├── frontend/          # Next.js app
│   ├── app/           # Next.js app router pages
│   ├── contexts/      # React contexts (Auth)
│   ├── lib/           # Supabase client
│   └── .env.local     # Environment variables
├── backend/           # FastAPI app
│   ├── routers/       # API endpoints
│   ├── models.py      # Pydantic models
│   ├── database.py    # MongoDB connection
│   ├── main.py        # FastAPI app
│   └── .env           # Environment variables
├── deployment/        # Deployment configs
│   ├── vercel.json    # Vercel config
│   └── supabase-setup.md # Setup instructions
├── README.md          # This file
└── TODO.md            # Task tracking
```

## Setup Instructions

### Prerequisites
- Node.js 18+
- Python 3.8+
- MongoDB Atlas account
- Supabase account
- Vercel account (for deployment)

### Backend Setup
1. Navigate to `backend/` directory
2. Create virtual environment: `python -m venv venv`
3. Activate: `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Mac/Linux)
4. Install dependencies: `pip install -r requirements.txt`
5. Create `.env` file with your credentials (see `.env` template)
6. Run server: `uvicorn main:app --reload --host 0.0.0.0 --port 8000`

### Frontend Setup
1. Navigate to `frontend/` directory
2. Install dependencies: `npm install`
3. Create `.env.local` file with your credentials (see `.env.local` template)
4. Run development server: `npm run dev`

### Database & Auth Setup
1. Follow `deployment/supabase-setup.md` for Supabase and MongoDB Atlas setup
2. Update environment variables in `.env` files

## API Endpoints

### Sermons
- `GET /sermons` - List all sermons
- `GET /sermons/{id}` - Get sermon by ID
- `POST /sermons` - Create sermon (admin)
- `PUT /sermons/{id}` - Update sermon (admin)
- `DELETE /sermons/{id}` - Delete sermon (admin)

### Events
- `GET /events` - List all events
- `GET /events/{id}` - Get event by ID
- `POST /events` - Create event (admin)
- `PUT /events/{id}` - Update event (admin)
- `DELETE /events/{id}` - Delete event (admin)

### News
- `GET /news` - List all news
- `GET /news/{id}` - Get news by ID
- `POST /news` - Create news (admin)
- `PUT /news/{id}` - Update news (admin)
- `DELETE /news/{id}` - Delete news (admin)

### Donations
- `GET /donations` - List donations (admin)
- `POST /donations` - Create donation
- `GET /donations/total` - Get total donations (admin)

### Users
- `GET /users` - List users (admin)
- `GET /users/{id}` - Get user by ID (admin)
- `POST /users` - Create user (admin)
- `PUT /users/{id}` - Update user (admin)
- `DELETE /users/{id}` - Delete user (admin)

### Auth
- `POST /auth/login` - Login
- `POST /auth/register` - Register
- `POST /auth/logout` - Logout

## Deployment
1. Push code to GitHub repository
2. Connect Vercel to your repo
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

For detailed setup, see `deployment/supabase-setup.md`

## Content Management for Non-Technical Staff
1. Access the admin dashboard at `/admin`
2. Login with email/password (set up in Supabase)
3. Use the dashboard to:
   - Add/edit/delete sermons (with audio uploads)
   - Manage events and announcements
   - Publish news and updates
   - View donation reports
   - Manage user accounts
4. Media files (audio, images) can be uploaded via Supabase Storage
5. No coding knowledge required - all updates through user-friendly forms

## Development
- Frontend: `npm run dev` in `frontend/`
- Backend: `uvicorn backend.main:app --reload` in `backend/`
- API docs available at `http://localhost:8000/docs` when backend is running

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make changes and test
4. Submit a pull request

## License
This project is licensed under the MIT License.
