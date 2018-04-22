import { postStudio } from '../../services/api';
import { STUDIO_ADD } from './reducers';

export const addStudio = data => ({
  type: STUDIO_ADD,
  payload: postStudio(data)
});