import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: { name: "Все", id: 0 },
  allCategories: [
    { name: "Все", id: 0 },
    { name: "С лососем", id: 1 },
    { name: "С угрём", id: 2 },
    { name: "С креветкой", id: 3 },
    { name: "Запечёные", id: 4 },
    { name: "Наборы", id: 5 },
  ],
  activeSortType: {
    title: "алфавиту",
    property: "title",
  },
  sortTypes: [
    { title: "популярности", property: "rating" },
    { title: "цене", property: "price" },
    { title: "алфавиту", property: "title" },
  ],
  sortOrder: "asc",
  currentPage: 1,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    changeSortingType: (state, action) => {
      state.activeSortType = action.payload;
    },
    changeSortOrder: (state) => {
      if (state.sortOrder === "asc") {
        state.sortOrder = "desc";
      } else {
        state.sortOrder = "asc";
      }
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    setParams: (state, action) => {
      state.activeCategory = initialState.allCategories.find((category) => {
        return category.id === Number(action.payload.categoryId);
      });
      state.activeSortType = initialState.sortTypes.find((type) => {
        return type.property === action.payload.sortProperty;
      });
      state.currentPage = Number(action.payload.currentPage);
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  changeCategory,
  changeSortingType,
  changeSortOrder,
  changePage,
  setParams,
  setSearchValue,
} = filterSlice.actions;

export const selectFilter = (state) => state.filter;
export default filterSlice.reducer;
