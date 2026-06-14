import axios from "axios";
import { store } from "../store/Store";
import toast from "react-hot-toast";
import { logout } from "../feature/auth/IsAuthSlice";

const API_BASE_URL = "http://188.121.111.8:3001";

const ApiClient = axios.create({
  baseURL: API_BASE_URL,
});

ApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

let isShowingToast = false;

ApiClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response?.status === 401) {
      if (!isShowingToast) {
        isShowingToast = true;

        toast.error("ابتدا لاگین کنید");

        setTimeout(() => {
          isShowingToast = false;
        }, 2000);
      }
      if (
        err.response?.data.message !=
        "شما به این روت دسترسی ندارید درصورت ریکوست مجدد بن میشوید"
      ) {
        localStorage.removeItem("token");
        store.dispatch(logout());
      }
    }
    return Promise.reject(err);
  },
);

export default ApiClient;
