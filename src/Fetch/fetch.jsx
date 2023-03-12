import axios from 'axios';

const API_KEY = '32968388-b31919f1c04eebb6402c46dda';
const BASE_URL = 'https://pixabay.com';

export const fetchData = (query, page, perPage) => {
  return axios
    .get(
      `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
};
