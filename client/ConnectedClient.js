
import { connect } from 'react-redux';
import { testAction } from './clientActions';
import Client from './Client';

const mapStateToProps = (state) => {
  return {
    testProp: state.testProp,
    store: {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(testAction())
    }
  }
};

const ConnectedClient = connect(
  mapStateToProps,
  mapDispatchToProps
)(Client);

export default ConnectedClient;
