import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    weatherData:[],
    loading:false,
    error:null
}

// fetch wathers data from weather api

export const fetchWeatherData = createAsyncThunk('weather/fetchWeatherData', async(cityName) => {
    const apikey = "71a9bd4b7ce445493c9651da1262d9b2" ;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`)
     
    const data = await response.json()

    return data

})


const weathers = createSlice({
    name:'weather',
    initialState:initialState,
    reducers:{
        clearWeatherData:(state) => {
            state.weatherData = []
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchWeatherData.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchWeatherData.fulfilled, (state , action) => {
            state.loading = false,
            state.weatherData.push(action.payload)
        })
        .addCase(fetchWeatherData.rejected , (state , action) =>{
            state.loading = false,
            state.error = action.error.message
        })
    }
})

export const { clearWeatherData} = weathers.actions

export default weathers.reducer