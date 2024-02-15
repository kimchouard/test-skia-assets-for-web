import {Canvas, Text, useFont, Fill} from "@shopify/react-native-skia";
import { Platform } from "react-native";
 
const HelloTextFixed = () => {
  const fontSize = 32;
  const font = useFont((Platform.OS === 'web') ? '/fonts/SpaceMono-Regular.ttf' : require("../../public/fonts/SpaceMono-Regular.ttf"), fontSize);
  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color="white" />
      <Text
        x={0}
        y={fontSize}
        text="Hello World"
        font={font}
      />
    </Canvas>
  );
};

export default HelloTextFixed;