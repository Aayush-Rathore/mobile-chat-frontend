import { View, Image, StyleSheet } from "react-native";
import Button from "../components/Button";

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/Stranger.png")}
          style={styles.logo}
        />
      </View>
      <Button
        style={styles.btn}
        textStyle={styles.textStyle}
        onClick={() => navigation.navigate("Home")}
      >
        Get Started
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 50,
    paddingBottom: 150,
    backgroundColor: "#222831",
  },

  logoContainer: {
    width: "100%",
    flex: 1 / 2.5,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 155,
    height: 89,
  },

  btn: {
    backgroundColor: "#31363F",
    borderRadius: 10,
    width: 150,
  },

  textStyle: {
    fontWeight: "600",
    fontSize: 17,
    color: "white",
  },
});

export default FirstScreen;
