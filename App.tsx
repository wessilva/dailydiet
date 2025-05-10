import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';

import { HomeScreen } from '@screens/HomeScreen';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts([NunitoSans_400Regular, NunitoSans_700Bold]);

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <HomeScreen /> : <Loading />}
    </ThemeProvider>
  );
}

