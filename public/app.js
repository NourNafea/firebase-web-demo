(function(){
    var firebaseConfig = {
        
        apiKey: "eV6sxUs1lTPkcyQphKwf9z1u4rlOxb3nlEmMNDWS",
          authDomain: "fire-detection-robot-default-rtdb.firebaseio.com",
          databaseURL: "https://fire-detection-robot-default-rtdb.firebaseio.com",
          projectId: "fire-detection-robot",
          storageBucket: "fire-detection-robot.appspot.com",
          messagingSenderId: "1098199709707"
      };
    
    //   Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var database = firebase.database(); //get reference to the database
    
    
    
    firebase.database().ref("FLAME STATE").on("value", (snapshot)=>{
      const val = snapshot.val();
      var element1 = document.getElementById("box1");
      var element2 = document.getElementById("box2");
      if (val == true) //fire is detected
      {
        console.log(val);
        element1.style.backgroundColor = "white";
        element2.style.backgroundColor = "red";
      }
    
      else
      {
        element1.style.backgroundColor = "green";
        element2.style.backgroundColor = "white";
        console.log(val);
      }
      
    })
    }())
    