import '../styles.css';
import 'material-design-icons';
import refs from './refs';
import cardsList from '../templates/cards-list-template.hbs';


export  function createGalleryMarkup(cards) {
    const newGalleryMarkup = cardsList(cards);
    refs.gallery.innerHTML = newGalleryMarkup;
};

export  function prependMoreCardsMarkup(cards) {
    const prependGalleryMarkup = cardsList(cards);
    refs.gallery.insertAdjacentHTML('beforeend', prependGalleryMarkup);
}
