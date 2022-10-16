import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_KEY
})

export default instance;