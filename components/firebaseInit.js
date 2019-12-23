import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCOXfzSrKqeog-N0Aqajdb9t8iVmjXr7s4",
    authDomain: "kura-pila.firebaseapp.com",
    databaseURL: "https://kura-pila.firebaseio.com",
    projectId: "kura-pila",
    storageBucket: "kura-pila.appspot.com",
    messagingSenderId: "666003972134",
    appId: "1:666003972134:web:8b773c04bddb6437e186e7",
    measurementId: "G-S0ZLHWMJ8M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase