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

## Step 3: Scaffold FastAPI Backend
- [x] Initialize FastAPI app in `backend/`
- [x] Set up routers for sermons, events, news, donations, users
- [x] Create models for MongoDB
- [x] Set up CORS, middleware

## Step 4: Implement Database Schemas
- [x] Define MongoDB schemas for events, sermons, users, etc.
- [x] Create connection utilities

## Step 5: Integrate Supabase Auth
- [x] Set up Supabase client in frontend and backend
- [x] Implement authentication routes
- [x] Protect admin routes

## Step 6: Implement Admin Dashboard
- [x] Create admin pages in Next.js
- [x] Forms for managing content
- [x] Integrate with backend APIs

## Step 7: Provide Deployment Configs
- [x] Create vercel.json for Vercel deployment
- [x] Set up Supabase configs
- [x] Instructions for MongoDB Atlas

## Step 8: Update README and Documentation
- [x] Update README.md with project overview, setup, deployment steps
- [x] Explain content updates for non-technical staff



Frontend Testing:
Page loading and navigation (Landing, About, Sermons, Events, Contact, Blog)
Admin login functionality and route protection
Form submissions in admin dashboard (sermons management)
Responsive design on mobile/desktop

Backend Testing:
API endpoints for CRUD operations (sermons, events, news, donations, users)
Authentication routes (login, register, logout)
Database connections and data persistence
CORS and middleware functionality
Integration Testing:

Frontend-backend communication
Supabase Auth integration
MongoDB data flow