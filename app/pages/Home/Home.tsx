import { useState } from 'react';
import Input from '../../components/Input/Input';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const [textValue, setTextValue] = useState('');

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Input
        placeholder='Pesquisar'
        value={textValue}
        onChangeText={(text) => setTextValue(text)}
      />
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
