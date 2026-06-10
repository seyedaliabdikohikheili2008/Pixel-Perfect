import ApiClient from "../../../interceptors";
const RegisterStepTwo = async (data) => {
    const payload = {
        verifyCode: data.verifyCode,
        gmail:data.gmail
    };

    const response = await ApiClient.post(`/Sign/VerifyMessage`, payload);
    return response.data;
};

export default RegisterStepTwo;
