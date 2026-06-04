import ApiClient from "../../../interceptors";
const LoginStepOne = async (data) => {
    const payload = {
        phoneOrGmail: data.phoneOrGmail ,
        password:data.password,
        rememberMe:data.rememberMe
    };

    console.log(" ارسال داده به سرور:", payload); 

    const response = await ApiClient.post(`/Sign/Login`, payload);
    return response.data;
};

export default LoginStepOne;
