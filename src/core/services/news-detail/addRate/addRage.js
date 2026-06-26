import ApiClient from "../../../api/interceptors";

export const postNewsRate = async (NewsId, RateNumber) => {
  try {
    const result = await ApiClient.post(`/News/NewsRate`,null, {
    params: {
      NewsId,
      RateNumber
    }
  });
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.error("Error posting news rate for ID:", NewsId, error);
    throw error;
  }
};
