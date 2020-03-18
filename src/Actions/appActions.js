// Action types
export const ADD_FEATURES = "ADD_FEATURES";

export const REMOVE_FEATURES = "REMOVE_FEATURES";

// Action creators
export const addFeature = payload => {
  return { type: ADD_FEATURES, payload };
};

export const removeFeatures = () => {
  return { type: REMOVE_FEATURES };
};
