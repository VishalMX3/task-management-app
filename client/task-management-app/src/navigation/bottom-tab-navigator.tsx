import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types";
import HomeStackNavigator from "./home-stack-navigator";
import CompletedScreen from "@/screens/completed-screen";
const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
