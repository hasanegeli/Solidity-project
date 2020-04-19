import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes'
import Layout from '../../../components/Layout';
import Campaign from '../../../etherium/campaign';
import RequestRow from '../../../components/RequestRow';





class ViewRequests extends Component {

    static async getInitialProps(props){
        const { address } = props.query;

        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getReaquestCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        //fancy Javascript 205 
        const requests = Promise.all(
            Array(parseInt(requestCount))
            .fill().map((element, index) => {
                return campaign.methods.requests(index).call()
            })
        )

        return { address, requests, requestCount, approversCount }
    }

    renderRows(){
        return this.props.requests.map((request, index) => {
            return <RequestRow
                key = {index}
                id = {index}
                request = {request}    
                address = {this.props.address}
                approversCount = {this.props.approversCount}
            />
        });
        return(
            <div></div>
        );
    };

    render() {

        const { Header, HeaderCell, Row, Body } = Table;
        return(
            <Layout>
                <div> All requests was here!</div>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated = 'right' style={{ marginBottom: '10px'}}>
                            Add Request
                        </Button>
                    </a>
                </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recepient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {this.renderRows()}
                </Body>
            </Table>
            <div>Found {this.props.requestCount} requests.</div>
            </Layout>
        )
    }
}

export default ViewRequests;