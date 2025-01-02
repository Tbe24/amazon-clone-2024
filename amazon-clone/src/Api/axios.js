import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase cloud function
  //baseURL: "http://127.0.0.1:5001/e-clone-49b04/us-central1/api",
  //deployed version of amazon server on render.com 
  baseURL: "https://amazon-api-deploy-041m.onrender.com",
});

export {axiosInstance};
