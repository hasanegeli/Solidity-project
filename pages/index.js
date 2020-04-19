import React, { Component } from 'react';
import factory from '../etherium/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {

    static async getInitialProps () {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns }

        // getInitialProps lyfecycle methodunu etheryum networke bağlanmadan direk 
        // serverdan data çekmek için kullanıyoruz. static ' i ise dışarıda direct 
        // CampaignIndex.getInitialProps  şeklide çağırabiliriz. class a bağlı
        
    }

    renderCampaigns () {
        const items = this.props.campaigns.map( address => {
            return {
                header: address,
                description: (
                    <Link route = {`/campaigns/${address}`} >
                        <a>View Campaign</a>
                    </Link>
                    ),
                fluid: true
            }
        });
        return <Card.Group items = { items } />
        // next semantic-ui-css paketini çalıştırmaz
    }

// Link tag route ederken a tag mousta sağa tıklandığında farklı sekmede aç vs özelliklerini aktif eder.
    render(){
        return (
            <Layout>
                <div>
                    <h2>Open Campaigns</h2>
                    <Link route = '/campaigns/new'> 
                        <a>
                            <Button
                            floated = 'right'
                            content = 'Create Campaign'
                            icon = 'add'
                            primary
                            />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
    )};
}

export default CampaignIndex;