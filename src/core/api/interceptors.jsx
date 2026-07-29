import axios from "axios";
import { store } from "../store/Store";
import toast from "react-hot-toast";
import { logout } from "../feature/auth/IsAuthSlice";

const API_BASE_URL = "http://162.19.253.202:3001/";

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

let isShowingToastLogin = false;

ApiClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (
      err.response?.status === 401 &&
      err?.response?.data?.message ===
        "شما به این روت دسترسی ندارید درصورت ریکوست مجدد بن میشوید"
    ) {
      if (!isShowingToast) {
        isShowingToast = true;

        toast.error("ابتدا پروفایل خود را تکمیل کنید");

        setTimeout(() => {
          isShowingToast = false;
        }, 2000);
      }
    } else if (err.response?.status === 401) {
      if (!isShowingToastLogin) {
        isShowingToastLogin = true;

        toast.error("ابتدا لاگین کنید");

        setTimeout(() => {
          isShowingToastLogin = false;
        }, 2000);
      }
    }
    return Promise.reject(err);
  },
);

export default ApiClient;
