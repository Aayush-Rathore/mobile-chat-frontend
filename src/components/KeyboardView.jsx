import React from "react";
import { ScrollView, Keyboard } from "react-native";

function KeyboardView({ children, height }) {
  const ref = React.useRef();

  React.useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", (e) => {
      ref.current?.scrollTo({
        y: height || e.endCoordinates.height,
        animated: true,
      });
    });
    const hidden = Keyboard.addListener("keyboardDidHide", (e) => {
      ref.current?.scrollTo({
        y: 0,
        animated: true,
      });
    });

    return () => {
      show.remove();
      hidden.remove();
    };
  }, []);

  return (
    <ScrollView ref={ref} bounces={false}>
      {children}
    </ScrollView>
  );
}

export default KeyboardView;
