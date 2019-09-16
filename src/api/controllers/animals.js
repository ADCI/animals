import axios from 'axios';

export default (API_URLS, TOKEN) => ({
  getAnimals: function() {
    // /api/projects
    return axios.post(API_URLS + 'GetAnimals', {"Token": TOKEN, "Type": "Dog"})
  },
});