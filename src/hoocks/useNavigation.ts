import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "src/types/RouteTypes";

export function useAppNavigation() {
    return useNavigation<NativeStackNavigationProp<RootStackParams>>();
}