
var firebaseConfig = {
      apiKey: "AIzaSyDcMskcBujdeXOYbR4dZ2qj0OGM-C_sRcs",
      authDomain: "kwitter-aa1b8.firebaseapp.com",
      databaseURL: "https://kwitter-aa1b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-aa1b8",
      storageBucket: "kwitter-aa1b8.appspot.com",
      messagingSenderId: "151383019749",
      appId: "1:151383019749:web:c33bd665abc50f76ff040c"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
