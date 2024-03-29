import { getProducts as getProductsService } from '../../services/productService';

export const fetchProducts = () => async (dispatch) => {
  try {
    const products = await getProductsService();
    dispatch({ type: 'SET_PRODUCTS', payload: products });
  } catch (error) {
    
  }
};
