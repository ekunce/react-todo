import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyACYPxp2_L2-nKMFObjcPQHQknTI_YpJnY",
    authDomain: "kunce-todo-app.firebaseapp.com",
    databaseURL: "https://kunce-todo-app.firebaseio.com",
    projectId: "kunce-todo-app",
    storageBucket: "kunce-todo-app.appspot.com",
    messagingSenderId: "275272109257"
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Eduard',
    age: 39
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Todo 1'});
todosRef.push({text: 'Todo 2'});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log('Todo id', newNoteRef.key);
