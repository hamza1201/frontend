import { CREATE_PROJECT, RETRIEVE_PROJECTS, UPDATE_PROJECT } from "./types";
import ProjectService from "../services/ProjectService";

export const createProject = (title, content) => async (dispatch) => {
  try {
    const res = await ProjectService.createProject({
      title,
      content,
    });
    dispatch({
      type: CREATE_PROJECT,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveProjects = () => async (dispatch) => {
  try {
    const res = await ProjectService.getAll();
    dispatch({
      type: RETRIEVE_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateProject = (id, data) => async (dispatch) => {
  try {
    const res = await ProjectService.update(id, data);
    dispatch({
      type: UPDATE_PROJECT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

/*  export const findOffersByTitre = (titre) => async (dispatch) => {
    try {
      const res = await OfferService.findByTitre(titre);
      dispatch({
        type: RETRIEVE_OFFERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }; */
