import axios from "axios";

const api= axios.create({
    baseURL: "https://school-management-11-back-main-gofjr4.laravel.cloud/api",
    withCredentials: true
})

export default api;