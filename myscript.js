function validate() {
    var mail = document.getElementById("text").value;
    var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regx.text(mail)) {
        alert("You have provided a valid Email ID")
        return true
    }
    else{
        alert("Sorry! Icorrect Email ID")
        return false;
    }

    
}