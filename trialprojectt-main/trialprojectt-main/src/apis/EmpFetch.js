import axios from 'axios';
const BASE_URL ="http://164.90.186.113:3000/api/login/fetchemployee"

export default axios.create({
    baseURL :BASE_URL,
    headers :{
        'Content-Type' : 'application/jason',
        'Accept' : 'application/jason'
    }
})