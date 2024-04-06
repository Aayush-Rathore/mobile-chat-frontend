import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import FirstScreen from "../screens/first.screen";
import HomeScreen from "../screens/home.screen";
import useStore from "../store/zustand";
import ConnectScreen from "../screens/connect.screen";
import Button from "../components/Button";

const Stack = createStackNavigator();

const Routes = () => {
  const { connected, disconnectUser, roomId, socket } = useStore(
    (state) => state
  );
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
        title: `Room Id - [ ${roomId} ]`,
        headerRight: () =>
          roomId && (
            <Button
              textStyle={{ color: "white", fontSize: 20, fontWeight: "600" }}
              onClick={() => {
                socket.emit("exit:room", "Hello");
                disconnectUser();
              }}
            >
              Exit
            </Button>
          ),
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
          <Stack.Screen
            name="Home"
            component={ConnectScreen}
            options={{ title: "Join Room" }}
          />
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
