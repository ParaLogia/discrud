import { connect } from 'react-redux';
import { clearModal } from '../../actions/modal_actions';
import Modal from './modal';

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearModal: () => dispatch(clearModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);