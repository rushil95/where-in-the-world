import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

export const statusValues = {
  loading: "loading",
  success: "success",
  error: "error",
  idle: "idle",
};

const initialState = {
  filters: {
    name: "",
    region: "",
  },
  entities: [],
  status: "",
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchAll",
  async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      const text = action.payload;
      state.filters.name = text;
    },

    setFilterRegion: (state, action) => {
      state.filters.region = action.payload;
    },
  },
  extraReducers: {
    [fetchCountries.pending]: (state, action) => {
      state.status = statusValues.loading;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      const entities = {};
      action.payload.forEach((country) => {
        entities[country.alpha3Code] = country;
      });
      state.entities = entities;
      state.status = statusValues.success;
    },
    [fetchCountries.rejected]: (state, action) => {
      state.status = statusValues.error;
    },
  },
});

export const selectCountriesLoadingStatus = (state) => state.countries.status;

export const selectAllCountries = (state) =>
  Object.values(state.countries.entities);

export const selectFilteredCountries = createSelector(
  selectAllCountries,
  (state) => state.countries.filters.name,
  (state) => state.countries.filters.region,
  (countries, searchText, filterRegion) => {

    if(filterRegion === ''){
      return  countries.filter((country) => {  
        return country.name.toLowerCase().includes(searchText);
      });
    }
    return countries.filter((country) => {
      const regionMatches = country.region.toLowerCase() === filterRegion;
      const nameMatches = country.name.toLowerCase().includes(searchText);
      return regionMatches && nameMatches
    });
  }
);

export const selectNamesConvertedFromCode = (state, arrayOfCodes) => {
  if (state.countries.status === statusValues.success) {
    return arrayOfCodes.map((code) => {
      console.log(code);
      console.log(state.countries.entities);
      return state.countries.entities[code].name;
    });
  }
  return arrayOfCodes;
};

export const { setSearchText, setFilterRegion } = countriesSlice.actions;

export default countriesSlice.reducer;
