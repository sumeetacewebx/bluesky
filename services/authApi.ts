import ApiClient from "./apiClient";

const authApis = {

  authLogin: (data: any) => {
    return ApiClient.post("/auth/login/", data);
  },
  authRegister: (data: any) => {
    return ApiClient.post("/auth/register/", data);
  },

  forgotPassword: (data: any) => {
    return ApiClient.post("/user/forgotPassword/", data);
  },

  getAllUser: () => {
    return ApiClient.get("/auth/allUsers/");
  },

};

export default authApis;
