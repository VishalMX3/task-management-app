import { Box, Text } from "@/utils/theme";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Box>
      <Text>SignIn Screen!</Text>
      <Button
        title="Navigate to SignUp Screen"
        onPress={navigateToSignUpScreen}
      ></Button>
    </Box>
  );
};

export default SignInScreen;
