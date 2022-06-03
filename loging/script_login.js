var submit = document.getElementById("submit");


// error alart 
var userNameError = document.getElementById("username_text");
var passwordError = document.getElementById("password_text");




submit.addEventListener("click", function(previw){
    previw.preventDefault();

    // input value 
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;


// color value 
var username_color = document.getElementById("username_color");
var password_color = document.getElementById("password_color");



    // username chack
    if(username === ""){
        userNameError.innerHTML = "Please Submit Your Username";
        // username.classList.add("error");
    }else{
        userNameError.innerHTML = "Thanks"
        // username_color.classList.add("success");
    }

    // password chack 
    if(password === ""){
        passwordError.innerHTML = "Please Submit Your password";
        // password_color.classList.add("success");
    }else{
        passwordError.innerHTML = "Thanks";
        // password_color.classList.add("error") 
    }

    // username_color.classList.add("success");



    // userNameError.innerHTML = 
    
})




console.log("hello")