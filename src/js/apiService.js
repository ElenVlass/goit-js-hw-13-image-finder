const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '21246510-8cf114b80fb53559900540c62';

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPhotos() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${MY_KEY}`;
  
      return fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.incrementPage(); // изменяю значение page, если запрос был успешным;
        return data.hits;
      }).catch(console.log);
    
  }

  fetchPhotoById(id) {
    return fetch(`${BASE_URL}?key=${MY_KEY}&id=${id}`)
      .then(response => response.json())
      .then((data) => {
        return data.hits[0];
      }).catch(console.log);
  }

  incrementPage() {
    this.page += 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
    this.page = 1;
  }

}