import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://gateway.scan-interfax.ru/api/',
    timeout: 1000,
    credentials: true,
    responseType: "json",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
           
  } 
});