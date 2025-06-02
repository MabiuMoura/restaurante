import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
  timeout: 10000,
});

export const get = <T>(url: string) => 
    api.get<T>(url).then(res => res.data);

export const post = <T>(url: string, data: any) => 
    api.post<T>(url, data).then(res => res.data);

export const put = <T>(url: string, data: any) => 
    api.put<T>(url, data).then(res => res.data);

export const remove = <T>(url: string) => 
    api.delete<T>(url).then(res => res.data);

export default api;