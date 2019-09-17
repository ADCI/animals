import axios from 'axios';

export default (API_URLS, TOKEN) => ({
  getAnimals: function() {
    // /api/projects
    return axios.post(API_URLS + 'GetAnimals', {"Token": TOKEN, "Type": "Dog"})
  },
  getAnimalDetails: function(id) {
    // /api/projects
    return axios.post(API_URLS + 'GetAnimalDetails', {"Token": TOKEN, "ID": id})
  },
  getRaces: function() {
    // /api/projects
    return axios.post(API_URLS + 'GetRaces', {"Token": TOKEN})
  },
  getColors: function() {
    // /api/projects
    return axios.post(API_URLS + 'GetColors', {"Token": TOKEN})
  },
  saveAnimalDetails: function(id, name, raceID, colorID, birthDate, isDangerous) {
    // /api/projects
    return axios.post(API_URLS + 'GetColors', {
      "Token": TOKEN,
      "ID": id,
      "Name": name,
      "RaceID": raceID,
      "ColorID": colorID,
      "BirthDate": birthDate,
      "IsDangerous": isDangerous
    })
  }
});