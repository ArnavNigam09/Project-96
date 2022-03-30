
//ADD YOUR FIREBASE LINKS
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

   function addUser()
   {
       user_name = document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({
           purpose:"adding user"
       });
       

   }