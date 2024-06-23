"use strict";
const signUpName = document.getElementById("sUserName")
const signUpEmail = document.getElementById("sUserEmail")
const signUpPass = document.getElementById("sUserPass")
const text = document.getElementsByTagName("span")

var usersList = JSON.parse(localStorage.getItem("users")) || [];

function addUser() {
    if (emailValidate()) {

        let user = {
            name: signUpName.value,
            email: signUpEmail.value,
            pass: signUpPass.value
        }
        let userExists = false;
        for (let i = 0; i < usersList.length; i++) {
            if (usersList[i].email === user.email) {
                userExists = true;
            }
        }
        if (user.name === "" || user.email === "" || user.pass === "") {
            text[2].classList.replace("d-none", "d-block")
            text[0].classList.replace("d-block", "d-none")
            text[1].classList.replace("d-block", "d-none")
        } else if (userExists == true) {
            text[1].classList.replace("d-none", "d-block")
            text[0].classList.replace("d-block", "d-none")
            text[2].classList.replace("d-block", "d-none")
            signUpEmail.classList.remove("is-valid")
        }
        else if (userExists == false) {
            text[0].classList.replace("d-none", "d-block")
            text[1].classList.replace("d-block", "d-none")
            text[2].classList.replace("d-block", "d-none")
            usersList.push(user)
            localStorage.setItem("users", JSON.stringify(usersList))
            setTimeout(moveToAnotherWebsite, 2000)
        }
    }
}
const signUpBtn = document.getElementById("signUp");
signUpBtn.addEventListener("click", function () {
    addUser()

})
const signInAnchor = document.getElementById("signInAnchor")
signInAnchor.addEventListener("click", function () {
    signInAnchor.setAttribute("href", "../index.html")
})
function emailValidate() {
    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm
    if (regex.test(signUpEmail.value)) {
        signUpEmail.classList.add("is-valid")
        signUpEmail.classList.remove("is-invalid")
        text[2].classList.replace("d-block", "d-none")
        return true;
    } else {
        signUpEmail.classList.add("is-invalid")
        signUpEmail.classList.remove("is-valid")
        text[2].classList.replace("d-none", "d-block")
        return false;
    }
}
function moveToAnotherWebsite() {
    window.location.replace("https://ahmed-dev-cpu.github.io/loginSystem/")

}