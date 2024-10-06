//Thiếu phần hover từng mục
const dashboard = document.getElementById("dashboard");

const dashboardElement = document.createElement("div");

dashboardElement.className = "dashboard";

const pathName = location.pathname;

dashboardElement.innerHTML = `
     <div class="T1">
            <p> Melodies </p>
        </div>
        <!-- DashBoard-Menu -->
        <div class="DashBoard-menu">
            <p class="Menu">Menu</p>
            <div class="Menu-part">
                <div class="dashboard-menu-item-hover"> <i class="fa-solid fa-house"></i>
                    <p>Home </p>
                </div>
                <div class="dashboard-menu-item-hover "> <i class="fa-regular fa-compass"></i>
                    <p>Discover </p>
                </div>
                <div class="dashboard-menu-item-hover"> <i class="fa-regular fa-circle-dot"></i>
                    <p><a href="./album.html" >Albums</a></p>
                </div>
                <div class="dashboard-menu-item-hover"> <i class="bi bi-person-circle"></i>
                    <p><a href="./artist.html"> Artists </a></p>
                </div>
            </div>
        </div>
        <!-- Dashboard-Library -->
        <div class="DashBoard-Library">
            <p class="Library"> Library</p>
            <div class="Library-part">
                <div class="dashboard-menu-item-hover"> <i class="fa-regular fa-clock"></i>
                    <p> Recently Added </p>
                </div>
                <div class="dashboard-menu-item-hover"> <i class="fa-regular fa-compass"></i>
                    <p> Most Played </p>
                </div>
            </div>
        </div>
        <!-- Dashboard-Playlist-and-Favorite -->
        <div class="DashBoard-Playlist">
            <p class="Play-list"> Playlist and Favorite </p>
            <div class="Play-list-part">
                <div class="dashboard-menu-item-hover"> <i class="fa-regular fa-heart"></i>
                    <p> Your Favorites </p>
                </div>
                <div class="dashboard-menu-item-hover"> <i class="bi bi-music-note-list"></i>
                    <p> Your Playlist </p>
                </div>
                <div class="dashboard-menu-item-hover"> <img src="./image/image-dashboard/Add.png" alt="">
                    <p class="Add-playlist"> Add Playlist </p>
                </div>
            </div>
        </div>
        <!-- Dashboard-general -->
        <div class="DashBoard-general">
            <p class="General"> General </p>
            <div class="General-part">
                <div class="dashboard-menu-item-hover"> <i class="bi bi-gear"></i>
                    <p> Setting </p>
                </div>
                <div class="dashboard-menu-item-hover"> <i class="bi bi-box-arrow-right Logout"></i>
                    <p class="Logout"> Log Out </p>
                </div>
            </div>
        </div>
`;

if (dashboard) {
    dashboard.appendChild(dashboardElement);
} else {
    console.error("Element with ID 'dashboard' not found");
}

function toggleSidebar() {
    const dashboard = document.getElementById('dashboard');
    if (window.innerWidth < 440) {
        dashboard.classList.add('hide');
    } else {
        dashboard.classList.remove('hide');
    }
}

// Gọi hàm khi tải trang và khi thay đổi kích thước
window.addEventListener('load', toggleSidebar);
window.addEventListener('resize', toggleSidebar);
