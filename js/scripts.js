// // sidebar toggle

// var sidebarOpen = false;
// var sidebar = document.getElementById("sidebar");

// function openSidebar() {
//     if(!sidebarOpen){
//         sidebar.classList.add("sidebar-responsive");
//         sidebarOpen = true;
//     }
// }
// function closeSidebar() {
//     if(sidebarOpen) {
//         sidebar.classList.remove("sidebar-responsive");
//         sidebarOpen = false;
//     }
// }
const ph_number = document.getElementById('ph_number');

const phRandomNumber = () => {
    const randomNumber = Math.floor(Math.random()*15);
    ph_number.textContent = randomNumber;
    console.log(randomNumber);
}

phRandomNumber();