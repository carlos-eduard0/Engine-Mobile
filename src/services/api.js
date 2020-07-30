import axios from 'axios';

const api = axios.create({
	// baseURL: 'http:///192.168.15.5:7070' //PC DO ERIC
    baseURL:'https://api.engine-company.com:8443/',

});

export default api;