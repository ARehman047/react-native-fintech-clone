import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";
import { MMKV } from "react-native-mmkv";

const storage = new MMKV({
    id:'inactivity-storage',
})
export const UserInactivityProvider = ({ children }: any) => {
    const appState = useRef(AppState.currentState); 
    const {isSignedIn} = useAuth(); 

    useEffect(() => { 
        const subscription = AppState.addEventListener("change", handleAppStateChange);

        return () => {
            subscription.remove();
        }
    }, []);

    const handleAppStateChange = async(nextAppState: AppStateStatus) => {
        
        if(nextAppState === 'background') {
            recordStartTime();
        } else if (nextAppState === 'active' && appState.current.match(/background/)) {
            
                const elapsedTime = Date.now() - (storage.getNumber('startTime') || 0);

                if (elapsedTime > 3000 && isSignedIn) {
                    router.replace('/(authenticated)/(modals)/lock')
                }
        }
        appState.current = nextAppState;
    }

    const recordStartTime = () => {
        storage.set('startTime', Date.now());
    }

  return children;
};
