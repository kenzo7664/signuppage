function validateForm() {
    var x = document.forms["myForm"]
    ["fname"].value;
    if(x == ""){
        alert("Firtsname is required");
        return false;
    }
    var y = document.forms["myForm"]
    ["yname"].value;
    if(y == ""){
        alert("Lastname is required");
        return false;

    }
    var a = document.forms["myForm"]
    ["password"].value;
    if(a.length < 4){
        alert("Password must be at least 6 characters long.");
        return false;
    }
    var z = document.forms["myForm"]
    ["zname"].value;
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(z.match(mailFormat)){
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        return false;
    }

    


}