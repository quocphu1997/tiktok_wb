import request from '../utils/request';

const fetchSearchApi = (debounced, type) =>
    request({
        url: `users/search?q=${debounced}&type=${type}`,
        method: 'GET',
    });

export { fetchSearchApi };
