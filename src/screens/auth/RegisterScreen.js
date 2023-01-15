import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { appleIcon, googleIcon } from "../../../assets";
import LayoutAuth from "../../components/Layout/LayoutAuth";

const RegisterScreen = () => {
    const navigation = useNavigation();
    return (
        <LayoutAuth>
            <View>
                <Text className="text-[32px] font-bold text-primary">
                    Register
                </Text>
            </View>
            {/* form */}
            <View className="mt-10">
                <View className="">
                    <Text className="font-medium text-base text-text-color mb-2">
                        Username
                    </Text>
                    <View className="bg-gray-100 rounded w-[100%]">
                        <TextInput
                            placeholder="Enter your Username"
                            className="font-medium text-sm text-text-color p-3"
                        />
                    </View>
                </View>
                <View className="mt-3">
                    <Text className="font-medium text-base text-text-color mb-2">
                        Password
                    </Text>
                    <View className="bg-gray-100 rounded w-[100%]">
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Enter your Password"
                            className="font-medium text-sm text-text-color p-3"
                        />
                    </View>
                </View>
                <View className="mt-3">
                    <Text className="font-medium text-base text-text-color mb-2">
                        Confirm Password
                    </Text>
                    <View className="bg-gray-100 rounded w-[100%]">
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Enter your Confirm Password"
                            className="font-medium text-sm text-text-color p-3"
                        />
                    </View>
                </View>
                <TouchableOpacity className="mt-8 bg-primary2 px-6 py-3 h-[48px] rounded justify-center items-center">
                    <Text className="font-normal text-base text-white">
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row my-3 items-center">
                <View className="flex-1 h-[1px] bg-gray-300"></View>
                <Text className="p-2 text-gray-300">or</Text>
                <View className="flex-1 h-[1px] bg-gray-300"></View>
            </View>
            {/* or auth */}
            <View className="gap-y-5">
                <TouchableOpacity className="h-[48px] flex-row border border-primary rounded justify-center items-center gap-x-3">
                    <Image className="w-[24px] h-[24px]" source={googleIcon} />
                    <Text className="text-text-color text-base font-normal">
                        Register with Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="h-[48px] flex-row border border-primary rounded justify-center items-center gap-x-3">
                    <Image className="w-[24px] h-[24px]" source={appleIcon} />
                    <Text className="text-text-color text-base font-normal">
                        Register with Apple
                    </Text>
                </TouchableOpacity>
            </View>
            {/* Don’t have an account? Register */}
            <View className="flex-row flex-wrap mt-10 justify-center items-center gap-x-1">
                <Text className="text-sm font-normal text-gray-500">
                    Don’t have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text className="text-sm font-normal text-primary">
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </LayoutAuth>
    );
};

export default RegisterScreen;