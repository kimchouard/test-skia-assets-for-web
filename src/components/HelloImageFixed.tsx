import { Canvas, Image, useImage } from "@shopify/react-native-skia";
import { Platform } from "react-native";
 
const HelloImageFixed = () => {
  const image = useImage((Platform.OS === 'web') ? '/images/favicon.png' : require("../../public/images/favicon.png"));
  return (
    <Canvas style={{ flex: 1 }}>
      <Image image={image} fit="contain" x={20} y={20} width={256} height={256} />
    </Canvas>
  );
};

export default HelloImageFixed;