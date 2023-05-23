import { useQuery } from '@tanstack/react-query'
import { getCoins, getCoin } from '@/pages/api/coins';

const USD = 'usd';

export const useCoins = (currency: string = USD) => useQuery({
    queryKey: ['coins'],
    queryFn: () => getCoins(currency),
  })

export const useCoin = (id?: string) => useQuery({
    queryKey: ['coin', id],
    queryFn: () => getCoin(id),
    enabled: Boolean(id),
})