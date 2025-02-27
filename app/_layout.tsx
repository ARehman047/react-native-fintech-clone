import { Link, Stack, router, useSegments } from "expo-router";
import "../global.css";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { ClerkProvider, ClerkLoaded, useAuth } from "@clerk/clerk-expo";
import Icon from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SecureStore from "expo-secure-store";
import { TokenCache } from "@clerk/clerk-expo/dist/cache";
import { Platform } from "react-native";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserInactivityProvider } from "@/context/UserInactivity";

const queryClient = new QueryClient();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={publishableKey!} tokenCache={tokenCache}>
        <ClerkLoaded>
          <UserInactivityProvider>
            <GestureHandlerRootView>
              <InitialLayout />
            </GestureHandlerRootView>
          </UserInactivityProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </QueryClientProvider>
  );
};

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await SecureStore.getItemAsync(key);
        if (item) {
          console.log(`${key} was used 🔐 \n`);
        } else {
          console.log("No values stored under key: " + key);
        }
        return item;
      } catch (error) {
        console.error("secure store get item error: ", error);
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    saveToken: (key: string, token: string) => {
      return SecureStore.setItemAsync(key, token);
    },
  };
};

export const tokenCache =
  Platform.OS !== "web" ? createTokenCache() : undefined;

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === "(authenticated)";

    if (!inAuthGroup && isSignedIn) {
      router.replace("/(authenticated)/(tabs)/crypto");
    } else if (inAuthGroup && !isSignedIn) {
      router.replace("/");
    }
  }, [isSignedIn, isLoaded, segments]);

  if (!isLoaded){
    return(
        <View className="flex-1 justify-center items-center align-middle">
            <ActivityIndicator size="large" color="#000"/>
        </View>
    )
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#f3f4f6" },
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Icon name="chevron-back-outline" size={32} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#f3f4f6" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Icon name="chevron-back-outline" size={32} color="#000" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Link href={"/help"} asChild>
              <TouchableOpacity>
                <Icon name="help-circle-outline" size={32} color="#000" />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="help"
        options={{ title: "Help", presentation: "modal" }}
      />
      <Stack.Screen
        name="verify/[email]"
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#f3f4f6" },
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Icon name="chevron-back-outline" size={32} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(authenticated)/(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(authenticated)/crypto/[id]"
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#f3f4f6" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Icon name="chevron-back-outline" size={32} color="#000" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View className="flex-row items-center gap-x-4">
              <TouchableOpacity>
                <Icon name="notifications-outline" size={32} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="star-outline" size={32} color="#000" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="(authenticated)/(modals)/lock"
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="(authenticated)/(modals)/account"
        options={{ presentation: 'transparentModal', animation: 'fade', title: '', headerTransparent: true,
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Icon name="close-outline" size={34} color="#fff" />
                </TouchableOpacity>
              ),
        }}
        
      />
    </Stack>
  );
};

export default RootLayout;
