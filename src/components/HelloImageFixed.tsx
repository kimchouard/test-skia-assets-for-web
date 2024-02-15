import { Canvas, Image, useImage } from "@shopify/react-native-skia";
import { Platform } from "react-native";
import { useAssets } from 'expo-asset';
import { Asset } from 'expo-asset';

// Sync download image (erroring)
async function downloadImage(assetId:number) {
  const myImage = Asset.fromModule(assetId);
  const image = await myImage.downloadAsync();
  console.log('sync image', image, assetId);
  return image;
}
 
const HelloImageFixed = () => {

  // Ternary based on platform (preferred)
  const myAssetPath = 'assets/images/favicon.png';
  const asset = (Platform.OS === 'web') ? `/${myAssetPath}` : require(`../../${myAssetPath}`);

  // ==============================
  //    Other options explored
  // ==============================

  // Basic Require (erroring)
  // const asset = require("../../assets/images/favicon.png");
  // console.log('Loading asset using require', asset);

  // Expo
  // const [assets, error] = useAssets([require("../../assets/images/favicon.png")]);
  // const asset = (!error && assets) ? assets[0].uri : null;
  
  // (other option)
  // const myImage = Asset.fromModule(require("../../assets/images/favicon.png"));
  // myImage.downloadAsync().then((image) => {
  //   console.log('image', image);
  // });

  // Sync (erroring)
  // const asset = downloadImage(require("../../assets/images/favicon.png"))
  // console.log('Asset:', asset);

  // ==============================
  //        useImage
  // ==============================

  const image = useImage(asset);

  return (
    <Canvas style={{ flex: 1 }}>
      <Image image={image} fit="contain" x={20} y={20} width={256} height={256} />
    </Canvas>
  );
};

export default HelloImageFixed;