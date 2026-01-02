import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Order {
  id: string;
  pickup: string;
  delivery: string;
  status: "PENDING" | "IN_TRANSIT" | "DELIVERED";
}

interface OrderState {
  orders: Order[];
  selectedOrder: Order | null;
}

const initialState: OrderState = {
  orders: [],
  selectedOrder: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders(state, action: PayloadAction<Order[]>) {
      state.orders = action.payload;
    },
    selectOrder(state, action: PayloadAction<Order>) {
      state.selectedOrder = action.payload;
    },
  },
});

export const { setOrders, selectOrder } = orderSlice.actions;
export default orderSlice.reducer;
