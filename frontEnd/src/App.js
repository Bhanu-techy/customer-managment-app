import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import CustomerDetails from './components/CustomerDetails'
import CustomerForm from './components/CustomerForm'
import AddressForm from './components/AddressForm'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/customer/:id" component={CustomerDetails} />
      <Route exact path="/api/customer/form" component={CustomerForm} />
      <Route exact path="/api/customer/:id/address" component={AddressForm} />
    </Switch>
  </BrowserRouter>
)

export default App
