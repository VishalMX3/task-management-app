import { Box, Text } from "@/utils/theme";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>SignIn Screen!</Text>
        <Button
          title="Navigate to SignUp Screen"
          onPress={navigateToSignUpScreen}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;
