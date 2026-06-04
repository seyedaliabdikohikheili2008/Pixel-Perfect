import ApiClient from "../../../interceptors";
const ResetPasswordStepTwo = async (data) => {
    const emailValue = data.email || data.gmail;
    const payload = {
        gmail: emailValue,
        email: emailValue,
        password: data.newPassword,
        newPassword: data.newPassword,
        resetValue: data.resetValue,
        baseUrl: data.baseUrl
    };

    console.log(" ارسال داده به سرور:", payload);

    const response = await ApiClient.post(`/Sign/Reset`, payload);
    return response.data;
};

export default ResetPasswordStepTwo;