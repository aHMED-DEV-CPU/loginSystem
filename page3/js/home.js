const logout = document.getElementById("logout")
const userName = localStorage.getItem("nameOfUser")
logout.addEventListener("click", function () {
    window.location.replace("https://ahmed-dev-cpu.github.io/loginSystem/")
    localStorage.removeItem("nameOfUser")


})

if (userName) {
    document.getElementById("nameOfUser").innerHTML = userName;
    localStorage.removeItem("nameOfUser")
} else {
    window.location.replace("https://ahmed-dev-cpu.github.io/loginSystem/")
}
