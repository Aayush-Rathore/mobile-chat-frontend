import { Text, TouchableHighlight } from "react-native";

const Button = ({ style, children, textStyle, onClick }) => {
  return (
    <TouchableHighlight
      style={{ justifyContent: "center", alignItems: "center", ...style }}
      onPress={onClick}
    >
      <Text style={{ margin: 10, ...textStyle }}>{children}</Text>
    </TouchableHighlight>
  );
};

export default Button;
