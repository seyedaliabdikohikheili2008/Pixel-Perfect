import ApiClient from "../../../interceptors";

const LoginStepTwo = async (data) => {
    const payload = {
        verifyCode: data.verifyCode,
        tempToken: data.tempToken
    };

    const response = await ApiClient.post(`/Sign/LoginTelegram/${data.verifyCode}/${data.phoneOrGmail}`, payload);
    return response.data;
};

export default LoginStepTwo;