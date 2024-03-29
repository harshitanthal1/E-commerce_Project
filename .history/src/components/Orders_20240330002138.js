import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../redux/actions/orderActions';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div>
      <h2>Orders</h2>
      <div>
        {orders.map((order) => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Total Price: ${order.totalPrice}</p>
            {/* Add more order details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;