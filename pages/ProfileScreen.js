import React from "react";
import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation, route }) {
  const { username, password, name } = route.params;
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
      }}
    >
      <View style={{ flex: 0.2 }} />
      <View style={{ flex: 0.6, textAlign: "center" }}>
        <View style={{ marginVertical: 14 }}>
          <Text>Username : {username}</Text>
        </View>
        <View style={{ marginVertical: 14 }}>
          <Text>Password : {password}</Text>
        </View>
        <View style={{ marginVertical: 14 }}>
          <Text>Nama Lengkap : {name}</Text>
        </View>
      </View>
      <View style={{ flex: 0.2 }} />
    </View>
  );
}
