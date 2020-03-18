import React from "react";
import { connect } from "react-redux";
import { removeFeatures } from "../Actions/appActions";
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.removeFeatures(props.feature);
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { removeFeatures })(AddedFeature);
