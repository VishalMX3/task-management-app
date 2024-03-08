import { Box, Text } from "@/utils/theme";
import React from "react";
import { Button } from "react-native";
import { AuthScreenNavigationType } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Box>
      <Text>Welcome Screen!</Text>
      <Button
        title="Naviagte to SignIn Screen"
        onPress={navigateToSignInScreen}
      ></Button>
      <Button
        title="Naviagte to SignUp Screen"
        onPress={navigateToSignUpScreen}
      ></Button>
    </Box>
  );
};

export default WelcomeScreen;
