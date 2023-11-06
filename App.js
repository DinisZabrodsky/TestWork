import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";

import store from "./src/store/reduser";

import Navigator from "./src/Screns/Navigator/Navigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <Navigator />
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  );
}
