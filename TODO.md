# Church Website Project TODO

## Step 1: Create Project Directory Structure
- [x] Create `frontend/` for Next.js app
- [x] Create `backend/` for FastAPI app
- [x] Create `database/` for MongoDB schemas
- [x] Create `deployment/` for configs

## Step 2: Scaffold Next.js Frontend
- [x] Initialize Next.js app in `frontend/`
- [x] Set up Tailwind CSS
- [x] Create page components: Landing, About, Sermons, Events, Contact, Blog
- [x] Create reusable components (Header, Footer, etc.)
- [x] Set up routing
- [x] Fix routing issues (remove duplicate app directory)
- [x] Start development server successfully
- [x] Create all core pages with responsive design

## Step 3: Scaffold FastAPI Backend
- [x] Initialize FastAPI app in `backend/`
- [x] Set up routers for sermons, events, news, donations, users
- [x] Create models for MongoDB
- [x] Set up CORS, middleware
- [x] Fix Pydantic v2 compatibility issues
- [x] Test all API endpoints (GET, POST working; auth-protected routes return 403 as expected)

## Step 4: Implement Database Schemas
- Define MongoDB schemas for events, sermons, users, etc.
- Create connection utilities

## Step 5: Integrate Supabase Auth
- Set up Supabase client in frontend and backend
- Implement authentication routes
- Protect admin routes

## Step 6: Implement Admin Dashboard
- Create admin pages in Next.js
- Forms for managing content
- Integrate with backend APIs

## Step 7: Provide Deployment Configs
- Create vercel.json for Vercel deployment
- Set up Supabase configs
- Instructions for MongoDB Atlas

## Step 8: Update README and Documentation
- Update README.md with project overview, setup, deployment steps
- Explain content updates for non-technical staff

