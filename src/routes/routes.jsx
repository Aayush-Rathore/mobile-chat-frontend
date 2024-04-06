import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import FirstScreen from "../screens/first.screen";
import HomeScreen from "../screens/home.screen";
import Button from "../components/Button";
import { useEffect, useMemo, useState } from "react";
import useStore from "../store/zustand";
import ConnectScreen from "../screens/connect.screen";

const Stack = createStackNavigator();

const Routes = () => {
  const connected = useStore((state) => state.connected);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#222831",
          shadowColor: "black",
        },
        headerTitleStyle: {
          color: "#fff",
        },
        headerLeftContainerStyle: {
          display: "none",
        },
        title: "Back",
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="start"
          component={FirstScreen}
          options={{ headerShown: false }}
        />
        {connected ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Home" component={ConnectScreen} />
        )}
      </Stack.Group>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
  },

  profileImg: {
    backgroundColor: "red",
  },
});

export default Routes;
