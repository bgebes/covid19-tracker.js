import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStatsFromAPI } from '../../actions/actions';

export const getStats = createAsyncThunk('stats/getStats', getStatsFromAPI);

export const StatsSlice = createSlice({
  name: 'stats',
  initialState: {
    infected: {},
    recovered: {},
    deaths: {},
    active: {},
    informations: {
      last_update: '',
      country: 'Global',
    },
  },
  reducers: {
    setCountry: (state, action) => {
      state.informations.country = action.payload.country;
    },
  },
  extraReducers: {
    [getStats.pending]: (state, action) => {},
    [getStats.rejected]: (state, action) => {},
    [getStats.fulfilled]: (state, action) => {},
  },
});

export const { setCountry } = StatsSlice.actions;
export default StatsSlice.reducer;
