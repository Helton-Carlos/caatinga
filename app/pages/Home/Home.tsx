import { useState } from 'react';
import Input from '../../components/Input/Input';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const [textValue, setTextValue] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder='Pesquisar'
          value={textValue}
          onChangeText={(text) => setTextValue(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
});
