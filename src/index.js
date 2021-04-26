import refs from './js/refs';
import PixabayApiService from './js/apiService';
import SearchBtn from './js/SearchBtn'
import { createGalleryMarkup, prependMoreCardsMarkup } from './js/render-cards-list';
import showError from './js/showError';
import windowsScrolling from './js/observe'
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';
import fullSizeCard from './templates/full-size-photo-template.hbs'


const pixabayApiService = new PixabayApiService();
const searchBtn = new SearchBtn('[data-action="search"]');
const loadMoreBtn = new SearchBtn('[data-action="load-more"]', true);


refs.form.addEventListener('submit', handleSearchInput);
loadMoreBtn.btn.addEventListener('click', handleLoadMoreClick);
refs.gallery.addEventListener('click', handleOpenModalClick)

function handleSearchInput(e) {
    e.preventDefault();

    pixabayApiService.query = e.currentTarget.elements.query.value.trim();
    if (!pixabayApiService.query) {
        showError();
    } else {
        searchBtn.disable();
        loadMoreBtn.show();
        pixabayApiService.fetchPhotos().then(photos => {
            createGalleryMarkup(photos);
            searchBtn.enable('Search');
        });
    }
}

function handleLoadMoreClick() {
    loadMoreBtn.disable();
    pixabayApiService.fetchPhotos().then(photos => {
        prependMoreCardsMarkup(photos);
        loadMoreBtn.enable('Load more');
        windowsScrolling();
    });
};

function handleOpenModalClick(e) {
    const photoIdentifier = e.target.dataset.identifier;
    if (e.target.nodeName !== 'IMG') {
        return;
    };
    pixabayApiService.fetchPhotoById(photoIdentifier)
        .then(fullSizeCard)
        .then(data => basicLightbox.create(data).show());

};

