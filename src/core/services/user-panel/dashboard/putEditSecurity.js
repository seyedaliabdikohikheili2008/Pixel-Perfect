import ApiClient from "../../../api/interceptors";

export const updateTwoFactorAuth = async (data) => {
  try {
    const result = await ApiClient.put(`SharePanel/EditSecurity`, {
      twoStepAuth: data.twoStepAuth,
      recoveryEmail: data.recoveryEmail || null,
      telegramUsername: data.telegramUsername || null
    });
    return { 
      data: result.data, 
      status: result.status, 
      headers: result.headers 
    };
  } catch (error) {
    console.error("Error updating two factor auth:", error);
    throw error;
  }
};
