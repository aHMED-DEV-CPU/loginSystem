const logout = document.getElementById("logout")
logout.addEventListener("click", function () {
    window.location.href = "../../index.html"

})
const userName = localStorage.getItem("nameOfUser")
if (userName) {
    document.getElementById("nameOfUser").innerHTML = userName;
} 