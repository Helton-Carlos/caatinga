import { useState } from 'react';
import Input from '../../components/Input/Input';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { plantas } from '../../utils/plantas';
import { IPlantProps } from '../../types/types.type'

export default function Home() {
  const [textValue, setTextValue] = useState('');

  const renderPlant = ({ item }: { item: IPlantProps }) => (
    <View style={styles.plantContainer}>
      <Image source={require('../../assets/plantas/cacto.png')} style={styles.plantImage} />
      <Text style={styles.plantName}>{item.name}</Text>
      <Text style={styles.plantDescription}>{item.description}</Text>
      <Text style={styles.plantPrice}>R$ {item.prince}</Text>
    </View>
  );

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
          data={plantas} // Data vem do arquivo planta.ts
          keyExtractor={item => item.id.toString()} // Use o id como chave única
          renderItem={renderPlant} // Renderiza cada planta
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
