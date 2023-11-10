import createApiServices from "../createApiService";
const api = createApiServices();

const getCustomer = () => {
  return api.makeAuthRequest({
    url: "/api/v1/customer",
    method: "GET",
  });
};
const createCustomer = () => {
    return api.makeAuthRequest({
      url: "/api/v1/customer",
      method: "POST",
    });
  };

  const deleteCustomer = () => {
    return api.makeAuthRequest({
      url: "/api/v1/customer/2",
      method: "GET",
    });
  };
  
  const updateCustomer = () => {
    return api.makeAuthRequest({
      url: "/api/v1/customer/1",
      method: "GET",
    });
  };
  

export { getCustomer };
export { createCustomer };
export { deleteCustomer };
export { updateCustomer };
