import React from 'react';
import { Heading, Page, TextStyle, Layout, EmptyState  } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';



const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component{
  state = { open: false};
  render()  {
    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: 'Selecione os produtos',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />

        <Layout>
          <EmptyState
            heading="Desconto para seus produtos temporariamente"
            action={{
              content: 'Selecione os produtos',
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p>Selecione os produtos para mudar os preços temporariamente</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
  handleSelection = (resources) => {
    this.setState({ open: false });
    console.log(resources);
  };
};

export default Index;
