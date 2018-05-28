const savedCities = loadLocalStorage();
const initialState = {
  savedCities: [...savedCities],
  posts: [
    {
      title: 'lel'
    }
  ],
  searchingCity: '',
  searchingCountry: '',
  actualCity: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return state;
    case 'FETCH_SUCCESS':
      return { ...state, posts: action.payload };
    case 'CHANGE_CITY_VALUE':
      return {
        ...state,
        searchingCity: action.payload
      };
    case 'CHANGE_COUNTRY_VALUE':
      return {
        ...state,
        searchingCountry: action.payload
      };
    case 'FETCH_CITY_SUCCESS':
      return {
        ...state,
        savedCities: [...state.savedCities, action.payload]
      };
    case 'DELETE_CITY':
      const newCities = filterAndDeleteCityById(
        action.payload,
        state.savedCities
      );
      return {
        ...state,
        savedCities: [...newCities]
      };
    case 'DETAIL_CITY':
      return {
        ...state,
        actualCity: { ...action.payload }
      };
    default:
      return state;
  }
};

function filterAndDeleteCityById(cityId, citiesArray) {
  return citiesArray.filter(city => city.id !== cityId);
}

function loadLocalStorage() {
  const savedCities = localStorage.getItem('savedCities');
  return savedCities === null ? {} : JSON.parse(savedCities);
}
