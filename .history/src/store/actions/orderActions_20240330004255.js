import { placeOrder as placeOrderService, getUserOrders as getUserOrdersService } from '../../services/orderService';

export const placeOrder = (orderData) => async (dispatch) => {
  try {
    const order = await placeOrderService(orderData);
    // Optionally, you can dispatch an action to update the state with the new order
  } catch (error) {
    // Handle error
  }
};

export const fetchUserOrders = () => async (dispatch) => {
  try {
    const orders = await getUserOrdersService();
    dispatch({ type: 'SET_ORDERS', payload: orders });
  } catch (error) {
    // Handle error
  }
};
