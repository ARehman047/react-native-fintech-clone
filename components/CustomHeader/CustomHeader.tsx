import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from 'react-native-gesture-handler';

const CustomHeader = () => {
  return (
    <View className='p-5'>
        <View className='flex-row justify-between items-center bg-red-500 gap-x-2'>
            <TouchableOpacity className='bg-gray-800 p-4 rounded-full'>
                <Text className='text-white'>AR</Text>
            </TouchableOpacity>
            
            {/* Search Section */}
            <View className='flex-row bg-gray-300 p-4 rounded-full items-center gap-x-2 flex-1'>
                <Icon name='search' size={20}/>
                <TextInput placeholder='Search' className=''/>
            </View>

            <TouchableOpacity className='bg-gray-800 p-4 rounded-full'>
                <Icon name='stats-chart' size={20} color='white'/>
            </TouchableOpacity>

            <TouchableOpacity className='bg-gray-800 p-4 rounded-full'>
                <Icon name='card' size={20} color='white'/>
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default CustomHeader