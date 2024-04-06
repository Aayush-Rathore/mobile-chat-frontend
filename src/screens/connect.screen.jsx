import { StyleSheet, TextInput, View, ToastAndroid } from "react-native";
import useStore from "../store/zustand";
import { Text } from "react-native";
import { useEffect, useState } from "react";
import Button from "../components/Button";

const ConnectScreen = () => {
  const { connectUser, socket } = useStore((state) => state);
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const joinRoomHandler = () => {
    if (username && roomId) {
      socket.emit("join:room", { username, roomId });
      connectUser(roomId, username, socket.id);
    } else {
      ToastAndroid.show("Please fill Username & Room Id", ToastAndroid.SHORT);
    }
  };
  return (
    <View style={{ backgroundColor: "#222831", flex: 1, padding: 8, gap: 10 }}>
      <TextInput
        placeholder="Username"
        placeholderTextColor="white"
        style={styles.Input}
        value={username}
        onChangeText={(value) => {
          setUsername(value);
        }}
      />
      <TextInput
        placeholder="Room Id"
        placeholderTextColor="white"
        style={styles.Input}
        value={roomId}
        onChangeText={(value) => {
          setRoomId(value);
        }}
      />
      <Button
        style={{ backgroundColor: "white", borderRadius: 5 }}
        textStyle={{ fontWeight: "500", fontSize: 20 }}
        onClick={joinRoomHandler}
      >
        Join Room
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Input: {
    height: 50,
    padding: 2,
    borderColor: "#31363F",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: "white",
  },
});

export default ConnectScreen;
