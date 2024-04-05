import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, View } from "react-native";

const ViewProvider = ({ children }) => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      {children}
    </SafeAreaProvider>
  );
};

export default ViewProvider;
