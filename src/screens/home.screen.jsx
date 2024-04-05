import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";

const HomeScreen = () => {
  const msg = [
    { author: "aayush", msg: "Hello" },
    { author: "buddy", msg: "Hello" },
  ];
  const author = "aayush";
  const [inputValue, setInputValue] = useState("");

  const handleChanges = (value) => {
    console.log(value.target.value);
    // setInputValue({ author: author, msg: value });
  };

  const handleSendMsg = () => {
    msg.push(inputValue);
    console.log(msg);
  };

  return (
    <View style={styles.container}>
      <View>
        {msg.map((data, index) => {
          return (
            <View
              key={index}
              style={
                author === data.author
                  ? { ...styles.msg, ...styles.msgLeft }
                  : { ...styles.msg, ...styles.msgRight }
              }
            >
              <Text style={styles.msgText}>{data.msg}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.messageBox}>
        <TextInput
          placeholder="Message"
          placeholderTextColor="white"
          style={styles.messageInput}
          onChange={handleChanges}
        />
        <Button
          style={styles.sendBtn}
          onClick={(value) => handleSendMsg(value)}
        >
          <Icon name={"send"} size={25} />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#222831",
  },

  msg: {
    padding: 10,
    backgroundColor: "#31363F",
    borderRadius: 10,
    marginBottom: 2,
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
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    flexDirection: "row",
    flex: 1,
    gap: 10,
  },

  messageInput: {
    flex: 1,
    padding: 2,
    borderColor: "#31363F",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    color: "white",
  },

  sendBtn: {
    borderRadius: 100,
    backgroundColor: "white",
  },
});

export default HomeScreen;
