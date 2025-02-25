import { View, Text, SectionList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Circle, useFont } from '@shopify/react-native-skia';
import { format } from 'date-fns';
import * as Haptics from 'expo-haptics';
import Animated, { SharedValue, useAnimatedProps } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';

Animated.addWhitelistedNativeProps({
  text: true,
  defaultValue: true,
})
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface TickerData {
  market_cap: number;
  price: number;
  timestamp: string;
  volume_24h: number;
}

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

const Page = () => {
  const { id } = useLocalSearchParams()
  const buttons = ['Overview', 'News', 'Orders', 'Transactions']
  const [activeIndex, setActiveIndex] = React.useState(0)
  const font = useFont( require('@/assets/fonts/SpaceMono-Regular.ttf'), 12 );
  const {state, isActive} = useChartPressState({ x: 0, y: {price: 0} });

  useEffect(() => {
    
    if (isActive) {
      Haptics.selectionAsync()
    }
  }, [isActive])

  const { data, isLoading } = useQuery({
    queryKey: ['info', { id }],
    queryFn: async () => {
      const response = await fetch(`/api/info?ids=${id}`)
      return response.json()
    },
    enabled: !!id,
  })

  const {data: tickers} = useQuery<TickerData[]>({
    queryKey: ['tickers'],
    queryFn: async () => {
      const response = await fetch(`/api/tickers`)
      return response.json()
    },
  })

  const animatedText = useAnimatedProps(() => {
    return {
      text:`${state.y.price.value.value.toFixed(2)} $`,
      defaultValue: 'default value'
    }
  }
  )

  const animatedDateText = useAnimatedProps(() => {
    const date = new Date(state.x.value.value)
    return {
      text: `${date.toLocaleDateString()}`,
      defaultValue: 'default date value'
    }
  })

  if (isLoading) {
    return (
      <Text>Loading...</Text>
    )
  }
  return (
    <View className=''>
      <Stack.Screen options={{ title: `${data[+id].name}`, headerTitleAlign: 'center' }} />
      <SectionList
        sections={[{ data: [{ title: 'lol' }] }]}
        keyExtractor={item => item.title}
        stickySectionHeadersEnabled={true}

        renderSectionHeader={() => (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='flex-row mt-5 p-5 bg-[#f3f4f6]'>
            {buttons.map((button, index) => (
              <TouchableOpacity key={index} className={`${activeIndex === index ? 'bg-white' : 't'} p-2 mr-1 rounded-full`} onPress={() => setActiveIndex(index)}>
                <Text className={`${activeIndex === index ? 'text-black' : 'text-gray-400'} text-lg px-2`}>{button}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}

        ListHeaderComponent={() => (
          <View className='flex-row justify-between items-center p-5 py-10'>
            <Text className='text-2xl font-bold'>{data[+id].symbol}</Text>
            <Image source={{ uri: data[+id].logo }} className='h-20 w-20' />
          </View>
        )
        }

        renderItem={({ item }) => (
          <View className='p-5'>
            <View className='h-[400px] p-5 bg-white rounded-lg'>
            {!isActive ? (
              <View className='mb-5'>
                <AnimatedTextInput editable={false} className='text-2xl font-bold'>Price: {tickers[tickers.length - 1].price} $</AnimatedTextInput>
                <AnimatedTextInput editable={false} className='text-md text-gray-400'>Time: {format(new Date(tickers[tickers.length - 1].timestamp), 'dd/MM/yyyy')}</AnimatedTextInput>
              </View>
            ) : 
            <View className='mb-5'>
              <AnimatedTextInput editable={false} className='text-2xl font-bold' animatedProps={animatedText}></AnimatedTextInput>
              <AnimatedTextInput editable={false} className='text-md text-gray-400' animatedProps={animatedDateText}></AnimatedTextInput>
            </View>
            }
                <CartesianChart<TickerData> 
                chartPressState={state}
                axisOptions={{
                  font,
                  tickCount: 5,
                  labelOffset: {x: -2, y: 0},
                  formatYLabel: (v) => `${v} $`,
                  formatXLabel: (ms) => format(new Date(ms), 'MM/yy')
                }} 
                data={tickers} xKey="timestamp" yKeys={["price"]}>
                {({ points }) => (
                  <>
                  <Line points={points.price} color="green" strokeWidth={3} />
                  {isActive && (
                    <ToolTip x={state.x.position} y={state.y.price.position} />
                  )}
                  </>
                )}
                </CartesianChart>
            </View>
            <View>
              <View className='bg-white rounded-lg p-5 mt-10'>
                <Text className='text-4xl font-bold'>{data[+id].name}</Text>
                <Text className='mt-3'>{data[+id].description}</Text>
              </View>
            </View>
          </View>
        )}
      ></SectionList>
    </View>
  )
}


export default Page