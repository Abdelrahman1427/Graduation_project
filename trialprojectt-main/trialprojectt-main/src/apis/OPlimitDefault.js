import axios from 'axios';
import moment from 'moment';
const currentDate = moment();
const lastYear = currentDate.subtract(1, 'years');
const lastYearValue = lastYear.year();
const BASE_URL = "http://164.90.186.113:3000/api/get/highops?limit=5&date=2022-12-01";

export default axios.create({
    baseURL :BASE_URL,
    headers :{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    }
})