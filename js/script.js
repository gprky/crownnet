// Плавный скролл к секции "Как подключиться" при нажатии на кнопку "Перейти в Telegram"
document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault(); // отменяет переход по ссылке
    document.querySelector('#how-to').scrollIntoView({ behavior: 'smooth' });
});
