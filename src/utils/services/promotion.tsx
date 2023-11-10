import createApiServices from "../createApiService";
const api = createApiServices();

const getPromotion = () => {
  return api.makeAuthRequest({
    url: "/api/v1/promotion",
    method: "GET",
  });
};
const createPromotion = () => {
    return api.makeAuthRequest({
      url: "/api/v1/promotion",
      method: "POST",
    });
  };

  const deletePromotion = () => {
    return api.makeAuthRequest({
      url: "/api/v1/promotion/2",
      method: "DELETE",
    });
  };
  
  const updatePromotion = () => {
    return api.makeAuthRequest({
      url: "/api/v1/promotion/1",
      method: "PUT",
    });
  };
  

export { getPromotion };
export { createPromotion };
export { deletePromotion };
export { updatePromotion };
