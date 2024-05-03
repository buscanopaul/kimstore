import shopifyClient from "@/shopifyClient";

const useFetchProducts = async () => {
    const products = await shopifyClient.product.fetchAll(); // Fetch all products
    return products;
  };

export default useFetchProducts