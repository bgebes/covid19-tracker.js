import axios from 'axios';
import { store } from '../redux/store';
import { useSelector } from 'react-redux';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { getStats, setCountry } from '../redux/Stats/StatsSlice';

export const getState = () => {
  return useSelector((state) => state.stats);
};

export const getCounts = () => {
  return useSelector((state) => state.stats.counts);
};

export const getInformations = () => {
  return useSelector((state) => state.stats.informations);
};

export const getStatsFromAPI = async ({ country }) => {
  const handle = await axios(
    `https://covid19.mathdro.id/api${
      country === 'Global' ? '' : `/countries/${country}`
    }`
  );

  return handle.status === 200 ? handle.data : isRejectedWithValue();
};

export const handleCountry = (country) => {
  const dispatch = store.dispatch;
  dispatch(setCountry({ country }));
  dispatch(getStats({ country }));
};

export const runGetStats = () => {
  const dispatch = store.dispatch;

  const country = store.getState().stats.informations.country;
  dispatch(getStats({ country }));
};
