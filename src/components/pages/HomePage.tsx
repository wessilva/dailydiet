// src/components/pages/HomePage.tsx
import React, { useState } from 'react';
import { HomeTeamplte } from '../templates/HomeTemplate';
import { Text } from 'react-native';

import { HeaderHome } from "@components/molecules/headerHome";
import { Infopercent } from "@components/molecules/infoPercent";
import { MealsList } from "@components/organisms/mealsList";

import { useAppNavigation } from "../../hoocks/useNavigation";
import { RegularTextComponent } from '@components/atoms/regularText';
import { MainButton } from '@components/molecules/mainButton';

export const HomePage: React.FC = () => {

    const navigation = useAppNavigation();

    const handleAddMeal = () => {
        console.log('Funciounou');
    }

    return (
        <HomeTeamplte
            header={<HeaderHome />}
            percent={<Infopercent />}
            title={<RegularTextComponent text='Refeições' />}
            mealsList={<MealsList />}
            footer={<MainButton onPress={handleAddMeal} />}
        >
        </HomeTeamplte>
    );
};