#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🔥 Firebase Setup for Projeevo Platform');
console.log('=====================================\n');

// Check if .env file exists
const envPath = path.join(process.cwd(), '.env');
const envExists = fs.existsSync(envPath);

if (envExists) {
  console.log('⚠️  .env file already exists. Do you want to overwrite it? (y/n)');
  rl.question('', (answer) => {
    if (answer.toLowerCase() === 'y') {
      createEnvFile();
    } else {
      console.log('Setup cancelled.');
      rl.close();
    }
  });
} else {
  createEnvFile();
}

function createEnvFile() {
  console.log('\n📝 Please enter your Firebase configuration values:');
  console.log('(You can find these in your Firebase Console > Project Settings > General > Your apps)\n');

  const questions = [
    { key: 'REACT_APP_FIREBASE_API_KEY', name: 'API Key' },
    { key: 'REACT_APP_FIREBASE_AUTH_DOMAIN', name: 'Auth Domain' },
    { key: 'REACT_APP_FIREBASE_PROJECT_ID', name: 'Project ID' },
    { key: 'REACT_APP_FIREBASE_STORAGE_BUCKET', name: 'Storage Bucket' },
    { key: 'REACT_APP_FIREBASE_MESSAGING_SENDER_ID', name: 'Messaging Sender ID' },
    { key: 'REACT_APP_FIREBASE_APP_ID', name: 'App ID' }
  ];

  const answers = {};

  function askQuestion(index) {
    if (index >= questions.length) {
      writeEnvFile(answers);
      return;
    }

    const question = questions[index];
    rl.question(`${question.name}: `, (answer) => {
      answers[question.key] = answer.trim();
      askQuestion(index + 1);
    });
  }

  askQuestion(0);
}

function writeEnvFile(answers) {
  const envContent = `# Firebase Configuration for Projeevo Platform
# Generated on ${new Date().toISOString()}

${Object.entries(answers).map(([key, value]) => `${key}=${value}`).join('\n')}

# Development settings
NODE_ENV=development
`;

  try {
    fs.writeFileSync(envPath, envContent);
    console.log('\n✅ .env file created successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Install dependencies: npm install');
    console.log('2. Start development server: npm start');
    console.log('3. Deploy Firestore rules: firebase deploy --only firestore:rules');
    console.log('4. Deploy to Firebase: npm run build && firebase deploy');
    console.log('\n🚀 Your Projeevo platform is ready to go!');
  } catch (error) {
    console.error('❌ Error creating .env file:', error.message);
  }

  rl.close();
}

// Handle process exit
process.on('SIGINT', () => {
  console.log('\n👋 Setup cancelled. Goodbye!');
  process.exit(0);
}); 