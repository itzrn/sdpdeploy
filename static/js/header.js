function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');  // Closing animation
    } else {
        sidebar.classList.add('active');     // Opening animation
    }
}

document.querySelector(".refresh-page").addEventListener("click", function() {
    location.reload();
});

document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-btn');

    // Check if the clicked area is NOT inside the sidebar or the menu button
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('active'); // Close the sidebar
    }
});

