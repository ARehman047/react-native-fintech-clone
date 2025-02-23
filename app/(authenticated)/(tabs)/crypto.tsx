import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link, router } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

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
    <ScrollView className='p-5'>
      <Text className='text-4xl font-bold'>Latest Crypto</Text>
      <View className='bg-gray-400 rounded-lg p-5 mt-5'>
        {currencies.data?.map((currency: any) => (
          <Link href={{ pathname: '/crypto/[id]', params: { id: currency.id } }} key={currency.id} asChild>
            <TouchableOpacity className='w-full'>
              <View className='flex-row items-center bg-white rounded-lg my-2'>
                <Image source={{ uri: data?.[currency.id].logo }} className='ml-5 h-10 w-10' />
                <View className='p-4 flex-1'>
                  <Text className='font-semibold'>{currency.name}</Text>
                  <Text className='text-sm text-gray-500'>{currency.symbol}</Text>
                </View>
                <View className='mr-5 items-end'>
                  <Text className='font-semibold text-gray-600'>{currency.quote.EUR.price.toFixed(2)} $</Text>
                  <View className='flex-row gap-x-1'>
                    {currency.quote.EUR.percent_change_1h < 0 ?
                      <> <Ionicons name='caret-down' size={18} color='#dc2626' />
                        <Text className='text-red-600'>{currency.quote.EUR.percent_change_1h.toFixed(2)}%</Text> </>
                      :
                      <> <Ionicons name='caret-up' size={18} color='#16a34a' />
                        <Text className='text-green-600'>{currency.quote.EUR.percent_change_1h.toFixed(2)}%</Text> </>
                    }

                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  )
}

export default crypto