import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FamilyContextHeader from './components/FamilyContextHeader';
import LoginPage  from './pages/LoginPage';
import IndividualPage from './pages/IndividualPage';
import PageSpacing from './components/PageSpacing';
import ApiClient from './clients/ApiClient';
import LoginDetails from './models/LoginDetails';
import SearchPage from './pages/SearchPage';
import ResultsPage from './pages/ResultsPage';
import SearchDetails from './models/SearchDetails';

class App extends Component<any, any> {
  private apiClient: ApiClient;

  constructor(props: any){
    super(props);
    this.state = {isAuthenticated: false};
    this.apiClient = new ApiClient(process.env.REACT_APP_API_BASE_URL ?? "", this.updateAuthenticationStatus);
  }

private updateAuthenticationStatus = (status: boolean) => {
    if (status !== this.state.isAuthenticated) {
      this.setState({...this.state, isAuthenticated: status})
    }
  }

  componentDidMount() {
    this.apiClient.isLoggedIn()
    .then(result => this.setState({...this.state, isAuthenticated: result}))
  }

  getRoutes(isAuthenticated: boolean) {
    if (isAuthenticated) {
      return (
        <>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/search" render={(props) => <ResultsPage {...props} search={(searchDetails: SearchDetails) => this.apiClient.searchPerson(searchDetails)}/>} />
        <Route path="/person/:personId" render={(props) => <IndividualPage {...props} client={this.apiClient}/>} />
        </>
      )
    } else {
      return (
        <Route render={(props) => <LoginPage {...props} login={(loginDetails: LoginDetails) => this.apiClient.login(loginDetails)}/>} />
      );
    }
  }

  render() {
    return (
      <Router basename={process.env.REACT_APP_BASE_SUBDIRECTORY}>
        <FamilyContextHeader />
          <PageSpacing>
            {this.getRoutes(this.state.isAuthenticated)}
          </PageSpacing>
      </Router>
    );
  }
}

export default App;
