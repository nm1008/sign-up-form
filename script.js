const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password")
const button = document.querySelector("button");
const message = document.querySelector("p")

console.log(password.value)
function checkPassword(){
    

    if(password.value != confirmPassword.value){
        message.innerHTML = "* Password do not match";
        event.preventDefault()
    }else{
        location.replace("http://127.0.0.1:5500/welcome.html")
        
    }
}

button.addEventListener("click", checkPassword)