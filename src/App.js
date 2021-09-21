import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import EmployeeTablePage from './pages/employees/EmployeeTablePage';
import ContractTablePage from './pages/contracts/ContractTablePage';
import AfpTablePage from './pages/afps/AfpTablePage';
import AfpCreatePage from './pages/afps/AfpCreatePage';
import AfpDetailsPage from './pages/afps/AfpDetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/" component={DashboardPage} />

        <Route exact path="/empleados" component={EmployeeTablePage} />

        <Route exact path="/contratos" component={ContractTablePage} />

        <Route exact path="/afps" component={AfpTablePage} />
        <Route exact path="/afp/crear" component={AfpCreatePage} />
        <Route exact path="/afp/:id" component={AfpDetailsPage} />
      </Switch>
    </Router>
  )
}

export default App;