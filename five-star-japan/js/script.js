document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            // Simple toggle for now. In a real scenario, we might want a class-based toggle in CSS.
            // Since we didn't define a specific 'open' class in style.css for the mobile view logic (we just hid it),
            // we'll quickly add the logic here or update CSS.
            // Let's update CSS to handle the 'active' state for mobile menu, 
            // but for now, we can just toggle display if we want to be quick, 
            // OR better, toggle a class and let CSS handle it.
            
            navMenu.classList.toggle('active');
        });
    }
});
