# Supabase Setup Instructions

## 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign up/login.
2. Click "New Project".
3. Fill in project details (name, database password, region).
4. Wait for the project to be created.

## 2. Get API Keys
1. In your Supabase dashboard, go to Settings > API.
2. Copy the "Project URL" and "anon public" key.
3. Update your `.env` files:
   - Backend: `SUPABASE_URL` and `SUPABASE_ANON_KEY`
   - Frontend: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 3. Set Up Authentication
1. In Supabase dashboard, go to Authentication > Settings.
2. Configure email templates if needed.
3. Enable email confirmations if desired.

## 4. Set Up Storage (for media files)
1. Go to Storage in the dashboard.
2. Create a bucket named "media" (or your choice).
3. Set policies for public access if needed.

## 5. Database Tables (Optional - since using MongoDB)
If you want to use Supabase's PostgreSQL for some features, you can create tables here, but the project uses MongoDB for main data.

# MongoDB Atlas Setup Instructions

## 1. Create MongoDB Atlas Account
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and sign up.
2. Choose the free tier (M0).

## 2. Create a Cluster
1. Click "Build a Database" > "Free".
2. Choose AWS/Google Cloud/Azure, region closest to you.
3. Create cluster (takes a few minutes).

## 3. Set Up Database Access
1. Go to Database Access > Add New Database User.
2. Create a user with read/write permissions.
3. Note the username and password.

## 4. Get Connection String
1. Go to Clusters > Connect > Connect your application.
2. Choose "Python" as driver.
3. Copy the connection string.
4. Replace `<username>`, `<password>`, and `<database>` with your values.
5. Update `MONGO_URL` in backend `.env`.

## 5. Whitelist IP Addresses
1. Go to Network Access > Add IP Address.
2. Add your IP or 0.0.0.0/0 for all (less secure).

## 6. Create Database
The database will be created automatically when you first connect.

# Vercel Deployment
1. Push code to GitHub.
2. Connect Vercel to your repo.
3. Set environment variables in Vercel dashboard.
4. Deploy.
