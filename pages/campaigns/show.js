import React from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../etherium/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../etherium/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends React.Component {

    static async getInitialProps(props){
        
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        

        return {
            address: props.query.address,
            minimumContributer: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
        // props attribute u routes taki spesific adrese ulaşabilmek ve display etmek için kullandık
    }


    renderCards(){
        const {
            minimumContributer,
            balance,
            requestsCount,
            approversCount,
            manager
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of manager',
                description: 'This manager can request and spend this money',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minimumContributer,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approvers'
            },
            {
                header: requestsCount,
                meta: 'Number of Request',
                description: 'A request tries to withdraw money from contrat.Request must be approved by approvers.'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign balance(ether)',
                description: 'this balance is how much money this campaign has left to spend.'
            }
        ]


        return <Card.Group items={items} />
    }



    render() {
        return (
            <Layout>
                <h2>Campaign Show</h2>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                            
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributeForm address = {this.props.address}/>
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests!</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
            </Layout> 
        )
    }
}
/*compnent içinde yer alması gereken dataları tek fonksiyonla çekebilmek için .sol 
dosyasında tüm dataları çekebileceğimiz getSummary() yeni bi fonksiyon tanımlayıp 
contratı yeniden compile ve deploy etmeyi unutmadan tabiki  
tek fonksiyonla dataları retrieve etmiş oluruz */

export default CampaignShow;