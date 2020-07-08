import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://opentable.herokuapp.com/api/'
});

export default instance;