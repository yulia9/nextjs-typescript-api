import axios from 'axios';
import { TCard, TCoin } from '@/shared/types';

const API_HOST = 'https://api.coingecko.com/api/v3';

export const getCoins = async (currency: string): Promise<Array<TCard>> => {
  try {
    const { data } = await axios.get(`${API_HOST}/coins/markets`, {
      params: {
        vs_currency: currency,
        per_page: 45,
        page: 1,
        locale: 'en'
      }
    })

    return data;
  } catch (err) {
    return Promise.reject(err)
  }
}

export const getCoin = async (id?: string): Promise<TCoin> => {
  try {
    const { data } = await axios.get(`${API_HOST}/coins/${id}`);

    return data;
  } catch (err) {
    return Promise.reject(err)
  }
}
