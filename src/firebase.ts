import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getMessaging, getToken } from 'firebase/messaging'; // ✅ Correct imports

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE, // ✅ Fixed domain
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-QV9Y9JVN1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Messaging
const messaging = getMessaging(app); // ✅ Use getMessaging instead of firebase.messaging()

export function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY })
        .then((token) => {
          if (token) {
            console.log(`푸시 토큰 발급 완료 : ${token}`);
          } else {
            console.log('푸시 토큰 없음. 권한이 필요하거나 등록 토큰이 없음.');
          }
        })
        .catch((err) => {
          console.log('푸시 토큰 가져오는 중에 에러 발생:', err);
        });
    } else {
      console.log('푸시 권한 거부됨');
    }
  });
}
