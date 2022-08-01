import axios from "axios";
const API_URL = "http://localhost:5000/api/";
const createProject = async (title, content) => {
  return await axios
    .post(API_URL + "projects", {
      title,
      content,
    })
    .then((response) => {
      console.log(response.data);
    });
};

const getAll = async () => {
  return await axios.get(API_URL + "projects").then((response) => {
    console.log(response.data);
  });
};

const get = async (id) => {
  return await axios.get(API_URL + `projects/${id}`).then((response) => {
    console.log(response.data);
  });
};

const update = async (id, data) => {
  return await axios.put(API_URL + `projects/${id}`, data).then((response) => {
    console.log(response.data);
  });
};

export default {
  createProject,
  getAll,
  get,
  update,
};
