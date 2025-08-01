const favoriteButton = document.querySelector('.favorite');
// Seleciona o ícone de coração dentro do botão
const heartIcon = document.getElementById('icon__favorite');

// Evento de clique para alternar o estado de favorito
favoriteButton.addEventListener('click', () => {
    const isFavorited = heartIcon.classList.contains('bi-heart-fill');

    if (isFavorited) { // desfavorita
        heartIcon.classList.remove('bi-heart-fill');
        heartIcon.classList.add('bi-heart');
        heartIcon.classList.remove('active');
    } else { // adiciona aos favoritos
        heartIcon.classList.remove('bi-heart');
        heartIcon.classList.add('bi-heart-fill');
        heartIcon.classList.add('active');
    }
});