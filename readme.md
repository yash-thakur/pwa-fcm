
# Firebase Cloud Messaging with ReactPWA

Here is a simple implementation of Firebase Cloud Messaging with React-PWA.

Clone the repo:   `git@github.com:yash-thakur/pwa-fcm.git && cd pwa-fcm`

Make the following necessary changes:

1. Update GCM-Sender ID in `public/manifest.json`.
2. Update the Firebase Config in `public/firebase-messaging-sw.js`.
3. Update the Firebase Config in `fcm-config.js`.

Run using `npm i && npm start`

Open the browser (`http://localhost:3003`) with **Developer Tools** and note the `Current Token` from the console.

Go to the [Firebase Notification Tester](https://firebase.google.com/docs/cloud-messaging/js/first-message) and open **Notification Composer**.

Paste the **token** and send the *Test Notification*
