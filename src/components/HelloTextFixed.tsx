import {Canvas, Text, useFont, Fill} from "@shopify/react-native-skia";
import { Platform } from "react-native";
 
const HelloTextFixed = () => {
  // Another way to load with expo
  // const [assets, error] = useAssets([require("../../assets/fonts/SpaceMono-Regular.ttf")]);
  // const asset = (!error && assets) ? assets[0].uri : null;
  // console.log('assets', assets, asset);

  const asset = (Platform.OS === 'web') ? '/assets/fonts/SpaceMono-Regular.ttf' : require("../../assets/fonts/SpaceMono-Regular.ttf");

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

export default HelloTextFixed;