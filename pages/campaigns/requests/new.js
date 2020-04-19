import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import  Layout  from '../../../components/Layout';
import Campaign from '../../../etherium/campaign';
import web3 from '../../../etherium/web3';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {


    state = {
        value: '',
        description: '',
        recepient: '',
        errorMessage: '',
        loading: false
    }

    static async getInitialProps (props) {
        const { address } = props.query;

        return { address };

    }

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: ''})

        const campaign = Campaign(this.props.address);
        const { value, description, recepient } = this.state;

        try {
            const accounts = await web3.eth.getAccounts();

            await campaign.methods
                .createRequest( description, web3.utils.toWei( value, 'ether' ), recepient)
                .send({ from: accounts[0] })

                Router.pushRoute(`/campaigns/${this.props.address}/requests`)
        } catch(err) {
            this.setState({ errorMessage: err.message })
        }

        this.setState({ loading: false })
        
    }

    render() {
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>Back</a>
                </Link>
                <h2>New Request</h2>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                            value={this.state.description}
                            onChange={event => this.setState({ description: event.target.value})}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Value in Ether</label>
                        <Input 
                            value={this.state.value}
                            onChange={event => this.setState({ value: event.target.value})}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Recepient</label>
                        <Input 
                            value={this.state.recepient}
                            onChange={event => this.setState({ recepient: event.target.value})}
                        />
                    </Form.Field>
                    <Message error header='Oops!' content={this.state.errorMessage}/>
                    <Button primary error={this.state.loading}>
                        Create!
                    </Button>
                </Form>
            </Layout>
        )
    }
}

export default RequestNew;