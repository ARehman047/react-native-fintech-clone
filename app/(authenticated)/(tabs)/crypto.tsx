import { View, Text, Image } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

const crypto = () => {

  const currencies = useQuery({
    queryKey: ['currencies'],
    queryFn: async () => {
      const response = await fetch('/api/listings')
      return response.json()
    }
  })

  const ids = currencies.data?.map((currency: any) => currency.id).join(',')
  const { data } = useQuery({
    queryKey: ['info', { ids }],
    queryFn: async () => {
      const response = await fetch(`/api/info?ids=${ids}`)
      return response.json()
    },
    enabled: !!ids,
  })

  return (
    <View className='p-5'>
      {currencies.data?.map((currency: any) => (
        <View key={currency.id} className='flex-row items-center  bg-white rounded-lg my-2'>
          <Image source={{ uri: data?.[currency.id].logo }} className='ml-5 h-10 w-10' />
          <Text className='p-5'>{currency.name}</Text>
        </View>
      ))}
    </View>
  )
}

export default crypto