import axios from 'axios';
import React from 'react';

const request = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api`,
});

export default request;
