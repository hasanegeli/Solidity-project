import React from 'react';
import { Form, Message, Button, Input } from 'semantic-ui-react';
import Campaign from '../etherium/campaign';
import web3 from '../etherium/web3';
import { Router } from '../routes';

class ContributeForm extends React.Component {

    state = { 
        value: '',
        errorMessage: '',
        loading: false
    
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            })

            Router.replaceRoute(`/campaigns/${this.props.address}`);
            // contirbute ettiğinde sayfanın refresh edip display edilecek bilgileri güncellemesi için

        } catch(err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false, value:'' });
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount of Contribute</label>
                    <Input 
                    value = {this.state.value}
                    onChange = {event => this.setState({ value: event.target.value })}
                    label = 'ether'
                    labelPosition = 'right'
                    />
                </Form.Field>
                <Message error header='Oops!' content={this.state.errorMessage}/>
                <Button primary loading={this.state.loading}>
                    Contribute!
                </Button>
            </Form>
        )
    }
}

export default ContributeForm;