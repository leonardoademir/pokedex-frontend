import axios from 'axios';

const api = axios.create({baseURL:'https://pokedex-jacto-admission.herokuapp.com/api'});

export default api;