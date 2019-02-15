import {getUserListURL} from './service-url';
import axios from 'axios';

const getUserListURL = () =>{
    return axios.get(getUserListURL);
}
export{
    getUserListURL
}