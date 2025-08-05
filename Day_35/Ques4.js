let password = "Harry@Code123";
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if (regex.test(password)) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}