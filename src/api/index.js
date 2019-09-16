import animals from './controllers/animals';

export const API_URLS = 'http://a.payclick.co.il/api/sample/';
export const TOKEN = 'token_adci';

export default {
  animals: animals(API_URLS, TOKEN)
};