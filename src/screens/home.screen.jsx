import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
} from "react-native";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";

const HomeScreen = () => {
  const [msg, setMsg] = useState([
    { author: "aayush", msg: "Hello" },
    { author: "buddy", msg: "Hello" },
  ]);
  const author = "aayush";
  const [inputValue, setInputValue] = useState({});

  const handleSendMsg = () => {
    setMsg([...msg, inputValue]);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <FlatList
        data={msg}
        renderItem={(data) => (
          <View
            style={
              author === data.item.author
                ? { ...styles.msg, ...styles.msgRight }
                : { ...styles.msg, ...styles.msgLeft }
            }
          >
            <Text style={styles.msgText}>{data.item.msg}</Text>
          </View>
        )}
      />
      <View style={styles.messageBox}>
        <TextInput
          placeholder="Message"
          placeholderTextColor="white"
          style={styles.messageInput}
          onChangeText={(value) => {
            setInputValue({ author: author, msg: value });
          }}
        />
        <Button
          style={styles.sendBtn}
          onClick={(value) => handleSendMsg(value)}
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
});

export default HomeScreen;
