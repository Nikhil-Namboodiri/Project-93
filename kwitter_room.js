username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = username;
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdV-Q748TI2P475v2MvQ0DZE9cO9L4_MQ",
    authDomain: "lets-chat-web-app-whjr.firebaseapp.com",
    projectId: "lets-chat-web-app-whjr",
    storageBucket: "lets-chat-web-app-whjr.appspot.com",
    messagingSenderId: "672900453181",
    appId: "1:672900453181:web:ad3483e4a335803e682b54"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();  