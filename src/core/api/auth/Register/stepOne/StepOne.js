import ApiClient from "../../../interceptors";

const RegisterStepOne = async (data) => {
    const payload = {
        gmail: data.gmail 
    };

    console.log(" ارسال داده به سرور:", payload); 

    const response = await ApiClient.post(`/Sign/SendVerifyMessage`, payload);
    return response.data;
};

export default RegisterStepOne;
