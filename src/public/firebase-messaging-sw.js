importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  apiKey: "AIzaSyDrh90GhjpAGtAHVnOgjVTVMz_xxxxxxxx",
  authDomain: "fcm-implement.firebaseapp.com",
  databaseURL: "https://fcm-implement.firebaseio.com",
  projectId: "fcm-implement",
  storageBucket: "fcm-implement.appspot.com",
  messagingSenderId: "8071634xxxxx",
  appId: "1:807163428649:web:xxxxxxxxxxxxxxxxxxxxxx"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
});
