import Client from 'shopify-buy';

// Replace with your Shopify store domain and Storefront API access token
const shopifyClient = Client.buildClient({
  domain: 'hydrogen-preview.myshopify.com',
  storefrontAccessToken: '3b580e70970c4528da70c98e097c2fa0',
});

export default shopifyClient;
