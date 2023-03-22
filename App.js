import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// state management
import {StoreProvider} from "easy-peasy";
import store from "./lib/store";

// importing components
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Login";
import Home from "./screens/Home";


const App = () => {
  const Stack = createNativeStackNavigator();

  return(
    <StoreProvider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={LandingPage}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </StoreProvider>
  )
};

export default App;