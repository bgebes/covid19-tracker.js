import axios from 'axios';
import { useSelector } from 'react-redux';
import { getStats, setCountry } from '../redux/Stats/StatsSlice';
import { store } from '../redux/store';

export const getState = () => {
  return useSelector((state) => state.stats);
};

export const getCounts = () => {
  return getState().counts;
};

export const getInformations = () => {
  return getState().informations;
};

export const getStatsFromAPI = async () => {
  const handle = await axios(
    `https://covid19.mathdro.id/api${false ? '/countries/country' : ''}`
  );

  return handle.data;
};

export const handleCountry = (event) => {
  const dispatch = store.dispatch;
  dispatch(setCountry({ country: event.target.value }));
};

export const runGetStats = () => {
  const dispatch = store.dispatch;
  dispatch(getStats());
};
