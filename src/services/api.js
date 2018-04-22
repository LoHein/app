import { get, post, del } from './request';

const URL = '/api';
const STUDIOS_URL = `${URL}/studios`;

export const getStudios = () => get(STUDIOS_URL);
export const postStudio = data => post(STUDIOS_URL, data);
export const getStudio = id => get(`${STUDIOS_URL}/${id}`);
export const deleteStudio = id => del(`${STUDIOS_URL}/${id}`);