import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import * as DropdownMenu from 'zeego/dropdown-menu'
import { useBalanceStore } from '@/store/balanceStore';
import { ScrollView } from 'react-native-gesture-handler';
import WidgetList from '@/components/SortableList/WidgetList';

const home = () => {
  const { balance, runTransaction, transactions, clearTransactions } = useBalanceStore()
  const onAddMoney = () => {
    runTransaction({
      id: Math.random().toString(),
      amount: Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1),
      date: new Date(),
      title: 'Added Money'
    })
  }
  

  const currency = '$'
  return (
    <ScrollView className='px-5 pb-5'>
      <View className='flex-row m-32 items-center justify-center'>
        <Text className='mr-2 text-6xl font-bold'>{balance()}</Text>
        <Text className='text-4xl'>{currency}</Text>
      </View>

      {/* Buttons and the DropDown */}
      <View className='flex-row justify-around'>

        {/*Circular Buttons */}
        <TouchableOpacity className=' rounded-lg flex items-center flex-wrap' onPress={onAddMoney}>
          <View className='bg-gray-300 rounded-full p-4'>
            <Icon name='add' size={24} />
          </View>
          <Text className='mt-3 font-semibold'>Add Money</Text>
        </TouchableOpacity>

        <TouchableOpacity className=' rounded-lg flex items-center' onPress={clearTransactions}>
          <View className='bg-gray-300 rounded-full p-4'>
            <Icon name='refresh' size={24} />
          </View>
          <Text className='mt-3 font-semibold'>Exchange</Text>
        </TouchableOpacity>

        <TouchableOpacity className=' rounded-lg flex items-center'>
          <View className='bg-gray-300 rounded-full p-4'>
            <Icon name='list' size={24} />
          </View>
          <Text className='mt-3 font-semibold'>Details</Text>
        </TouchableOpacity>

        {/* Dropdown */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <TouchableOpacity className=' rounded-lg flex items-center'>
              <View className='bg-gray-300 rounded-full p-4 border-2'>
                <Icon name='ellipsis-horizontal-sharp' size={24} />
              </View>
              <Text className='mt-3 font-semibold'>More</Text>
            </TouchableOpacity>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item key="statement1">
              <DropdownMenu.ItemTitle>Item number 1</DropdownMenu.ItemTitle>
              <DropdownMenu.ItemIcon androidIconName='settings' />
            </DropdownMenu.Item>
            <DropdownMenu.Item key="statement2">
              <DropdownMenu.ItemTitle>Item number 2</DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
            <DropdownMenu.Item key="statement3">
              <DropdownMenu.ItemTitle>Item number 3</DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>


      </View>

      <View className='mt-10'>
        <Text className='text-2xl font-bold'>Transactions</Text>
        <View className='mt-5 p-5 bg-white rounded-lg'>
          {transactions.length === 0 ? <Text className='text-gray-500 text-lg'>No transactions</Text> : transactions.map((transaction) => (
            <View key={transaction.id} className='flex-row my-2'>
              <View className={`${transaction.amount > 0 ? 'bg-green-300' : 'bg-red-300'} rounded-full items-center justify-center p-2 opacity-70`}>
                <Icon name={transaction.amount > 0 ? 'add' : 'remove'} size={24} />
              </View>
              <View className=' flex-row justify-between items-center w-[85%]'>
                <View className='ml-5'>
                  <Text className='text-lg'>{transaction.title}</Text>
                  <Text className='text-sm text-gray-500'>lol</Text>
                </View>
                <Text className='text-lg'>{transaction.amount}$</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View className='mt-7'>
        <Text className='text-2xl font-bold'>Widgets</Text>
        <WidgetList />
      </View>
    </ScrollView>
  )
}

export default home