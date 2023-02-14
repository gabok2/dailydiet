import theme from './src/theme';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components';

import { SafeAreaView } from 'react-native';
import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';


export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <ThemeProvider theme={theme}>
        <>

          {fontsLoaded ? <Routes /> : <Loading />}
        </>
      </ThemeProvider>
    </SafeAreaView>
  );
}

