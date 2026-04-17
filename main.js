function askPassword() {
let password = "";

do {
    password = prompt("Enter a password longer tham 4 characters", "");
   } while (password.length < 5);

    window.alert("Entered password: " + password);

}