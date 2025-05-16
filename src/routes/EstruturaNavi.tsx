import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "src/types/RouteTypes";

import { HomeScreen } from "@screens/HomeScreen";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParams>();

export function EstruturaNavi() {

    return (
        <Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
                contentStyle: {
                    backgroundColor: "#F3F4F6"
                }
            }}
        >
            <Screen name="home" component={HomeScreen} />
        </Navigator>


    )
}