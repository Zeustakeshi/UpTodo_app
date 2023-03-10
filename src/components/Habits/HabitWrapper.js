import React from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import { useSelector } from "react-redux";
import HabitButton, { ButtonAddNewHabit } from "./HabitButton";

const todayOfWeek = new Date().getDay() - 1;
const todayOfMonth = new Date().getDate() - 1;
const HabitWrapper = () => {
    const { habitsList } = useSelector((state) => state.habits);

    const habits = habitsList.filter((habit) => {
        return (
            (habit.timeHabit.type === "weekly" &&
                habit.timeHabit.days.some(
                    (time) => time.day === todayOfWeek
                )) ||
            (habit.timeHabit.type === "monthly" &&
                habit.timeHabit.days.some((time) => time.day === todayOfMonth))
        );
    });

    return (
        <View className="flex-1">
            <Text className="py-2 text-lg font-semibold text-text-color">
                Your Habits
            </Text>
            <ScrollView horizontal className="rounded-md  ">
                {habits.length > 0 ? (
                    habits.map((habit, index) => {
                        return <HabitButton key={index} habitData={habit} />;
                    })
                ) : (
                    <ButtonAddNewHabit />
                )}
            </ScrollView>
        </View>
    );
};

export default HabitWrapper;
