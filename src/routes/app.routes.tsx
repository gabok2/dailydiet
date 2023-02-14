import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { Estatísticas } from '@screens/Estatísticas';
import { Registro } from '@screens/Registro';
import theme from '../theme';
import { View } from 'react-native';
import { Feedback } from '@screens/Feedback';
import { Refeição } from '@screens/Refeição';
import { Editar } from '@screens/Editar';
const { Navigator, Screen, } = createNativeStackNavigator();


export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Screen

        name="home"
        component={Home}
      />


      <Screen

        name="estatísticas"
        component={Estatísticas}
      />


      <Screen
        name="registro"
        component={Registro}
      />

      <Screen
        name="feedback"
        component={Feedback}
      />

      <Screen
        name="refeição"
        component={Refeição}
      />

      <Screen
        name="editar"
        component={Editar}
      />

    </Navigator>
  );
}