import firebase from 'firebase';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: 'AIzaSyBHu_tuMPCIXjcAH7-4ePySTJZ2BX1u2eY',
  authDomain: 'cps-projectconds.firebaseapp.com',
  databaseURL: 'https://cps-projectconds-default-rtdb.firebaseio.com',
  projectId: 'cps-projectconds',
  storageBucket: 'cps-projectconds.appspot.com',
  messagingSenderId: '100570322845',
  appId: '1:100570322845:web:07d48b88193e3d92970174',
};

// Initialize Firebase
let fire = firebase.initializeApp(firebaseConfig);
export default fire;
