# firebase-react-boilerplate

Steps taken:
npx create-react-app .
firebase init
// Select: firestore, functions, hosting
// Select: Create new project
// In Firebase Console UI, navigate to Firestore and click Create Database (start in test mode)
firebase init // need to re-run after enabling database
// Select: firestore, functions, hosting
// Accept all defaults
// Do you want to install dependencies with npm now? Yes
// What do you want to use as your public directory? build
// Configure as a single-page app (rewrite all urls to /index.html)? No
firebase apps:create
// Please choose the platform of the app: Web
firebase apps:sdkconfig WEB 1:abcdefghijk... // The previous command will spit this out at the end.
// Copy & paste 