import React from 'react'
import { Route } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container'
import RegistrationFormContainer from './session/registration_form_container'

const App = ({  }) => {
  return (
    <main>
      <h1>Discrud</h1>

      <Route path="/login" component={LoginFormContainer} />
      <Route path="/register" component={RegistrationFormContainer} />
    </main>
  )
}

export default App;