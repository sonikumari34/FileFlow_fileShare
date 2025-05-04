import axios from "axios";

const BASE_URL="/api/files/"

//const BASE_URL = "https://fileflow-fileshare.onrender.com/api/files/";
const axiosInstance=axios.create()

axiosInstance.defaults.baseURL=BASE_URL;

export default axiosInstance;