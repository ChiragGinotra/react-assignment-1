import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageData: ["/pageA", "/pageB", "/dynamic"],
  pageNo: 0,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage(state) {
      state.pageNo++;
    },
    prevPage(state) {
      state.pageNo--;
    },
    setPage(state, action) {
      state.pageNo = action.payload;
    },
  },
});

export const { nextPage, prevPage, setPage } = pageSlice.actions;

export default pageSlice.reducer;

export const getPageData = (state) => state.page.pageData;
