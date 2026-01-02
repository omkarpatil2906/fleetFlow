import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Company {
  id: string;
  name: string;
}

interface CompanyState {
  activeCompany: Company | null;
}

const initialState: CompanyState = {
  activeCompany: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setActiveCompany(state, action: PayloadAction<Company>) {
      state.activeCompany = action.payload;
    },
    clearCompany(state) {
      state.activeCompany = null;
    },
  },
});

export const { setActiveCompany, clearCompany } = companySlice.actions;
export default companySlice.reducer;
