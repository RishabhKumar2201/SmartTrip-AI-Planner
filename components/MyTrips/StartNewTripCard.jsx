import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <MaterialIcons name="location-on" size={30} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "outfit-medium",
        }}
      >
        No Trip Plan Yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit",
          textAlign: "center",
          color: "gray",
        }}
      >
        Your travel journey begins here! Plan your first trip and unlock a world
        of exciting possibilities.
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/create-trip/search-place")}
        style={{
          padding: 20,
          backgroundColor: "#000",
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            // padding: 10,
            color: "#fff",
            fontFamily: "outfit-medium",
            fontSize: 17,
            // borderRadius: 15,
            // paddingHorizontal: 30,
          }}
        >
          Start a new Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
