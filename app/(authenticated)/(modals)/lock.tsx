import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import * as LocalAuthentication from 'expo-local-authentication';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";

const Lock = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = React.useState(user?.firstName);
  const [code, setCode] = React.useState<number[]>([]);
  const offset = useSharedValue(0);
  const codeLength = Array(6).fill(-1);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  })
  const OFFSET = 20;
  const TIME = 80;

  useEffect(() => {
    if (code?.length === 6) {
      if(code?.join('') === '111111') {
        router.replace('/(authenticated)/(tabs)/home');
        setCode([]);
      } else {
        offset.value = withSequence(
          withTiming(-OFFSET, { duration: TIME /2 }),
          withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
          withTiming(0, { duration: TIME / 2 })
        )
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        setCode([]);
      }
    }
  }, [code]);

  const onNumberPress = (number: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (code.length < 6) {
      setCode([...code, number]);
    }
  };
  const onBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode(code.slice(0, -1));
  };

  const onBiometricAuthPress = async () => {
    const {success} = await LocalAuthentication.authenticateAsync()
    if(success) {
      router.replace('/(authenticated)/(tabs)/home');
    } else {
      // show error
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  return (
    <SafeAreaView className="p-5">
      <Text className="mt-[80px] text-[24px] font-bold self-center">
        Welcome Back, {firstName}
      </Text>

      <Animated.View className="flex flex-row justify-center mt-20" style={[style]}>
        {codeLength?.map((_, i) => (
          <View
            key={i}
            className={`w-8 h-8 ${
              code[i] >= 0 ? "bg-gray-600" : "bg-gray-300"
            } rounded-full mx-3`}
          ></View>
        ))}
      </Animated.View>

      <View>
        <View className="flex flex-row justify-center mt-20">
          {[1, 2, 3].map((row) => (
            <TouchableOpacity
              key={row}
              onPress={() => onNumberPress(row)}
              className="flex flex-row justify-center mt-5"
            >
              <Text className="text-[32px] mx-14">{row}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex flex-row justify-center mt-16">
          {[4, 5, 6].map((row) => (
            <TouchableOpacity
              key={row}
              onPress={() => onNumberPress(row)}
              className="flex flex-row justify-center"
            >
              <Text className="text-[32px] mx-14">{row}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex flex-row justify-center mt-16">
          {[7, 8, 9].map((row) => (
            <TouchableOpacity
              key={row}
              onPress={() => onNumberPress(row)}
              className="flex flex-row justify-center"
            >
              <Text className="text-[32px] mx-14">{row}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex flex-row justify-center mt-16 items-center">

          <TouchableOpacity
            className="flex flex-row justify-center"
            onPress={onBiometricAuthPress}
          >
            <MaterialCommunityIcons
              name="face-recognition"
              size={28}
              color="black"
              className="mx-14"
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex flex-row justify-center"
            onPress={() => onNumberPress(0)}
          >
            <Text className="text-[32px] mx-14">0</Text>
          </TouchableOpacity>

          {code.length > 0 ? (
            <TouchableOpacity
              className="flex flex-row justify-center"
              onPress={onBackPress}
            >
              <MaterialCommunityIcons
                name="backspace"
                size={28}
                color="black"
                className="mx-14"
              />
            </TouchableOpacity>
          ) : (
              <MaterialCommunityIcons
                name="backspace-outline"
                size={28}
                color={'#9ca3af'}
                className="mx-14"
              />
          )}
        </View>
        <Text className="mt-8 self-center text-lg font-semibold text-blue-800">Forgot your passowrd?</Text>
      </View>
    </SafeAreaView>
  );
};

export default Lock;
