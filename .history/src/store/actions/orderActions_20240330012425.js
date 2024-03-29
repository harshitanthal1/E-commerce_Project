import { placeOrder as placeOrderService, getUserOrders as getUserOrdersService } from '../../services/orderService';

export const placeOrder = (orderData) => async (dispatch) => {
  try {
    const order = await placeOrderService(orderData);
    
  } catch (error) {
    
  }
};

export const fetchOrders = () => async (dispatch) => {
  try {
    const orders = await getUserOrdersService();
    dispatch({ type: 'SET_ORDERS', payload: orders });
  } catch (error) {
    
  }
};
