import axios from 'axios';
import React from 'react';

const request = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api`,
});

export const get = async (path, options = []) => {
    const respone = await request.get(path, options);
    return respone.data;
};

export default request;
