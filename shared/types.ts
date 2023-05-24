export type TCard = {
    id: string;
    name: string;
    current_price: number;
    high_24h: number;
    low_24h: number;
    image: string;
}

export type TCoin = {
  id: string;
  name: string;
  market_data: {
    ath: {
      usd: number
    },
    current_price: {
      usd: number
    },
    market_cap: {
      usd: number
    }
  };
  market_cap_rank: number;
  image: {
    small: string
  };
}
