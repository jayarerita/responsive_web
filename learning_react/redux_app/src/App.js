import { connect } from "react-redux";
import Counter from "./Counter";

function mapStateToProps(state){
    return {
        countValue: state.count
    };
}

//Action
var increaseAction = {type: "increase"};
var decreaseAction = {type: "decrease"};

// Map redux action to component props
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: function() {
            return dispatch(increaseAction);
        },
        decreaseCount: function() {
            return dispatch(decreaseAction);
        }
    };
}

// The HigherOrderComponent
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

// The HigherOrderComponent
var connectedComponent1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;