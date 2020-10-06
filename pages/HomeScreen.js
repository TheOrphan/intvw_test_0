import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation, state, dispatch }) {
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
          <Button
            title="Masuk"
            color="#841584"
            onPress={() => navigation.navigate("Login", { state, dispatch })}
            accessibilityLabel="Masuk dengan username dan password"
          />
        </View>
        <Button
          title="Daftar"
          color="#841584"
          onPress={() => navigation.navigate("Register", { state, dispatch })}
          accessibilityLabel="Daftar untuk bisa masuk"
        />
      </View>
      <View style={{ flex: 0.2 }} />
    </View>
  );
}
