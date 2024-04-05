import ViewProvider from "./View.Provider";
import NavigationProvider from "./Navigation.Provider";
import { View } from "react-native";

const Provider = ({ children }) => {
  return (
    <ViewProvider>
      <NavigationProvider>{children}</NavigationProvider>
    </ViewProvider>
  );
};

export default Provider;
