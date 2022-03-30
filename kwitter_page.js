//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref(room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' scr = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button  = "<button class = 'btn btn-warning' id = "+ firebase_message_id +" value = "+like+" onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML = row;
//End code
      } });  }); }
getData();
function send()
{
   //room_name = document.getElementById("room_name").value;
   //user_name = document.getElementById("user_name").value;
   //localStorage.getItem("room_name", room_name);
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   });
   document.getElementById("msg").value = "";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}

function updateLike(message_id)
{
   console.log("click on like button-"+ message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 10;
   console.log(updated_likes);
   firebase.database().ref(room_name).child(message_id).update({
         like:updated_likes
   });
}