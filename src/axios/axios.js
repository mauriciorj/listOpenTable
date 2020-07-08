import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://opentable.herokuapp.com/api/'
});

export default instance;