import { Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className='bg-slate-900 flex-1 justify-between'>
      <Text className='text-4xl font-extrabold p-9 text-white mt-7'>Home screen</Text>
      <View className='flex flex-row justify-around mb-14'>
        <Link href="/login" asChild>
          <TouchableOpacity className='p-5 px-9 bg-slate-100 rounded-full'>
            <Text className='text-lg font-extrabold'>Login In</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/signup" asChild>
          <TouchableOpacity className='p-5 px-9 bg-slate-100 rounded-full'>
            <Text className='font-extrabold text-lg'>Signup</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

