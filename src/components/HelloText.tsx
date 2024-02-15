import {Canvas, Text, useFont, Fill} from "@shopify/react-native-skia";
import { useAssets } from 'expo-asset';
 
const HelloText = () => {
  const asset = require("../../assets/fonts/SpaceMono-Regular.ttf")

  const fontSize = 32;
  const font = useFont(asset, fontSize);
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

export default HelloText;