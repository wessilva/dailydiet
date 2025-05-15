// src/components/pages/HomePage.tsx
import React, { useState } from 'react';
import { HomeTeamplte } from '../templates/HomeTemplate';
import { Text } from 'react-native';

import { Header } from "@components/atoms/Header";
import { Percent } from "@components/Percent";
import { MealsList } from "@components/atoms/MealsList";
import { AddMealButton } from "@components/AddMealButton";

import { useAppNavigation } from "../../hoocks/useNavigation";

export const HomePage: React.FC = () => {

    const navigation = useAppNavigation();

    const handleAddMeal = () => {
        navigation.navigate("registerMeal");
    }

    return (
        <HomeTeamplte
            header={<Header />}
            percent={<Percent />}
            mealsList={<MealsList />}
            footer={<AddMealButton onPress={handleAddMeal} />}>
        </HomeTeamplte>
    );
};