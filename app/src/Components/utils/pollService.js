import http from './http';

const API_URL = '/poll';

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response.data;
  }
};
export const list = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response.data;
  }
};
export const create = async (data) => {
  try {
    return await http.post(`${API_URL}/${data.id}`, data);
  } catch (err) {
    return err.response.data;
  }
};
export const update = async (data) => {
  try {
    return await http.put(`${API_URL}`, data);
  } catch (err) {
    return err.response.data;
  }
};

export default {
  create,
  update,
  list,
  get,
};
