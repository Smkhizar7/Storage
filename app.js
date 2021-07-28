let signIn = () => {
    var email = document.getElementById('signin1').value;
    var password = document.getElementById('signin2').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
            // Signed in
            // var user = userCredential.user;
            // ...
            console.log(data);
            location.href = "./welcome.html";
        })
        .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            console.log("Invaid email and password");
        });
    // if (localStorage.getItem('email') === email && localStorage.getItem('password') === password) {
        // location.href = "./welcome.html";
    // }
    // else {
        // console.log("Invaid email and password");
    // }
}
let signUp = () => {
    var email = document.getElementById('signup1').value;
    var password = document.getElementById('signup2').value;
    // localStorage.setItem('email',email);
    // localStorage.setItem('password',password);
    // location.href = "./SignIn.html";
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            // Signed in 
            // var user = userCredential.user;
            // ...
            location.href = "./SignIn.html";
            console.log(data);
        })
        .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(errorMessage);
        });
}