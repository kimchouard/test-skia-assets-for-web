import { StyleSheet } from 'react-native';

import { Text, View } from '@/src/components/Themed';
import { Link } from 'expo-router';
import Colors from '../constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skia BUG: Loading assets with Metro on the Web</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


      <View style={styles.helpContainer}>
        <Text>Loading fonts for texts:</Text>
        <Link style={styles.helpLink} href="/text-bug">Bug with &lt;Text /&gt;</Link>
        <Link style={styles.helpLink} href="/text-fixed">Temp Fix for &lt;Text /&gt;</Link>
        <Text>Loading images:</Text>
        <Link style={styles.helpLink} href="/image-bug">Bug with &lt;Image /&gt;</Link>
        <Link style={styles.helpLink} href="/image-fixed">Temp Fix for &lt;Image /&gt;</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
    textAlign: 'center',
    color: Colors.light.tint,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
