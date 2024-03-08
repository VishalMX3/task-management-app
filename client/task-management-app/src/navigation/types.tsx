import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type RootBottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Today: undefined;
  Completed: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  EditTask: undefined;
};

export type AppStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamList>;
  Settings: undefined;
};

export type RootStackParamList = {
  AppStack: NavigatorScreenParams<AppStackParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
