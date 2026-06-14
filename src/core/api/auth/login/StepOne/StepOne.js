import ApiClient from "../../../interceptors";
const LoginStepOne = async (data) => {
    const payload = {
        phoneOrGmail: data.phoneOrGmail ,
        password:data.password,
        rememberMe:data.rememberMe
    };


    const response = await ApiClient.post(`/Sign/Login`, payload);
    return response.data;
};

export default LoginStepOne;
