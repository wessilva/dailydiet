import { createRef } from "react";
import { NavigationContainerRef } from "@react-navigation/native";
import { RootStackParams } from "../types/RouteTypes";

export const navigationRef = createRef<NavigationContainerRef<RootStackParams>>();

export const Navigation = {

    navigate: (name: keyof RootStackParams, params?: any) => {
        if (navigationRef.current) {
            navigationRef.current.navigate(name, params);
        }
    },
    goBack: () => {
        if (navigationRef.current) {
            navigationRef.current.goBack();
        }
    },
    goToHome: () => {
        if (navigationRef.current) {
            navigationRef.current.navigate("home");
        }
    },
    goToRegisterMeal: () => {
        if (navigationRef.current) {
            navigationRef.current.navigate("registerMeal");
        }
    },
}