import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../routes/routes';

export default function Products() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const navigationNotification = () => navigation.navigate("notification");
  const navigationHome = () => navigation.navigate("home");

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Pressable
          onPress={navigationHome}
          style={{
            flexDirection: 'row',
            gap: 10
          }}>
          <Image
            source={require('../../assets/imagens/mandacaru.png')}
          />
          <Text style={styles.logo}>
            Caatinga
          </Text>
        </Pressable>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Pressable onPress={navigationNotification}>
            <Image
              width={50}
              style={{ marginTop: 5 }}
              source={require('../../assets/imagens/bell.png')}
            />
          </Pressable>

          <Pressable>
            <Image
              source={require('../../assets/imagens/menu.png')}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    paddingTop: 14,
    paddingBottom: 14,
  },
  logo: {
    fontSize: 22,
    fontWeight: '500',
    color: '#002140'
  },
  container: {
    width: '90%',
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
