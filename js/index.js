"use strict";
const signUpAnchor = document.getElementById("signUpAnchor")
signUpAnchor.addEventListener("click", function () {
    signUpAnchor.setAttribute("href", "signUp/signUp.html")
})
const emailInput = document.getElementById("email")
const passInput = document.getElementById("pass")
const InputsRequired = document.getElementById("empty")
const incorrect = document.getElementById("incorrect")
const success = document.getElementById("Success")
var usersList = JSON.parse(localStorage.getItem("users")) || [];
function registration() {
    let user = {
        email: emailInput.value,
        pass: passInput.value
    }

    let userEntry = false;
    for (let i = 0; i < usersList.length; i++) {
        if (user.email === usersList[i].email && user.pass === usersList[i].pass) {
            var currentIndex = i;
            userEntry = true;
        }
    }

    if (user.pass === "" || user.email === "") {
        InputsRequired.classList.replace("d-none", "d-block")
        incorrect.classList.replace("d-block", "d-none")
        success.classList.replace("d-block", "d-none")
    } else if (userEntry === false) {
        incorrect.classList.replace("d-none", "d-block")
        InputsRequired.classList.replace("d-block", "d-none")
        success.classList.replace("d-block", "d-none")
    } else if (userEntry === true) {
        success.classList.replace("d-none", "d-block")
        incorrect.classList.replace("d-block", "d-none")
        InputsRequired.classList.replace("d-block", "d-none")
        setTimeout(moveToAnotherWebsite, 2000)
        localStorage.setItem("nameOfUser", usersList[currentIndex].name)
        localStorage.getItem("users")
    }
}
function moveToAnotherWebsite() {
    window.location.replace("https://ahmed-dev-cpu.github.io/loginSystem/page3/home.html")


}
const login = document.getElementById("login")

login.addEventListener("click", function () {
    registration()
})
