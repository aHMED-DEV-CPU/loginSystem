const logout = document.getElementById("logout")
logout.addEventListener("click", function () {
    window.location.replace("https://ahmed-dev-cpu.github.io/loginSystem/")

})
const userName = localStorage.getItem("nameOfUser")
if (userName) {
    document.getElementById("nameOfUser").innerHTML = userName;
} 