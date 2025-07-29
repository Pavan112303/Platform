# 🚀 Deploy Projeevo via Firebase Console + GitHub

## Method 1: Firebase Console + GitHub Integration

### Step 1: Push Code to GitHub

1. **Create GitHub Repository**
   ```bash
   # Initialize git (if not already done)
   git init
   git add .
   git commit -m "Initial Projeevo platform commit"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name: `projeevo-platform`
   - Make it public
   - Don't initialize with README

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/projeevo-platform.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect Firebase to GitHub

1. **Go to Firebase Console**
   - Visit [console.firebase.google.com](https://console.firebase.google.com)
   - Select your project

2. **Enable Hosting**
   - Click "Hosting" in left sidebar
   - Click "Get started"

3. **Connect to GitHub**
   - Click "Connect to GitHub"
   - Authorize Firebase to access your GitHub
   - Select your `projeevo-platform` repository
   - Choose `main` branch

4. **Configure Build Settings**
   ```
   Build command: npm run build
   Output directory: build
   Root directory: /
   ```

5. **Set Environment Variables**
   - Click "Environment variables"
   - Add your Firebase config:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

6. **Deploy**
   - Click "Deploy"
   - Firebase will build and deploy automatically

### Step 3: Set up Firebase Services

1. **Authentication**
   - Go to "Authentication" → "Sign-in method"
   - Enable "Email/Password"

2. **Firestore Database**
   - Go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode"

3. **Deploy Firestore Rules**
   - Go to "Firestore Database" → "Rules"
   - Copy rules from `firestore.rules` file
   - Click "Publish"

## Method 2: Firebase CLI (Alternative)

If you can install Firebase CLI:

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project
firebase init hosting

# Deploy
firebase deploy
```

## Method 3: Manual Upload

1. **Build Locally** (if possible)
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Firebase Console**
   - Go to Firebase Console → Hosting
   - Click "Upload files"
   - Upload the `build` folder contents

## Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check environment variables in Firebase Console
   - Verify all dependencies are in package.json

2. **Authentication Not Working**
   - Enable Email/Password in Firebase Console
   - Check Auth Domain in environment variables

3. **Database Access Denied**
   - Deploy Firestore rules manually
   - Check rules in Firebase Console

### Environment Variables Required:

Make sure these are set in Firebase Console → Hosting → Environment variables:

```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
```

## Next Steps After Deployment

1. **Test the Application**
   - Visit your Firebase hosting URL
   - Test user registration/login
   - Test project submission

2. **Set up Admin User**
   - Register normally
   - Go to Firebase Console → Firestore
   - Find your user document
   - Change `role` from "user" to "admin"

3. **Custom Domain** (Optional)
   - Go to Firebase Console → Hosting
   - Click "Add custom domain"
   - Follow the setup instructions 