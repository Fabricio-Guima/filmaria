import axios from 'axios';

//api url http://sujeitoprogramador.com/r-api/?api=filmes

const api = axios.create({
    baseURL: 'http://sujeitoprogramador.com/r-api/'
})

export default api;