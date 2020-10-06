import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function RegisterScreen({ navigation, route }) {
  const { state, dispatch } = route.params;
  const [usernameInput, onChangeUsername] = React.useState("");
  const [passwordInput, onChangePassword] = React.useState("");
  const [nameInput, onChangeName] = React.useState("");
  const [isRegistered, setIsRegistered] = React.useState(false);

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
          <Text>Nama Lengkap</Text>
          <TextInput
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              height: 30,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onChangeText={(text) => onChangeName(text)}
          />
        </View>
        <Button
          title="Daftar"
          color="#841584"
          onPress={() => {
            dispatch({
              type: "register",
              username: usernameInput,
              password: passwordInput,
              name: nameInput,
            });
            setIsRegistered(true);
          }}
          accessibilityLabel="Daftar untuk bisa masuk"
        />
        {isRegistered && (
          <Text>
            Silahkan login dengan username => {usernameInput} dan password =>{" "}
            {passwordInput}
          </Text>
        )}
      </View>
      <View style={{ flex: 0.2 }} />
    </View>
  );
}
