import { useState } from 'react';
import Input from '../../components/Input/Input';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { plantas } from '../../utils/plantas';
import CardList from '../../components/CardList/CardList';

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

      <View>
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: '#002140'
        }}>Plantas</Text>

        <FlatList
          data={plantas}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CardList data={item} widthScreen={plantas.length <= 1 ? "100%" : "49%"} />}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingBottom: 14 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingTop: 70,
    margin: 'auto'
  },
  plantContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  plantImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  plantDescription: {
    fontSize: 14,
    marginTop: 4,
    marginBottom: 8,
  },
  plantPrice: {
    fontSize: 16,
    color: 'green',
  },
});
