import axios from 'axios';

const api = axios.create({
	baseURL: 'http://10.0.0.105:3000/',
});

export { api };
