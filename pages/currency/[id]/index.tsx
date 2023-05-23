import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/router';
import { useCoin } from "@/shared/hooks";
import Navigation from "@/components/Navigation";

const Currency: React.FC = () => {
  const { query } = useRouter();

  const coinId = query?.id;
  const { data: coin = {} } = useCoin(coinId as string);

  return (
    <>
      <Head>
        <title>Currency: {coinId}</title>
      </Head>
      <main>
        <Navigation />
        <div className="px-10 py-3">
          <h2 className="text-xl font-semibold flex items-center">
            <Image
              src={coin.image?.small}
              alt={coin.name}
              width={30}
              height={30}
              className="object-cover object-center my-2 mr-2"
            /> {coin.name}
          </h2>
          <div className="my-2">
            <span className="font-bold">Price: </span> {coin.market_data?.current_price.usd} USD
          </div>
          <div className="my-2">
            <span className="font-bold">All time high price: </span> {coin.market_data?.ath.usd} USD
          </div>
          <div className="my-2">
            <span className="font-bold"> Market Cap: </span>{coin.market_data?.market_cap.usd} USD
          </div>
          <div className="my-2">
            <span className="font-bold"> Market Cap Rank: </span>{coin.market_cap_rank}
          </div>
        </div>
      </main>
    </>
  );
};

export default Currency;
