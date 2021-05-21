function validateForm() {
    var name = document.forms["RegForm"]["name"].value;
    var email = document.forms["RegForm"]["email"].value;
    var phone = document.forms["RegForm"]["phone"].value;
    var organization = document.forms["RegForm"]["organization"].value;
    var password = document.forms["RegForm"]["password"].value;
    var password2 = document.forms["RegForm"]["password2"].value;
    var discount = document.forms["RegForm"]["discount"].value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;



    if (name == "") {
        document.getElementById("nameError").style.visibility = "visible";
    }

    else if (name == "") {
        document.getElementById("nameError").style.visibility = "hidden";
    }
    
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").style.visibility = "visible";
        
    }
    else if (email.match(emailPattern)) {
        document.getElementById("emailError").style.visibility = "hidden";
        
    }

    if (password.length < 10 || password.length > 20) {
        document.getElementById("passwordError1").style.visibility = "visible";
        
    }
    else if (!(password.length < 10 || password.length > 20)) {
        document.getElementById("passwordError1").style.visibility = "hidden";
        
    }
    if (!/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        document.getElementById("passwordError2").style.visibility = "visible";
    }
    else if (/[a-z]/.test(password) && !/[A-Z]/.test(password)) {
        document.getElementById("passwordError2").style.visibility = "hidden";
        
    }
    if (/[a-z]/.test(password) && !/[A-Z]/.test(password)) {
        document.getElementById("passwordError3").style.visibility = "visible";
    }

    else if (!/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        document.getElementById("passwordError3").style.visibility = "hidden";
    }
    
    if (!/\d/.test(password)) {
        document.getElementById("passwordError4").style.visibility = "visible";
        
    }
    else if (/\d/.test(password)) {
        document.getElementById("passwordError4").style.visibility = "hidden";
        
    }
    if (!password == password2) {
        document.getElementById("passwordError5").style.visibility = "visible";      
    }
    
    if (password == password2) {
        document.getElementById("passwordError5").style.visibility = "hidden";      
    }

    if (!/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(phone)) {
        document.getElementById("phoneError").style.visibility = "visible";
        
    }
    if (/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(phone)) {
        document.getElementById("phoneError").style.visibility = "hidden";
        
    }
    if (!organization == "") {
        document.getElementById("attendeeError1").style.visibility = "hidden";
    }

    if (organization == "") {
        document.getElementById("attendeeError1").style.visibility = "visible";
    }

    if (discount == "Lehman College") {
        alert("Your discount is 50%");
    }
    return false;
}