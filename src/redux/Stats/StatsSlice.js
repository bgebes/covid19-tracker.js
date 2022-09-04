import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStatsFromAPI } from '../../actions/actions';

export const getStats = createAsyncThunk('stats/getStats', getStatsFromAPI);

export const StatsSlice = createSlice({
  name: 'stats',
  initialState: {
    counts: {
      infected: { count: 0 },
      recovered: { count: 0 },
      deaths: { count: 0 },
      active: { count: 0 },
    },
    informations: {
      requestStatus: 'unused',
      error: null,
      last_update: null,
      country: 'Global',
    },
  },
  reducers: {
    setCountry: (state, action) => {
      state.informations.country = action.payload.country;
    },
  },
  extraReducers: {
    [getStats.pending]: (state, _) => {
      state.informations.requestStatus = 'pending';
      state.informations.error = null;
    },
    [getStats.rejected]: (state, action) => {
      state.informations.requestStatus = 'error';
      state.informations.error = action.payload.error.message;
    },
    [getStats.fulfilled]: (state, action) => {
      const { confirmed, recovered, deaths, lastUpdate } = action.payload;

      state.informations.requestStatus = 'done';
      state.informations.error = null;
      state.informations.last_update = lastUpdate;

      state.counts.infected.count = confirmed.value;
      state.counts.recovered.count = recovered.value;
      state.counts.deaths.count = deaths.value;
      state.counts.active.count = confirmed.value - deaths.value;
    },
  },
});

export const { setCountry } = StatsSlice.actions;
export default StatsSlice.reducer;
