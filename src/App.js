import { Provider } from 'react-redux'
import store from 'store'

import Hero from 'containers/Hero'
import Contacts from 'containers/Contacts'
import Profile from 'containers/Profile'
import { Container, NavigationBar} from 'styles'

import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <Router>

          <Container>
            <NavigationBar></NavigationBar>
            <Route exact path="/">
              <Hero />
              <Contacts /> 
            </Route>

            <Route exact path="/profile/:id">
              <Profile/>
            </Route>
          </Container>

      </Router>
    </Provider>
  );
}

export default App;
