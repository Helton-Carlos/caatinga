import { StyleSheet, Text, Image, DimensionValue, Pressable } from 'react-native';
import { IPlantProps } from '../../types/types.type';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../routes/routes';

interface ICardListProps {
  data: IPlantProps,
  widthScreen: DimensionValue
}

export default function CardList({ data, widthScreen }: ICardListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  function handleNavigate() {
    navigation.navigate("products", { id: data.id })
  }

  return (
    <Pressable
      style={[styles.plantContainer, { width: widthScreen }]}
      onPress={handleNavigate}
    >
      <Image
        source={require('../../assets/plantas/cacto.png')}
        style={styles.plantImage}
        resizeMode='cover'
      />
      <Text style={styles.plantName}>{data.name}</Text>
      <Text style={styles.plantDescription}>{data.description}</Text>
      <Text style={styles.plantPrice}>R$ {data.prince}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  plantContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    margin: 2,
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
    marginTop: 2,
    marginBottom: 2,
  },
  plantPrice: {
    fontSize: 14,
    color: 'green',
  },
});
