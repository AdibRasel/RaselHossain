// // input value 
// var first_name = document.getElementById("first").value;
// var last_name = document.getElementById("last").value;
// var email = document.getElementById("email").value;
// var password = document.getElementById("password").value;
// var confirm_password = document.getElementById("confirm_password").value;
// var birthdate = document.getElementById("birthdate").value;
// var phon = document.getElementById("phon").value;


// // alart 
// var name_alart = document.getElementById("name_alart");
// var email_alart = document.getElementById("email_alart")
// var password_alart = document.getElementById("password_alart")
// var birthdate_alart = document.getElementById("birthdate_alart")
// var phon_alart = document.getElementById("phon_alart")

// document.getElementById("submit").addEventListener("click", function(previw){
//     previw.preventDefault();

//     // first name
//     if(first_name !== ""){
//         name_alart.innerHTML = "Please Type Your First Name aaa"
//     }else{
//         // window.alert("thanks")
//         name_alart.innerHTML = "thanks"
//     }

//     // last name 
//     if(last_name === ""){
//         last_name.innerHTML = "Please Type your Last Name"
//     }else{
//         name_alart.innerHTML = "thanks"
//     }

//     // email
//     if(email === ""){
//         email_alart.innerHTML = "Please Type your Email"
//     }else{
//         email_alart.innerHTML = "thanks"
//     }

//     // password 
//     if(password === ""){
//         password_alart.innerHTML = "Please Type your Password"
//     }else{
//         password_alart.innerHTML = "Thanks"
//     }

//     // confirm_password
//     if(confirm_password === ""){
//         password_alart.innerHTML = "Please type your confirm password"
//     }else{
//         password_alart.innerHTML = "thanks"
//     }

//     // birthdate
//     if(birthdate === ""){
//         birthdate_alart.innerHTML = "Please type or select your Birthdate"
//     }else{
//         birthdate_alart.innerHTML = "thanks"
//     }

//     // phon 
//     if(phon === ""){
//         phon_alart.innerHTML = "Please type your phon number"
//     }else{
//         phon_alart.innerHTML = "thanks"
//     }
// })


// console.log("hello")




// ========================Pracktice=======================




// alart 
var alart_name = document.getElementById("name_alart");
var alart_email = document.getElementById("email_alart");
var alart_password = document.getElementById("password_alart");
var alart_birthdate = document.getElementById("birthdate_alart");
var alart_phon = document.getElementById("phon_alart");


// onclick function work 
var submit = document.getElementById("submit");

submit.addEventListener("click", function(a){
    a.preventDefault()


// input value 
var first_name = document.getElementById("first").value;
var last_name = document.getElementById("last").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirm_password = document.getElementById("confirm_password").value;
var birthdate = document.getElementById("birthdate").value;
var phon = document.getElementById("phon").value;
// var first_name = document.getElementById("first").value;



    // first name 
    if(first_name === ""){
        alart_name.innerHTML = "Please Type Your Frist Name"
    }else{
        alart_name.innerHTML = "thanks";
    }


    

    if(email === ""){
        alart_email.innerHTML = "Please Type Your Email Address"
    }else{
        alart_email.innerHTML = "thanks"
    }



    if(password === ""){
        alart_password.innerHTML = "Please Type Your Password"
    }else{
        alart_password.innerHTML = "thanks"
    }





    if(birthdate === ""){
        alart_birthdate.innerHTML = "Please Type Your Birthdate"
    }else{
        alart_birthdate.innerHTML = "thanks"
    }



    if(phon === ""){
        alart_phon.innerHTML = "Please Type Your Phon"
    }else{
        alart_phon.innerHTML = "thanks"
    }



    




})