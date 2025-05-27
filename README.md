# Modern Dashboard Application

A modern, responsive dashboard application built with Next.js, TypeScript, Material UI, and Firebase.

## Features

- User authentication with Firebase
- Modern and responsive UI
- Real-time charts with auto-refresh
- User management with CRUD operations
- Excel file upload for bulk user creation
- Role-based access control
- Custom Material UI theme

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Firebase account

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Firebase project and enable Authentication and Firestore

4. Create a `.env.local` file in the root directory with your Firebase configuration:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser


## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable components
- `/src/contexts` - React contexts
- `/src/lib` - Utility functions and Firebase configuration
- `/src/theme` - Material UI theme customization

## Technologies Used

- Next.js 14
- TypeScript
- Material UI
- Firebase (Authentication & Firestore)
- Recharts
- React Hook Form
- Yup
- XLSX

## Features

### Authentication
- Email/password authentication
- Protected routes
- Persistent sessions

### Dashboard
- Real-time charts with auto-refresh
- Responsive layout
- Logout functionality

### User Management
- Add/Edit/Delete users
- Bulk upload via Excel
- Role-based access
- Form validation
- Data persistence

## License

MIT
