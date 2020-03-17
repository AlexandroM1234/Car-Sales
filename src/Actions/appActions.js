// Action types
export const ADD_FEATURE = "ADD_FEATURE";

export const REMOVE_FEATURES = "REMOVE_FEATURES";

export const UPDATE_TOTAL = "UPDATE_TOTAL";

// Action creators
export const addFeature = () => {
  return { type: ADD_FEATURE };
};

export const removeFeatures = () => {
  return { type: REMOVE_FEATURES };
};

export const updateTotal = () => {
  return { type: UPDATE_TOTAL };
};
