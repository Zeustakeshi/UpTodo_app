import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ChangePassword from "../../screens/auth/ChangePassword";
import LoginScreen from "../../screens/auth/LoginScreen";
import RegisterScreen from "../../screens/auth/RegisterScreen";
import HomeScreen from "../../screens/Home/HomeScreen";
import LoadingScreen from "../../screens/Loading/LoadingScreen";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import SettingScreen from "../../screens/Profile/SettingScreen";
import SearchScreen from "../../screens/Search/SearchScreen";
import TaskScreen from "../../screens/Task/TaskScreen";
import WebviewScreen from "../../screens/Webview/WebviewScreen";
import MainWelcome from "../../screens/welcome";
import Welcome from "../../screens/welcome/Welcome";
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    const navigation = useNavigation();
    const userInfo = useSelector((state) => state.user);

    useEffect(() => {
        (async () => {
            const appData = await AsyncStorage.getItem("isFirstLauched");
            if (appData === null) {
                await AsyncStorage.setItem("isFirstLauched", "false");
                navigation.reset({
                    index: 1,
                    routes: [{ name: "Welcome" }],
                });
            } else {
                if (userInfo.isLogin) {
                    navigation.reset({
                        index: 1,
                        routes: [{ name: "Home" }],
                    });
                } else {
                    navigation.reset({
                        index: 1,
                        routes: [{ name: "Login" }],
                    });
                }
            }
        })();
    });

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="MainWelcome" component={MainWelcome} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Task" component={TaskScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="Webview" component={WebviewScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
