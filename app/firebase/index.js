import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyACYPxp2_L2-nKMFObjcPQHQknTI_YpJnY",
      authDomain: "kunce-todo-app.firebaseapp.com",
      databaseURL: "https://kunce-todo-app.firebaseio.com",
      projectId: "kunce-todo-app",
      storageBucket: "kunce-todo-app.appspot.com",
      messagingSenderId: "275272109257"
    };


  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
