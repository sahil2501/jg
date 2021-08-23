function welcome() {
    welName = localStorage.getItem("user_name");
    document.getElementById("welcome").innerHTML = "Welcome " + welName + "!"
}

function logout() {
    document.getElementById("room_name").innerHTML = "";
    window.location = "index.html";
}