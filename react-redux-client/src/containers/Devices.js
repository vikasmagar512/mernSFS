// ./react-redux-client/src/containers/Todos.js
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';
import Devices from '../components/Devices';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Devices);
