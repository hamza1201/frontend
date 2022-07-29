import axios from "axios";
const API_URL = "http://localhost:5000/api/users/";
const register = (email, password) => {
  return axios
    .post(API_URL + "signup", {
      email,
      password,
    })
    .then((response) => {
      console.log("response data --->", response.data);
    });
};
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log("response data --->", response.data);
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};
