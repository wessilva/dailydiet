import { Provider } from 'react-redux';
import { store } from '@store/index';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';

import { EstruturaNavi } from '@routes/EstruturaNavi';


import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts([NunitoSans_400Regular, NunitoSans_700Bold]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? (
          <NavigationContainer>
            <EstruturaNavi />
          </NavigationContainer>

        ) : (
          <Loading />
        )}
      </ThemeProvider>
    </Provider>
  );
}

