import React from 'react'
import { Tabs } from 'expo-router'
import Icon from "react-native-vector-icons/Ionicons";
import { BlurView} from 'expo-blur';
import CustomHeader from '@/components/CustomHeader/CustomHeader';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#8a0c77',
        tabBarBackground: () => (
          <BlurView style={{ flex: 1}} intensity={70}
          experimentalBlurMethod='dimezisBlurView'/>
        ),
        tabBarStyle: {
          paddingHorizontal: 10,
          height: 60,
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          header: () => <CustomHeader />,
          tabBarIcon: ({ size, color }) => (
            <Icon name="home-sharp" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="crypto"
        options={{
          title: 'Crypto',
          header: () => <CustomHeader />,
          tabBarIcon: ({ size, color }) => (
            <Icon name="logo-bitcoin" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="invest"
        options={{
          title: 'Invest',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name="bar-chart-sharp" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="lifestyle"
        options={{
          title: 'LifeStyle',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name="bicycle-sharp" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="transfers"
        options={{
          title: 'Transfers',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name="medal-sharp" size={size} color={color} />
          )
        }}
      />

    </Tabs>

  )
}

export default Layout