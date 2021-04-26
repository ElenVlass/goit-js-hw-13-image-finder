import './styles.css';
// import 'material-design-icons';
// import icofont from 'material-design-icons';
// import {MDCFoo, MDCFooFoundation} from '@material/foo';
// import {MDCComponent, MDCFoundation} from '@material/base';
import refs from './js/refs';
import PixabayApiService from './js/apiService';
import SearchBtn from './js/SearchBtn'
import { createGalleryMarkup, prependMoreCardsMarkup } from './js/render-cards-list';
import showError from './js/showError';
import windowsScrolling from './js/observe'
import * as basicLightbox from 'basiclightbox';


const pixabayApiService = new PixabayApiService();
const searchBtn = new SearchBtn('[data-action="search"]');
const loadMoreBtn = new SearchBtn('[data-action="load-more"]', true);


refs.form.addEventListener('submit', handleSearchInput);
loadMoreBtn.btn.addEventListener('click', handleLoadMoreClick);
refs.js-photo-albom.addEventListener('click', openModal)


console.log(searchBtn.label.textContent);

function handleSearchInput(e) {
    e.preventDefault();

    pixabayApiService.query = e.currentTarget.elements.query.value.trim();
    if (pixabayApiService.query === '') {
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
        windowsScrolling()
    });
}

