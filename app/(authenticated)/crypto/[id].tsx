import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Page = () => {
  const {id} = useLocalSearchParams()
  return (
    <View className='p-5'>
      <Text >Details Page</Text>
      <Text>{id}</Text>
    </View>
  )
}

export default Page