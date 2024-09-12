import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f5f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
