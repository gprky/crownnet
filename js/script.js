// Плавный скролл к секциям при нажатии на ссылки навигации
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
