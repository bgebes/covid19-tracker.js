import {
  createAsyncThunk,
  createSlice,
  isRejected,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { getStatsFromAPI } from '../../actions/actions';

export const getStats = createAsyncThunk('stats/getStats', getStatsFromAPI);

export const StatsSlice = createSlice({
  name: 'stats',
  initialState: {
    counts: {
      infected: { title: 'infected', count: 0 },
      recovered: { title: 'recovered', count: 0 },
      death: { title: 'death', count: 0 },
      active: { title: 'active', count: 0 },
    },
    informations: {
      requestStatus: 'unused',
      error: null,
      lastUpdate: null,
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
      state.informations.error = action.error.message;

      state.counts.infected.count = 0;
      state.counts.recovered.count = 0;
      state.counts.death.count = 0;
      state.counts.active.count = 0;
    },
    [getStats.fulfilled]: (state, action) => {
      const { confirmed, recovered, deaths, lastUpdate } = action.payload;

      state.informations.requestStatus = 'done';
      state.informations.error = null;
      state.informations.lastUpdate = lastUpdate;

      state.counts.infected.count = confirmed.value;
      state.counts.recovered.count = recovered.value;
      state.counts.death.count = deaths.value;
      state.counts.active.count = confirmed.value - deaths.value;
    },
  },
});

export const { setCountry } = StatsSlice.actions;
export default StatsSlice.reducer;
