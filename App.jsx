import FirstScreen from "./src/screens/first.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Provider from "./src/providers";
import HomeScreen from "./src/screens/home.screen";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <Provider>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Back",
          headerStyle: { backgroundColor: "#222831" },
          headerTitleStyle: { color: "white", fontSize: 17 },
        }}
      >
        <Stack.Screen
          name="start"
          component={FirstScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </Provider>
  );
}
