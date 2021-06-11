function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email == "admin@wishlist.com" && password == "admin123"){
        swal("Success!", "Click OK to Proceed", "success").then(function(){
            window.location.href = "main.html";
        });
    }
    else{
        swal("Error!", "Invalid Credentials! Account not found.", "error");
    }
}