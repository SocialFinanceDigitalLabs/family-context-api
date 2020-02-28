import React from 'react';
import BasicDetails from '../components/BasicDetails';
import PersonDetails from '../models/PersonDetails';
import { RouteComponentProps } from 'react-router-dom';
import ApiClient from '../clients/ApiClient';
import ServiceInvolvement from '../components/ServiceInvolvement';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';
import NavigationButtons from '../components/NavigationButtons';

interface PersonParams {
  personId?: string
}

class IndividualPage extends React.Component<RouteComponentProps<PersonParams> & { client: ApiClient }, PersonDetails> {

  constructor(props: RouteComponentProps<PersonParams> & { client: ApiClient }) {
    super(props);
    this.state = { address: "loading...", ethnicity: "loading...", firstName: "loading...", gender: "loading...", id: -1, lastName: "loading...", dateOfBirth: "loading..." }
  }


  componentDidMount() {
    let personId = this.props.match.params.personId
    if (personId) {
      this.props.client.getPerson(personId).then(personDetails => {
        this.setState(personDetails);
      });
    }
  }

  render() {
    let serviceInvolvementDetailsSummary: ServiceInvolvementDetailsSummary = { title: "Police", coverageStartDate: "31/10/2017", coverageEndDate: "04/11/2019", recordsAvailable: true, id: "1", lastSynchronised: "04/11/2019" }
    return (
      <div className="IndividualPage">
        <NavigationButtons {...this.props} />
        <BasicDetails personDetails={this.state}></BasicDetails>
        <ServiceInvolvement summaries={[serviceInvolvementDetailsSummary]} client={this.props.client}/>
      </div>
    );
  }
}

export default IndividualPage;