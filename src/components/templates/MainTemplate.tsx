// src/components/templates/MainTemplate.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

interface MainTemplateProps {
    header?: React.ReactNode;
    mealsList?: React.ReactNode;
    footer?: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({
    header,
    mealsList,
    footer
}) => {
    return (
        <SafeAreaView style={styles.container}>
            {header && <View style={styles.header}>{header}</View>}
            {mealsList && <View style={styles.content}>{mealsList}</View>}
            {footer && <View style={styles.footer}>{footer}</View>}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {


    },
    content: {
        flex: 1,
        backgroundColor: '#00000028'

    },
    footer: {


    },
});