# Projeevo - Freelancing Platform

A comprehensive freelancing platform for project management and team collaboration. Built with React, Firebase, and modern web technologies.

## Features

### 🏠 Landing Page
- Beautiful, responsive design with Projeevo branding
- Project showcase and team information
- Statistics and company details
- Call-to-action buttons for user engagement

### 👥 User Authentication
- **User Registration**: Create accounts with role selection (User/Admin)
- **User Login**: Secure authentication with Firebase Auth
- **Role-based Access**: Different dashboards for users and admins

### 👤 User Dashboard
- **Project Request Submission**: Submit detailed project requests
- **Project Status Tracking**: Monitor request status (Pending, Accepted, Ongoing, Completed)
- **Team Chat**: Real-time communication with the development team
- **Project History**: View all submitted projects and their progress

### 🔧 Admin Dashboard
- **User Management**: View all registered users and their details
- **Project Request Management**: Review and update project request statuses
- **Project Creation**: Add new projects to showcase on landing page
- **Analytics Overview**: Dashboard with key metrics and statistics
- **Status Management**: Update project statuses (Accepted, Ongoing, Completed)

### 🚀 Technical Features
- **Real-time Updates**: Live chat and project status updates
- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Beautiful animations and smooth interactions
- **Firebase Integration**: Authentication, database, and hosting
- **Security**: Role-based access control and data protection

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Firebase (Authentication, Firestore, Hosting)
- **State Management**: React Context API
- **Notifications**: React Hot Toast
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd projeevo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project
   - Enable Authentication (Email/Password)
   - Create Firestore database
   - Enable Hosting
   - Copy your Firebase config

4. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key_here
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. **Start development server**
   ```bash
   npm start
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## Deployment

### Firebase Deployment

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init
   ```

4. **Deploy to Firebase**
   ```bash
   npm run deploy
   ```

### GitHub Integration

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Set up GitHub Actions** (optional)
   - Create `.github/workflows/deploy.yml`
   - Configure automatic deployment on push

## Project Structure

```
projeevo/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LandingPage.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── UserDashboard.js
│   │   └── AdminDashboard.js
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── firebase/
│   │   └── config.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── firebase.json
├── firestore.rules
├── firestore.indexes.json
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Database Schema

### Collections

#### users
- `email`: string
- `role`: string (user/admin)
- `createdAt`: timestamp
- `projectRequests`: array
- `chatMessages`: array

#### projectRequests
- `title`: string
- `description`: string
- `category`: string
- `budget`: number
- `timeline`: string
- `requirements`: string
- `userId`: string
- `userEmail`: string
- `status`: string (Pending/Accepted/Ongoing/Completed)
- `createdAt`: timestamp

#### chatMessages
- `message`: string
- `userId`: string
- `userEmail`: string
- `timestamp`: timestamp

#### projects
- `title`: string
- `description`: string
- `category`: string
- `budget`: number
- `timeline`: string
- `status`: string
- `imageUrl`: string
- `createdAt`: timestamp

## Features in Detail

### User Features
- **Project Submission**: Detailed form with category, budget, timeline
- **Real-time Chat**: Communicate with the development team
- **Status Tracking**: Monitor project progress
- **Profile Management**: View account details

### Admin Features
- **User Overview**: View all registered users
- **Request Management**: Review and approve project requests
- **Project Creation**: Add showcase projects
- **Analytics**: View platform statistics
- **Status Updates**: Manage project lifecycle

## Security

- **Firestore Rules**: Role-based access control
- **Authentication**: Firebase Auth with email/password
- **Data Protection**: Users can only access their own data
- **Admin Privileges**: Restricted admin-only functions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@projeevo.com or create an issue in the repository.

---

**Projeevo** - Your comprehensive freelancing platform for project management and team collaboration. 