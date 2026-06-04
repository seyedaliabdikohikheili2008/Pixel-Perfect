import ApiClient from "../../../interceptors";
const ResetPasswordStepOne = async (data) => {
    const payload = {
        email: data.email ,
        baseUrl:data.baseUrl
    };

    console.log(" ارسال داده به سرور:", payload); 

    const response = await ApiClient.post(`/Sign/ForgetPassword`, payload);
    return response.data;
};

export default ResetPasswordStepOne;
