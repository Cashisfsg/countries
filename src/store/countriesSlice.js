import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllCountries = createAsyncThunk(
    "countries/fetchAllCountries",
    async function() {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3,borders" );

            const data = await response.json();
    
            return data;
        } catch (error) {
            throw new Error
        }

        // const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3,borders" );

        // const data = await response.json();

        // return data;
    }
)

export const fetchCountry = createAsyncThunk(
    "countries/fetchCountry",
    async function(code) {
        try {

            const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

            const json = await response.json();

            const data = {

                flag: json[0].flags?.png,
                name: json[0].name?.common,
                nativeName: Object.values(json[0].name?.nativeName)[0].official,
                population: json[0]?.population,
                currencies: Object.values(json[0]?.currencies).map(currency => currency.name).join(', '),
                region: json[0]?.region,
                languages: Object.values(json[0]?.languages).join(', '),
                subregion: json[0]?.subregion,
                capital: json[0]?.capital,
                tld: json[0]?.tld.join(', '),
                borders: json[0]?.borders,
            }
    
            return data;

        } catch (error) {
            return error.message;
        }

    }
)

const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        countries: [],
        filteredCountries: [],
        country: {},
        status: null,
        error: null
    },
    reducers: {
        searchCountries(state, action) {

            let temp = state.countries;

            if (action.payload.region) {
                temp = state.countries.filter(country => {
                    return country.region.toLowerCase().includes(action.payload.region.toLowerCase());
                })
            } 

            if (action.payload.name) {
                temp = temp.filter(country => {
                    return country.name.common.toLowerCase().includes(action.payload.name.toLowerCase());
                })
            }

            state.filteredCountries = temp;
        }
    },
    extraReducers: {
        [fetchAllCountries.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchAllCountries.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.countries = action.payload;
            state.filteredCountries = action.payload;
        },
        [fetchAllCountries.rejected]: (state, action) => {
            // console.log('error');
            state.status = "rejected";
            state.error = action.payload;
        },
        [fetchCountry.pending]: (state) => {
            state.status = "loading";
            state.country = {};
            state.error = null;
        },
        [fetchCountry.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.country = action.payload;
        },
        [fetchCountry.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
})

export const { searchCountries } = countriesSlice.actions;

export default countriesSlice.reducer;