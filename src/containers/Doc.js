import { connect } from 'react-redux';
import { updateDoc } from '../actions';
import DocView from '../components/DocView';

const mapStateToProps = state => {
  const { docs, currentDoc } = state.docs;
  return {
    docs,
    currentDoc,
    username: state.user.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDoc: doc => dispatch(updateDoc(doc))
  };
};

const Doc = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocView);

export default Doc;
