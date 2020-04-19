import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../etherium/web3';
import Campaign from '../etherium/campaign';

class RequestRow extends Component {

    onApprove = async () => {

        const accounts = await web3.eth.getAccounts();
        const campaign = Campaign(this.props.address);

        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        })

    } 

    onFinalize = async () => {

        const accounts = await web3.eth.getAccounts();
        const campaign = Campaign(this.props.address);

        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        })

    } 

    render() {
        const { Row, Cell } = Table;
        const { request, id, approversCount } = this.props;
        const readyToFinalize = request.approvalCount > (approversCount / 2)


        return (
            <Table>
                <Row disabled={request.complete} positive={readyToFinalize}>
                    <Cell>{id}</Cell>
                    <Cell>{request.description}</Cell>
                    <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
                    <Cell>{request.recepient}</Cell>
                    <Cell>{request.approvalCount}/{approversCount}</Cell>
                    <Cell>
                        { request.complete ? null : (
                        <Button basic color="green" onClick={this.onApprove}>
                            Approve
                        </Button>
                        )}
                    </Cell>
                    <Cell>
                        { request.complete ? null : (
                        <Button basic color="teal" onClick={this.onFinalize}>
                            Finalize
                        </Button>
                        )}
                    </Cell>
                </Row>
            </Table>
        )
    }
}


export default RequestRow;