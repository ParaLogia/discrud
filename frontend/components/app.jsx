import React from 'react'
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import RegistrationFormContainer from './session/registration_form_container';
import ContentContainer from './content/content_container';
import ServerIndexContainer from './servers/server_index_container';
import ModalContainer from './modal/modal_container';

const App = () => {
  return (
    <>
      <Route path="/channels/:serverId/:channelId?" component={ModalContainer} />

      <Route exact path="/" component={SplashContainer} />

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/register" component={RegistrationFormContainer} />

      <ProtectedRoute path="/channels" component={ServerIndexContainer} />
      <ProtectedRoute path="/channels/:serverId" component={ContentContainer} />
    </>
  )
}

export default App;