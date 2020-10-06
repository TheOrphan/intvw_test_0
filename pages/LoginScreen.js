import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function LoginScreen({ navigation, route }) {
  const { state, dispatch } = route.params;
  const [usernameState, onChangeUsername] = React.useState("");
  const [passwordState, onChangePassword] = React.useState("");
  function checkLogin() {
    const { username, password, name } = state;
    if (usernameState === username && passwordState === password) {
      navigation.navigate("Profile", { username, password, name });
    }
  }
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
      }}
    >
      <View style={{ flex: 0.2 }} />
      <View style={{ flex: 0.6 }}>
        <View style={{ marginVertical: 14 }}>
          <Text>Username</Text>
          <TextInput
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              height: 30,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onChangeText={(text) => {
              onChangeUsername(text);
            }}
          />
          <Text>Password</Text>
          <TextInput
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              height: 30,
              borderColor: "gray",
              borderWidth: 1,
            }}
            secureTextEntry={true}
            onChangeText={(text) => onChangePassword(text)}
          />
        </View>
        <Button
          title="Masuk"
          color="#841584"
          onPress={checkLogin}
          accessibilityLabel="Daftar untuk bisa masuk"
        />
      </View>
      <View style={{ flex: 0.2 }} />
    </View>
  );
}
