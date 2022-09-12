// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref, set, get, child } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js'

// Initialize Firebase using key
$.getJSON('key.json', function (firebaseConfig) {
    self.app = initializeApp(firebaseConfig);
    console.log(app);
    self.database = getDatabase();
    console.log(database);
});

// sample function (ref : https://firebase.google.com/docs/database/web/read-and-write#web-version-9_3)
function writeUserData(userId, name, email, imageUrl) {
    // set sample
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });

    // get sample
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

// set global variable in module script
self.writeUserData = writeUserData;