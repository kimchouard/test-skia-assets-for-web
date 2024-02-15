import { Canvas, Image, useImage } from "@shopify/react-native-skia";
import { Platform } from "react-native";
import { Image as RNImage } from "react-native";
import { useAssets } from 'expo-asset';
import { Asset } from 'expo-asset';

const HelloImageFixed = () => {
  // ==============================
  //    Require Initi
  // ==============================
  
  // Publically accessible path
  // const myAssetPath = 'assets/images/favicon.png';
  // const tempPath = '../../';

  // Private path
  // http://localhost:8081/assets/?unstable_path=.%2Fsrc%2Frandom-folder/favicon.png?platform=ios&hash=4f1cb2cac2370cd5050681232e8575a8
  const myAssetPath = 'random-folder/favicon.png';
  const myAssetAbsolutePath = '/src/random-folder/images/favicon.png';
  const tempPath = '../';

  // Getting the require
  const assetRequire = require(`${tempPath}${myAssetPath}`);

  // ==============================
  //    Loading Options
  // ==============================

  // ONLY FOR PUBLIC FOLDER: Ternary based on platform
  // const asset = (Platform.OS === 'web') ? `/${myAssetPath}` : assetRequire;

  // PREFERED: Expo
  const [assets, error] = useAssets([assetRequire]);
  const asset = (!error && assets) ? assets[0].uri : null;

  // ERRORING options below ==========

  // RN resolveAssetSource (erroring on Web, only accessible in Native)
  // const asset = RNImage.resolveAssetSource(assetRequire).uri;

  // Basic Require (erroring)
  // const asset = assetRequire;
  // console.log('Loading asset using require', asset);
  
  // (other option)
  // const myImage = Asset.fromModule(assetRequire);
  // myImage.downloadAsync().then((image) => {
  //   console.log('image', image);
  // });

  // Sync download image (erroring)
  // async function downloadImage(assetId:number) {
  //   const myImage = Asset.fromModule(assetId);
  //   const image = await myImage.downloadAsync();
  //   console.log('sync image', image, assetId);
  //   return image;
  // }
  // const asset = downloadImage(assetRequire)
  
  // ==============================
  //        useImage
  // ==============================
  
  console.log('Asset:', asset, assetRequire);
  const image = useImage(asset);

  return (
    <Canvas style={{ flex: 1 }}>
      <Image image={image} fit="contain" x={20} y={20} width={256} height={256} />
    </Canvas>
  );
};

export default HelloImageFixed;