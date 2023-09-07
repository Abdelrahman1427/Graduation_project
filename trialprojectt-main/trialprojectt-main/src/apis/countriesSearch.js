import axios from 'axios';
const BASE_URL ="http://164.90.186.113:3000/api/get/allcountries"

export default axios.create({
    baseURL :BASE_URL,
    headers :{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    }
})
