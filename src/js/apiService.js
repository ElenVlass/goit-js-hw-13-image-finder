const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '21246510-8cf114b80fb53559900540c62';

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPhotos() {
    try {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${MY_KEY}`;
      const responce = await fetch(url);
      const photos = await responce.json();
      this.incrementPage();
      return photos.hits;
    } catch (error) {
      throw error;
      };
  }

  async fetchPhotoById(id) {
    try {
      const response = await fetch(`${BASE_URL}?key=${MY_KEY}&id=${id}`);
      const photo = await response.json();
    return photo.hits[0];}
    catch (error) {
      throw error;
    }
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