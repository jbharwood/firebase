document.addEventListener('DOMContentLoaded', function() {

  var firebaseConfig = {
    apiKey: "AIzaSyAghF0fixftRoGIcgXF6YBBc7NVFkQUe9g",
    authDomain: "lootfeed-8477b.firebaseapp.com",
    databaseURL: "https://lootfeed-8477b.firebaseio.com",
    projectId: "lootfeed-8477b",
    storageBucket: "lootfeed-8477b.appspot.com",
    messagingSenderId: "371521669855",
    appId: "1:371521669855:web:70ee01dcf995d63162376a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const app = firebase.app()
  // const db = firebase.firestore()
  console.log(db);

  const list = [{input: "test"}, {input: "pie"}]

  list.forEach(item => {
    db.collection('lootfeeds').doc(item).set({input: item})
  })

  // db.collection('lootfeeds').doc('doc').set({input: "works?"})
  // console.log(app.firestore());

  // const firebase = require('firebase');
  // const fbRef = firebase.database().ref();
  // console.log(fbRef);

  // const app = firebase.app()
  //
  // const db = firebase.firestore()
  //
  // let docRef = db.collection('lootfeeds').doc('M8s8RrmmrYC1wSvjNmx0');
  //
  // let setTitle = docRef.set({
  //   title: 'hello lootfeed'
  // });
})


// <html>
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Welcome to Firebase Hosting</title>
//
//     <!-- update the version number as needed -->
//     <script defer src="/__/firebase/7.9.3/firebase-app.js"></script>
//     <!-- include only the Firebase features as you need -->
//     <script defer src="/__/firebase/7.9.3/firebase-auth.js"></script>
//     <script defer src="/__/firebase/7.9.3/firebase-database.js"></script>
//     <script defer src="/__/firebase/7.9.3/firebase-messaging.js"></script>
//     <script defer src="/__/firebase/7.9.3/firebase-storage.js"></script>
//     <!-- initialize the SDK after all desired features are loaded -->
//     <script defer src="/__/firebase/init.js"></script>
//     <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-firestore.js"></script>
//     <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-storage.js"></script>
//
//     <style media="screen">
//       body { background: #ECEFF1; color: rgba(0,0,0,0.87); font-family: Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; }
//       #message { background: white; max-width: 360px; margin: 100px auto 16px; padding: 32px 24px; border-radius: 3px; }
//       #message h2 { color: #ffa100; font-weight: bold; font-size: 16px; margin: 0 0 8px; }
//       #message h1 { font-size: 22px; font-weight: 300; color: rgba(0,0,0,0.6); margin: 0 0 16px;}
//       #message p { line-height: 140%; margin: 16px 0 24px; font-size: 14px; }
//       #message a { display: block; text-align: center; background: #039be5; text-transform: uppercase; text-decoration: none; color: white; padding: 16px; border-radius: 4px; }
//       #message, #message a { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
//       #load { color: rgba(0,0,0,0.4); text-align: center; font-size: 13px; }
//       @media (max-width: 600px) {
//         body, #message { margin-top: 0; background: white; box-shadow: none; }
//         body { border-top: 16px solid #ffa100; }
//       }
//     </style>
//   </head>
//   <body>
//
//     <!-- The core Firebase JS SDK is always required and must be listed first -->
//     <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-app.js"></script>
//
//
//     <script src="app.js"> </script>
//
//   </body>
// </html>
