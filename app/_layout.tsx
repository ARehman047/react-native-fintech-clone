import { Link, Stack, router, useSegments } from "expo-router";
import "../global.css";
import { TouchableOpacity } from "react-native";
import { ClerkProvider, ClerkLoaded, useAuth } from '@clerk/clerk-expo';
import Icon from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import { TokenCache } from '@clerk/clerk-expo/dist/cache';
import { Platform } from 'react-native';
import { useEffect } from "react";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const RootLayout = () => {
    return (
        <ClerkProvider publishableKey={publishableKey!} tokenCache={tokenCache}>
            <ClerkLoaded>
                <GestureHandlerRootView>
                    <InitialLayout />
                </GestureHandlerRootView>
            </ClerkLoaded>
        </ClerkProvider>
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
                    console.log('No values stored under key: ' + key);
                }
                return item;
            } catch (error) {
                console.error('secure store get item error: ', error);
                await SecureStore.deleteItemAsync(key);
                return null;
            }
        },
        saveToken: (key: string, token: string) => {
            return SecureStore.setItemAsync(key, token);
        },
    };
};

export const tokenCache = Platform.OS !== 'web' ? createTokenCache() : undefined;

const InitialLayout = () => {
    const { isLoaded, isSignedIn } = useAuth();
    const segments = useSegments();

    useEffect(() => {
        if (!isLoaded) return;

        const inAuthGroup = segments[0] === '(authenticated)';

        if (!inAuthGroup && isSignedIn) {
            router.replace('/(authenticated)/(tabs)/home');
        } else if (inAuthGroup && !isSignedIn) {
            router.replace('/');
        }
    }, [isSignedIn, isLoaded, segments]);

    if (!isLoaded) return null;

    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen
                name="signup"
                options={{
                    title: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: '#f3f4f6' },
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Icon name="chevron-back-outline" size={32} color="#000" />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="login"
                options={{
                    title: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: '#f3f4f6' },
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
                    )
                }}
            />
            <Stack.Screen name="help" options={{ title: 'Help', presentation: 'modal' }} />
            <Stack.Screen
                name="verify/[email]"
                options={{
                    title: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: '#f3f4f6' },
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Icon name="chevron-back-outline" size={32} color="#000" />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen name="(authenticated)/(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
};

export default RootLayout;