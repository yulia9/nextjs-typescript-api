import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TCard } from '@/shared/types';

const Card: React.FC<TCard> = ({ name, current_price, high_24h, low_24h, id, image }) => (
  <div className="flex flex-col max-w-lg border-solid border-2 border-slate-30 p-1 m-1">
    <div className="flex justify-center">
      <Image
        src={image}
        alt={name}
        width={50}
        height={50}
        className="object-cover object-center"
      />
    </div>
    <div className="flex-1 px-4 py-2">
      <h2 className="text-xl font-semibold my-2 flex justify-center">{name}</h2>
      <ul className="list-disc pl-5 list-none max-w-xs">
        <li><span className="font-bold">Current Price: </span>{current_price}</li>
        <li><span className="font-bold">24h High: </span>{high_24h}</li>
        <li><span className="font-bold">24h Low: </span>{low_24h}</li>
      </ul>
    </div>
    <div className="flex justify-end">
      <Link
        href={`/currency/${id}`}
        className="mr-7 color-orange-500 hover:underline text-orange-300 font-bold py-2 px-4">
        More
      </Link>
    </div>
  </div>
);

export default Card;
