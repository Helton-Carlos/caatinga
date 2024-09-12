import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './app/routes/routes';
import Header from './app/components/Header/Header';

export default function App() {
  return (
    <NavigationContainer >
      <Header />

      <Routes />
    </NavigationContainer>
  );
}