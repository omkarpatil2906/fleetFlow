import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  loading: boolean;
  sidebarOpen: boolean;
}

const initialState: UIState = {
  loading: false,
  sidebarOpen: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoader(state) {
      state.loading = true;
    },
    hideLoader(state) {
      state.loading = false;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { showLoader, hideLoader, toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
