import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  weatherData: null,   
  loading: false,
  error: null,
};


export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (cityName, thunkAPI) => {
    try {
      const apikey = "71a9bd4b7ce445493c9651da1262d9b2";

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`
      );

      const data = await response.json();

      
      if (!response.ok) {
        return thunkAPI.rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Network error");
    }
  }
);

const weathers = createSlice({
  name: "weather",
  initialState,
  reducers: {
    clearWeatherData: (state) => {
      state.weatherData = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;  
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export const { clearWeatherData } = weathers.actions;
export default weathers.reducer;