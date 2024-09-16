import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
export default function OptionCard({ option, selectTraveler, selectBudget }) {
  return (
    <View
      style={[
        {
          padding: 25,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#f2f2f2",
          borderRadius: 15,
        },
        selectTraveler?.id === option?.id && { borderWidth: 3 },
        selectBudget?.id === option?.id && { borderWidth: 3 },
      ]}
    >
      <View>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 23,
          }}
        >
          {option.title}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: "gray",
          }}
        >
          {option.desc}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 40,
        }}
      >
        {option.icon}
      </Text>
    </View>
  );
}
