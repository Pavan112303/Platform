# Firebase Setup Guide for Projeevo

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `projeevo-platform`
4. Enable Google Analytics (recommended)
5. Click "Create project"

## Step 2: Enable Authentication

1. In Firebase Console, click "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password"
5. Click "Save"

## Step 3: Create Firestore Database

1. Click "Firestore Database" in sidebar
2. Click "Create database"
3. Choose "Start in test mode"
4. Select location (choose closest to your users)
5. Click "Done"

## Step 4: Enable Hosting

1. Click "Hosting" in sidebar
2. Click "Get started"
3. Install Firebase CLI: `npm install -g firebase-tools`
4. Login: `firebase login`
5. Initialize: `firebase init`

## Step 5: Get Configuration

1. Click gear icon (⚙️) next to "Project Overview"
2. Click "Project settings"
3. Scroll to "Your apps" section
4. Click web icon (</>)
5. Register app: "Projeevo Web App"
6. Copy configuration

## Step 6: Environment Variables

Create `.env` file in project root:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Step 7: Deploy Firestore Rules

```bash
firebase deploy --only firestore:rules
```

## Step 8: Test the Application

```bash
npm start
```

## Step 9: Deploy to Firebase

```bash
npm run build
firebase deploy
```

## Troubleshooting

### Common Issues:

1. **Authentication not working**
   - Check if Email/Password is enabled
   - Verify environment variables are correct

2. **Database access denied**
   - Deploy Firestore rules: `firebase deploy --only firestore:rules`
   - Check rules in firestore.rules file

3. **Build errors**
   - Ensure all environment variables are set
   - Check Firebase configuration in src/firebase/config.js

### Security Rules

The Firestore rules are already configured in `firestore.rules`:

- Users can read/write their own data
- Project requests: users can create, admins can read all
- Chat messages: all authenticated users can read/write
- Projects: admins can read/write, users can read

### Database Collections

The app will automatically create these collections:
- `users` - User accounts and roles
- `projectRequests` - User project submissions
- `chatMessages` - Team communication
- `projects` - Showcase projects

### Admin Setup

1. Create admin user in Firebase Console
2. Or register normally and manually update role in Firestore
3. Admin users get access to admin dashboard 