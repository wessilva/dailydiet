// src/components/templates/MainTemplate.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

interface MainTemplateProps {
    header?: React.ReactNode;
    percent?: React.ReactNode;
    title?: React.ReactNode;
    mealsList?: React.ReactNode;
    footer?: React.ReactNode;
}

export const HomeTeamplte: React.FC<MainTemplateProps> = ({
    header,
    percent,
    title,
    mealsList,
    footer,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            {header && <View >{header}</View>}
            {percent && <View >{percent}</View>}
            {title && <View >{title}</View>}
            {mealsList && <View style={styles.container}>{mealsList}</View>}
            {footer && <View >{footer}</View>}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});