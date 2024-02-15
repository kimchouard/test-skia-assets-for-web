import { Canvas, Image, useImage } from "@shopify/react-native-skia";

const HelloImage = () => {
  const asset = require("../../assets/images/favicon.png");
  const image = useImage(asset);

  return (
    <Canvas style={{ flex: 1 }}>
      <Image image={image} fit="contain" x={20} y={20} width={256} height={256} />
    </Canvas>
  );
};

export default HelloImage;