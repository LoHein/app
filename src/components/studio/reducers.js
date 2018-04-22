export const STUDIO_ADD = 'STUDIO_ADD';

export const studios = (state = [], { type, payload }) => {
  switch(type){
    case STUDIO_ADD:
      return [...state, payload];
    default:
      return state;
  }
};