//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Initialize Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBfMe3F7eGSo3mMxd1npC-vziqc-7emPFE",
  authDomain: "class-94-ff887.firebaseapp.com",
  databaseURL: "https://class-94-ff887-default-rtdb.firebaseio.com",
  projectId: "class-94-ff887",
  storageBucket: "class-94-ff887.appspot.com",
  messagingSenderId: "992547254659",
  appId: "1:992547254659:web:a89a2f239acf2cb58806b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addroom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";


}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("ROOM NAME - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
    });
  });
}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name" ,  name);
window.location  =  "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}