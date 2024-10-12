import axios from "axios";

export const advertApi = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 5 * 1000,
});