import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import companyReducer from "../features/company/companySlice";
import orderReducer from "../features/orders/orderSlice";
import uiReducer from "../features/ui/uiSlice";
import notificationReducer from "../features/notifications/notificationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    company: companyReducer,
    orders: orderReducer,
    ui: uiReducer,
    notifications: notificationReducer,
  },
});

// Types (IMPORTANT for TypeScript)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

