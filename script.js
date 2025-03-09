
    // Import Firebase modules
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
    import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

    // Your Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAmSC20LuRf5GaBOoWH6IOHcUnPC9prpGY",
        authDomain: "scholarbuddy-a7229.firebaseapp.com",
        projectId: "scholarbuddy-a7229",
        storageBucket: "scholarbuddy-a7229.appspot.com",
        messagingSenderId: "402957942354",
        appId: "1:402957942354:web:05d96311489a21fd37698b",
        measurementId: "G-DGGY82XP9X"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Logout Function
    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
                window.location.href = "login.html"; // Redirect to login page
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    // Attach Logout Button Event Listener
    document.getElementById("logout-button").addEventListener("click", logout);
