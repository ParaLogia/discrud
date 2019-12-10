import { connect } from 'react-redux';
import Splash from './splash';

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUserId)
  }
}

export default connect(msp)(Splash);