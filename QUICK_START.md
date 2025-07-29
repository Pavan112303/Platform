# 🚀 Quick Start Guide - Projeevo Platform

## ⚡ 5-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Firebase (Choose one method)

#### Method A: Automated Setup
```bash
npm run setup
```
Follow the prompts to enter your Firebase configuration.

#### Method B: Manual Setup
1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Create Firestore Database
4. Enable Hosting
5. Create `.env` file with your Firebase config

### 3. Start Development Server
```bash
npm start
```

### 4. Deploy to Firebase
```bash
# Deploy Firestore rules
firebase deploy --only firestore:rules

# Deploy the application
npm run deploy
```

## 🔧 Firebase Configuration

### Required Services:
- ✅ **Authentication** (Email/Password)
- ✅ **Firestore Database**
- ✅ **Hosting**

### Environment Variables:
Create `.env` file in project root:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 🎯 Features Ready to Use

### User Features:
- ✅ Registration/Login
- ✅ Project Request Submission
- ✅ Real-time Team Chat
- ✅ Project Status Tracking

### Admin Features:
- ✅ User Management
- ✅ Project Request Review
- ✅ Project Creation
- ✅ Analytics Dashboard

## 🚨 Troubleshooting

### Common Issues:

1. **"Firebase not initialized"**
   - Check `.env` file exists
   - Verify all environment variables are set

2. **"Permission denied"**
   - Deploy Firestore rules: `firebase deploy --only firestore:rules`

3. **"Build failed"**
   - Ensure all dependencies installed: `npm install`
   - Check Firebase configuration

4. **"Authentication not working"**
   - Enable Email/Password in Firebase Console
   - Verify Auth Domain in environment variables

## 📞 Support

- Check `firebase-setup.md` for detailed setup instructions
- Review `README.md` for complete documentation
- Check Firebase Console for service status

---

**Projeevo Platform** - Ready for deployment! 🎉 