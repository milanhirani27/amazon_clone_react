import axios from "axios";

const instance = axios.create({
    //add base url
    baseURL:""
});

export default instance;
