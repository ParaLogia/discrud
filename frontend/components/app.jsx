import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container'
import RegistrationFormContainer from './session/registration_form_container'
import SidebarContainer from './nav/sidebar_container'

const App = () => {
  return (
    <section>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/register" component={RegistrationFormContainer} />

      <ProtectedRoute path="/channels" component={SidebarContainer} />
    </section>
  )
}

export default App;