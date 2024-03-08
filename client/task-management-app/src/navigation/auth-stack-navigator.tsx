import WelcomeScreen from "@/screens/welcome-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      {/* <Stack.Screen
        name="SignIn"
        options={{
          headerShown: false,
        }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: false,
        }}
        component={SignUpScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
