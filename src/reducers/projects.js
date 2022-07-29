import { CREATE_PROJECT, RETRIEVE_PROJECTS, UPDATE_PROJECT } from "../actions/types";
const initialState = [];
function projectReducer(projects = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PROJECT:
      return [...projects, payload];
    case RETRIEVE_PROJECTS:
      return payload;
    case UPDATE_PROJECT:
      return projects.map((project) => {
        if (project.id === payload.id) {
          return {
            ...project,
            ...payload,
          };
        } else {
          return project;
        }
      });
    default:
      return projects;
  }
}
export default projectReducer;
