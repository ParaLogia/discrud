import React from 'react'
import { Route } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container'
import RegistrationFormContainer from './session/registration_form_container'
import SidebarContainer from './nav/sidebar_container'

const App = () => {
  return (
    <section>
      <h1>Discrud</h1>

      <Route path="/login" component={LoginFormContainer} />
      <Route path="/register" component={RegistrationFormContainer} />

      <Route exact path="/" component={SidebarContainer} />
    </section>
  )
}

export default App;