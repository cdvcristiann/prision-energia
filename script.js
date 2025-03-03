
function toggleText(id, button) {
    const content = document.getElementById(id);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        button.textContent = 'Leer menos';
    } else {
        content.classList.add('hidden');
        button.textContent = 'Leer más';
    }
}
window.onscroll = function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});