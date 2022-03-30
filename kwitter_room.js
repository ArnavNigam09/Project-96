
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAkRvgFRx_tKzDbqb6WVD_vxqZSzRdln8g",
      authDomain: "kwitter-page-bd95f.firebaseapp.com",
      databaseURL: "https://kwitter-page-bd95f-default-rtdb.firebaseio.com",
      projectId: "kwitter-page-bd95f",
      storageBucket: "kwitter-page-bd95f.appspot.com",
      messagingSenderId: "461898280109",
      appId: "1:461898280109:web:38727da1493f2eba57aa24",
      measurementId: "G-BZMYPDT676"
    };
    
    
     firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("TEST room name-" + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      console.log("TEST Add Room" + room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "Kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}