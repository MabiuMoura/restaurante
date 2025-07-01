import axios from "axios";
import qs from "qs";

const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 60000,
        paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: "brackets" });
        },
});

const { get, post, put, delete: remove } = api;
export { get, post, put, remove };

export default api;