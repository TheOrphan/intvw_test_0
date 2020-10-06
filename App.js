import "react-native-gesture-handler";
import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import loginReducer from "./utils/reducer";

const Stack = createStackNavigator();

function App() {
  const [state, dispatch] = React.useReducer(loginReducer, {
    username: "admin",
    password: "admin",
    name: "admin",
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: "JOKO SANTOSO" }}>
          {(props) => (
            <HomeScreen {...props} state={state} dispatch={dispatch} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ state, dispatch }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ state, dispatch }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ state, dispatch }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
