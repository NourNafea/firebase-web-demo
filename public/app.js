(function () {
    // Set the configuration for your app
    var config = {
        apiKey: "eV6sxUs1lTPkcyQphKwf9z1u4rlOxb3nlEmMNDWS",
        authDomain: "fire-detection-robot-default-rtdb.firebaseio.com",
        databaseURL: "https://fire-detection-robot-default-rtdb.firebaseio.com",
        projectId: "fire-detection-robot",
        storageBucket: "fire-detection-robot.appspot.com",
        messagingSenderId: "1098199709707"
    };

    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

    // Get element from the DOM
    const tempElement = document.getElementById('Status');

    // Create temperature database reference
    const StatusRef = database.ref();

    // Sync objects changes
    StatusRef.limitToLast(1).on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Status: " + childData);
            tempElement.innerText = childData;
        });
    });

}());
function ledOn(){
    firebase.database().ref("LED").set({
    status:"ON"
    })
  }
  function ledOff(){
    firebase.database().ref("LED").set({
    status:"OFF"
    })
  }