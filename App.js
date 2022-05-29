import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import NavigationContainer from './src/routes/';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer />
    </NativeBaseProvider>
  );
}

