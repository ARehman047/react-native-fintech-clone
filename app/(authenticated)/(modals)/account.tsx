import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-react";
import { BlurView } from "expo-blur";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from "expo-image-picker"

const Page = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [edit, setEdit] = useState(false);
  const [activeIcon, setActiveIcon] = useState('Default');

  const onSaveUser = async() => {
    try {
        await user?.update({firstName: firstName!, lastName: lastName!})
        setEdit(false)
    } catch (error) {
        console.log(error)
    } finally {
        setEdit(false)
    }
  }

  const onCaptureImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.75,
      base64: true,
    });

    

    if (!result.canceled) {
        const base64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
        console.log(base64);
  
        user?.setProfileImage({
          file: base64,
        });
      }
    };

    const onSignOut = async () => {
        try {
            await signOut()
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    // <BlurView
    //   style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
    //   intensity={80}
    //   experimentalBlurMethod="dimezisBlurView"
    // >
    <View className=" flex-1 bg-gray-800">
        {user && (
            <View className="flex-1 items-center mt-32">
            <TouchableOpacity onPress={onCaptureImage} className="bg-gray-400 size-40 rounded-full items-center">
                {user?.imageUrl && <Image source={{uri: user?.imageUrl}} className="size-full rounded-full bg-gray-400"/>}
            </TouchableOpacity>
            <View className="">
                {!edit && (
                    <View className="flex-row items-center mt-5">
                    <View className="p-5">
                        <Text className="text-3xl font-semibold text-white">{firstName} {lastName}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setEdit(true)}>
                    <AntDesign name="edit" size={32} color="white" />
                    </TouchableOpacity>
                    </View>
                )}
                {edit && (
                    <View className="flex-row items-center mt-8 gap-x-3">
                        <TextInput className="py-2 p-5 bg-gray-400 rounded-lg text-white text-2xl" placeholder="First Name" value={firstName || ''} onChangeText={setFirstName}/>
                        <TextInput className="py-2 p-5 bg-gray-400 rounded-lg text-white text-2xl" placeholder="Last Name" value={lastName || ''} onChangeText={setLastName}/>
                        <TouchableOpacity onPress={onSaveUser}>
                            <Icon name="checkmark-outline" size={32} color={'#fff'}/>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            </View>
        )}

      <View className="flex m-5 p-5 mt-8 rounded-2xl bg-gray-500 gap-5">
        <TouchableOpacity className="flex-row gap-5" onPress={() => onSignOut()}>
          <Icon name="log-out" size={24} color={'#fff'} />
          <Text style={{ color: '#fff', fontSize: 18 }}>Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row gap-5">
          <Icon name="person" size={24} color={'#fff'} />
          <Text style={{ color: '#fff', fontSize: 18 }}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row gap-5">
          <Icon name="bulb" size={24} color={'#fff'} />
          <Text style={{ color: '#fff', fontSize: 18 }}>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row gap-5">
          <Icon name="megaphone" size={24} color={'#fff'} />
          <Text style={{ color: '#fff', fontSize: 18, flex: 1 }}>Inbox</Text>
          <View
            style={{
              backgroundColor: '#5550e6',
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>14</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;
