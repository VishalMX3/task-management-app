import { Box, Text } from "@/utils/theme";
import Button from "@/components/shared/button";
import React from "react";
import { Image } from "react-native";
import { AuthScreenNavigationType } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { LinearGradient } from "expo-linear-gradient";

const TASK_IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/e-shop-74124.appspot.com/o/task.png?alt=media&token=9a8d0a19-546e-40c6-8d4c-7f1d355d734a";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaWrapper>
      <LinearGradient
        colors={[
          "#ffffff",
          "#e2e2ff",
          "#dadcff",
          "#dadcff",
          "#e2e2ff",
          "#ffffff",
        ]}
        style={{ flex: 1 }}
      >
        <Box flex={1} justifyContent="center">
          <Box alignItems="center" mb="3.5">
            <Image
              source={{
                uri: TASK_IMAGE,
                width: 120,
                height: 120,
              }}
            />
          </Box>
          <Text textAlign="center" variant="textXl" fontWeight="700">
            Do you want to be more productive?
          </Text>
          <Box my="3.5" mx="10">
            <Button
              label="Start your journey"
              onPress={navigateToSignUpScreen}
            />
          </Box>
          <Text
            textAlign="center"
            variant="textXs"
            fontWeight="700"
            color="gray5"
          >
            Created by Vishal Pundhir
          </Text>
        </Box>
      </LinearGradient>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;
