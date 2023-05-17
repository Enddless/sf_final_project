import axios from "axios";

export const API_URL = `https://gateway.scan-interfax.ru/api/v1`;

//создаем базовый экземпляр axios
const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true, //отвечает за куки
    responseType: "json",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',        
  } 
});

//создаем интерцептор на отправку запросов 
instance.interceptors.request.use( (config) =>  {
  config.headers.Authorization = `Bearer ${localStorage.getItem("accesstoken")}`
  console.log("configInterceptors =" + config)
  return config;
})

export default instance;