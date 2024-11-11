// JavaScript functions for interactivity

function handleWhatsAppClick() {
    // Optional alert
    // alert("Opening WhatsApp to contact MJK DigiHub!");
    window.location.href = "https://wa.me/919072906193";
}

function handleCallClick() {
    // Optional alert
    // alert("Calling MJK DigiHub at +91 9072906193!");
    window.location.href = "tel:+919072906193";
}

function handleEmailClick() {
    // Optional alert
    // alert("Opening email to contact MJK DigiHub!");
    window.location.href = "mailto:MJKDigiHub@gmail.com";
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
