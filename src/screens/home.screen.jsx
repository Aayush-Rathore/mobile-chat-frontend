import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  FlatList,
  ToastAndroid,
} from "react-native";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/Ionicons";
import { useCallback, useEffect, useState } from "react";
import useStore from "../store/zustand";

const HomeScreen = () => {
  const [msg, setMsg] = useState([]);
  const [inputValue, setInputValue] = useState({ author: "", msg: "" });
  const { socket, roomId, username, id } = useStore((state) => state);

  const handleSendMsg = () => {
    socket.emit("send:message", { inputValue, roomId, id });
    setInputValue({});
  };

  const handleUserJoined = useCallback((data) => {
    ToastAndroid.show(`${data.username} joined room`, ToastAndroid.SHORT);
  });

  const handleMessageReceived = useCallback(
    (data) => {
      setMsg((prev) => [...prev, data]);
    },
    [setMsg]
  );

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("message:received", handleMessageReceived);
    return () => {
      socket.off("message:received", handleMessageReceived);
      socket.off("user:joined", handleUserJoined);
    };
  }, [handleUserJoined]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <FlatList
        data={msg}
        renderItem={(data) => (
          <View
            style={
              id === data.item.id
                ? { ...styles.msgBox, ...styles.msgRight }
                : { ...styles.msgBox, ...styles.msgLeft }
            }
          >
            <Text
              style={
                id === data.item.id
                  ? { ...styles.author, textAlign: "left" }
                  : { ...styles.author, textAlign: "right" }
              }
            >
              {data.item.author}
            </Text>
            <Text style={styles.msgText}>{data.item.msg}</Text>
          </View>
        )}
      />
      <View style={styles.messageBox}>
        <TextInput
          placeholder="Message"
          placeholderTextColor="white"
          style={styles.messageInput}
          value={inputValue.msg}
          onChangeText={(value) => {
            setInputValue({ author: username, msg: value });
          }}
        />
        <Button
          style={styles.sendBtn}
          onClick={(value) => {
            handleSendMsg(value);
          }}
        >
          <Icon name={"send"} size={25} />
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    paddingTop: 8,
  },

  msg: {
    padding: 10,
    marginHorizontal: 8,
    backgroundColor: "#31363F",
    borderRadius: 10,
    marginBottom: 8,
  },

  author: {
    color: "white",
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#222831",
    paddingBottom: 4,
  },

  msgText: {
    color: "white",
  },

  msgLeft: {
    borderTopLeftRadius: 0,
    alignSelf: "flex-start",
  },

  msgRight: {
    borderTopRightRadius: 0,
    alignSelf: "flex-end",
  },

  messageBox: {
    padding: 10,
    paddingTop: 2,
    paddingBottom: 10,
    alignSelf: "center",
    flexDirection: "row",
    gap: 10,
    zIndex: 1,
    backgroundColor: "#31363F",
  },

  messageInput: {
    height: 50,
    flex: 1,
    padding: 2,
    borderColor: "#222831",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    color: "white",
  },

  sendBtn: {
    height: 50,
    borderRadius: 100,
    backgroundColor: "white",
  },

  msgBox: {
    padding: 10,
    marginHorizontal: 8,
    backgroundColor: "#31363F",
    borderRadius: 10,
    marginBottom: 8,
  },
});

export default HomeScreen;
