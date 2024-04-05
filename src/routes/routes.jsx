import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import FirstScreen from "../screens/first.screen";
import HomeScreen from "../screens/home.screen";
import Button from "../components/Button";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Back",
        headerRight: () => {
          return (
            <Button
              style={styles.headerRight}
              onClick={({ navigation }) => navigation.navigate("Profile")}
            >
              {/* <Image
                  source={require("./assets/doremon.png")}
                  style={styles.profileImg}
                /> */}
            </Button>
          );
        },
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="start"
          component={FirstScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Profile" component={HomeScreen} />
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
