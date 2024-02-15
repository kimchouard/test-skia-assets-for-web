import {Canvas, Text, useFont, Fill} from "@shopify/react-native-skia";
 
const HelloText = () => {
  const fontSize = 32;
  const font = useFont(require("../assets/fonts/SpaceMono-Regular.ttf"), fontSize);
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