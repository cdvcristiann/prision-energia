
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
